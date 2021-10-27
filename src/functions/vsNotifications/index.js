import {createApp, h} from 'vue';
import utils from '../../utils'
import vsNotifications from './index.vue'

let instance;

export default {
  name: 'notify',
  vsfunction(parameters) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left')
      }
    }

    let div = document.createElement("div");
    let id = utils.randomId();
    div.setAttribute('id', id);
    utils.insertBody(div);

    const app = createApp({
      render() {
        return h({
          extends: vsNotifications,
          data() {
            return parameters;
          }
        });
      }
    });

    app.mount('#' + id);
    setTimeout(() => {
      app.unmount();
      utils.removeBody(div);
    }, parameters.time || 3000);
  }
}
