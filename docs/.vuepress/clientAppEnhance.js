//import './main.styl'
import Vuesax from '../../src'
import Vuecode from './vc/dist/vuecode.common.js'
import './vc/dist/vuecode.css'
import demo from './theme/components/demo.vue'
import Box from './theme/components/box.vue'

import Home from './theme/components/Home.vue';
import Layout from './theme/layouts/Layout.vue';
import Navbar from './theme/components/Navbar.vue';
export default ({
  app, // the version of Vue being used in the VuePress app
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  app.use(Vuesax)
  app.use(Vuecode,{
    theme:'flat'
  })
  app.component('Demo',demo)
  app.component('Box',Box)
  app.component('Home', Home)
  app.component('Layout', Layout)
  app.component('Navbar', Navbar)
}


