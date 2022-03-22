import utils from '../../utils'
import vsNotifications from './vsNotifications.vue'
import {getCurrentInstance} from 'vue';
export default {
  name: 'notify',
  vsfunction(parameters = {}) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left')
      }
    }

    const comp = {
      extends: vsNotifications,
      data() {
        return parameters;
      }
    };

    console.log(this.getCurrentInstance(), getCurrentInstance());
    utils.mount(comp, {
      element: document.body,
      app: this.getCurrentInstance(),
      props: {
        onClick: parameters.click || null,
      }
    });
  },
}
