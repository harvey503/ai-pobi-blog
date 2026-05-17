// === Astro Content Collections 定义 ===
// 定义博客文章和作品的数据 schema，提供构建时类型校验

import { defineCollection, z } from "astro:content";

// --- 博客文章集合 ---
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    // 文章标题（必需）
    title: z.string(),
    // 发布日期（必需，ISO 8601 格式）
    date: z.date(),
    // 标签数组（可选，默认空数组）
    tags: z.array(z.string()).default([]),
    // 文章摘要（可选，≤150字，不填自动截取正文前120字）
    excerpt: z.string().max(150).optional(),
    // 封面图路径（可选，相对于 content/blog/ 或 content/blog/_assets/）
    cover: z.string().optional(),
    // 封面图 alt 文本（可选）
    coverAlt: z.string().optional(),
    // 草稿标记（可选，true 时不发布）
    draft: z.boolean().default(false),
    // 精选标记（可选，用于首页精选展示）
    featured: z.boolean().default(false),
  }),
});

// --- 作品集合 ---
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // 作品名称（必需）
    name: z.string(),
    // 作品类型（必需）
    type: z.enum(["个人项目", "商业项目", "开源贡献"]),
    // 完成日期（必需）
    date: z.date(),
    // 技术栈标签（可选，默认空数组）
    tags: z.array(z.string()).default([]),
    // 作品简介（可选，≤80字）
    description: z.string().max(80).optional(),
    // 封面截图路径（可选）
    image: z.string().optional(),
    // 外部链接（可选）
    links: z
      .object({
        demo: z.string().url().optional(),
        source: z.string().url().optional(),
      })
      .optional(),
    // 精选标记（可选）
    featured: z.boolean().default(false),
  }),
});

// 导出集合配置
export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
