import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { MailCheck } from "lucide-react";
import { toast } from "sonner";
import {
    useResendEmailOtpMutation,
    useVerifyEmailMutation,
} from "../../redux/Features/User/userApi";

export const VerifyOtp = (): JSX.Element => {
    const { language } = useLanguage();
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [isVerifying, setIsVerifying] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0); // seconds left
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [verifyEmail] = useVerifyEmailMutation();
    const [resendEmailOtp] = useResendEmailOtpMutation();
    const email = location.state?.email;

    console.log("Email from state:", email);

    // Countdown effect
    useEffect(() => {
        if (resendCooldown === 0) return;
        const interval = setInterval(() => {
            setResendCooldown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [resendCooldown]);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        setIsVerifying(true);
        const enteredOtp = otp.join("");

        if (!email) return;

        if (enteredOtp.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP.");
            setIsVerifying(false);
            return;
        }

        try {
            await verifyEmail({ email, otp: enteredOtp }).unwrap();
            toast.success("OTP verified successfully!");
            navigate("/goals-setup");
        } catch (error) {
            console.log(error);
            toast.error("OTP verification failed");
        } finally {
            setIsVerifying(false);
            setOtp(new Array(6).fill(""));
        }
    };

    const handleResendOtp = async () => {
        if (!email || resendCooldown > 0) return;

        try {
            await resendEmailOtp({ email }).unwrap();
            toast.success("OTP resent successfully!");
            setResendCooldown(60); // start 1-minute cooldown
        } catch (error) {
            console.log(error);
            toast.error("Failed to resend OTP");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="shadow-2xl border-0 rounded-2xl">
                    <CardContent className="p-8 text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                            <MailCheck className="h-10 w-10 text-[#22ae4b]" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {language === "ar" ? "التحقق من الرمز" : "Verify Your Account"}
                        </h2>
                        <p className="text-gray-600 mb-8">
                            {language === "ar"
                                ? "لقد أرسلنا رمزًا مكونًا من 6 أرقام إلى بريدك الإلكتروني."
                                : "We've sent a 6-digit code to your email."}
                        </p>

                        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={data}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        handleChange(e.target, index)
                                    }
                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                                        handleKeyDown(e, index)
                                    }
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl font-semibold border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-1 focus:ring-[#22ae4b] transition"
                                />
                            ))}
                        </div>

                        <Button
                            onClick={handleVerify}
                            disabled={isVerifying}
                            className="w-full h-12 bg-[#22ae4b] text-white text-base font-semibold hover:bg-[#1c9a40] transition-colors duration-300 disabled:bg-gray-400"
                        >
                            {isVerifying
                                ? language === "ar"
                                    ? "جارٍ التحقق..."
                                    : "Verifying..."
                                : language === "ar"
                                  ? "التحقق من الحساب"
                                  : "Verify Account"}
                        </Button>

                        <div className="mt-6 text-sm text-gray-600">
                            {language === "ar" ? "لم تستلم الرمز؟" : "Didn't receive the code?"}{" "}
                            <button
                                onClick={handleResendOtp}
                                disabled={resendCooldown > 0}
                                className={`font-semibold text-[#22ae4b] hover:underline focus:outline-none ${
                                    resendCooldown > 0
                                        ? "opacity-50 cursor-not-allowed hover:underline-none"
                                        : ""
                                }`}
                            >
                                {resendCooldown > 0
                                    ? `${language === "ar" ? "إعادة الإرسال بعد" : "Resend in"} ${resendCooldown}s`
                                    : language === "ar"
                                      ? "إعادة الإرسال"
                                      : "Resend"}
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
