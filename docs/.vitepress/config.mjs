import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notex Updates",
  description: "Official documented changelogs released realtime. Supports Notex java, Notex Bedrock and the Website builds.",
  base: '/updates/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main Website', link: 'https://notexmc.net' }
      { text: 'Discord', link: 'https://go.notexmc.net/discord' }
      { text: 'Requests', link: 'https://notexmc.net/request' }
    ],

    sidebar: [
      {
        text: 'Changelogs',
        items: [
          { text: 'Bedrock 1.0.0', link: '/bedrock-release-1-0-0' },
          { text: 'Website 2432a', link: '/website-2432a' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/notexmc/updates' }
    ]
  }
})
