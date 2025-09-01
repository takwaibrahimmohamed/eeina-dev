import { Router } from "express";
import { loginLimiter } from "../../Middleware/rateLimitter.js";
import { registerUser } from "../../Controller/Auth/signup.controller.js";
import { logoutUser } from "../../Controller/Auth/logout.controller.js";
import { loginUser } from "../../Controller/Auth/login.controller.js";
import { isAuthenticated } from "../../Middleware/auth.middleware.js"

const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginLimiter, loginUser);
router.route("/logout").post(isAuthenticated, logoutUser);

export default router;