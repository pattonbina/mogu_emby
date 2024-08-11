import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蘑菇Emby_Wiki",
  description: "Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "🍄Wiki",
        items: [
          { text: "如何使用", link: "/如何使用" },
          { text: "求片", link: "/求片" },
        ],
      },
    ],

    /*     socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ], */
    search: {
      provider: "local",
    },
  },
});
