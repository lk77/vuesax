<template>
  <nav
    v-bind="$attrs"
    :class="[`vs-align-${align}`, $attrs.class]"
    class="vs-breadcrumb"
    aria-label="breadcrumb"
  >
    <ol class="vs-breadcrumb--ol">
      <slot />
      <li
        v-for="item in dataItems"
        v-show="!hasSlot"
        :key="item.title"
        :class="{'vs-active':item.active,'disabled-link':item.disabled}"
        :aria-current="item.active ? 'page' : null"
      >
        <a
          v-if="!item.active"
          :href="item.url ? item.url : '#'"
          :title="item.title"
          class="vs-breadcrumb--link"
          v-text="item.title"
        ></a>
        <template v-else>
          <span
            :class="textClass"
            :style="textStyle"
            class="vs-breadcrumb--text"
            v-text="item.title"
          ></span>
        </template>
        <span
          v-if="!item.active"
          :class="separator.length > 1 ? 'material-icons' : null"
          class="separator notranslate vs-breadcrum--separator"
          translate="no"
          aria-hidden="true"
          v-text="separator"
        ></span>
      </li>
    </ol>
  </nav>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VsBreadcrumb',
  props:{
    items:{
      type:Array
    },
    separator:{
      type:String,
      default:'/'
    },
    color:{
      type:String,
      default: 'primary'
    },
    align:{
      type:String,
      default:'left'
    }
  },
  data() {
    return {dataItems: []}
  },
  computed: {
    textClass() {
      const classes = {}
      if (_color.isColor(this.color)) {
        classes[`vs-breadcrumb-text-${this.color}`] = true
      }
      return classes
    },
    textStyle() {
      const style = {}
      if (!_color.isColor(this.color)) {
        style.color = _color.getColor(this.color)
      }
      return style
    },
    hasSlot () {
      return !!this.$slots.default
    }
  },
  created() {
    if(this.items) {
      this.dataItems = this.items.map(item => {
        if (typeof item.title === "function") {
          return {
            ...item,
            title: item.title(this.$route.params)
          }
        }

        return item
      })
    }
  }
}
</script>
