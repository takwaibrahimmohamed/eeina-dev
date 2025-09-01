import { SearchIcon, Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { LanguageSwitcher } from "../../../../components/LanguageSwitcher";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const TopCreatorsSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t, isRTL, language } = useLanguage();

  // Helper functions remain the same
  const getCurrentPath = () => {
    const path = window.location.pathname;
    return path.startsWith('/ar') ? path.substring(3) || '/' : path;
  };

  const getLocalizedPath = (path: string) => {
    return language === 'ar' ? `/ar${path === '/' ? '' : path}` : path;
  };

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.explore, path: "/explore" },
    { name: language === 'ar' ? 'الرائج' : 'Trending', path: "/trending" },
    { name: t.nav.saved, path: "/saved" },
    { name: t.nav.planner, path: "/planner" },
    { name: t.nav.lists, path: "/lists" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-3 px-4 sm:py-4 sm:px-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* === SECTION 1: Logo and Nav (Parent) === */}
        {/* RTL: Moves the entire block to the right */}
        <div className={`flex items-center ${isRTL ? 'order-3' : 'order-1'}`}>
          {/* Child 1.1: Logo */}
          {/* RTL: Becomes the 3rd item in this section */}
          <div className={`bg-[#22ae4b] text-white font-bold text-lg sm:text-xl px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg ${isRTL ? 'ml-4 sm:ml-8 order-3' : 'mr-4 sm:mr-8'}`}>
            EEINA
          </div>
          
          {/* Child 1.2: Mobile Menu Button */}
          {/* RTL: Becomes the 2nd item in this section */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors ${isRTL ? 'mr-4 order-2' : 'ml-4'}`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Child 1.3: Desktop Navigation */}
          {/* RTL: Becomes the 1st item in this section */}
          <NavigationMenu className={`hidden lg:block ${isRTL ? 'order-1' : ''}`}>
            {/* Grandchild: The list of navigation items */}
            <NavigationMenuList className={`flex gap-4 xl:gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    className={`font-bold text-sm xl:text-base hover:text-[#1c9a40] transition-colors ${
                      getCurrentPath() === item.path
                        ? "text-[#22ae4b]"
                        : "text-gray-700 hover:text-[#22ae4b]"
                    }`}
                    to={getLocalizedPath(item.path)}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* === SECTION 2: Search Bar (Parent) === */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-4 lg:mx-8 order-2">
          {/* Child: The search bar's inner container */}
          <div className="bg-gray-100 rounded-xl flex items-center px-3 py-2 sm:px-4 sm:py-3">
            {/* Grandchild: Search Icon */}
            {/* RTL: Becomes the 2nd item */}
            <SearchIcon className={`w-4 h-4 text-gray-500 ${isRTL ? 'ml-3 order-2' : 'mr-3'}`} />
            {/* Grandchild: Search Input */}
            {/* RTL: Becomes the 1st item */}
            <Input
              className={`border-0 bg-transparent shadow-none h-auto font-normal text-gray-700 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 w-full ${isRTL ? 'text-right order-1' : 'text-left'}`}
              placeholder={t.nav.search_placeholder}
            />
          </div>
        </div>

        {/* === SECTION 3: Profile and Language (Parent) === */}
        {/* RTL: Moves the entire block to the left */}
        <div className={`flex items-center gap-2 sm:gap-4 ${isRTL ? 'order-1' : 'order-3'}`}>
          {/* Child 3.1: Language Switcher */}
          {/* RTL: Becomes the 2nd item */}
          <div className={`hidden md:block ${isRTL ? 'order-2' : ''}`}>
            <LanguageSwitcher />
          </div>
          {/* Child 3.2: Profile Link */}
          {/* RTL: Becomes the 1st item */}
          <Link to={getLocalizedPath("/profile")} className={`${isRTL ? 'order-1' : ''}`}>
            {/* Grandchild: Container for profile image and name */}
            <div className={`flex items-center gap-2 sm:gap-3 bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full px-3 py-1.5 sm:px-6 sm:py-2 cursor-pointer transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                alt="Adam Ahmed"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
              <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Adam Ahmed</span>
            </div>
          </Link>
          
          {/* Auth Buttons for logged out users */}
          <div className="hidden">
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm" className="text-xs">
                  {language === 'ar' ? 'دخول' : 'Login'}
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-xs">
                  {language === 'ar' ? 'تسجيل' : 'Sign Up'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* === MOBILE MENU OVERLAY === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40">
          <div className="px-4 py-4 space-y-4">
            <nav className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={getLocalizedPath(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-3 rounded-lg font-medium transition-colors ${isRTL ? 'text-right' : 'text-left'} ${
                    getCurrentPath() === item.path
                      ? "text-[#22ae4b] bg-green-50"
                      : "text-gray-700 hover:text-[#22ae4b] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-gray-100">
              <div className={`bg-gray-100 rounded-xl flex items-center px-3 py-3`}>
                {/* RTL: Becomes 2nd item */}
                <SearchIcon className={`w-4 h-4 text-gray-500 ${isRTL ? 'ml-3 order-2' : 'mr-3'}`} />
                {/* RTL: Becomes 1st item */}
                <input
                  className={`border-0 bg-transparent shadow-none h-auto font-normal text-gray-700 text-sm focus:outline-none placeholder:text-gray-500 flex-1 ${isRTL ? 'text-right order-1' : 'text-left'}`}
                  placeholder={t.nav.search_placeholder}
                />
              </div>
            </div>

            {/* RTL: Reverses language switcher and profile button */}
            <div className={`pt-3 border-t border-gray-100 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher />
              <Link to={getLocalizedPath("/profile")} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`flex items-center gap-3 bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full px-4 py-2 cursor-pointer transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                    alt="Adam Ahmed"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-semibold text-sm">Adam Ahmed</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};