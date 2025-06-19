import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Moon</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {t('products')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('documentation')}
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {t('resources')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('support')}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('community')}
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('status')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {t('company')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Moon, Inc. {t('allRightsReserved')}
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t('privacy')}
                </Link>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t('terms')}
                </Link>
                <Link to="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t('cookies')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;