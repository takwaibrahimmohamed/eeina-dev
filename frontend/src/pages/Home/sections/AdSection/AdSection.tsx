import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const AdSection = (): JSX.Element => {
  const { t, isRTL } = useLanguage();

  // Company links data
  const companyLinks = [
    { title: t.footer.about },
    { title: t.footer.features },
    { title: t.footer.works },
    { title: t.footer.career },
  ];

  // Help links data
  const helpLinks = [
    { title: t.footer.customer_support },
    { title: t.footer.delivery_details },
    { title: t.footer.terms_conditions },
    { title: t.footer.privacy_policy },
  ];

  return (
    <footer className={`w-full bg-[#1f1f1f] py-8 sm:py-12 lg:py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1164px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <img
              className="w-[146px] h-[63px] object-cover mb-4"
              alt="EEINA Logo"
              src="/rectangle-421.png"
            />
            <p className="text-white text-xs sm:text-sm leading-relaxed font-normal mt-4">
              {t.footer.discover_description}
            </p>
          </div>

          {/* Company links */}
          <div className="col-span-1">
            <h3 className="font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
              {t.footer.company}
            </h3>
            <nav>
              <ul className="space-y-3 sm:space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white text-sm sm:text-base font-medium hover:text-[#22ae4b] transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Help links */}
          <div className="col-span-1">
            <h3 className="font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
              {t.footer.help}
            </h3>
            <nav>
              <ul className="space-y-3 sm:space-y-4">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white text-sm sm:text-base font-medium hover:text-[#22ae4b] transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6">
              {t.footer.newsletter}
            </h3>
            <div>
              <Input
                className="h-12 sm:h-[55px] bg-white rounded-lg border border-solid border-zinc-200 px-3 py-2 text-gray-600 text-sm sm:text-base mb-3 sm:mb-6"
                placeholder={t.footer.enter_email}
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              />
              <Button className="w-full h-12 sm:h-[55px] bg-[#22ae4b] hover:bg-[#1c9a40] rounded-lg text-sm sm:text-base font-semibold text-white">
                {t.footer.subscribe_now}
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-6 sm:my-8 lg:my-10 bg-white/20" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#22ae4b] text-xs sm:text-sm font-normal">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
