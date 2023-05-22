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

    let el = document.createElement('div');
    el.setAttribute('class', 'vs-notifications-container');

    const comp = {
      extends: vsNotifications,
      data() {
        return parameters;
      }
    };

    let mount = utils.mount(comp, {
      element: el,
      app: this.getCurrentInstance(),
      props: {
        onClick: parameters.click || null,
        onDestroy: () => {
          mount.el.remove();
        }
      }
    });

    utils.insertBody(mount.el);
  },
}
