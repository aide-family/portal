import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;