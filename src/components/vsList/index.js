import vsComponent from './vsList'
import vsComponent2 from './vsListItem'
import vsComponent3 from './vsListHeader'

export default Vue => {
  Vue.component('VsList', vsComponent)
  Vue.component('VsListItem', vsComponent2)
  Vue.component('VsListHeader', vsComponent3)
}
