<template lang="html">
  <!-- @contextmenu.capture.prevent -->
  <button
    :class="['vs-con-dropdown parent-dropdown', $attrs.class]"
    :style="$attrs.style"
    v-bind="attrs"
    ref="dropdown"
    type="button">
    <slot/>
  </button>
</template>

<script>

export default {
  name: "VsDropdown",
  //inheritAttrs: false,
  props: {
    vsTriggerClick: {
      default: false,
      type: Boolean
    },
    vsTriggerContextmenu: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'primary',
      type: String
    },
    vsCustomContent: {
      default: false,
      type: Boolean
    },
    vsDropRight: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    vsDropdownVisible: false,
    rightx: false,
    childrenItems: []
  }),
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        onContextmenu: (evt) => this.vsTriggerContextmenu ? this.clickToogleMenu(evt, true) : {},
        onClick: (evt) => {
          if (!this.vsTriggerContextmenu) {
            this.clickToogleMenu(evt)
          }

          if (this.$el === evt.target) {
            this.$emit('click')
          }
        },
        onMouseout: evt => this.toggleMenu('out', evt),
        onMouseover: evt => this.toggleMenu('over', evt),
      }
    },
  },
  watch: {
    vsDropdownVisible() {
      this.changePositionMenu()
      if (this.vsDropdownVisible) {
        this.$emit('focus')
        document.addEventListener('click', this.clickx)
      } else {
        this.$emit('blur')
      }
    }
  },
  mounted() {
    this.changeColor()
    document.addEventListener('click', this.clickx)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickx)
  },
  methods: {
    clickx(evt) {
      let [dropdownMenu] = this.childrenItems.filter(item => Object.prototype.hasOwnProperty.call(item, 'dropdownVisible'))
      dropdownMenu.vsCustomContent = this.vsCustomContent
      dropdownMenu.vsTriggerClick = this.vsTriggerClick
      dropdownMenu.vsDropRight = this.vsDropRight
      if ((this.vsTriggerClick || this.vsCustomContent) && this.vsDropdownVisible) {
        if ((evt.target !== this.$refs.dropdown &&
          evt.target.parentNode !== this.$refs.dropdown &&
          evt.target.parentNode.parentNode !== this.$refs.dropdown)) {
          if (!evt.target.closest('.vs-dropdown--menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
            document.removeEventListener('click', this.clickx)
          }
        }
      }
    },
    changeColor() {
      let child = this.childrenItems
      child.forEach(item => {
        // todo : fix vnode
        //if (item.$vnode.tag.indexOf('dropdown') != -1) {
        //item.color = this.color
        //}
      })
    },
    changePositionMenu() {
      let [dropdownMenu] = this.childrenItems.filter(item => Object.prototype.hasOwnProperty.call(item, 'dropdownVisible'))
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(() => {
          dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight - 7) + scrollTopx
          dropdownMenu.notHeight = true
        })
      } else {
        dropdownMenu.notHeight = false
        dropdownMenu.topx = (this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight) + scrollTopx - 5
      }

      this.$nextTick(() => {
        var w = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth


        if (this.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 25) {
          // this.rightx = true
        }

        if (this.$refs.dropdown.getBoundingClientRect().right < (dropdownMenu.$el.clientWidth + 25)) {
          dropdownMenu.leftx = dropdownMenu.$el.clientWidth + this.$refs.dropdown.getBoundingClientRect().left
          this.rightx = true
          return
        }
        dropdownMenu.leftx = this.$refs.dropdown.getBoundingClientRect().left + (this.vsDropRight ? dropdownMenu.$el.clientWidth : this.$refs.dropdown.clientWidth);
      })
    },
    clickToogleMenu(evt) {
      if (evt.type == 'contextmenu') {
        evt.preventDefault()
      }
      let [dropdownMenu] = this.childrenItems.filter(item => Object.prototype.hasOwnProperty.call(item, 'dropdownVisible'))
      if (this.vsTriggerClick || this.vsTriggerContextmenu) {
        if (this.vsDropdownVisible && !evt.target.closest('.vs-dropdown--menu')) {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
        } else {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
          window.addEventListener('click', () => {
            if (!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
            }
          })
        }
      }

      this.$emit('click')
    },
    toggleMenu(typex, evt) {
      let [dropdownMenu] = this.childrenItems.filter(item => Object.prototype.hasOwnProperty.call(item, 'dropdownVisible'))
      if (!this.vsTriggerClick && !this.vsTriggerContextmenu) {
        if (typex == 'over') {
          dropdownMenu.dropdownVisible = this.vsDropdownVisible = true
        } else {
          if (!evt.relatedTarget.classList.contains('vs-dropdown-menu')) {
            dropdownMenu.dropdownVisible = this.vsDropdownVisible = false
          }
        }
      }
    }
  }
}
</script>
