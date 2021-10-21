import { createApp } from 'vue';
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


    instance = createApp({
      extends: vsNotifications,
      data() {
        return parameters;
      }
    })
    instance.vm = instance.mount();
    parameters.click ? instance.vm.$on('click', parameters.click) : null
    utils.insertBody(instance.vm.$el);
  }
}
