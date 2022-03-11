import { createVNode, render } from 'vue'

export default {
  randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
  },
  //https://github.com/pearofducks/mount-vue-component/blob/master/index.js
  mount(component, { props, children, element, app } = {}) {
    let el = element

    let vNode = createVNode(component, props, children)
    if (app && app._context) vNode.appContext = app._context
    if (el) render(vNode, el)
    else if (typeof document !== 'undefined' ) render(vNode, el = document.createElement('div'))

    const destroy = () => {
      if (el) render(null, el)
      el = null
      vNode = null
    }

    return { vNode, destroy, el }
  },
  insertBody(elx, parent){
    let bodyx = parent ? parent : document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  },
  removeBody(element, parent) {
    let bodyx = parent ? parent : document.body
    bodyx.removeChild(element);
  },
  changePosition(elx,content,conditional){
    let topx = 0
    let leftx = 0
    let widthx = 0
    let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if(elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout( ()=> {
        if(conditional){
          topx = (elx.getBoundingClientRect().top - content.clientHeight) + scrollTopx
        } else {
          topx = (elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight) + scrollTopx
        }
      }, 1);

    } else {
      topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
    }

    leftx = elx.getBoundingClientRect().left
    widthx = elx.offsetWidth

    let cords = {
      left: `${leftx}px`,
      top: `${topx}px`,
      width: `${widthx}px`
    }

    return cords
  },
}
