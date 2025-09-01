import React, { createContext, useContext, useState, useEffect } from "react";
import { Translation, getTranslation } from "../i18n/translations";

interface LanguageContextType {
     language: "en" | "ar";
     setLanguage: (lang: "en" | "ar") => void;
     t: Translation;
     isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [language, setLanguage] = useState<"en" | "ar">(() => {
          // Get language from URL path
          const path = window.location.pathname;
          if (path.startsWith("/ar")) {
               return "ar";
          }
          return "en";
     });

     const t = getTranslation(language);
     const isRTL = language === "ar";

     useEffect(() => {
          // Set document direction and language
          document.documentElement.dir = isRTL ? "rtl" : "ltr";
          document.documentElement.lang = language;

          // Add/remove RTL class for styling
          if (isRTL) {
               document.documentElement.classList.add("rtl");
          } else {
               document.documentElement.classList.remove("rtl");
          }
     }, [language, isRTL]);

     const handleSetLanguage = (lang: "en" | "ar") => {
          setLanguage(lang);

          // Update URL based on language
          const currentPath = window.location.pathname;
          let newPath = currentPath;

          if (lang === "ar") {
               // Add /ar prefix if not present
               if (!currentPath.startsWith("/ar")) {
                    newPath = "/ar" + currentPath;
               }
          } else {
               // Remove /ar prefix if present
               if (currentPath.startsWith("/ar")) {
                    newPath = currentPath.substring(3) || "/";
               }
          }

          if (newPath !== currentPath) {
               window.history.pushState({}, "", newPath);
          }
     };

     return (
          <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
               {children}
          </LanguageContext.Provider>
     );
};

export const useLanguage = () => {
     const context = useContext(LanguageContext);
     if (context === undefined) {
          throw new Error("useLanguage must be used within a LanguageProvider");
     }
     return context;
};
