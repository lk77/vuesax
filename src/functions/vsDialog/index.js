import utils from '../../utils'
import vsDialog from './index.vue'

export default {
  name: 'dialog',
  vsfunction(props = {}) {
    const comp = {
      extends: vsDialog,
      data() {
        return {
          isPrompt: false,
          fActive: false,
          parameters: props.parameters || null,
          closing: false
        }
      },
      mounted() {
        this.fActive = true;
      },
    };

    utils.mount(comp, {
      element: document.body,
      app: this.app,
      props: {
        onAccept: props.accept || null,
        onCancel: props.cancel || null,
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
      }
    });
  }
}
