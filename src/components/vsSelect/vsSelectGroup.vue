<template>
  <div class="vs-select-group">
    <h4 v-if="!filterx">
      {{ title }}
    </h4>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'VsSelectGroup',
  props:{
    title:{
      default: 'Group',
      type: String
    }
  },
  data: () => ({
    activeTitle: true,
    //childrenItems: [],
    parent: null,
  }),
  computed: {
    filterx() {
      return this.parent.filterx
    },
  },
  created() {
    this.searchParent(this, (parent) => {
      this.parent = parent;
    })
  },
  methods:{
    focusValue(index) {
      this.childrenItems[0].focusValue(index)
    },
    searchParent(_this, callback) {
      let parent = _this.$parent
      //if (!(parent.$el && parent.$el.className)) return
      if (!parent.childrenItems) {
        this.searchParent(parent, callback)
      } else {
        callback(parent)
      }
    }
  }
}
</script>
