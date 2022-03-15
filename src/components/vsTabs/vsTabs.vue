<template lang="html">
  <div
    :class="[`vs-tabs-${color}`,`vs-tabs-position-${position}`]"
    class="con-vs-tabs vs-tabs">
    <div
      class="con-ul-tabs">
      <ul
        ref="ul"
        :class="[`ul-tabs-${alignment}`]"
        class="ul-tabs vs-tabs--ul">
        <li
          v-for="(child,index) in childrenItems"
          :ref="'li-' + index"
          :class="{'activeChild':childActive == index}"
          :style="childActive == index ? styleTab : {}"
          class="vs-tabs--li"
          @mouseover="hover = true"
          @mouseout="hover = false">
          <button
            v-bind="allowedAttrs(child.$attrs)"
            :style="styleAlignIcon(child.icon)"
            class="vs-tabs--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.$attrs">
            <vs-icon
              v-if="child.icon"
              :icon-pack="child.iconPack"
              :icon="child.icon"
              :color="color"
              class="vs-tabs--btn-icon"></vs-icon>
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
              :color="child.tagColor"></vs-icon>
          </button>
        </li>
      </ul>
      <span
        :style="stylex"
        class="line-vs-tabs"/>
    </div>
    <div class="con-slot-tabs">
      <slot/>
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
  data:()=>({
    topx:'auto',
    heightx:2,
    hover:false,
    childActive:0,
    leftx:0,
    widthx:0,
    these:false,
    refsLi: [],
    childrenItems: []
  }),
  computed:{
    styleTab(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${_color.getColor(this.color,1)} 0%, ${_color.getColor(this.color,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${_color.getColor(this.color,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }
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
      initialAnimation = !!initialAnimation;
      const elem = this.$refs['li-' +index];
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
      this.$emit('update:modelValue', this.childActive)

      if(this.position == 'left' || this.position == 'right'){
        this.childrenItems[index].vertical = true
      }

      this.changePositionLine(elem, initialAnimation)

    },
    changePositionLine(elem, initialAnimation){
      if(this.position == 'left' || this.position == 'right'){
        this.topx = elem.offsetTop
        this.heightx = elem.offsetHeight
        this.widthx = 2
      } else {
        const update = () => {
          this.leftx = elem.offsetLeft
          this.widthx = elem.offsetWidth
          this.topx = (elem.offsetHeight + (elem.getBoundingClientRect().top - this.$refs.ul.getBoundingClientRect().top))
        }
        if (!initialAnimation) {
          update()
        } else {
          setTimeout(update, 100)
        }
      }
    }
  }
}
</script>
