<template>
  <!-- @contextmenu.capture.prevent -->
  <button
    v-bind="attrs"
    ref="dropdown"
    :class="['vs-con-dropdown parent-dropdown', $attrs.class]"
    :style="$attrs.style"
    type="button"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: "VsDropdown",
  provide: function() {
    return {
      vsInsert: this.vsInsert
    }
  },
  inheritAttrs: false,
  props: {
    vsTriggerClick: {
      default: false,
      type: [Boolean,String]
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
    },
    vsInsert: {
      default: 'body',
      type: String
    }
  },
  emits: ['click', 'focus', 'blur'],
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
      this.$nextTick(this.changePositionMenu);
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
    document.querySelector(this.vsInsert).addEventListener('scroll', this.scroll)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickx)
    document.querySelector(this.vsInsert).removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      if (this.vsDropdownVisible) {
        this.$nextTick(this.changePositionMenu);
      }
    },
    clickx(evt) {
      let dropdownMenu = this.childrenItems.find(item => item.dropdownVisible !== undefined)
      if(dropdownMenu) {
        dropdownMenu.vsCustomContent = this.vsCustomContent
        dropdownMenu.vsTriggerClick = this.vsTriggerClick
        dropdownMenu.vsDropRight = this.vsDropRight
        if ((this.vsTriggerClick || this.vsCustomContent) && this.vsDropdownVisible) {
          if ((evt.target !== this.$refs.dropdown &&
            evt.target.parentNode !== this.$refs.dropdown &&
            evt.target.parentNode.parentNode !== this.$refs.dropdown)) {
            if (!evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = false
              document.removeEventListener('click', this.clickx)
            }
          }
        }
      }
    },
    changeColor() {
      /*let child = this.childrenItems
      child.forEach(item => {
        // todo : fix vnode
        //if (item.$vnode.tag.indexOf('dropdown') != -1) {
        //item.color = this.color
        //}
      })*/
    },
    changePositionMenu() {
      let dropdown = this.$refs.dropdown;
      let container = document.querySelector(this.vsInsert);

      console.log(container);

      let dropdownTop = dropdown.getBoundingClientRect().top;
      let dropdownRight = dropdown.getBoundingClientRect().right;
      let dropdownLeft = dropdown.getBoundingClientRect().left;
      let dropdownMenu = this.childrenItems.find(item => item.dropdownVisible !== undefined)

      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if(container.tagName !== 'BODY') {
        scrollTopx = container.offsetTop - container.getBoundingClientRect().top;
      }

      if (dropdownTop + 300 >= window.innerHeight) {
        dropdownMenu.topx = (dropdownTop - dropdownMenu.$el.clientHeight - 7) + scrollTopx
        dropdownMenu.notHeight = true
      } else {
        dropdownMenu.notHeight = false
        dropdownMenu.topx = (dropdownTop + dropdown.clientHeight) + scrollTopx - 5
      }

      if (dropdownRight < (dropdownMenu.$el.clientWidth + 25)) {
        dropdownMenu.leftx = dropdownMenu.$el.clientWidth + dropdownLeft - container.getBoundingClientRect().left
        this.rightx = true
      } else {
        dropdownMenu.leftx = dropdownLeft + (this.vsDropRight ? dropdownMenu.$el.clientWidth : this.$refs.dropdown.clientWidth) - container.getBoundingClientRect().left;
        this.rightx = false
      }
    },
    clickToogleMenu(evt) {
      if (evt.type == 'contextmenu') {
        evt.preventDefault()
      }
      let dropdownMenu = this.childrenItems.find(item => item.dropdownVisible !== undefined)
      if (this.vsTriggerClick || this.vsTriggerContextmenu) {
        if (dropdownMenu.dropdownVisible && !evt.target.closest('.vs-dropdown--menu')) {
          dropdownMenu.dropdownVisible = false
        } else {
          dropdownMenu.dropdownVisible = true
          window.addEventListener('click', () => {
            if (!evt.target.closest('.vs-con-dropdown') && !evt.target.closest('.vs-dropdown--menu')) {
              dropdownMenu.dropdownVisible = false
            }
          })
        }
      }

      this.$emit('click')
    },
    toggleMenu(typex, evt) {
      let dropdownMenu = this.childrenItems.find(item => item.dropdownVisible !== undefined)
      if(typex === 'over') {
        if(!this.vsTriggerClick && !this.vsTriggerContextmenu) {
          dropdownMenu.dropdownVisible = true
        }
      } else {
        if((!this.vsTriggerClick || this.vsTriggerClick === 'mouseleave') && !this.vsTriggerContextmenu) {
          if (!evt.relatedTarget.classList.contains('vs-dropdown-menu')) {
            dropdownMenu.dropdownVisible = false
          }
        }
      }
    }
  }
}
</script>
