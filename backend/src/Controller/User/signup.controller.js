import { emailVerificationConfig } from "../../Configs/email.config.js";
import User from "../../models/user.model.js";
import transporter from "../../Services/mail/mailSender.service.js";
import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";
import calculateDailyNeeds from "../../Utils/UserDailyNeedCalcu/UserDailyNeedCalcu.js";

const registerUser = asyncHandler(async (req, res, next) => {
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
                  secure: process.env.NODE_ENV === "production",
                  sameSite: "strict",
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

const updateGenderAndAge = asyncHandler(async (req, res, next) => {
      const data = req.body;

      const user = await User.findById(req.user._id);
      if (!user) {
            return next(new apiErrorHandler(400, "User not found"));
      }

      user.dob = data.dob
      user.gender = data.gender;

      await user.save(
            {
                  validateBeforeSave: false,
            }
      );

      return res.status(200).json(
            new apiResponse(
                  200,
                  user,
                  "User personal data updated successfully"
            )
      );

});


const updateOtherDataToCalCalories = asyncHandler(async (req, res, next) => {
      const {
            height,
            weight,
            activityLevel
      } = req.body;

      const user = await User.findById(req.user._id);
      if (!user) {
            return next(new apiErrorHandler(400, "User not found"));
      }

      const {
            dob,
            gender
      } = user;

      if (height && weight && activityLevel) {
            const {
                  bmr,
                  tdee,
                  calorieGoal,
                  proteinGrams,
                  fatGrams,
                  carbGrams,
                  sugarGrams
            } = await calculateDailyNeeds({ weight, height, dob, gender, activityLevel });

            user.bmr = bmr;
            user.tdee = tdee;
            user.calorieGoal = calorieGoal;
            user.proteinGoal = proteinGrams;
            user.fatGoal = fatGrams;
            user.carbGoal = carbGrams;
            user.sugarGoal = sugarGrams;
            user.height = height;
            user.weight = weight;
            user.activityLevel = activityLevel;

            await user.save({
                  validateBeforeSave: false
            });
      }


      return res
            .status(200)
            .json(
                  new apiResponse(
                        200,
                        user,
                        "User profile updated successfully"
                  )
            );
});

export {
      registerUser,
      updateGenderAndAge,
      updateOtherDataToCalCalories,
};
