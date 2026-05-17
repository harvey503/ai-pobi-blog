// === RSS Feed 生成端点 ===
// 使用 @astrojs/rss 生成 /rss.xml

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt || "",
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
