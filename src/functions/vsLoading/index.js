import { createApp } from 'vue';
import vsLoading from './index.vue'

export default {
  name: 'loading',
  vsfunction(parameters) {
    let instance = createApp({
      extends: vsLoading,
      data() {
        if(parameters) {
          return {
            type: parameters.type || 'default',
            background: parameters.background,
            color: parameters.color,
            scale: parameters.scale,
            text: parameters.text,
            clickEffect: parameters.clickEffect
          }
        }

        return {};
      }
    });

    let containerx = document.body
    if (parameters) {
      if (parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container)
      }
    }
    //instance.vm = instance.mount();
    //console.log(instance.vm);
    //console.log(containerx, instance);
    //containerx.insertBefore(instance.vm.$el, containerx.firstChild)
  },
  close(elx) {
    let loadings

    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vs-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vs-loading
      loadings = Array.from(elx.children).filter(el => el.classList.contains('con-vs-loading'))
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vs-loading')
    }

    loadings
      .forEach((loading) => {
        loading.classList.add('beforeRemove')
        setTimeout(() => {
          loading.remove()
        }, 300)
      })
  }
}
