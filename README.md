# BioArk 官网优化 - 前端面试项目

> 基于 Next.js 16 对 [BioArk Technologies](https://www.bioarktech.com/) 官网首页进行功能增强与后台管理实现。

这是一个用于前端技术评估的实战项目，完整实现了对 BioArk 官网首页的产品展示优化，并构建了一个可控制首页内容的后台管理系统。

## ✨ 核心特性

-   **🏠 首页智能化展示**：优化 Featured Products 布局，支持条件筛选与数量控制。
-   **⚙️ 可视化后台管理**：通过独立后台界面，动态控制产品、服务是否出现在首页对应栏目。
-   **🚫 逻辑化交互处理**：针对暂无首页栏目的“试剂”类目，其相关管理选项会被智能禁用并给出明确提示。
-   **🔄 数据实时同步**：在管理后台的更改可即时反映在首页，体验流畅。
-   **📱 响应式设计**：适配从桌面到移动设备的各种屏幕尺寸。

## 🛠 技术栈

-   **框架**: Next.js 16 (App Router)
-   **语言**: TypeScript
-   **样式**: Tailwind CSS 4
-   **UI 组件**: Shadcn/ui
-   **代码质量**: ESLint

## 🚀 快速开始

### 前置要求
确保你的开发环境已安装 [Node.js](https://nodejs.org/) (版本 18 或更高)。

### 安装与运行

1.  **克隆项目**
    ```bash
    git clone https://github.com/godnessboy/bioark-interview-frontend.git
    cd bioark-interview-frontend
    ```

2.  **安装依赖**
    ```bash
    npm install
    # 或使用 yarn / pnpm
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    开发服务器启动后，在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可访问应用。

### 其他脚本命令
-   `npm run build`：构建用于生产环境的优化版本。
-   `npm run start`：在本地运行生产构建后的应用（需先执行 `build`）。
-   `npm run lint`：运行代码检查。

## 📖 使用指南

### 作为访客浏览
1.  访问首页，查看优化后的 “Gene Editing Products” 和 “Services” 展示区块。
2.  点击 “View all products” 或通过顶部导航进入完整的产品/服务列表页。
3.  点击任意卡片可查看详情页。

### 作为管理员配置
1.  点击顶部导航栏的 **“Admin”** 进入管理后台。
2.  **管理产品**：进入 “Products” 列表，编辑任一产品，通过勾选 **“Show on homepage · Gene Editing products”** 来控制其是否出现在首页。
3.  **管理服务**：进入 “Services” 列表，编辑任一服务，通过勾选 **“Show on homepage · Services”** 来控制其是否出现在首页。
4.  **查看试剂**：进入 “Reagents” 列表，编辑任一试剂，可观察到 **“Show on homepage · Reagent section”** 选项为禁用状态，符合业务需求。

## 📁 项目架构

### 核心目录结构
```
app/                    # Next.js 应用路由目录
├── page.tsx           # 首页
├── admin/             # 管理后台相关页面
├── products/          # 产品相关页面
└── services/          # 服务相关页面
components/            # 可复用React组件
├── home/              # 首页专用组件
├── ui/                # Shadcn/ui 基础组件
└── site-header.tsx    # 网站导航
lib/                   # 工具函数与数据层
├── actions.ts         # Server Actions (数据更新)
├── store.ts           # 数据持久化逻辑
└── types.ts           # TypeScript 类型定义
data/                  # 本地数据存储 (运行时生成)
```

### 数据流与状态管理
-   **数据源**：项目使用本地 `data/store.json` 文件模拟数据存储。首次运行时将从 `lib/data.ts` 的默认数据生成。
-   **状态更新**：管理后台通过 Next.js **Server Actions** (`lib/actions.ts`) 更新数据，并触发页面重新验证，实现 UI 即时更新。
-   **生产环境说明**：`data/` 目录已被 `.gitignore` 忽略。在生产环境中，可无缝替换为真实数据库或 Vercel KV 等持久化服务。

## 📦 部署说明

本项目已配置为可轻松部署至主流云平台。

### 部署到 Vercel（推荐）
1.  将你的代码库推送至 GitHub。
2.  在 [Vercel](https://vercel.com) 官网点击 “New Project” 并导入你的仓库。
3.  Vercel 将自动检测为 Next.js 项目并应用最优配置。
4.  点击 “Deploy”，几分钟后即可获得线上预览链接。

> **请注意**：由于当前使用本地文件存储数据，在 Vercel 等无状态服务器环境中，数据变更在每次部署后会被重置。此为演示预期行为，生产环境需接入持久化数据库。

## ✅ 任务完成清单

| 任务 | 状态 | 关键实现 |
| :--- | :--- | :--- |
| 1. 首页 Featured Products 设计优化 | ✅ 已完成 | 响应式网格布局，使用 Shadcn Card 组件 |
| 2. 产品多时的优化展示 | ✅ 已完成 | 首页限制显示数量 (`FEATURED_PRODUCTS_LIMIT`)，提供“查看全部”入口 |
| 3. Product 首页展示控制 | ✅ 已完成 | Admin 后台产品编辑页提供 `showOnHomepageGeneEditing` 复选框 |
| 4. Service 首页展示控制 | ✅ 已完成 | Admin 后台服务编辑页提供 `showOnHomepageService` 复选框 |
| 5. Reagent 选项置灰处理 | ✅ 已完成 | Admin 后台试剂编辑页中，`showOnHomepageReagent` 复选框为 `disabled` 状态 |

## 🔗 项目链接

-   **GitHub 仓库**: [https://github.com/godnessboy/bioark-interview-frontend](https://github.com/godnessboy/bioark-interview-frontend)
-   **在线预览**: bioark-interview-frontend.vercel.app

---

**本地开发与测试**：按照 [快速开始](#-快速开始) 步骤启动项目后，可参照 [使用指南](#-使用指南) 进行完整的功能流程测试。

---

