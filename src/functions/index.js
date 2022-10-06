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

export default ($vs, app) => {
  Object.values(vsFunctions).forEach((vsFunctions) => {
    if(Object.prototype.hasOwnProperty.call(vsFunctions, 'subName')){
      $vs[vsFunctions.name][vsFunctions.subName] = vsFunctions.vsfunction
    } else {
      $vs[vsFunctions.name] = vsFunctions.vsfunction
    }
  })

  $vs.loading.close = vsLoading.close
  $vs.getCurrentInstance = () => {
    return app;
  };

  return $vs;
}
