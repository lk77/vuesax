import vsComponent from './vsTable'
import vsComponent2 from './vsTh'
import vsComponent3 from './vsTr'
import vsComponent4 from './vsTd'

export default Vue => {
  Vue.component('vsTable', vsComponent)
  Vue.component('vsTh', vsComponent2)
  Vue.component('vsTr', vsComponent3)
  Vue.component('vsTd', vsComponent4)
}
