import vsComponent from './vsNavbar'
import vsComponent2 from './vsNavItem'
import vsComponent3 from './vsNavGroup'
import vsComponent4 from './vsNavbarTitle'
import vsComponent5 from './vsNavbarItems'

export default Vue => {
  Vue.component('vsNavbar', vsComponent)
  Vue.component('vsNavItem', vsComponent2)
  Vue.component('vsNavGroup', vsComponent3)
  Vue.component('vsNavbarTitle', vsComponent4)
  Vue.component('vsNavbarItems', vsComponent5)
}
