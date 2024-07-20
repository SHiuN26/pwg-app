
# React + Vite

This is a front-end project developed using React and Vite, combined with TailwindCSS to enhance development efficiency and user experience. This project utilizes modern development tools and frameworks, aiming to provide an efficient, responsive user interface.

## Feature Introduction

- **Dynamic Routing Management**: Implements SPA (Single Page Application) dynamic routing management using `react-router-dom`.
- **State Management**: Achieves cross-component state management through React Context and Hooks.
- **Form Validation**: Offers a set of form validation mechanisms, supporting rules such as required fields, minimum length, and pattern matching.
- **Custom Hooks**: Encapsulates several custom Hooks, such as `useLoading` for managing loading states.
- **RESTful API Interaction**: Interacts with backend APIs through an `axios` instance, automatically adding JWT Tokens in request interceptors.
- **Responsive Design**: Implements responsive layouts using TailwindCSS, adapting to various screen sizes.
- **Mock Data**: Integrates `axios-mock-adapter` for simulating backend APIs during development.

## Getting Started

### Prerequisites

Please ensure your Node.js version is 20.15.0 or higher. It is recommended to use Node.js 20.15.1 to ensure all features work correctly.

\`\`\`bash
node --version
yarn --version
\`\`\`

## Installation

1. Clone the project to your local machine:
   \`\`\`bash
   git clone https://github.com/SHiuN26/pwg-app.git
   \`\`\`
2. Enter the project directory:
   \`\`\`bash
   cd pwg-app
   \`\`\`
3. Install project dependencies:
   \`\`\`bash
   yarn install
   \`\`\`

## Running the Project

After installing all dependencies, you can start the development server by running the following command:
   \`\`\`bash
   yarn dev
   \`\`\`

## Build for Production

To build the project for production, run:
   \`\`\`bash
   yarn build
   \`\`\`

## Preview Production Build

To preview the production build, run:
   \`\`\`bash
   yarn preview
   \`\`\`

---

# React + Vite 專案

這是一個使用 React 和 Vite 開發的前端專案，結合了 TailwindCSS 來提升開發效率和用戶體驗。此專案利用現代開發工具和框架，旨在提供高效且響應迅速的用戶介面。

## 功能介紹

- **動態路由管理**：利用 `react-router-dom` 實現 SPA（單頁應用）的動態路由管理。
- **狀態管理**：透過 React Context 和 Hooks 實現跨組件的狀態管理。
- **表單驗證**：提供了一套表單驗證機制，支持必填、最小長度和模式匹配等規則。
- **自定義 Hooks**：封裝了多個自定義 Hooks，如用於管理加載狀態的 `useLoading`。
- **RESTful API 交互**：通過 `axios` 實例與後端 API 進行交互，並在請求攔截器中自動添加 JWT Token。
- **響應式設計**：使用 TailwindCSS 實現響應式布局，適配多種屏幕尺寸。
- **模擬數據**：集成了 `axios-mock-adapter` 用於開發階段模擬後端 API。

## 開始使用

### 前提條件

請確保你的 Node.js 版本為 20.15.0 或以上。推薦使用 Node.js 20.15.1 以確保所有功能正常工作。

\`\`\`bash
node --version
yarn --version
\`\`\`

## 安裝

1. 將專案克隆到本地機器：
   \`\`\`bash
   git clone https://github.com/SHiuN26/pwg-app.git
   \`\`\`
2. 進入專案目錄：
   \`\`\`bash
   cd pwg-app
   \`\`\`
3. 安裝專案依賴：
   \`\`\`bash
   yarn install
   \`\`\`

## 運行專案

在安裝完所有依賴後，你可以通過運行以下命令啟動開發服務器：
   \`\`\`bash
   yarn dev
   \`\`\`

## 構建生產環境

要為生產環境構建專案，運行：
   \`\`\`bash
   yarn build
   \`\`\`

## 預覽生產環境構建

要預覽生產環境構建，運行：
   \`\`\`bash
   yarn preview
   \`\`\`

---
