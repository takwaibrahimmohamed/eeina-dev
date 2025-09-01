import jwt from "jsonwebtoken";
import { apiErrorHandler } from "../Utils/apiErrorHandler.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import User from "../models/user.model.js";
import { ACCESS_TOKEN_SECRET } from "../constant.js";

const isAuthenticated = asyncHandler(async (req, res, next) => {
      const { accessToken: token } = req.cookies;

      console.log("token", token);

      if (!token) {
            return next(new apiErrorHandler(401, "Login first to access this resource"));
      }

      try {
            const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

            req.user = await User.findById(decodedToken._id); // Fetch user based on token

            if (!req.user) {
                  return next(new apiErrorHandler(404, "User not found"));
            }
            next(); // User is authenticated, proceed to next middleware
      } catch (error) {
            console.error("Token verification error:", error);
            return next(new apiErrorHandler(401, "Invalid or expired token"));
      }
});

const isAdmin = asyncHandler(async (req, res, next) => {
      if (req.user && (req.user.role === "admin" || req.user.role === "super-admin")) {
            next();
      } else {
            return next(new apiErrorHandler(401, "Not authorized as an admin"));
      }
});

export { isAuthenticated, isAdmin };
