import vsComponent from './vsTable'
import vsComponent2 from './vsTh'
import vsComponent3 from './vsTr'
import vsComponent4 from './vsTd'

export default Vue => {
  Vue.component('VsTable', vsComponent)
  Vue.component('VsTh', vsComponent2)
  Vue.component('VsTr', vsComponent3)
  Vue.component('VsTd', vsComponent4)
}
