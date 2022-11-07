const { path } = require('@vuepress/utils')
const components = require('./components');

module.exports = {
  base: '/vuesax/',
  head: [
    ['link', { rel: 'icon', href: `/vuesax/favicon-vuesax.png` }],
    //['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['script', { src: 'https://browser.sentry-cdn.com/7.3.0/bundle.min.js', integrity: 'sha384-SMm9LrmlAek2bjM6vZh0NHrmBfZuqEOnedawNH2iknxYwrBRgcHL0WSBsA/vvlSt', crossorigin: 'anonymous' }],
    ['script', {}, `
if(location.hostname == 'lk77.github.io') {
    Sentry.init({
      dsn: "https://1adc65e681bc4e0fa2b52ecfffb57d52@o1300626.ingest.sentry.io/6535424"
    });
 }
    `]
    // ['script',{},`(function(h,o,t,j,a,r){
    //         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //         h._hjSettings={hjid:816179,hjsv:6};
    //         a=o.getElementsByTagName('head')[0];
    //         r=o.createElement('script');r.async=1;
    //         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //         a.appendChild(r);
    //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`]
  ],
  //ga:'UA-122319353-1',
  docsDir: 'docs',
  host:'localhost',
  port: 7070,
  title: 'Vue.js Framework Components - Vuesax',
  description: 'We love what we do. Let us help you do what <b>You love.</b>',
  vueThemes: require('./theme/vueThemes'),
  themeConfig: require('./theme/themeConfig'),
  theme: path.resolve(__dirname, './theme'),
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: components
      },
    ],
    [
      '@vuepress/plugin-theme-data',
      {
        themeData: require('./theme/themeConfig'),
      },
    ],
  ],
  bundler: '@vuepress/bundler-webpack',
  /*bundlerConfig: {
    configureWebpack: () => { return {
      resolve: {
        fallback: {
          "os": false,
          "stream": false,
          "path": require.resolve('path-browserify'),
          "constants": false,
          "fs": false,
          "readline": false
        }
      },
      module: {
        exprContextCritical: false,
        rules: [
          {
            test: /\.vue$/,
            use: [
              {
                loader: "vue-loader",
                options: {
                  compilerOptions: {
                    directiveTransforms: {
                      "repeat-click": () => ({
                        props: [],
                      }),
                    },
                  },
                },
              },
            ],
          },
        ]
      },
    }}
  },*/
  markdown: {
    extendMarkdown: md => {
      md.set({html: true})
    }
  }
}
