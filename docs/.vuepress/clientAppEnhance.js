import './main.styl'
import Vuesax from '../../src'
import Vuecode from './vc/dist/vuecode.common.js'
import './vc/dist/vuecode.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
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


}


