import User from "../../models/user.model.js";
import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";

export const logoutUser = asyncHandler(async (req, res) => {
    // req.user is set by your authentication middleware
    const userId = req.user._id;

    const targetedUser = await User.findById(userId);
    if (!targetedUser) {
        throw new apiErrorHandler(404, "User not found");
    }

    // Clear the refresh token (or any token you are managing on the server)
    targetedUser.accessToken = null;

    await targetedUser.save();

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    };

    return res
        .status(200)
        //make accessToken null
        .cookie("accessToken", null, {
            ...cookieOptions,
            expires: new Date(Date.now())
        })
        .json(
            new apiResponse(
                200,
                null,
                "User logged out successfully"
            )
        );
});

