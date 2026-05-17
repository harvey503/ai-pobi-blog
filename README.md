# AI破壁猿 个人博客

> 拆解 AI 技术，分享实战干货。一个技术人的 AI 破壁之旅。

## 技术栈

- **框架**: [Astro](https://astro.build) v5+ — 零 JS 输出的内容型静态站生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com) v4+ — 原子化 CSS，科技感设计
- **内容**: Markdown + YAML front-matter — 通过 Astro Content Collections 强类型校验
- **代码高亮**: Shiki — 构建时着色，零运行时开销
- **搜索**: Pagefind — 静态站全文搜索
- **部署**: Nginx + GitHub Actions CI/CD

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式（热更新）
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
├── content/
│   ├── blog/          ← 博客文章（Markdown 文件）
│   └── projects/      ← 作品集（Markdown 文件）
├── public/            ← 静态资源（favicon、OG 图片等）
└── src/
    ├── components/    ← UI 组件（Header、Footer、PostCard 等）
    ├── content/
    │   └── config.ts  ← Content Collections schema（强类型校验）
    ├── layouts/       ← 布局组件（BaseLayout、PostLayout）
    ├── lib/           ← 工具函数（日期格式化、内容查询封装）
    ├── pages/         ← 页面文件（Astro 路由）
    ├── styles/        ← 全局样式（CSS 变量、Tailwind）
    └── config.ts      ← 站点全局配置
```

## 站点配置

所有集中配置在 `src/config.ts`：

- 站点名称、描述、URL
- 导航链接
- 社交媒体链接

## 写文章

在 `content/blog/` 创建 `.md` 文件：

```yaml
---
title: "文章标题"
date: 2026-05-17
tags:
  - AI
  - 教程
excerpt: "文章摘要（≤150字）"
cover: "./_assets/cover.png"
draft: false
featured: false
---

# 文章正文

Markdown 内容...
```

## 构建与部署

```bash
# 构建
npm run build

# 输出到 dist/ 目录
# 使用 Nginx 静态服务 dist/ 目录
```

## License

MIT
