<template>
  <transition name="vs-sidebar-animate">
    <div
      v-show="staticPosition || modelValue"
      ref="sidebarbackground"
      :class="$attrs.class"
      :style="$attrs.style"
      class="vs-content-sidebar"
    >
      <div
        v-if="!hiddenBackground"
        class="vs-sidebar--background"
      ></div>
      <div
        ref="sidebarContainer"
        :class="[
          `vs-sidebar-${color}`,
          {
            'vs-sidebar-parent': parent != 'body',
            'vs-sidebar-staticPosition': staticPosition,
            'vs-sidebar-position-right': positionRight,
            'vs-sidebar-reduce': reduce,
            'vs-sidebar-reduceNotRebound': reduceNotRebound,
            'vs-sidebar-reduceNotHoverExpand': reduceNotHoverExpand
          }
        ]"
        class="vs-sidebar"
      >
        <header
          v-if="$slots.header"
          class="vs-sidebar--header"
        >
          <slot name="header"></slot>
        </header>

        <div class="vs-sidebar--items">
          <slot></slot>
        </div>

        <vs-spacer v-if="spacer"></vs-spacer>

        <footer
          v-if="$slots.footer"
          class="vs-sidebar--footer"
        >
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'VsSidebar',
  props:{
    modelValue:{
      default: false
    },
    defaultIndex:{
      default: null,
      type: [String, Number]
    },
    color: {
      default:'primary',
      type: String
    },
    parent:{
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type:Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound:{
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default:false,
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    currentIndex: 0,
    childrenItems: []
  }),
  watch:{
    modelValue() {
      if(!this.clickNotClose) this.addEventClick()
    }
  },
  created () {
    this.currentIndex = this.defaultIndex
  },
  mounted () {
    this.insertBody()
  },
  methods:{
    getActive () {
      return this.currentIndex
    },
    setIndexActive (index) {
      this.currentIndex = index
    },
    addEventClick () {
      this.$nextTick(() => {
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        let element = parentx || window
        if(this.modelValue) {
          setTimeout(() => {
            element.addEventListener('click', this.closeSidebar)
          }, 300)

        }
      })
    },
    closeSidebar (evt) {
      let parent = evt.target.closest('.vs-sidebar')
      if (!parent) {
        this.$emit('update:modelValue', false)
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        let element = parentx || window
        element.removeEventListener('click', this.closeSidebar)
      }
    },
    insertBody () {
      if(this.parent) {
        let elx = this.$refs.sidebarbackground
        let parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent
        if(parentx) {
          parentx.insertBefore(elx, parentx.firstChild)
        }
      }

    },
  }
}
</script>
