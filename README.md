# Moon Monitoring Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![中文](https://img.shields.io/badge/中文-简体中文-blue.svg)](README.zh-CN.md)
[![English](https://img.shields.io/badge/English-English-blue.svg)](README.md)

## 📖 Project Overview

Moon is a modern comprehensive monitoring and alerting platform designed specifically for cloud-native, IoT, and AI applications. It provides powerful monitoring capabilities, intelligent alerting systems, and an intuitive user interface to help developers and operations teams better manage and monitor their technology stacks.

## ✨ Key Features

### 🔍 Intelligent Monitoring
- **Cloud-Native Monitoring**: Multi-dimensional metrics monitoring for Kubernetes, Docker, and other cloud-native technologies
- **IoT Device Monitoring**: Real-time monitoring for IoT devices with large-scale connectivity and data collection
- **AI Integration**: Built-in AI algorithms for anomaly detection, trend prediction, and intelligent analysis
- **Smart Alerting**: Rule-based alerting system with multi-channel notifications and automated response

### 🎯 Core Features
- **Multi-tenant Architecture**: Support for organization-level isolation and management
- **Internationalization**: Built-in Chinese and English bilingual support
- **Responsive Design**: Compatible with desktop and mobile devices
- **Dark Theme**: Support for light and dark theme switching
- **Real-time Data**: Real-time monitoring data and status updates

### 🔐 Security & Authentication
- User registration and login system
- Role-based access control
- Protected routes and pages
- Secure authentication context

## 🛠 Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React framework
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Fast build tool

### UI Components & Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Headless UI** - Unstyled accessible UI components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animation library

### Routing & State Management
- **React Router DOM 6.22.2** - Client-side routing
- **React Context** - State management

### Internationalization
- **i18next 23.10.0** - Internationalization framework
- **react-i18next 14.0.5** - React internationalization

### Development Tools
- **ESLint** - Code quality checking
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS prefix auto-addition

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The project will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Code Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── auth/           # Authentication components
│   └── layout/         # Layout components
├── contexts/           # React Context
├── i18n/              # Internationalization files
├── pages/             # Page components
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   ├── profile/       # User profile pages
│   └── tenant/        # Tenant management pages
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🌐 Page Routes

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Dashboard (requires authentication)
- `/profile` - User profile (requires authentication)
- `/create-tenant` - Create organization (requires authentication)
- `/pricing` - Pricing page
- `/about` - About page

## 🎨 Design Features

- **Modern UI**: Adopts latest design trends and best practices
- **Smooth Animations**: Uses Framer Motion for fluid user experience
- **Responsive Layout**: Perfectly adapts to various screen sizes
- **Accessibility**: Follows WCAG accessibility standards
- **Theme Switching**: Seamless light and dark theme switching

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📞 Contact Us

- Project Homepage: [Moon Monitoring Platform](https://github.com/your-username/moon-monitoring-platform)
- Issue Reports: [Issues](https://github.com/your-username/moon-monitoring-platform/issues)
- Feature Requests: [Feature Requests](https://github.com/your-username/moon-monitoring-platform/issues/new)

---

**Moon Monitoring Platform** - Making monitoring simpler and smarter 🚀 