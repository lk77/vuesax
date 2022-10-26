<template lang="html">
  <transition
    :class="$attrs.class"
    :style="$attrs.style"
    :name="invert?vertical?'fade-tab-vertical-invert':'fade-tab-invert':vertical?'fade-tab-vertical':'fade-tab'"
  >
    <div
      v-if="active || useShow"
      v-show="useShow ? active : true"
      class="con-tab vs-tabs--content"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name:'VsTab',
  inheritAttrs: false,
  props:{
    label:{
      default:'Label',
      type:String
    },
    icon:{
      default:'',
      type:String
    },
    tag:{
      default:'',
      type:String
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    useShow: {
      type:Boolean,
      default:false
    },
    color:{
      type: String
    },
  },
  data:()=>({
    vertical:false,
    active:false,
    id:null,
    invert:false,
    parent: null
  }),
  mounted() {
    this.searchParent(this, (parent) => {
      this.parent = parent;
      this.id = this.parent.childrenItems.length;
      this.parent.childrenItems.push(this);
    })
  },
  methods: {
    searchParent(_this, callback) {
      let parent = _this.$parent
      if (!parent.childrenItems) {
        this.searchParent(parent, callback)
      } else {
        callback(parent)
      }
    }
  }
}
</script>
