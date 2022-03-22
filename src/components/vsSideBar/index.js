import vsComponent from './vsSidebar'
import vsComponent2 from './vsSidebarItem'
import vsComponent3 from './vsSidebarGroup'

export default Vue => {
  Vue.component('vsSidebar', vsComponent)
  Vue.component('vsSidebarItem', vsComponent2)
  Vue.component('vsSidebarGroup', vsComponent3)
}
