import { Router } from "express";
import passport from "../../Configs/passport.js";
import { updateGenderAndAge, updateOtherDataToCalCalories } from "../../Controller/User/signup.controller.js";
import { SendOtpForForgottenUserEmail } from "../../Controller/User/GetForgetUserMailSendOtp.controller.js";
import { userOtpVerification } from "../../Controller/User/userOtpVerification.controller.js";
import setNewPassword from "../../Controller/User/setNewPassword.controller.js";
import { isAuthenticated, isAdmin } from "../../Middleware/auth.middleware.js";
import { getUserProfile } from "../../Controller/User/getUserProfile.controller.js";
import getUserDetails from "../../Controller/User/getUserDetails.controller.js";
import getUserCreatedRecipe from "../../Controller/User/GetUserCreatedRecipe.controller.js";
import getAllUser from "../../Controller/User/getAllUser.controller.js";
import updateUser from "../../Controller/User/updateUser.controller.js";
import { upload } from "../../Middleware/multer.middleware.js";
import adminLogin from "../../Controller/Admin/user/adminLogin.controller.js";
import getTopCreators from "../../Controller/User/getTopUser.controller.js";
import adminEditUser from "../../Controller/Admin/user/editUser.controller.js";
import { verifyEmail } from "../../Controller/User/verify-email.controller.js";
import { resendOtp } from "../../Controller/User/resedOtp.controller.js";
import { loginLimiter, otpLimiter } from "../../Middleware/rateLimitter.js";





const router = Router();

// admin routes
router.route("/").get(isAuthenticated, isAdmin, getAllUser); // admin route
router.route("/admin/login").post(adminLogin);
router.route("/admin/edit/:id").put(isAuthenticated, isAdmin, adminEditUser);



router.route("/user-personal-data").post(isAuthenticated, updateGenderAndAge);
router.route("/user-other-data").post(isAuthenticated, updateOtherDataToCalCalories);


router.route("/update").put(
      isAuthenticated,
      upload.fields([
            {
                  name: 'profilePicture',
                  maxCount: 1
            }
      ]),
      updateUser);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/profile/:id").get(getUserDetails);
router.route("/otp").post(SendOtpForForgottenUserEmail);
router.route("/otp-verify").post(userOtpVerification);
router.route("/reset-password").post(setNewPassword);
router.route("/recipes/:id").get(isAuthenticated, getUserCreatedRecipe);

// Google authentication route
// router.get(
//       "/auth/google",
//       passport.authenticate("google", { scope: ["profile", "email"] })
// );

// // Google callback route using a custom callback
// router.get("/auth/google/callback", (req, res, next) => {
//       passport.authenticate("google", { session: false }, (err, data, info) => {
//             if (err) {
//                   return next(err);
//             }
//             // Now handle cookie setting and response via your controller
//             oauthLoginController(data, req, res);
//       })(req, res, next);
// });

router.route('/get-all').get(getAllUser)
router.route('/top-creators').get(getTopCreators)
router.route('/email-verification').post(verifyEmail);
router.route("/resend-email-otp").post(otpLimiter, resendOtp);

export default router;
