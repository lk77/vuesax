import vsComponent from './vsDropDown.vue'
import vsComponent2 from './vsDropDownMenu.vue'
import vsComponent3 from './vsDropDownItem.vue'
import vsComponent4 from './vsDropDownGroup.vue'

export default Vue => {
  Vue.component('VsDropdown', vsComponent)
  Vue.component('VsDropdownMenu', vsComponent2)
  Vue.component('VsDropdownItem', vsComponent3)
  Vue.component('VsDropdownGroup', vsComponent4)
}
