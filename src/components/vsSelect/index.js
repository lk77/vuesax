import vsComponent from './vsSelect'
import vsComponent2 from './vsSelectItem'
import vsComponent3 from './vsSelectGroup'

export default Vue => {
  Vue.component('vsSelect', vsComponent)
  Vue.component('vsSelectItem', vsComponent2)
  Vue.component('vsSelectGroup', vsComponent3)
}
