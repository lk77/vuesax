import utils from '../../utils'
import vsLoading from './vsLoading.vue'

export default {
  name: 'loading',
  vsfunction(parameters = {}) {
    const comp = {
      extends: vsLoading
    };

    let containerx = document.body
    if (parameters) {
      if (parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container)
      }
    }

    utils.mount(comp, {
      element: containerx,
      app: this.app,
      props: {
        type: parameters.type || 'default',
        background: parameters.background,
        color: parameters.color,
        scale: parameters.scale,
        text: parameters.text,
        clickEffect: parameters.clickEffect
      }
    });
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
