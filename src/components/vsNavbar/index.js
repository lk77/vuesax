import vsComponent from './vsNavbar.vue'
import vsComponent2 from './vsNavItem.vue'
import vsComponent3 from './vsNavGroup.vue'
import vsComponent4 from './vsNavbarTitle.vue'
import vsComponent5 from './vsNavbarItems.vue'

export default Vue => {
  Vue.component('VsNavbar', vsComponent)
  Vue.component('VsNavbarItem', vsComponent2)
  Vue.component('VsNavGroup', vsComponent3)
  Vue.component('VsNavbarTitle', vsComponent4)
  Vue.component('VsNavbarItems', vsComponent5)
}
