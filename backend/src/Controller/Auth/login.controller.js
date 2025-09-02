import { NODE_ENV } from "../../constant.js";
import User from "../../models/user.model.js";
import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";

export const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
        return next(new apiErrorHandler(400, "Email and password are required"));
    }

    // Find user by email and ensure the password field is selected
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new apiErrorHandler(400, "User not found with this email"));
    }

    // Compare provided password with the hashed password stored in DB
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw new apiErrorHandler(400, "Invalid password");
    }

    // Update the user's last login time
    user.lastLogin = Date.now();
    await user.save();

    // Generate an access token using the instance method defined on the user model
    const access_token = user.generateAccessToken();

    const cookiesOption = {
        httpOnly: true,
        secure: NODE_ENV === "production",
        sameSite: NODE_ENV === "production" ? "none" : "lax",
        expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
    }

    // Return a successful response including the token and user details
    return res
        .status(200)
        .cookie("access_token", access_token, {
            ...cookiesOption,
        })
        .json(
            new apiResponse(
                200,
                {
                    user: {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                    },
                },
                "User logged in successfully"
            )
        );
});