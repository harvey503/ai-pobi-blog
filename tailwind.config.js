/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  // 使用 class 策略实现深色模式（由 ThemeToggle 组件控制）
  darkMode: "class",
  theme: {
    extend: {
      // 品牌色系 — 科技感蓝红对比
      colors: {
        brand: {
          50: "#E8F4FF",
          100: "#B3DFFF",
          200: "#80CAFF",
          300: "#4DB4FF",
          400: "#1A9FFF",
          500: "#0070F3", // 品牌蓝（主色）
          600: "#0059C4",
          700: "#004396",
          800: "#002D68",
          900: "#00173A",
        },
        accent: {
          500: "#FF0080", // 赛博朋克红（强调色）
          700: "#CC0066",
        },
        // 深色模式色板
        dark: {
          bg: "#0A0A0F",
          card: "#13131A",
          border: "#1E1E2A",
          text: "#E4E4ED",
          muted: "#8B8BA3",
        },
        // 浅色模式色板
        light: {
          bg: "#FFFFFF",
          card: "#F8F9FA",
          border: "#E2E5EA",
          text: "#1A1A2E",
          muted: "#6B7280",
        },
      },
      // 字体家族
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          '"Source Code Pro"',
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      // 排版插件扩展
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            a: {
              color: "#0070F3",
              "&:hover": {
                color: "#0059C4",
              },
            },
            code: {
              fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    // @tailwindcss/typography 提供 prose 类用于文章正文排版
    require("@tailwindcss/typography"),
  ],
};
