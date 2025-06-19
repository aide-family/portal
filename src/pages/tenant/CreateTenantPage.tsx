import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Building, Users, Database } from 'lucide-react';

interface FormData {
  name: string;
  industry: string;
  teamSize: string;
  plan: 'free' | 'pro' | 'enterprise';
}

const CreateTenantPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    industry: '',
    teamSize: '',
    plan: 'free',
  });
  
  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to dashboard after successful tenant creation
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating tenant:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Define steps
  const steps = [
    { id: 1, title: 'Organization Info' },
    { id: 2, title: 'Choose Plan' },
    { id: 3, title: 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('createTenantTitle')}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('createTenantSubtitle')}
          </p>
        </div>
        
        {/* Progress Steps */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <div className="flex flex-col items-center">
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step > s.id 
                        ? 'bg-green-500 text-white' 
                        : step === s.id 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {step > s.id ? (
                      <CheckCircle size={20} />
                    ) : (
                      <span>{s.id}</span>
                    )}
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {s.title}
                  </span>
                </div>
                
                {i < steps.length - 1 && (
                  <div 
                    className={`flex-1 h-1 mx-2 ${
                      step > i + 1 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <motion.div 
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6"
        >
          {/* Step 1: Organization Info */}
          {step === 1 && (
            <>
              <div className="flex items-center mb-6">
                <Building size={24} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Organization Details
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="org-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('organizationName')}
                  </label>
                  <div className="mt-1">
                    <input
                      id="org-name"
                      name="org-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('industry')}
                  </label>
                  <div className="mt-1">
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={(e) => updateFormData('industry', e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="team-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('teamSize')}
                  </label>
                  <div className="mt-1">
                    <select
                      id="team-size"
                      name="team-size"
                      required
                      value={formData.teamSize}
                      onChange={(e) => updateFormData('teamSize', e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                    >
                      <option value="">Select Team Size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.name || !formData.industry || !formData.teamSize}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('next')}
                </button>
              </div>
            </>
          )}
          
          {/* Step 2: Choose Plan */}
          {step === 2 && (
            <>
              <div className="flex items-center mb-6">
                <Database size={24} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Select a Plan
                </h3>
              </div>
              
              <div className="space-y-4">
                <div
                  className={`relative border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
                    formData.plan === 'free' 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  onClick={() => updateFormData('plan', 'free')}
                >
                  <div className="flex items-start">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.plan === 'free' 
                        ? 'border-blue-600' 
                        : 'border-gray-400 dark:border-gray-600'
                    }`}>
                      {formData.plan === 'free' && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Free</h4>
                      <p className="text-gray-600 dark:text-gray-400">Basic monitoring for small teams</p>
                      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">$0</p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Up to 5 users
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Basic monitoring
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Email alerts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`relative border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
                    formData.plan === 'pro' 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  onClick={() => updateFormData('plan', 'pro')}
                >
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                  <div className="flex items-start">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.plan === 'pro' 
                        ? 'border-blue-600' 
                        : 'border-gray-400 dark:border-gray-600'
                    }`}>
                      {formData.plan === 'pro' && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Professional</h4>
                      <p className="text-gray-600 dark:text-gray-400">Advanced monitoring for growing teams</p>
                      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">$49 <span className="text-sm font-normal text-gray-500">/month</span></p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Unlimited users
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Advanced monitoring
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Multi-channel alerts (email, SMS, Slack)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          AI-powered anomaly detection
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`relative border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
                    formData.plan === 'enterprise' 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  onClick={() => updateFormData('plan', 'enterprise')}
                >
                  <div className="flex items-start">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.plan === 'enterprise' 
                        ? 'border-blue-600' 
                        : 'border-gray-400 dark:border-gray-600'
                    }`}>
                      {formData.plan === 'enterprise' && (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Enterprise</h4>
                      <p className="text-gray-600 dark:text-gray-400">Custom solutions for large organizations</p>
                      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Custom</p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Everything in Professional
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Dedicated support team
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Custom integrations
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          Service Level Agreement (SLA)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('back')}
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('next')}
                </button>
              </div>
            </>
          )}
          
          {/* Step 3: Confirmation */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-6">
                <Users size={24} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Confirm Details
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Organization Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Name</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Industry</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.industry}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Team Size</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Selected Plan</p>
                      <p className="font-medium text-gray-900 dark:text-white capitalize">{formData.plan}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    By creating your organization, you'll have immediate access to the Moon monitoring platform. Your workspace will be set up according to the selected plan.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('back')}
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </div>
                  ) : (
                    t('createWorkspace')
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CreateTenantPage;