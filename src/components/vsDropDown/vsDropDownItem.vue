<template lang="html">
  <li
    :class="[{'divider':divider}, $attrs.class]"
    :style="[{
      'color':hoverx?giveColor()+' !important':null,
      'background':hoverx?giveColor(.01)+' !important':null,
    }, $attrs.style]"
    class="vs-component vs-dropdown--item"
    @click="closeParent"
    @mouseover="hoverx=true"
    @mouseout="hoverx=false"
  >
    <component :is="isVueRouterInstalled && to ? 'router-link' :  'a'"
      v-bind="attrs"
      :to="to"
      :class="{'disabled':disabled}"
      class="vs-dropdown--item-link"
    >
      <slot />
    </component>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name: "VsDropdownItem",
  inheritAttrs:false,
  props:{
    to:{
      default: null
    },
    disabled:{
      default:false,
      type:Boolean
    },
    divider:{
      default:false,
      type:Boolean
    },
  },
  data: () => ({
    hoverx: false,
    vsDropDownItem: true,
    color: null,
  }),
  computed: {
    isVueRouterInstalled() {
      return !!this.$vs.app.config.globalProperties.$router;
    },
    attrs() {
      return {
        ...utils.allowedAttrs(this.$attrs)
      }
    }
  },
  mounted() {
    this.changeColor()
    this.searchParent(this, (parent) => {
      parent.childrenItems.push(this);
    });
  },
  updated() {
    this.changeColor()
  },
  methods:{
    searchParent(_this, callback) {
      let parent = _this.$parent
      if (!parent.$el.className) return
      if (!parent.childrenItems) {
        this.searchParent(parent, callback)
      } else {
        callback(parent)
      }
    },
    closeParent() {
      if (this.disabled) return
      this.searchParent(this, (dropdownMenu) => {
        this.searchParent(dropdownMenu, (dropdown) => {
          dropdownMenu.dropdownVisible = dropdown.vsDropdownVisible = false
        });
      });
    },
    changeColor() {
      let _self = this
      this.searchParent(this, (parent) => {
        _self.color = parent.color
      });
    },
    giveColor(opacity = 1) {
      return _color.rColor(this.color,opacity)
    }
  }
}
</script>
