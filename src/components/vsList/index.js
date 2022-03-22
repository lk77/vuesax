import vsComponent from './vsList'
import vsComponent2 from './vsListItem'
import vsComponent3 from './vsListHeader'

export default Vue => {
  Vue.component('vsList', vsComponent)
  Vue.component('vsListItem', vsComponent2)
  Vue.component('vsListHeader', vsComponent3)
}
