import mongoose, { Schema } from "mongoose";
import argon2 from "argon2";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_SECRET_EXPIRES_IN } from "../constant.js";

const userSchema = new Schema({
      firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
            maxlength: [100, "First name cannot exceed 100 characters"],
      },
      lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
            maxlength: [100, "Last name cannot exceed 100 characters"],
      },
      email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
            index: true,
      },
      password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"],
            select: false,
      },
      dob: Date,
      phone: {
            type: String,
            trim: true,
            match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (E.164 format)"],
            index: true,
      },
      role: {
            type: String,
            enum: ["admin", "super-admin", "user"],
            default: "user",
            index: true,
      },
      status: {
            type: String,
            enum: ["active", "inactive", "banned"],
            default: "active",
            index: true,
      },
      isEmailVerified: { type: Boolean, default: false },
      otp: { type: String, select: false },
      otpExpires: { type: Date, select: false },
      resetPasswordToken: { type: String, select: false },
      resetPasswordExpires: { type: Date, select: false },
      lastLogin: { type: Date },
      lastPasswordChanged: { type: Date },
      lockedUntil: { type: Date, default: null },
      loginAttempts: { type: Number, default: 0, min: 0 },
      image: { type: String, index: true },
      language: { type: String, default: "english" },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

// Virtuals
userSchema.virtual("fullName").get(function () {
      return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual("accountStatus").get(function () {
      if (this.status === "banned") return "banned";
      if (this.lockedUntil && this.lockedUntil > new Date()) return "locked";
      if (this.status === "inactive") return "inactive";
      return "active";
});

// Password hashing
userSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
            this.password = await argon2.hash(this.password);
            this.lastPasswordChanged = Date.now();
      }
      next();
});

// Methods
userSchema.methods.comparePassword = async function (candidatePassword) {
      if (!this.password) throw new Error("Password not found");
      return argon2.verify(this.password, candidatePassword);
};

userSchema.methods.generateAccessToken = function () {
      return jwt.sign(
            { _id: this._id, email: this.email, role: this.role },
            ACCESS_TOKEN_SECRET,
            { expiresIn: ACCESS_TOKEN_SECRET_EXPIRES_IN }
      );
};

// OTP
userSchema.methods.generateOTP = async function () {
      const otp = crypto.randomInt(100000, 999999).toString();
      this.otp = await argon2.hash(otp);
      this.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
      return otp;
};

userSchema.methods.verifyOTP = async function (otp) {
      if (!this.otp || !this.otpExpires || this.otpExpires < new Date()) return false;
      const valid = await argon2.verify(this.otp, otp);
      if (valid) {
            this.otp = undefined;
            this.otpExpires = undefined;
      }
      return valid;
};

// Password reset
userSchema.methods.generateResetPasswordToken = function () {
      const resetToken = crypto.randomBytes(32).toString("hex");
      this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
      this.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
      return resetToken;
};

userSchema.methods.isResetTokenValid = function () {
      return this.resetPasswordToken && this.resetPasswordExpires && this.resetPasswordExpires > new Date();
};

// Account locking
userSchema.methods.lockAccount = function (minutes = 30) {
      this.lockedUntil = new Date(Date.now() + minutes * 60 * 1000);
      return this.save();
};

userSchema.methods.isAccountLocked = function () {
      return this.lockedUntil && this.lockedUntil > new Date();
};

userSchema.methods.incrementLoginAttempts = function () {
      this.loginAttempts += 1;
      if (this.loginAttempts >= 5) return this.lockAccount(30);
      return this.save();
};

userSchema.methods.resetLoginAttempts = function () {
      this.loginAttempts = 0;
      this.lockedUntil = null;
      return this.save();
};

// Indexes for compound or nested queries (no duplicates)
userSchema.index({ email: 1, phone: 1 });
userSchema.index({ role: 1, status: 1 });

const User = mongoose.model("User", userSchema);
export default User;
