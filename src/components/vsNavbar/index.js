import vsComponent from './vsNavbar'
import vsComponent2 from './vsNavItem'
import vsComponent3 from './vsNavGroup'
import vsComponent4 from './vsNavbarTitle'
import vsComponent5 from './vsNavbarItems'

export default Vue => {
  Vue.component('VsNavbar', vsComponent)
  Vue.component('VsNavbarItem', vsComponent2)
  Vue.component('VsNavGroup', vsComponent3)
  Vue.component('VsNavbarTitle', vsComponent4)
  Vue.component('VsNavbarItems', vsComponent5)
}
