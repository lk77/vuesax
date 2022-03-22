import vsComponent from './vsDropDown'
import vsComponent2 from './vsDropDownMenu'
import vsComponent3 from './vsDropDownItem'
import vsComponent4 from './vsDropDownGroup'

export default Vue => {
  Vue.component('vsDropDown', vsComponent)
  Vue.component('vsDropDownMenu', vsComponent2)
  Vue.component('vsDropDownItem', vsComponent3)
  Vue.component('vsDropDownGroup', vsComponent4)
}
