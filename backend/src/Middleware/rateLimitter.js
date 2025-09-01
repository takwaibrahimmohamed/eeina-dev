// middlewares/rateLimiters.js
import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({ windowMs: 5 * 60 * 1000, max: 20, message: { message: "Too many login attempts" } });
export const otpLimiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 1, message: { message: "Too many OTP requests" } });
