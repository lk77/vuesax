import {defineUserConfig} from 'vuepress'
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import {getDirname, path} from '@vuepress/utils'
import {webpackBundler} from '@vuepress/bundler-webpack'

import {defaultTheme} from './theme/node/index';

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/vuesax/next-docs/',
  head: [
    ['link', {rel: 'icon', href: `/vuesax/favicon-vuesax.png`}],
    //['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['script', {src: 'https://browser.sentry-cdn.com/7.3.0/bundle.min.js', integrity: 'sha384-SMm9LrmlAek2bjM6vZh0NHrmBfZuqEOnedawNH2iknxYwrBRgcHL0WSBsA/vvlSt', crossorigin: 'anonymous'}],
    ['script', {}, `
if(location.hostname == 'lk77.github.io') {
    Sentry.init({
      dsn: "https://1adc65e681bc4e0fa2b52ecfffb57d52@o1300626.ingest.sentry.io/6535424"
    });
 }`]
  ],
  docsDir: 'docs',
  host: 'localhost',
  port: 7070,
  title: 'Vue.js Framework Components - Vuesax',
  description: "We love what we do. Let us help you do what <b>You love.</b>",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {text: 'Home', link: '/'},
      {text: 'Documentation', link: '/development/'},
      // { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/articles/' },
      {text: 'Contributors', link: '/contributors/'},
      {
        text: 'Ecosystem',
        children: [
          {
            text: 'Social',
            children: [
              {text: 'GitHub', link: 'https://github.com/lk77/vuesax'},
              //{ text: 'Discord', link: 'https://discord.gg/6AZNXEa' },
              {text: 'Twitter', link: 'https://twitter.com/vuesax'},
              {text: 'Facebook', link: 'https://www.facebook.com/vuesax/'},
              {text: 'Behance', link: 'https://www.behance.net/ManuelRovira'},
              {text: 'Dribbble', link: 'https://dribbble.com/ManuelRovira'},
              {text: 'Codepen', link: 'https://codepen.io/lusaxweb/'},
              {text: 'Medium', link: 'https://medium.com/@luisdanielrovira8'}
            ]
          },
          {
            text: 'Help',
            children: [
              {text: 'Issues', link: 'https://github.com/lk77/vuesax/issues'},
              {text: 'Edit Page', link: 'https://github.com/lk77/vuesax'},
              {text: 'Latest Releases', link: 'https://github.com/lk77/vuesax/releases'},
            ]
          },
          {
            text: 'Contact',
            children: [
              {text: 'Lusaxweb', link: 'http://lusaxweb.net'},
              {text: 'Email', link: 'mailto:vuesax@gmail.com'},
              {text: 'Pull Request', link: 'https://github.com/lk77/vuesax/pulls'},
              {text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr'}
            ]
          }
        ]
      },
      //{ text: 'Vuesax 4', link: 'https://vuesax.com/', new: true },
    ],
    sidebar: [
      {
        text: 'Development',
        collapsable: false,
        children: [
          '/development/',
          '/development/contributing',
          '/development/whyVuesax',
        ]
      },
      {
        text: 'Layout',
        collapsable: false,
        children: [
          '/layout/',
        ]
      },
      {
        text: 'Theme',
        collapsable: false,
        children: [
          '/theme/',
          '/theme/icon'
        ]
      },
      {
        text: 'Components',
        collapsable: false,
        children: [
          '/components/',
          '/components/selects',
          '/components/notifications',
          '/components/switch',
          '/components/checkbox',
          '/components/radio',
          '/components/input',
          '/components/dialog',
          '/components/tabs',
          '/components/slider',
          '/components/number',
          '/components/tooltip',
          '/components/upload',
          '/components/loading',
          '/components/popup',
          '/components/avatar',
          '/components/breadcrumb',
          '/components/alert',
          '/components/chip',
          '/components/divider',
          '/components/progress',
          '/components/card',
          '/components/list',
          '/components/pagination',
          '/components/navbar',
          '/components/sideBar',
          '/components/dropDown',
          '/components/table',
          '/components/textarea',
          '/components/collapse',
          '/components/images'
          // '/components/timePicker',
          /*New Component*/
        ]
      },
    ],
    logo:'/vuesax-logo-vertical.png',
    footer:[
      {
        title:'Social',
        items:[
          {
            text:'GitHub',
            link:'https://github.com/lusaxweb/vuesax'
          },
          /*{
            text:'Discord',
            link:'https://discord.gg/6AZNXEa'
          },*/
          {
            text:'Twitter',
            link:'https://twitter.com/vuesax'
          },
          {
            text:'Facebook',
            link:'https://www.facebook.com/vuesax/'
          },
          {
            text:'Behance',
            link:'https://www.behance.net/ManuelRovira'
          },
          {
            text:'Dribbble',
            link:'https://dribbble.com/ManuelRovira'
          },
          {
            text:'Codepen',
            link:'https://codepen.io/lusaxweb/'
          },
        ]
      },
      {
        title:'Help',
        items:[
          {
            text:'Issues',
            link:'https://github.com/lusaxweb/vuesax/issues'
          },
          {
            text:'Edit Page',
            link:'https://github.com/lusaxweb/vuesax/tree/master/docs'
          },
          {
            text:'Latest Releases',
            link:'https://github.com/lusaxweb/vuesax/releases'
          },
          {
            text:'Stackoverflow',
            link:'https://stackoverflow.com/questions/tagged/vuesax'
          },
          {
            text:'FAQ',
            link:'https://github.com/lusaxweb/vuesax/wiki'
          },
        ]
      },
      {
        title:'More',
        items:[
          { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/' },
          {
            text:'Lusaxweb',
            link:'http://lusaxweb.net/'
          },
          {
            text:'Email',
            link:'mailto:vuesax@gmail.com'
          },
          {
            text:'Pull request',
            link:'https://github.com/lusaxweb/vuesax/pulls'
          },
          {
            text:'Codepen Template',
            link:'https://codepen.io/lusaxweb/pen/mxMKYr'
          },
        ]
      }
    ],
    repoLink: 'https://github.com/lk77/vuesax',
  }),
  bundler: webpackBundler(),
  markdown: {
    extendMarkdown: md => {
      md.set({html: true})
    }
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
})
