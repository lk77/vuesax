import vsComponent from './vsSelect'
import vsComponent2 from './vsSelectItem'
import vsComponent3 from './vsSelectGroup'

export default Vue => {
  Vue.component('VsSelect', vsComponent)
  Vue.component('VsSelectItem', vsComponent2)
  Vue.component('VsSelectGroup', vsComponent3)
}
