import vsComponent from './vsList.vue'
import vsComponent2 from './vsListItem.vue'
import vsComponent3 from './vsListHeader.vue'

export default Vue => {
  Vue.component('VsList', vsComponent)
  Vue.component('VsListItem', vsComponent2)
  Vue.component('VsListHeader', vsComponent3)
}
