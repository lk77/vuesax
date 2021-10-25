<template lang="html">
  <li
    :class="{'divider':divider}"
    :style="{
      'color':hoverx?giveColor()+' !important':null,
      'background':hoverx?giveColor(.01)+' !important':null
    }"
    class="vs-component vs-dropdown--item"
    @click="closeParent"
    @mouseover="hoverx=true"
    @mouseout="hoverx=false">
    <router-link
      v-bind="$attrs"
      v-if="to"
      :to="to"
      :class="{'disabled':disabled}"
      class="vs-dropdown--item-link">
      {{ $attrs.disabled }}
      <slot/>
    </router-link>

    <a
      v-bind="$attrs"
      v-else
      :class="{'disabled':disabled}"
      class="vs-dropdown--item-link">
      <slot/>
    </a>
  </li>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name: "VsDropdownItem",
  inheritAttrs:false,
  props:{
    to:{},
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
      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
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
