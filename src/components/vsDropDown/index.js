import vsComponent from './vsDropDown'
import vsComponent2 from './vsDropDownMenu'
import vsComponent3 from './vsDropDownItem'
import vsComponent4 from './vsDropDownGroup'

export default Vue => {
  Vue.component('VsDropdown', vsComponent)
  Vue.component('VsDropdownMenu', vsComponent2)
  Vue.component('VsDropdownItem', vsComponent3)
  Vue.component('VsDropdownGroup', vsComponent4)
}
