<template>
  <div
    :class="[type]"
    class="vs-collapse"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VsCollapse',
  props:{
    accordion:{
      default:false,
      type: Boolean
    },
    type:{
      default:'default',
      type: String
    },
    openHover:{
      default:false,
      type: Boolean
    }
  },
  emits: ['change'],
  data: () => ({
    childrenItems: []
  }),
  methods:{
    emitChange() {
      this.$emit('change')
    },
    closeAllItems(el) {
      let children = this.childrenItems
      children.map((item) => {
        if(item.$el !== el) {
          item.maxHeight = '0px'
        }
      })
    }
  }
}
</script>
