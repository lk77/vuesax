import { createApp } from 'vue';
import utils from '../../utils'
import vsDialog from './index.vue'

let instance;

export default {
  name: 'dialog',
  vsfunction(props) {

    instance = createApp({
        extends: vsDialog,
        data() {
          return {
            isPrompt: false
          }
        }
      },
      {
        text: props.text,
        title: props.title || 'Dialog',
        color: props.color,
        type: props.type || 'alert',
        buttonAccept: props.buttonAccept || 'filled',
        buttonCancel: props.buttonCancel || 'flat',
        acceptText: props.acceptText || 'Accept',
        cancelText: props.cancelText || 'Cancel',
        closeIcon: props.closeIcon || 'close',
        iconPack: props.iconPack || 'material-icons',
        isValid: props.isValid || 'none'
      });

    instance.vm = instance.mount();

    props.accept ? instance.vm.$on('accept', props.accept) : null
    props.cancel ? instance.vm.$on('cancel', props.cancel) : null
    utils.insertBody(instance.vm.$el, props.parent);

    Vue.nextTick(() => {
      instance.$data.fActive = true
      instance.$data.parameters = props.parameters
    });
  }

}
