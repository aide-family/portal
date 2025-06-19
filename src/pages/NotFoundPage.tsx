import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="text-[150px] font-extrabold text-gray-200 dark:text-gray-800">404</div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          >
            <img 
              src="https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Lost in Space" 
              className="w-48 h-48 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </motion.div>
        </div>
        
        <h1 className="mt-20 text-4xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          It seems you've ventured into unknown territory. The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;