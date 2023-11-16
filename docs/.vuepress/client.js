import { defineClientConfig } from '@vuepress/client'

import Vuesax from '../../src'
import Vuecode from './vc/dist/vuecode.common.js'
import './vc/dist/vuecode.css'

import demo from './theme/client/components/demo.vue'
import Box from './theme/client/components/box.vue'
import Contributors from './theme/client/components/contributors.vue'

/*import vueThemes from './theme/client/vueThemes';
import themeConfig from './theme/client/themeConfig';*/


//import { useDarkMode,  useSidebarItems } from '@vuepress/theme-default/lib/client/composables';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vuesax)
    app.use(Vuecode,{
      theme:'flat'
    })
    app.component('Demo',demo)
    app.component('Box',Box)
    app.component('Contributors',Contributors)
    //app.config.globalProperties.$vueThemes = vueThemes;
    //app.config.globalProperties.$themeConfig = themeConfig;
  },
  setup() {},
  rootComponents: [],
})
