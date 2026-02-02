# BioArk Interview · BioArk 官网任务实现

参考 [BioArk Technologies](https://www.bioarktech.com/) 官网，实现首页 Featured Products 优化、产品/服务/试剂的「是否出现在首页」管理，以及交付说明。

---

## 启动方法

### 环境要求

- Node.js 18+
- npm / pnpm / yarn

### 安装与运行

```bash
# 克隆仓库后进入项目目录
cd bioark-interview

# 安装依赖
npm install

# 开发环境运行
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000) 即可访问。

### 其他命令

```bash
# 生产构建
npm run build

# 生产环境本地运行（需先执行 npm run build）
npm run start
```

### 数据说明

- 首页与列表数据来自本地 **store**（`data/store.json`）。
- 首次访问时若 `data/store.json` 不存在，会自动从 `lib/data.ts` 的默认数据生成。
- `data/` 目录已在 `.gitignore` 中，store 仅本地有效；生产环境可替换为数据库或 Vercel KV。

---

## 架构思路

### 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4
- **组件**: Shadcn UI (Button, Card, Checkbox, Label)
- **语言**: TypeScript

### 目录与职责

```
app/
  page.tsx                 # 首页（Hero + Featured Products + Services）
  layout.tsx                # 根布局与 metadata
  products/page.tsx         # 产品列表
  services/page.tsx         # 服务列表
  admin/
    page.tsx                # Admin 入口（Products / Services / Reagents）
    products/               # 产品管理：列表 + 编辑（是否出现在首页 Gene Editing）
    services/               # 服务管理：列表 + 编辑（是否出现在首页 Services）
    reagents/               # 试剂管理：列表 + 编辑（「出现在首页」选项置灰）

components/
  site-header.tsx           # 顶部导航（Home / Products / Services / Admin）
  home/                     # 首页区块：Hero、Featured Products、Services
  product-card.tsx         # 产品卡片（首页与产品列表复用）
  ui/                       # Shadcn 组件

lib/
  types.ts                  # Product / Service / Reagent 类型及「首页展示」字段
  data.ts                   # 默认数据与常量（FEATURED_*_LIMIT）
  store.ts                  # 读写 data/store.json，供首页与 Admin 使用
  actions.ts                # Server Actions：更新 Product/Service/Reagent 并 revalidate
  utils.ts                  # 工具（如 cn）
```

### 数据模型与首页展示逻辑

- **Product**  
  - 字段：`id`, `name`, `description?`, `slug`, `showOnHomepageGeneEditing`  
  - 首页「Gene Editing products」区块只展示 `showOnHomeHomepageGeneEditing === true` 的产品；数量受 `FEATURED_PRODUCTS_LIMIT` 限制，超出部分通过「View all products」进入 `/products`。

- **Service**  
  - 字段：`id`, `name`, `description?`, `slug`, `showOnHomepageService`  
  - 首页「Services」区块只展示 `showOnHomepageService === true` 的服务；数量受 `FEATURED_SERVICES_LIMIT` 限制。

- **Reagent**  
  - 字段：`id`, `name`, `description?`, `slug`, `showOnHomepageReagent`  
  - 当前首页无 Reagent 专区，该字段预留；在 Admin 编辑页中「Show on homepage · Reagent section」**置灰不可选**，并配有说明文案。

### 任务对应关系

| 任务 | 实现方式 |
|------|----------|
| 1. Home 页 Featured Products 设计优化 | Hero + Gene Editing Products 区块 + Services 区块，使用 Shadcn Card/Button，响应式网格 |
| 2. 产品多时优化展示 | 首页仅展示前 N 条（`FEATURED_PRODUCTS_LIMIT`），提供「View all products」跳转全量列表 |
| 3. Product 额外选项：是否出现在首页 Gene Editing | Admin → Products → Edit，勾选「Show on homepage · Gene Editing products」 |
| 4. Service 额外选项：是否出现在首页 Services | Admin → Services → Edit，勾选「Show on homepage · Services」 |
| 5. Reagent 额外选项置灰 | Admin → Reagents → Edit，「Show on homepage · Reagent section」为 disabled，并说明暂无首页 Reagent 栏 |

### 持久化与更新流程

- **读**：首页与列表页在服务端调用 `lib/store.ts` 的 `getProductsForHomepageGeneEditing()`、`getServicesForHomepage()`、`getProducts()`、`getServices()`、`getReagents()`，数据来自 `data/store.json`（缺失时用 `lib/data.ts` 默认值并写入文件）。
- **写**：Admin 编辑页通过表单提交触发 `lib/actions.ts` 中的 Server Action（`updateProductAction` / `updateServiceAction`），更新 store 后执行 `revalidatePath("/")` 等，首页与列表即时反映变更。

---

## 交付要求与接下来怎么做

### 当前进度（功能与文档）

| 项目 | 状态 |
|------|------|
| 1. Home 页 Featured Products 设计优化 | ✅ 已完成 |
| 2. 产品多时优化展示（首屏数量 + View all） | ✅ 已完成 |
| 3. Product 额外选项：是否出现在首页 Gene Editing | ✅ 已完成（Admin → Products → Edit） |
| 4. Service 额外选项：是否出现在首页 Services | ✅ 已完成（Admin → Services → Edit） |
| 5. Reagent 额外选项置灰 | ✅ 已完成（Admin → Reagents → Edit） |
| README（启动方法 + 架构思路） | ✅ 已完成 |
| 产品/服务图片与 Learn more 详情页 | ✅ 已完成 |

### 接下来你需要做的（交付前步骤）

1. **GitHub 代码仓库链接**
   - 在 [GitHub](https://github.com/new) 新建仓库（如 `bioark-interview`）。
   - 本地在项目根目录执行：
     ```bash
     git init
     git add .
     git commit -m "BioArk interview: homepage, admin, store, images"
     git branch -M main
     git remote add origin https://github.com/你的用户名/bioark-interview.git
     git push -u origin main
     ```
   - 将本 README 中下方「仓库链接」处替换为你的实际链接，或在提交材料里直接写明仓库地址。

2. **README**
   - 已写明启动方法和架构思路，无需再改；若仓库名/路径与示例不同，可把 README 里的示例链接改成你的仓库地址。

3. **预览网址（可选，你标注为「无需」）**
   - 若之后需要预览：登录 [Vercel](https://vercel.com)，Import 你的 GitHub 仓库，一键部署即可得到 `https://xxx.vercel.app`。
   - 注意：当前数据存于本地文件 `data/store.json`，Vercel 上为无状态或每次部署重置；若要线上持久化，需后续改为数据库或 Vercel KV。

**仓库链接（请替换为你的实际地址）：**  
`https://github.com/你的用户名/bioark-interview`

---

## 本地快速自测

1. `npm run dev` → 打开 http://localhost:3000  
2. 首页查看「Gene Editing products」「Services」区块。  
3. 点击 **Admin** → **Products** → 任选 **Edit**，勾选/取消「Show on homepage · Gene Editing products」→ **Save**，回首页确认区块变化。  
4. **Admin** → **Services** 同理。  
5. **Admin** → **Reagents** → **Edit**，确认「Show on homepage · Reagent section」为灰色且不可选。
