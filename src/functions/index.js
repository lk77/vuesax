// Functions

import vsNotifications from './vsNotifications/index.js'
import vsLoading from './vsLoading/index.js'
import vsDialog from './vsDialog/index.js'
//theme
import vsTheme from '../utils/theme.js'


const vsFunctions = {
  vsNotifications,
  vsLoading,
  vsTheme,
  vsDialog
}

export default (vm, app) => {
  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(Object.prototype.hasOwnProperty.call(vsFunctions, 'subName')){
      vm.$vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      vm.$vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

  vm.$vs.loading.close = vsLoading.close
  vm.$vs.app = app;
}
