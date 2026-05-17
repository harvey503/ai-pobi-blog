// === 工具函数 ===

/**
 * 格式化日期为中文格式
 * 例: 2026年5月15日
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

/**
 * 计算文章预计阅读时长（分钟）
 * 按中文平均阅读速度 300 字/分钟计算
 */
export function calculateReadingTime(content: string): number {
  const cleanText = content.replace(/[#*`\[\]()>|~\-_]/g, "").trim();
  const charCount = cleanText.length;
  return Math.max(1, Math.ceil(charCount / 300));
}

/**
 * 从正文截取摘要
 */
export function truncateExcerpt(
  content: string,
  maxLength: number = 120
): string {
  const cleanText = content.replace(/[#*`\[\]()>|~\-_]/g, "").trim();
  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.slice(0, maxLength).trimEnd() + "…";
}

/**
 * 获取站点运行天数（从指定日期起）
 */
export function getSiteRunningDays(startDate: Date = new Date("2026-05-01")): number {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
