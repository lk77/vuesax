import vsComponent from './vsSidebar.vue'
import vsComponent2 from './vsSidebarItem.vue'
import vsComponent3 from './vsSidebarGroup.vue'

export default Vue => {
  Vue.component('VsSidebar', vsComponent)
  Vue.component('VsSidebarItem', vsComponent2)
  Vue.component('VsSidebarGroup', vsComponent3)
}
