import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ChevronRight,
  BarChart,
  Cloud,
  Cpu,
  Bell,
} from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative pt-28 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/20'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-full h-full max-w-7xl'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 1200 800'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='opacity-10 dark:opacity-5'
            >
              <circle
                cx='600'
                cy='400'
                r='350'
                stroke='#8B5CF6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='300'
                stroke='#3B82F6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='250'
                stroke='#14B8A6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='200'
                stroke='#8B5CF6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='150'
                stroke='#3B82F6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='100'
                stroke='#14B8A6'
                strokeWidth='2'
              />
              <circle
                cx='600'
                cy='400'
                r='50'
                stroke='#8B5CF6'
                strokeWidth='2'
              />
            </svg>
          </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            className='max-w-3xl mx-auto text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
              {t('heroTitle')}
            </h1>
            <p className='mt-6 text-xl text-gray-600 dark:text-gray-300'>
              {t('heroSubtitle')}
            </p>
            <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/register'
                className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'
              >
                {t('heroButton')}
                <ArrowRight size={16} className='ml-2' />
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'
              >
                {t('heroDemo')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className='mt-16 max-w-5xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className='relative rounded-xl shadow-2xl overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='Moon Dashboard'
                className='w-full h-auto'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              {t('featuresTitle')}
            </h2>
            <div className='mt-2 h-1 w-16 bg-blue-600 mx-auto'></div>
          </div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Feature 1 */}
            <motion.div
              className='relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700'
              variants={itemVariants}
            >
              <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4'>
                <Cloud size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {t('featureCloudTitle')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('featureCloudDesc')}
              </p>
              <Link
                to='/features/cloud'
                className='mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
              >
                Learn more
                <ChevronRight size={16} className='ml-1' />
              </Link>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className='relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700'
              variants={itemVariants}
            >
              <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4'>
                <BarChart size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {t('featureIoTTitle')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('featureIoTDesc')}
              </p>
              <Link
                to='/features/iot'
                className='mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
              >
                Learn more
                <ChevronRight size={16} className='ml-1' />
              </Link>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className='relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700'
              variants={itemVariants}
            >
              <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4'>
                <Cpu size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {t('featureAITitle')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('featureAIDesc')}
              </p>
              <Link
                to='/features/ai'
                className='mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
              >
                Learn more
                <ChevronRight size={16} className='ml-1' />
              </Link>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className='relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700'
              variants={itemVariants}
            >
              <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4'>
                <Bell size={24} />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {t('featureAlertTitle')}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t('featureAlertDesc')}
              </p>
              <Link
                to='/features/alerts'
                className='mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'
              >
                Learn more
                <ChevronRight size={16} className='ml-1' />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-gray-50 dark:bg-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              Trusted by Companies Worldwide
            </h2>
            <div className='mt-2 h-1 w-16 bg-blue-600 mx-auto'></div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
            {/* Company logos would go here */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className='flex items-center justify-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
              >
                <div className='w-full h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
              </div>
            ))}
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <motion.div
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className='flex items-center mb-4'>
                <div className='h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold'>
                  A
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Alex Johnson
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    CTO, TechCorp
                  </p>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400'>
                "Moon has transformed how we monitor our infrastructure. The
                AI-powered anomaly detection saved us countless hours of manual
                work."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className='flex items-center mb-4'>
                <div className='h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold'>
                  S
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Sarah Zhang
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    DevOps Lead, CloudNine
                  </p>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400'>
                "The multi-tenant features allow us to manage monitoring for all
                our client environments from a single dashboard. Game changer!"
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='flex items-center mb-4'>
                <div className='h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold'>
                  M
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Miguel Rodriguez
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    IoT Manager, ConnectAll
                  </p>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400'>
                "Moon's IoT monitoring capabilities have given us unprecedented
                visibility into our device network. The alerts are precise and
                timely."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold'>{t('ctaTitle')}</h2>
            <p className='mt-4 text-lg text-blue-100'>{t('ctaSubtitle')}</p>
            <div className='mt-8'>
              <Link
                to='/register'
                className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors'
              >
                {t('ctaButton')}
                <ArrowRight size={16} className='ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
