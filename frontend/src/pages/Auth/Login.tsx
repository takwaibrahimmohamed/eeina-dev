import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Eye, EyeOff, Mail, Lock, ArrowRight, ChefHat, Users, Star, Globe } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "../../schemas/auth/authSchema";
import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";

// Zod validation schema

export const Login = (): JSX.Element => {
    const { t, isRTL, language } = useLanguage();
    const [showPassword, setShowPassword] = useState(false);
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        watch,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange", // validate on input change
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            await login(data).unwrap();
            toast.success("Logged in successfully!");
            navigate("/");
        } catch (error: any) {
            toast.error(error?.data?.message || "Login failed. Please try again.");
        }
    };

    const stats = [
        {
            icon: Users,
            value: "50K+",
            label: language === "ar" ? "مستخدم" : "Users",
        },
        {
            icon: ChefHat,
            value: "25K+",
            label: language === "ar" ? "وصفة" : "Recipes",
        },
        {
            icon: Star,
            value: "4.9",
            label: language === "ar" ? "تقييم" : "Rating",
        },
        {
            icon: Globe,
            value: "150+",
            label: language === "ar" ? "دولة" : "Countries",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#22ae4b] to-[#1c9a40] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-white">
                    <div className="mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-6">
                            <ChefHat className="w-16 h-16 text-white mx-auto" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Welcome to EEINA</h1>
                        <p className="text-xl text-white/90 mb-8">
                            {language === "ar"
                                ? "اكتشف وصفات مذهلة وخطط وجباتك وحقق أهدافك الصحية"
                                : "Discover amazing recipes, plan your meals, and achieve your health goals"}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-sm text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-white/80 text-sm">
                            {language === "ar"
                                ? "انضم إلى مجتمع من عشاق الطعام والطهاة المحترفين"
                                : "Join a community of food lovers and professional chefs"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <div className="bg-[#22ae4b] text-white font-bold text-2xl px-6 py-3 rounded-xl inline-block mb-4">
                            EEINA
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {language === "ar" ? "مرحباً بعودتك" : "Welcome Back"}
                        </h1>
                        <p className="text-gray-600">
                            {language === "ar" ? "سجل دخولك للمتابعة" : "Sign in to continue"}
                        </p>
                    </div>

                    <Card className="shadow-xl border-0">
                        <CardContent className="p-8">
                            {/* Desktop Header */}
                            <div className="hidden lg:block text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                                </h2>
                                <p className="text-gray-600">
                                    {language === "ar"
                                        ? "سجل دخولك إلى حسابك"
                                        : "Sign in to your account"}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                                    </label>
                                    <div className="relative">
                                        <Mail
                                            className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ${
                                                isRTL ? "right-3" : "left-3"
                                            }`}
                                        />
                                        <Input
                                            type="email"
                                            placeholder={
                                                language === "ar"
                                                    ? "أدخل بريدك الإلكتروني"
                                                    : "Enter your email"
                                            }
                                            className={`h-12 ${
                                                isRTL ? "pr-10 text-right" : "pl-10"
                                            } border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
                                            {...register("email")}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {language === "ar" ? "كلمة المرور" : "Password"}
                                    </label>
                                    <div className="relative">
                                        <Lock
                                            className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ${
                                                isRTL ? "right-3" : "left-3"
                                            }`}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder={
                                                language === "ar"
                                                    ? "أدخل كلمة المرور"
                                                    : "Enter your password"
                                            }
                                            className={`h-12 ${
                                                isRTL ? "pr-10 pl-10 text-right" : "pl-10 pr-10"
                                            } border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
                                            {...register("password")}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className={`absolute top-1/2 transform -translate-y-1/2 ${
                                                isRTL ? "left-3" : "right-3"
                                            } text-gray-400 hover:text-gray-600`}
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </Button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-[#22ae4b] border-gray-300 rounded focus:ring-[#22ae4b]"
                                            {...register("rememberMe")}
                                        />
                                        <span className="text-sm text-gray-600">
                                            {language === "ar" ? "تذكرني" : "Remember me"}
                                        </span>
                                    </label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm text-[#22ae4b] hover:text-[#1c9a40] font-medium"
                                    >
                                        {language === "ar"
                                            ? "نسيت كلمة المرور؟"
                                            : "Forgot password?"}
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !isValid}
                                    className="w-full h-12 bg-[#22ae4b] hover:bg-[#1c9a40] text-white font-semibold text-base rounded-xl"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>
                                                {language === "ar"
                                                    ? "جاري تسجيل الدخول..."
                                                    : "Signing in..."}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span>
                                                {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                                            </span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </Button>

                                {/* Divider */}
                                <div className="relative">
                                    <Separator />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-white px-4 text-sm text-gray-500">
                                            {language === "ar" ? "أو" : "or"}
                                        </span>
                                    </div>
                                </div>

                                {/* Social Login */}
                                <div className="space-y-3">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full h-12 border-gray-300 hover:border-gray-400"
                                    >
                                        <img
                                            src="https://developers.google.com/identity/images/g-logo.png"
                                            alt="Google"
                                            className="w-5 h-5 mr-3"
                                        />
                                        {language === "ar"
                                            ? "تسجيل الدخول بجوجل"
                                            : "Continue with Google"}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full h-12 border-gray-300 hover:border-gray-400"
                                    >
                                        <div className="w-5 h-5 bg-blue-600 rounded mr-3 flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">f</span>
                                        </div>
                                        {language === "ar"
                                            ? "تسجيل الدخول بفيسبوك"
                                            : "Continue with Facebook"}
                                    </Button>
                                </div>

                                {/* Sign Up Link */}
                                <div className="text-center pt-4">
                                    <p className="text-gray-600">
                                        {language === "ar"
                                            ? "ليس لديك حساب؟"
                                            : "Don't have an account?"}{" "}
                                        <Link
                                            to="/signup"
                                            className="text-[#22ae4b] hover:text-[#1c9a40] font-semibold"
                                        >
                                            {language === "ar" ? "إنشاء حساب" : "Sign up"}
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Terms */}
                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-500">
                            {language === "ar"
                                ? "بتسجيل الدخول، فإنك توافق على"
                                : "By signing in, you agree to our"}{" "}
                            <Link to="/terms" className="text-[#22ae4b] hover:underline">
                                {language === "ar" ? "الشروط والأحكام" : "Terms of Service"}
                            </Link>{" "}
                            {language === "ar" ? "و" : "and"}{" "}
                            <Link to="/privacy" className="text-[#22ae4b] hover:underline">
                                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
