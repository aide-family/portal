import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement actual dark mode toggle here
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Moon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                location.pathname === '/pricing' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {t('pricing')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {t('about')}
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <Globe size={16} className="mr-1" />
                <span>{i18n.language === 'zh' ? '中文' : 'English'}</span>
                <ChevronDown size={14} className="ml-1" />
              </button>
              
              {isLanguageMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        i18n.language === 'en' ? 'bg-gray-100 dark:bg-gray-700 text-blue-600' : 'text-gray-700 dark:text-gray-300'
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                      role="menuitem"
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('zh')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        i18n.language === 'zh' ? 'bg-gray-100 dark:bg-gray-700 text-blue-600' : 'text-gray-700 dark:text-gray-300'
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                      role="menuitem"
                    >
                      中文
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {isDarkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </nav>

          {/* Auth Buttons or User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  <img 
                    src={user?.avatar || 'https://i.pravatar.cc/150?u=default'}
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</span>
                  <ChevronDown size={14} />
                </button>
                
                {isProfileMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                      >
                        {t('dashboard')}
                      </Link>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                      >
                        {t('profile')}
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        role="menuitem"
                      >
                        {t('logout')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {t('login')}
                </Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors"
                >
                  {t('getStarted')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/"
              className={`px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/pricing"
              className={`px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/pricing' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600`}
            >
              {t('pricing')}
            </Link>
            <Link 
              to="/about"
              className={`px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600`}
            >
              {t('about')}
            </Link>
            
            <hr className="border-gray-200 dark:border-gray-700" />
            
            {/* Language Options */}
            <div className="px-3 py-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                {t('language')}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    i18n.language === 'en' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('zh')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    i18n.language === 'zh' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  中文
                </button>
              </div>
            </div>
            
            {/* Dark Mode Toggle */}
            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t(isDarkMode ? 'lightMode' : 'darkMode')}
              </span>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            
            <hr className="border-gray-200 dark:border-gray-700" />
            
            {/* Auth Buttons */}
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 flex items-center space-x-3">
                  <img 
                    src={user?.avatar || 'https://i.pravatar.cc/150?u=default'}
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{user?.name}</span>
                </div>
                <Link 
                  to="/dashboard"
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600"
                >
                  {t('dashboard')}
                </Link>
                <Link 
                  to="/profile"
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600"
                >
                  {t('profile')}
                </Link>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {t('login')}
                </Link>
                <Link 
                  to="/register" 
                  className="px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 text-center"
                >
                  {t('getStarted')}
                </Link>
              </div>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;