import { emailVerificationConfig } from "../../Configs/email.config.js";
import User from "../../models/user.model.js";
import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";

export const resendOtp = asyncHandler(async (req, res, next) => {
    const {email} = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new apiErrorHandler(404, "User not found"));
    }

    // generate new OTP
    const email_verification_code = await user.generateOTP();
    await user.save({ validateBeforeSave: false });

    const mailOption = emailVerificationConfig({
        userEmail: email,
        userName: user.firstName,
        email_verification_code: email_verification_code
    });

    await transporter.sendMail(mailOption);

    return res.status(200).json(
        new apiResponse(
            200,
            null,
            "OTP resent successfully"
        )
    );
});