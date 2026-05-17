// === 内容查询函数 ===
// 封装 getCollection 调用，统一过滤草稿、排序等逻辑

import { getCollection, type CollectionEntry } from "astro:content";

// --- 博客文章查询 ---

/** 获取所有已发布的文章（按日期降序） */
export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 获取单篇文章 by slug */
export async function getPost(
  slug: string
): Promise<CollectionEntry<"blog"> | undefined> {
  const posts = await getCollection("blog");
  return posts.find((post) => post.slug === slug);
}

/** 按标签筛选已发布文章 */
export async function getPostsByTag(
  tag: string
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    if (data.draft) return false;
    return data.tags?.includes(tag) ?? false;
  });
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 获取所有标签及对应文章数 */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** 获取精选文章（已发布且 featured: true） */
export async function getFeaturedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft && data.featured;
  });
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 获取上一篇和下一篇文章 */
export async function getAdjacentPosts(
  slug: string
): Promise<{
  prev: CollectionEntry<"blog"> | undefined;
  next: CollectionEntry<"blog"> | undefined;
}> {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : undefined,
    next: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

// --- 作品查询 ---

/** 获取所有作品（按日期降序） */
export async function getProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");
  return projects.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}
