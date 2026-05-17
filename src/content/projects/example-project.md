---
name: "AI 日报聚合器"
type: "个人项目"
date: 2026-03-20
tags:
  - Python
  - FastAPI
  - React
  - LLM
description: "每日自动抓取 AI 领域新闻，使用 LLM 生成摘要并推送到微信群。"
featured: true
links:
  demo: "https://github.com/ai-pobi-yuan"
  source: "https://github.com/ai-pobi-yuan"
---
# AI 日报聚合器

## 项目简介

每日自动抓取 AI 领域的热点新闻，通过 LLM 生成精简摘要，定时推送到微信群。

## 技术架构

- **数据抓取**: Python (requests + BeautifulSoup)
- **后端 API**: FastAPI
- **前端**: React + Tailwind CSS
- **LLM 摘要**: GPT-4 / Claude API
- **推送渠道**: 企业微信群机器人

## 功能特点

- 自动抓取 10+ 信息源
- LLM 深度摘要，去除冗余信息
- 每日定时推送（早 8:00 / 晚 20:00）
- 关键词高亮，一眼抓住重点
