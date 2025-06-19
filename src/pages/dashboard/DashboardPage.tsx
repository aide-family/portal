import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Activity, Bell, Settings, Search, ChevronDown, PlusCircle, Layers, Cloud, Database, Cpu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Dashboard Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('dashboardTitle')}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Bell size={20} />
              </button>
              
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://i.pravatar.cc/150?u=default'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {t('overview')}
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'metrics'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {t('metrics')}
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'alerts'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {t('alerts')}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {t('settings')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Stat 1 */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Services</h3>
                  <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Layers size={18} />
                  </div>
                </div>
                <div className="flex items-end">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
                  <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">+2</span>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">From last week</p>
              </motion.div>
              
              {/* Stat 2 */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Cloud Resources</h3>
                  <div className="p-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <Cloud size={18} />
                  </div>
                </div>
                <div className="flex items-end">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">37</p>
                  <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">+5</span>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">From last week</p>
              </motion.div>
              
              {/* Stat 3 */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Database Instances</h3>
                  <div className="p-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                    <Database size={18} />
                  </div>
                </div>
                <div className="flex items-end">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                  <span className="ml-2 text-sm font-medium text-yellow-600 dark:text-yellow-400">0</span>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">From last week</p>
              </motion.div>
              
              {/* Stat 4 */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">IoT Devices</h3>
                  <div className="p-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                    <Cpu size={18} />
                  </div>
                </div>
                <div className="flex items-end">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">156</p>
                  <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">+12</span>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">From last week</p>
              </motion.div>
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-2"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">System Performance</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Day</button>
                    <button className="px-3 py-1 text-xs rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Week</button>
                    <button className="px-3 py-1 text-xs rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Month</button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <BarChart3 size={48} className="text-gray-300 dark:text-gray-600" />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Connect your first service to see performance metrics</p>
                      <button className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <PlusCircle size={16} className="mr-1" />
                        Add Service
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Recent Alerts */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Alerts</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">CPU Usage High</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Web Server - 15 min ago</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Database Connection Failed</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">MySQL DB - 45 min ago</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Service Restored</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">API Gateway - 1 hour ago</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Bell size={16} className="mr-2" />
                    Configure Alerts
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Getting Started */}
            <motion.div 
              className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 text-white"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Getting Started with Moon</h3>
                  <p className="mt-1 text-blue-100">Complete these steps to set up your monitoring environment</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-white text-blue-600 rounded-md shadow-sm text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
                    Watch Tutorial
                  </button>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
                    Setup Guide
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {activeTab === 'metrics' && (
          <div className="flex items-center justify-center h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-center">
              <Activity size={48} className="mx-auto text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No metrics available</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Connect your services to see metrics here.</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PlusCircle size={16} className="mr-2" />
                Add Service
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'alerts' && (
          <div className="flex items-center justify-center h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-center">
              <Bell size={48} className="mx-auto text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No alerts configured</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Set up alert rules to receive notifications.</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PlusCircle size={16} className="mr-2" />
                Create Alert Rule
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-center">
              <Settings size={48} className="mx-auto text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Settings</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Configure your monitoring preferences.</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Settings size={16} className="mr-2" />
                Manage Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;