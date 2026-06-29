import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SkyMail Docs",
  description: "SkyMail 官方技术文档与用户指南",
  
  // 语言和精美主题配置
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png', // 你的 Logo 地址
    siteTitle: 'SkyMail 文档中心',

    // 1. 顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'API 参考', link: '/api/index', activeMatch: '/api/' },
      {
        text: '外部链接',
        items: [
          { text: 'SkyMail 官网', link: 'https://skymail.ink' },
          { text: '管理后台', link: 'https://admin.skymail.ink' }
        ]
      }
    ],

    // 2. 左侧侧边栏配置 (按目录分群组)
    sidebar: {
      // 当用户在 /guide/ 路径下时显示的侧边栏
      '/guide/': [
        {
          text: '基础入门',
          collapsed: false, // 是否允许折叠
          items: [
            { text: '什么是 SkyMail？', link: '/guide/getting-started' },
            { text: '快速安装/接入', link: '/guide/installation' },
            { text: '核心概念', link: '/guide/concepts' }
          ]
        },
        {
          text: '高级进阶',
          collapsed: false,
          items: [
            { text: '域别名与解析设置', link: '/guide/advanced-dns' },
            { text: '邮件群发控制', link: '/guide/mail-quota' }
          ]
        }
      ],
      // 当用户在 /api/ 路径下时显示的侧边栏
      '/api/': [
        {
          text: '开发者 API',
          items: [
            { text: '鉴权与认证', link: '/api/index' },
            { text: '发送邮件接口', link: '/api/send' },
            { text: '用户管理接口', link: '/api/users' }
          ]
        }
      ]
    },

    // 3. 社交链接 (右上角 GitHub 图标等)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eliauksan/vitepress' }
    ],

    // 4. 页脚配置
    footer: {
      message: '基于 VitePress 强力驱动',
      copyright: 'Copyright © 2026-至今 某某团队'
    },

    // 5. 开启本地搜索功能
    search: {
      provider: 'local'
    }
  }
})

