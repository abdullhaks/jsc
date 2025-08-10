import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, BookOpen, Users, Calendar, Youtube, FileText, Download, Mail, Globe, ChevronDown, Star, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import jsc_logo1 from '../assets/jsc_logo1.png';

export const Header = ({ activeSection, setActiveSection }) => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current route

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Globe className="w-4 h-4" /> },
    { id: 'upcomingEvents', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'leaders', label: 'Leaders', icon: <Users className="w-4 h-4" /> },
    { id: 'recentUploads', label: 'Uploads', icon: <Youtube className="w-4 h-4" /> },
    { id: 'publicEvents', label: 'Public Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'downloads', label: 'Downloads', icon: <Download className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
    { code: 'ur', label: 'اردو', flag: '🇵🇰' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();

    // If not on the homepage, navigate to the homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }
      }, 100); // Small delay to ensure DOM is updated after navigation
    } else {
      // If already on the homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      }
    }

    // Close menu and dropdown
    setTimeout(() => {
      setIsMenuOpen(false);
      setShowLangDropdown(false);
    }, 300);
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowLangDropdown(false);
    setIsMenuOpen(false);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  return (
    <>
      {/* Decorative Islamic Pattern Background */}
      <div className="fixed top-0 w-full h-20 z-40 opacity-100 pointer-events-none">
        <div 
          className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl' 
            : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 min-h-[64px]">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer group flex-shrink-0"
              style={{ minWidth: 'fit-content' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => scrollToSection(e, 'hero')}
            >
              <motion.div 
                className="relative flex-shrink-0"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img 
                  src={jsc_logo1} 
                  alt="Jeelani Studies Centre" 
                  className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-md object-cover shadow-lg"
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                </motion.div>
              </motion.div>
              
              <div className="flex flex-col justify-center min-w-0">
                <motion.h1 
                  className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent leading-tight truncate"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Jeelani Studies Centre
                </motion.h1>
                <motion.p 
                  className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight truncate"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Islamic Education & Spiritual Excellence
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {activeSection === item.id && location.pathname === '/' && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl"
                      layoutId="activeNavBg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Right Section - Language & Mobile Menu */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Desktop Language Dropdown */}
              <div className="relative hidden lg:block">
                <motion.button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{getCurrentLanguage().flag}</span>
                  <span className="hidden xl:block">{getCurrentLanguage().label.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                            i18n.language === lang.code 
                              ? 'bg-emerald-50 text-emerald-700' 
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Language Button */}
              <div className="relative lg:hidden">
                <motion.button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50/50 hover:bg-emerald-100/70 text-emerald-600 transition-all duration-300 border border-emerald-200/50"
                  whileTap={{ scale: 0.95 }}
                  title="Change Language"
                >
                  <Languages className="w-5 h-5" />
                </motion.button>

                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center space-x-3 px-3 py-2.5 text-left transition-colors ${
                            i18n.language === lang.code 
                              ? 'bg-emerald-50 text-emerald-700' 
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="font-medium text-sm">{lang.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-emerald-50/50 transition-colors relative z-10"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-100 overflow-hidden bg-white/50 backdrop-blur-md"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg mx-2 ${
                        activeSection === item.id && location.pathname === '/'
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="transition-transform hover:scale-110">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {(showLangDropdown || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowLangDropdown(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;