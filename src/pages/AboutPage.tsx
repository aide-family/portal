import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

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
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('aboutTitle')}
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('aboutSubtitle')}
          </motion.p>
        </div>
        
        {/* Our Story */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t('ourStory')}
            </motion.h3>
            
            <motion.div 
              className="prose prose-lg dark:prose-invert mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Moon was born out of a simple observation: as technology stacks become more complex, traditional monitoring tools struggle to keep up. In 2023, a team of experienced engineers and infrastructure specialists came together with a vision to create a monitoring platform that would simplify operations while providing comprehensive coverage across cloud-native, IoT, and AI applications.
              </p>
              <p>
                What started as an internal tool for our own projects quickly evolved into a full-fledged platform that addresses the monitoring challenges faced by modern businesses. We launched Moon with a focus on ease of use, intelligence, and adaptability.
              </p>
              <p>
                Today, Moon is trusted by organizations of all sizes, from startups to enterprises, helping them maintain system reliability and operational efficiency. Our team continues to grow, but our mission remains the same: to simplify monitoring operations and enhance system reliability.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className="mb-24 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              className="p-8 md:p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                To become the globally leading multi-domain monitoring and alerting platform, helping enterprises and developers achieve efficient operations in complex system environments.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-600 p-8 md:p-12 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-blue-100">
                To simplify monitoring operations and enhance system reliability through intelligent, user-friendly tools that provide actionable insights and automate responses to potential issues.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-24">
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('ourValues')}
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Value 1 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Customer Focus
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We put our customers at the center of everything we do, continuously listening to their needs and evolving our platform accordingly.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in everything we do, from code quality to customer support, always aiming to exceed expectations.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Reliability
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in building reliable systems that our customers can depend on, ensuring uptime and accuracy in our monitoring services.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                <Heart size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Passion
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We're passionate about technology and solving complex monitoring challenges, bringing enthusiasm and creativity to our work.
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <div className="mb-24">
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('meetTeam')}
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sarah Chen, CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Sarah Chen</h4>
                <p className="text-blue-600 dark:text-blue-400">CEO & Co-founder</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Former CTO at CloudTech with 15+ years of experience in distributed systems and cloud infrastructure.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Michael Rodriguez, CTO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Michael Rodriguez</h4>
                <p className="text-blue-600 dark:text-blue-400">CTO & Co-founder</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  AI and machine learning expert who led monitoring teams at major tech companies for over a decade.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Aisha Johnson, CPO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Aisha Johnson</h4>
                <p className="text-blue-600 dark:text-blue-400">Chief Product Officer</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Product strategist who specializes in creating intuitive monitoring interfaces and actionable dashboards.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="David Kim, Head of Engineering" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">David Kim</h4>
                <p className="text-blue-600 dark:text-blue-400">Head of Engineering</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  DevOps pioneer who built scalable monitoring solutions for Fortune 500 companies and startups alike.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Join Us Section */}
        <div className="bg-blue-600 rounded-xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Join Our Team
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                We're always looking for talented individuals who are passionate about building the future of monitoring. Check out our open positions.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <a
                href="/careers"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;