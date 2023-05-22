import { defineClientConfig } from '@vuepress/client'

/*import { defineClientAppSetup } from '@vuepress/client';
import { setupDarkMode, setupSidebarItems } from '@vuepress/theme-default/lib/client/composables';*/

/*import Vuesax from '../../src'
import Vuecode from './vc/dist/vuecode.common.js'
import './vc/dist/vuecode.css'
import demo from './theme/components/demo.vue'
import Box from './theme/components/box.vue'

import Home from './theme/components/Home.vue';
import Layout from './theme/layouts/Layout.vue';
import Navbar from './theme/components/Navbar.vue';*/

//import theme from './theme'
import clientAppEnhance from './clientAppEnhance';

export default defineClientConfig({
  enhance({ app, router, siteData }){
    clientAppEnhance(app, router, siteData)
  },
  setup(){
    //setupDarkMode();
    //setupSidebarItems();
  },
  layouts: {},
  rootComponents: [],
})
