<template>
  <li
    class="vs-image"
    :class="$attrs.class"
    :style="$attrs.style"
  >
    <div class="con-vs-image">
      <div
        v-bind="attrs"
        :style="styleImage"
        class="vs-image--img"
      >
      </div>
    </div>
    <img
      :src="src"
      class="imag-blur"
      alt=""
    >
  </li>
</template>
<script>
import utils from '../../utils'
export default {
  name: 'VsImage',
  inheritAttrs: false,
  props:{
    src:{
      default: null,
      type: String
    }
  },
  computed:{
    attrs() {
      return {
        ...utils.allowedAttrs(this.$attrs)
      }
    },
    styleImage () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
