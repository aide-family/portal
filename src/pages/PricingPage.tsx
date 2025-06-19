import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const calculateYearlyPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 10).toFixed(0); // 12 months for the price of 10
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('pricingTitle')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-12 max-w-xs mx-auto">
            <div className="relative bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex">
              <span
                className={`absolute ${
                  billingPeriod === 'monthly' ? 'left-1' : 'right-1'
                } top-1 bottom-1 w-1/2 rounded-md bg-white dark:bg-gray-700 transition-all duration-300`}
              ></span>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`flex-1 relative z-10 py-2 text-sm font-medium rounded-md focus:outline-none transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {t('monthly')}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`flex-1 relative z-10 py-2 text-sm font-medium rounded-md focus:outline-none transition-colors ${
                  billingPeriod === 'yearly'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {t('yearly')}
              </button>
            </div>
            {billingPeriod === 'yearly' && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                Save 16% with annual billing
              </p>
            )}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Free Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('planFree')}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {t('planFreePrice')}
                </span>
                <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                  {t('perMonth')}
                </span>
              </div>
              <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                Perfect for personal projects and small teams.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Up to 5 users
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Basic monitoring
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Email alerts
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    1 day data retention
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Community support
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="block w-full bg-gray-50 dark:bg-gray-700 text-center rounded-md py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800 transition-colors"
                >
                  {t('planFreeCTA')}
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ring-2 ring-blue-600 transform md:-translate-y-4"
            variants={itemVariants}
          >
            <div className="bg-blue-600 px-6 py-1 text-center">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Most Popular
              </span>
            </div>
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('planPro')}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {billingPeriod === 'monthly' ? t('planProPrice') : calculateYearlyPrice(49)}
                </span>
                <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                  {t('perMonth')}
                </span>
              </div>
              {billingPeriod === 'yearly' && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {t('billedAnnually')}
                </p>
              )}
              <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                Advanced monitoring for growing teams.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    <strong>Unlimited</strong> users
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Advanced monitoring
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Multi-channel alerts (Email, SMS, Slack)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    30 days data retention
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    AI-powered anomaly detection
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Priority email support
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="block w-full bg-blue-600 text-center rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 shadow-sm transition-colors"
                >
                  {t('planProCTA')}
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('planEnterprise')}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {t('planEnterprisePrice')}
                </span>
              </div>
              <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                Custom solutions for large organizations.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Everything in Professional
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Dedicated support team
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Custom integrations
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Unlimited data retention
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    Service Level Agreement (SLA)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700 dark:text-gray-300">
                    24/7 phone & email support
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="block w-full bg-gray-50 dark:bg-gray-700 text-center rounded-md py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800 transition-colors"
                >
                  {t('planEnterpriseCTA')}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Contact our support team.
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                How does the free plan work?
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                The free plan offers basic monitoring capabilities for up to 5 users. It's perfect for personal projects or small teams just getting started with monitoring. You get access to essential features with some limitations on data retention and alert channels.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Can I upgrade or downgrade my plan at any time?
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Yes, you can change your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Do you offer a trial period for paid plans?
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Yes, all paid plans come with a 14-day free trial. You can try out all the features of your chosen plan without any commitment. We don't require a credit card to start your trial.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                We accept all major credit cards (Visa, MasterCard, American Express, Discover) as well as PayPal. For Enterprise plans, we also offer invoice-based payment.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What kind of support is included?
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Free plans include community support. Professional plans include priority email support with faster response times. Enterprise plans include 24/7 phone and email support with a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;