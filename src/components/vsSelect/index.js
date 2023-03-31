import vsComponent from './vsSelect.vue'
import vsComponent2 from './vsSelectItem.vue'
import vsComponent3 from './vsSelectGroup.vue'

export default Vue => {
  Vue.component('VsSelect', vsComponent)
  Vue.component('VsSelectItem', vsComponent2)
  Vue.component('VsSelectGroup', vsComponent3)
}
