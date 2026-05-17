// === 站点全局配置 ===
// 所有站点相关配置集中在此，其他组件通过 import 引用

export const SITE = {
  /** 站点标题 */
  title: "AI破壁猿",
  /** 站点描述（用于 SEO meta description） */
  description: "拆解 AI 技术，分享实战干货。一个技术人的 AI 破壁之旅。",
  /** 站点 URL（部署后替换为实际域名） */
  url: "https://aipobi.com",
  /** 作者名 */
  author: "AI破壁猿",
  /** 默认 OG 图片路径（相对于 public/） */
  ogImage: "/og-default.png",
  /** 站点语言 */
  locale: "zh-CN",
  /** 每页文章数 */
  postsPerPage: 10,
};

/** 导航链接 */
export const NAV_LINKS = [
  { label: "首页", href: "/" },
  { label: "博客", href: "/blog" },
  { label: "作品", href: "/projects" },
  { label: "关于", href: "/about" },
] as const;

/** 社交媒体链接 */
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/ai-pobi-yuan",
    icon: "github",
  },
  {
    label: "知乎",
    url: "https://www.zhihu.com/people/ai-pobi-yuan",
    icon: "zhihu",
  },
  {
    label: "小红书",
    url: "https://www.xiaohongshu.com/user/profile/",
    icon: "xhs",
  },
  {
    label: "公众号",
    url: "#",
    icon: "wechat",
  },
  {
    label: "RSS",
    url: "/rss.xml",
    icon: "rss",
  },
] as const;
