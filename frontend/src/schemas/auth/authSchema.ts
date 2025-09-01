import z from "zod";

export const signupSchema = z
   .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email address"),
      password: z
         .string()
         .min(8, "Password must be at least 8 characters")
         .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
         .regex(/[a-z]/, "Password must contain at least one lowercase letter")
         .regex(/[0-9]/, "Password must contain at least one number")
         .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
      confirmPassword: z.string(),
      agreeToTerms: z.literal(true, {
         message: "You must agree to terms",
      }),
   })
   .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
   });

export type SignupFormData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
      email: z.string().email("Enter a valid email"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
