import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adote - Documentação",
  description: "Documentação do Portal de Adoção de animais.",
  themeConfig: {
    logo: "favicon.ico",
    outlineTitle: 'Nesta página',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Examples', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],

    editLink: {
      text: 'Editar esta página',
      pattern: 'https://github.com/allcancesms/doc/edit/main/docs/:path'
    },

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    returnToTopLabel: 'Retornar ao topo',

    search: {
      provider: 'local'
    }
  }
})
