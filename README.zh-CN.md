# Moon Monitoring Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![中文](https://img.shields.io/badge/中文-简体中文-blue.svg)](README.zh-CN.md)
[![English](https://img.shields.io/badge/English-English-blue.svg)](README.md)

## 📖 项目简介

Moon 是一个现代化的综合监控和告警平台，专为云原生、物联网和人工智能应用而设计。它提供了强大的监控功能、智能告警系统和直观的用户界面，帮助开发者和运维团队更好地管理和监控他们的技术栈。

## ✨ 主要功能

### 🔍 智能监控
- **云原生监控**: 支持 Kubernetes、Docker 等云原生技术的多维度指标监控
- **IoT 设备监控**: 实时监控物联网设备，支持大规模连接和数据收集
- **AI 集成**: 内置 AI 算法，提供异常检测、趋势预测和智能分析
- **智能告警**: 基于规则的告警系统，支持多渠道通知和自动化响应

### 🎯 核心特性
- **多租户架构**: 支持组织级别的隔离和管理
- **国际化支持**: 内置中英文双语支持
- **响应式设计**: 适配桌面端和移动端
- **暗色主题**: 支持明暗主题切换
- **实时数据**: 实时监控数据和状态更新

### 🔐 安全认证
- 用户注册和登录系统
- 基于角色的访问控制
- 受保护的路由和页面
- 安全的身份验证上下文

## 🛠 技术栈

### 前端框架
- **React 18.3.1** - 现代化的 React 框架
- **TypeScript 5.5.3** - 类型安全的 JavaScript
- **Vite 5.4.2** - 快速的构建工具

### UI 组件和样式
- **Tailwind CSS 3.4.1** - 实用优先的 CSS 框架
- **Headless UI** - 无样式的可访问 UI 组件
- **Lucide React** - 精美的图标库
- **Framer Motion** - 流畅的动画库

### 路由和状态管理
- **React Router DOM 6.22.2** - 客户端路由
- **React Context** - 状态管理

### 国际化
- **i18next 23.10.0** - 国际化框架
- **react-i18next 14.0.5** - React 国际化

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 前缀自动添加

## 🚀 快速开始

### 环境要求
- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run dev
```
项目将在 `http://localhost:5173` 启动

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

### 代码检查
```bash
npm run lint
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── auth/           # 认证相关组件
│   └── layout/         # 布局组件
├── contexts/           # React Context
├── i18n/              # 国际化文件
├── pages/             # 页面组件
│   ├── auth/          # 认证页面
│   ├── dashboard/     # 仪表板页面
│   ├── profile/       # 用户资料页面
│   └── tenant/        # 租户管理页面
├── App.tsx            # 主应用组件
├── main.tsx           # 应用入口
└── index.css          # 全局样式
```

## 🌐 页面路由

- `/` - 首页
- `/login` - 登录页面
- `/register` - 注册页面
- `/dashboard` - 仪表板（需要认证）
- `/profile` - 用户资料（需要认证）
- `/create-tenant` - 创建组织（需要认证）
- `/pricing` - 定价页面
- `/about` - 关于页面

## 🎨 设计特色

- **现代化 UI**: 采用最新的设计趋势和最佳实践
- **流畅动画**: 使用 Framer Motion 提供流畅的用户体验
- **响应式布局**: 完美适配各种屏幕尺寸
- **无障碍设计**: 遵循 WCAG 可访问性标准
- **主题切换**: 支持明暗主题无缝切换

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- 项目主页: [Moon Monitoring Platform](https://github.com/your-username/moon-monitoring-platform)
- 问题反馈: [Issues](https://github.com/your-username/moon-monitoring-platform/issues)
- 功能建议: [Feature Requests](https://github.com/your-username/moon-monitoring-platform/issues/new)

---

**Moon Monitoring Platform** - 让监控变得更简单、更智能 🚀
