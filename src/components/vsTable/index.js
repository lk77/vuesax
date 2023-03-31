import vsComponent from './vsTable.vue'
import vsComponent2 from './vsTh.vue'
import vsComponent3 from './vsTr.vue'
import vsComponent4 from './vsTd.vue'

export default Vue => {
  Vue.component('VsTable', vsComponent)
  Vue.component('VsTh', vsComponent2)
  Vue.component('VsTr', vsComponent3)
  Vue.component('VsTd', vsComponent4)
}
