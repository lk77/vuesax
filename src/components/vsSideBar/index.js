import vsComponent from './vsSidebar'
import vsComponent2 from './vsSidebarItem'
import vsComponent3 from './vsSidebarGroup'

export default Vue => {
  Vue.component('VsSidebar', vsComponent)
  Vue.component('VsSidebarItem', vsComponent2)
  Vue.component('VsSidebarGroup', vsComponent3)
}
