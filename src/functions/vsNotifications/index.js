import utils from '../../utils'
import vsNotifications from './vsNotifications.vue'

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

    utils.mount(comp, {
      element: document.body,
      app: this.app,
      props: {
        onClick: parameters.click || null,
      }
    });
  },
}
