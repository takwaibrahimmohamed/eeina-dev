import { emailVerificationConfig } from "../../Configs/email.config.js";
import { NODE_ENV } from "../../constant.js";
import User from "../../models/user.model.js";
import transporter from "../../Services/mail/mailSender.service.js";
import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res, next) => {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
            return next(new apiErrorHandler(400, "Please fill all fields"));
      }

      const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            username: email.split("@")[0].toLowerCase(),
            lastLogin: Date.now(),
      });

      const user = await newUser.save();

      if (!user) {
            return next(new apiErrorHandler(400, "User registration failed"));
      }

      // generate confirmation email
      const email_verification_code = await user.generateOTP();
      const access_token = user.generateAccessToken();

      await user.save({ validateBeforeSave: false });


      const mailOption = emailVerificationConfig({
            userEmail: email,
            userName: firstName,
            email_verification_code: email_verification_code
      });

      await transporter.sendMail(mailOption);

      return res
            .cookie("access_token", access_token, {
                  httpOnly: true,
                  secure: NODE_ENV === "production",
                  sameSite: "strict",
                  expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
            })
            .status(200)
            .json(
                  new apiResponse(
                        200,
                        null,
                        "User registered successfully"
                  )
            );
});
