<template>
  <div
    :class="[`vs-images-hover-${hover}`, {'alternating': alternating, 'notBorderRadius': notBorderRadius, 'notMargin': notMargin}, $attrs.class]"
    class="vs-component vs-images"
    :style="$attrs.style"
  >
    <ul class="vs-ul-images vs-images--ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VsImages",
  inheritAttrs:false,
  props:{
    hover:{
      default:'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius:{
      default: false,
      type: Boolean
    },
    notMargin:{
      default: false,
      type: Boolean
    }
  },
  data:()=>({

  }),
}
</script>
