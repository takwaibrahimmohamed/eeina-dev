import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
    Check,
    ChefHat,
    Eye,
    EyeOff,
    Globe,
    Heart,
    Lock,
    Mail,
    Star,
    User,
    Users,
} from "lucide-react";
import { SignupFormData, signupSchema } from "../../schemas/auth/authSchema";
import { useSignupMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";

export const Signup = (): JSX.Element => {
    const { language } = useLanguage();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [signUp] = useSignupMutation();
    const navigate = useNavigate();

    const stats = [
        { icon: Users, value: "50K+", label: language === "ar" ? "مستخدم" : "Users" },
        { icon: ChefHat, value: "25K+", label: language === "ar" ? "وصفة" : "Recipes" },
        { icon: Star, value: "4.9", label: language === "ar" ? "تقييم" : "Rating" },
        { icon: Globe, value: "150+", label: language === "ar" ? "دولة" : "Countries" },
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const password = watch("password");

    // calculate password strength
    React.useEffect(() => {
        let strength = 0;
        if (password?.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        setPasswordStrength(strength);
    }, [password]);

    const onSubmit = async (data: SignupFormData) => {
        try {
            await signUp(data).unwrap();
            toast.success("Signup successful!");
            // navigate("/verify-otp", { state: { email: data.email } });
            navigate("/");
        } catch (error: any) {
            toast.error(error?.data?.message || "Signup failed");
            console.log("signup error", error);
        }
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength <= 2) return "bg-red-500";
        if (passwordStrength <= 4) return "bg-yellow-500";
        return "bg-green-500";
    };

    const getPasswordStrengthText = () => {
        if (passwordStrength <= 2) return language === "ar" ? "ضعيف" : "Weak";
        if (passwordStrength <= 4) return language === "ar" ? "متوسط" : "Medium";
        return language === "ar" ? "قوي" : "Strong";
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#22ae4b] to-[#1c9a40] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 flex flex-col justify-between text-center p-16 text-white">
                    {/* Top Content */}
                    <div>
                        <div className="mb-8">
                            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6 inline-block">
                                <Heart className="w-16 h-16 text-white mx-auto" />
                            </div>
                            <h1 className="text-4xl font-bold mb-4">Join EEINA Today</h1>
                            <p className="text-xl text-white/90 mb-8">
                                {language === "ar"
                                    ? "ابدأ رحلتك نحو نمط حياة صحي مع وصفات مخصصة"
                                    : "Start your journey to a healthier lifestyle with personalized recipes"}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 w-full max-w-md mx-auto">
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-white/90">
                                    {language === "ar"
                                        ? "وصفات مخصصة لأهدافك"
                                        : "Personalized recipes for your goals"}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-white/90">
                                    {language === "ar"
                                        ? "تتبع التقدم والتغذية"
                                        : "Track progress and nutrition"}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-white/90">
                                    {language === "ar"
                                        ? "مجتمع داعم من الطهاة"
                                        : "Supportive community of chefs"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats at the bottom */}
                    <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto mt-12">
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
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-6 sm:p-12">
                <div className="w-full max-w-md">
                    <div className="lg:hidden text-center mb-8">
                        <div className="bg-[#22ae4b] text-white font-bold text-2xl px-6 py-3 rounded-xl inline-block mb-4">
                            EEINA
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {language === "ar" ? "إنشاء حساب جديد" : "Create an Account"}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            {language === "ar" ? "انضم إلى مجتمعنا" : "Join our community"}
                        </p>
                    </div>
                    <Card className="shadow-2xl border-0 rounded-2xl">
                        <CardContent className="p-8">
                            <div className="hidden lg:block text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {language === "ar" ? "إنشاء حساب" : "Create Account"}
                                </h2>
                                <p className="text-gray-600">
                                    {language === "ar"
                                        ? "ابدأ رحلتك الطهوية معنا"
                                        : "Start your culinary journey with us"}
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* First + Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder={
                                                language === "ar" ? "الاسم الأول" : "First name"
                                            }
                                            {...register("firstName")}
                                            className="h-12 pl-10 border-gray-300 focus:border-[#22ae4b]"
                                        />
                                        {errors.firstName && (
                                            <span className="text-red-500 text-sm mt-1 block">
                                                {errors.firstName.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder={
                                                language === "ar" ? "اسم العائلة" : "Last name"
                                            }
                                            {...register("lastName")}
                                            className="h-12 pl-10 border-gray-300 focus:border-[#22ae4b]"
                                        />
                                        {errors.lastName && (
                                            <span className="text-red-500 text-sm mt-1 block">
                                                {errors.lastName.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder={
                                            language === "ar" ? "أدخل بريدك الإلكتروني" : "Email"
                                        }
                                        {...register("email")}
                                        className="h-12 pl-10 border-gray-300 focus:border-[#22ae4b]"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm mt-1 block">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder={
                                                language === "ar"
                                                    ? "أدخل كلمة المرور"
                                                    : "Enter password"
                                            }
                                            {...register("password")}
                                            className="h-12 pl-10 pr-10 border-gray-300 focus:border-[#22ae4b]"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-gray-100"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </Button>
                                    </div>
                                    {errors.password && (
                                        <span className="text-red-500 text-sm mt-1 block">
                                            {errors.password.message}
                                        </span>
                                    )}
                                    {password && (
                                        <div className="mt-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className={`h-1.5 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                                                        style={{
                                                            width: `${(passwordStrength / 5) * 100}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-gray-600">
                                                    {getPasswordStrengthText()}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder={
                                            language === "ar"
                                                ? "تأكيد كلمة المرور"
                                                : "Confirm password"
                                        }
                                        {...register("confirmPassword")}
                                        className="h-12 pl-10 pr-10 border-gray-300 focus:border-[#22ae4b]"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-gray-100"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </Button>
                                </div>
                                {errors.confirmPassword && (
                                    <span className="text-red-500 text-sm -mt-4 block">
                                        {errors.confirmPassword.message}
                                    </span>
                                )}

                                {/* Terms */}
                                <div className="flex items-start gap-3 pt-2">
                                    <input
                                        type="checkbox"
                                        id="agreeToTerms"
                                        {...register("agreeToTerms")}
                                        className="w-4 h-4 mt-1 rounded border-gray-300 text-[#22ae4b] focus:ring-[#22ae4b]"
                                    />
                                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                                        {language === "ar" ? "أوافق على" : "I agree to the"}{" "}
                                        <Link
                                            to="/terms"
                                            className="font-medium text-[#22ae4b] hover:underline"
                                        >
                                            {language === "ar"
                                                ? "الشروط والأحكام"
                                                : "Terms of Service"}
                                        </Link>{" "}
                                        &{" "}
                                        <Link
                                            to="/privacy"
                                            className="font-medium text-[#22ae4b] hover:underline"
                                        >
                                            {language === "ar"
                                                ? "سياسة الخصوصية"
                                                : "Privacy Policy"}
                                        </Link>
                                    </label>
                                </div>
                                {errors.agreeToTerms && (
                                    <span className="text-red-500 text-sm -mt-4 block">
                                        {errors.agreeToTerms.message}
                                    </span>
                                )}

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-[#22ae4b] text-white text-base font-semibold hover:bg-[#1c9a40] transition-colors duration-300 disabled:bg-gray-400"
                                >
                                    {isSubmitting
                                        ? language === "ar"
                                            ? "جاري إنشاء الحساب..."
                                            : "Creating account..."
                                        : language === "ar"
                                          ? "إنشاء حساب"
                                          : "Create Account"}
                                </Button>
                            </form>
                            <div className="mt-6 text-center text-sm text-gray-600">
                                {language === "ar"
                                    ? "هل لديك حساب بالفعل؟"
                                    : "Already have an account?"}{" "}
                                <Link
                                    to="/login"
                                    className="font-semibold text-[#22ae4b] hover:underline"
                                >
                                    {language === "ar" ? "تسجيل الدخول" : "Log in"}
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
