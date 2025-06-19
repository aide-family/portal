import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Shield, CreditCard, Settings, Upload, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setShowSuccessToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('profileTitle')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8 flex flex-col sm:flex-row items-center">
            <div className="relative mb-4 sm:mb-0 sm:mr-6">
              <img
                src={user?.avatar || 'https://i.pravatar.cc/150?u=default'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
              />
              <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Upload size={16} />
              </button>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{user?.role} Account</p>
            </div>
          </div>
          
          {/* Profile Tabs */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'personal'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                <User size={18} className="mr-2" />
                {t('personalInfo')}
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'account'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                <Settings size={18} className="mr-2" />
                {t('accountSettings')}
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'security'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                <Shield size={18} className="mr-2" />
                {t('securitySettings')}
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'billing'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                <CreditCard size={18} className="mr-2" />
                {t('billingInformation')}
              </button>
            </div>
            
            <div className="p-6">
              {/* Personal Information */}
              {activeTab === 'personal' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t('personalInfo')}
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="full-name"
                          name="full-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Job Title
                      </label>
                      <div className="mt-1">
                        <input
                          id="job-title"
                          name="job-title"
                          type="text"
                          placeholder="e.g. Software Engineer"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Company
                      </label>
                      <div className="mt-1">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="e.g. Acme Inc."
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Bio
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="bio"
                          name="bio"
                          rows={3}
                          placeholder="Tell us a bit about yourself"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={isLoading}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        t('saveChanges')
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Account Settings */}
              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t('accountSettings')}
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Language
                      </h5>
                      <select
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      >
                        <option value="en">English</option>
                        <option value="zh">中文</option>
                      </select>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Timezone
                      </h5>
                      <select
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      >
                        <option value="utc">UTC</option>
                        <option value="est">Eastern Time (EST/EDT)</option>
                        <option value="pst">Pacific Time (PST/PDT)</option>
                        <option value="cet">Central European Time (CET/CEST)</option>
                      </select>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Notifications
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="alerts"
                            name="alerts"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="alerts" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Monitoring alerts
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="updates"
                            name="updates"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="updates" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Product updates
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Monthly newsletter
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
                        Danger Zone
                      </h5>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-red-300 dark:border-red-700 rounded-md shadow-sm text-sm font-medium text-red-600 dark:text-red-400 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={isLoading}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        t('saveChanges')
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Security Settings */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t('securitySettings')}
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Change Password
                      </h5>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="current-password" className="sr-only">Current Password</label>
                          <input
                            id="current-password"
                            name="current-password"
                            type="password"
                            placeholder="Current Password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="new-password" className="sr-only">New Password</label>
                          <input
                            id="new-password"
                            name="new-password"
                            type="password"
                            placeholder="New Password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirm-password" className="sr-only">Confirm New Password</label>
                          <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            placeholder="Confirm New Password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                          />
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Two-Factor Authentication
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Enable 2FA
                      </button>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Active Sessions
                      </h5>
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Current Session</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Chrome on macOS • Los Angeles, CA • 192.168.1.1</p>
                          </div>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Active
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        Sign out of all other sessions
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Billing Information */}
              {activeTab === 'billing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t('billingInformation')}
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-sm font-medium text-blue-800 dark:text-blue-300">Free Plan</h5>
                          <p className="text-sm text-blue-600 dark:text-blue-400">
                            You are currently on the free plan with basic features.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Upgrade to Pro
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Get access to advanced features, unlimited users, and priority support.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Upgrade to Pro
                      </button>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Billing Address
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Add a billing address to get started with a paid plan.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Add Billing Address
                      </button>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Payment Methods
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Add a payment method to get started with a paid plan.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
          <Check size={18} className="mr-2" />
          Changes saved successfully
        </div>
      )}
    </div>
  );
};

export default ProfilePage;