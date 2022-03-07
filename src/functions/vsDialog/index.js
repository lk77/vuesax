import {createApp, h} from 'vue';
import utils from '../../utils'
import vsDialog from './index.vue'

export default {
  name: 'dialog',
  vsfunction(props) {

    let div = document.createElement("div");
    let id = utils.randomId();
    div.setAttribute('id', id);
    utils.insertBody(div);

    const app = createApp({
      render() {
        return h({
            extends: vsDialog,
            data() {
              return {
                isPrompt: false
              }
            },
            mounted() {
              this.fActive = true;
            },
            watch: {
                fActive(val) {
                  if(!val) {
                    app.unmount();
                    utils.removeBody(div);
                  }
                }
            }
          },
          {
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
          });
      }
    });

    app.mount('#' + id);
  }
}
