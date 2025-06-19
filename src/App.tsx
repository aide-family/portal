import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CreateTenantPage from './pages/tenant/CreateTenantPage';
import PricingPage from './pages/PricingPage';
import ProfilePage from './pages/profile/ProfilePage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="about" element={<AboutPage />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="create-tenant" element={<CreateTenantPage />} />
            </Route>
            
            {/* 404 route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;