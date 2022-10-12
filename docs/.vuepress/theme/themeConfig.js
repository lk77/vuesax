module.exports = {
    repoLink: 'https://github.com/lk77/vuesax',
    // Assumes GitHub. Can also be a full GitLab url.
    //repo: 'lk77/vuesax',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    //repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'lk77/vuesax',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuesax-logo-vertical.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/development/' },
      // { text: 'Blog', link: 'https://lusaxweb.github.io/vuesax-blog/articles/' },
      { text: 'Contributors', link: '/contributors/' },
      {
        text: 'Ecosystem',
        children: [
          {
            text: 'Social',
            children: [
              { text: 'GitHub', link: 'https://github.com/lk77/vuesax' },
              { text: 'Discord', link: 'https://discord.gg/6AZNXEa' },
              { text: 'Twitter', link: 'https://twitter.com/vuesax' },
              { text: 'Facebook', link: 'https://www.facebook.com/vuesax/' },
              { text: 'Behance', link: 'https://www.behance.net/ManuelRovira' },
              { text: 'Dribbble', link: 'https://dribbble.com/ManuelRovira' },
              { text: 'Codepen', link: 'https://codepen.io/lusaxweb/' },
              { text: 'Medium', link: 'https://medium.com/@luisdanielrovira8' }
            ]
          },
          {
            text: 'Help',
            children: [
              { text: 'Issues', link: 'https://github.com/lk77/vuesax/issues' },
              { text: 'Edit Page', link: 'https://github.com/lk77/vuesax' },
              { text: 'Latest Releases', link: 'https://github.com/lk77/vuesax/releases' },
            ]
          },
          {
            text: 'Contact',
            children: [
              { text: 'Lusaxweb', link: 'http://lusaxweb.net' },
              { text: 'Email', link: 'mailto:vuesax@gmail.com' },
              { text: 'Pull Request', link: 'https://github.com/lk77/vuesax/pulls' },
              { text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr' }
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
    ]
  }
