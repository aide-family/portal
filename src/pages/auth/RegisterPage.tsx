import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  
  const validatePassword = () => {
    const validations = {
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    };
    
    return validations;
  };
  
  const passwordValidation = validatePassword();
  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const passwordsMatch = password === confirmPassword;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isPasswordValid) {
      setError('Password does not meet requirements');
      return;
    }
    
    if (!passwordsMatch) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the terms of service');
      return;
    }
    
    try {
      await register(name, email, password);
      navigate('/create-tenant');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('registerTitle')}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('registerSubtitle')}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('fullName')}
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('email')}
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('password')}
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.length ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  {passwordValidation.length && <Check size={12} className="text-white" />}
                </div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">At least 8 characters</span>
              </div>
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.uppercase ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  {passwordValidation.uppercase && <Check size={12} className="text-white" />}
                </div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">At least one uppercase letter</span>
              </div>
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.number ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  {passwordValidation.number && <Check size={12} className="text-white" />}
                </div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">At least one number</span>
              </div>
              <div className="flex items-center">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${passwordValidation.special ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  {passwordValidation.special && <Check size={12} className="text-white" />}
                </div>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">At least one special character</span>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('confirmPassword')}
            </label>
            <div className="mt-1 relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`appearance-none block w-full px-3 py-2 border ${
                  confirmPassword && !passwordsMatch ? 'border-red-300 dark:border-red-700' : 'border-gray-300 dark:border-gray-700'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm`}
              />
              {confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">Passwords do not match</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded"
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              {t('agreeTerms')}
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || !isPasswordValid || !passwordsMatch || !agreeTerms}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {t('createAccount')}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('alreadyAccount')}{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              {t('signIn')}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;