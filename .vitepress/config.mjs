import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roleplay.net",
  description: "Roleplay.net Homepage",
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Übersicht', link: '/pages/general' },
      { text: 'Minecraft', link: '/pages/minecraft' },
      { text: 'FiveM', link: '/pages/fivem' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/JRQdV5BPjY', ariaLabel: 'Discord' },
      { icon: 'instagram', link: 'https://www.instagram.com/roleplaynet.official', ariaLabel: 'Instagram' },
      { icon: 'reddit', link: 'https://www.reddit.com/r/RoleplayNet/', ariaLabel: 'Reddit' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Roleplay-net', ariaLabel: 'Youtube' },
      { icon: 'maildotru', link: 'mailto:info@roleplaynet.de', ariaLabel: 'E-Mail' },
    ],

    footer: {
      copyright: '© 2025 Roleplay.net'
    },

    outline: {
      level: [1, 6],
      label: "Inhalte"
    },
  }
})
