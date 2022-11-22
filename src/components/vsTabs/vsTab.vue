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
import _color from '../../utils/color.js'

export default {
  name:'VsTab',
  inheritAttrs: false,
  props:{
    label:{
      default: 'Label',
      type: String
    },
    icon:{
      default: '',
      type: String
    },
    tag:{
      default: '',
      type: String
    },
    iconPack:{
      default: 'material-icons',
      type: String
    },
    useShow: {
      default: false,
      type: Boolean
    },
    defaultColor:{
      default: undefined,
      type: String
    },
    color:{
      default: undefined,
      type: String
    },
    hoverText: {
      default: undefined,
      type: [Boolean, Number, String]
    },
    hoverLine: {
      default: undefined,
      type: [Boolean, Number, String]
    },
  },
  data:()=>({
    vertical:false,
    active:false,
    hover:false,
    id:null,
    invert:false,
    parent: null
  }),
  computed: {
    style() {
      let style = {};
      let defaultColor = this.defaultColor ?? this.parent.defaultColor;
      let color = this.color ?? this.parent.color;

      if(defaultColor) {
        style['color'] = _color.rColor(defaultColor, 1);
      }

      if(this.hover) {
        let hoverLine = this.hoverLine ?? this.parent.hoverLine;
        let hoverText = this.hoverText ?? this.parent.hoverText;

        if(hoverLine) {
          style['border-width'] = ' 0 0 2px 0';
          style['border-color'] =  _color.rColor(color, typeof hoverLine == 'boolean' ? 0.3 : hoverLine);
          style['border-style'] = 'solid';
        }

        if(hoverText) {
          style['color'] =  _color.rColor(color, typeof hoverText == 'boolean' ? 1 : hoverText);
        }
      }

      if(this.active) {
        style['color'] = _color.rColor(color, 1);
        style['border-width'] = ' 0 0 2px 0';
        style['border-color'] = _color.rColor(color, 1);
        style['border-style'] = 'solid';

      }

      return style;
    }
  },
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
