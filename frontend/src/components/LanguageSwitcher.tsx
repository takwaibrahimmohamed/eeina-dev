import React from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
     const { language, setLanguage } = useLanguage();

     const toggleLanguage = () => {
          setLanguage(language === "en" ? "ar" : "en");
     };

     return (
          <Button
               variant="ghost"
               size="sm"
               onClick={toggleLanguage}
               className="flex items-center gap-2 text-gray-600 hover:text-[#22ae4b]">
               <Globe className="w-4 h-4" />
               <span className="font-semibold text-sm">
                    {language === "en" ? "العربية" : "English"}
               </span>
          </Button>
     );
};
