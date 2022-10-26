<template lang="html">
  <div
    :class="[`vs-tabs-position-${position}`, $attrs.class]"
    :style="$attrs.style"
    class="con-vs-tabs vs-tabs"
  >
    <div
      class="con-ul-tabs"
    >
      <ul
        ref="ul"
        :class="[`ul-tabs-${alignment}`]"
        class="ul-tabs vs-tabs--ul"
      >
        <li
          v-for="(child,index) in childrenItems"
          :ref="'li-' + index"
          :class="[{'activeChild':childActive == index}, `vs-tabs-${child.color}`]"
          :style="
          [
            childActive == index ? styleActiveTab : {},
            childActive != index && hoverActive == index ? styleHoverTab: {}
          ]"
          class="vs-tabs--li"
          @mouseover="hover = true;hoverActive = index"
          @mouseout="hover = false;hoverActive = -1"
        >
          <button
            v-bind="allowedAttrs(child.$attrs)"
            :style="styleAlignIcon(child.icon)"
            class="vs-tabs--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.$attrs"
          >
            <vs-icon
              v-if="child.icon"
              :icon-pack="child.iconPack"
              :icon="child.icon"
              :color="child.color || color"
              class="vs-tabs--btn-icon"
            ></vs-icon>
            <span v-if="child.label">{{ child.label }}</span>
          </button>

          <button
            v-if="child.tag"
            class="vs-tabs--btn-tag"
            @click="clickTag(child)"
          >
            <vs-icon
              :icon-pack="child.iconPack"
              :icon="child.tag"
              :color="child.tagColor"
            ></vs-icon>
          </button>
        </li>
      </ul>
      <!--<span
        :style="stylex"
        class="line-vs-tabs"
      />-->
    </div>
    <div class="con-slot-tabs">
      <slot />
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import vsIcon from '../vsIcon/vsIcon.vue'

export default {
  name:'VsTabs',
  components:{vsIcon},
  props:{
    modelValue: {
      default: 0,
      type: [Number, String],
    },
    color:{
      default:'primary',
      type: String
    },
    hoverLine: {
      default: false,
      type:Boolean
    },
    tagColor:{
      default:'primary',
      type: String
    },
    alignment:{
      default:'left',
      type:String,
    },
    position:{
      default:'top',
      type:String
    }
  },
  emits: ['update:modelValue'],
  data:()=>({
    //topx:'auto',
    //heightx:2,
    hover:false,
    hoverActive:0,
    childActive:0,
    colorActive: 'primary',
    //leftx:0,
    //widthx:0,
    these:false,
    refsLi: [],
    childrenItems: []
  }),
  computed:{
    styleHoverTab() {
      let color = this.color;

      if(this.childrenItems && this.childrenItems[this.hoverActive] && this.childrenItems[this.hoverActive].color !== undefined) {
        color = this.childrenItems[this.hoverActive].color;
      }

      if(this.hoverLine) {
        return {
          color: _color.rColor(color, 1),
          'border-width': ' 0 0 2px 0',
          'border-color': _color.rColor(color, 0.3),
          'border-style': 'solid'
        }
      }

      return {
        color: _color.rColor(color, 1),
      }
    },
    styleActiveTab(){
      let color = _color.rColor(this.color,1);

      if(this.childrenItems && this.childrenItems[this.childActive] && this.childrenItems[this.childActive].color !== undefined) {
        color = _color.rColor(this.childrenItems[this.childActive].color,1);
      }

      return {
          color: color,
          'border-width': ' 0 0 2px 0',
          'border-color': color,
          'border-style': 'solid'
        }
    },
    /*stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${_color.getColor(this.styleActiveTab.color,1)} 0%, ${_color.getColor(this.styleActiveTab.color,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${_color.getColor(this.styleActiveTab.color,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }*/
  },
  watch: {
    modelValue(index) {
      this.$nextTick(() => {
        const activeIndex = this.parseIndex(index)
        this.activeChild(activeIndex)
      })
    },
  },
  mounted(){
    this.$nextTick(() => {
      const activeIndex = this.parseIndex(this.modelValue)
      this.childActive = activeIndex
      this.$nextTick(() => {
        this.activeChild(activeIndex, true)
      })
    })
  },
  methods:{
    // restore old behaviour without class/style in $attrs
    allowedAttrs(attrs) {
      let result = {};
      Object.keys(attrs).forEach(attrName => {
        if(!['class', 'style'].includes(attrName)) {
          result[attrName] = attrs[attrName];
        }
      });
      return result;
    },
    clickTag(child) {
      this.$emit('click-tag', child)
    },
    styleAlignIcon(icon){
      return icon ? 'display:flex;align-items:center' : ''
    },
    parseIndex(index) {
      let activeIndex = this.childActive
      if (index < 0) {
        activeIndex = 0
      } else if (index >= this.childrenItems.length) {
        activeIndex = this.childrenItems.length - 1;
      } else if (this.childrenItems[index] && this.childrenItems[index].$attrs && typeof this.childrenItems[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild(index, initialAnimation){
      if(!this.childrenItems[index]) {
        index = 0;
      }

      initialAnimation = !!initialAnimation;
      let elem = this.$refs['li-' +index];
      if(Array.isArray(elem)) {
        elem = elem.shift();
      }
      if(this.childActive == index && !initialAnimation){
        this.these = true
        elem.classList.add('isActive')
        setTimeout(()=>{
          elem.classList.remove('isActive')
          this.these = false
        }, 200);
      }

      this.childrenItems.map((item,item_index)=>{
        if(item_index != index) {
          item.active = false
        }
      })

      if(this.childActive > index){
        this.childrenItems[index].invert = true
        this.childrenItems[this.childActive].invert = false
      } else {
        this.childrenItems[this.childActive].invert = true
        this.childrenItems[index].invert = false
      }

      this.childrenItems[index].active = true
      this.childActive = index
      this.colorActive = this.childrenItems[index].color || this.color;
      this.$emit('update:modelValue', this.childActive)

      if(this.position == 'left' || this.position == 'right'){
        this.childrenItems[index].vertical = true
      }

      //this.changePositionLine(elem, initialAnimation)
    },
    /*changePositionLine(elem, initialAnimation){
      if(!elem) {
        return;
      }

      if(this.position == 'left' || this.position == 'right'){
        this.topx = elem.offsetTop
        this.heightx = elem.offsetHeight
        this.widthx = 2
      } else {
        const update = () => {
          if(elem) {
            this.leftx = elem.offsetLeft
            this.widthx = elem.offsetWidth
            this.topx = (elem.offsetHeight + (elem.getBoundingClientRect().top - this.$refs.ul.getBoundingClientRect().top))
          }
        }
        if (!initialAnimation) {
          update()
        } else {
          setTimeout(update, 100)
        }
      }
    }*/
  }
}
</script>
