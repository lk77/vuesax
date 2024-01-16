<template>
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
          v-for="(child,index) in childrenItems.filter(Boolean)"
          :ref="'li-' + index"
          :class="[{'activeChild':childActive == index}, {'hoverChild': childHover == index}, `vs-tabs-${child.color}`]"
          :style="child.style"
          class="vs-tabs--li"
          @mouseover="child.hover = true; childHover = index"
          @mouseout="child.hover = false; childHover = -1"
        >
          <button
            v-bind="allowedAttrs(child.debounce(child.getAttrs))"
            :style="styleAlignIcon(child.icon)"
            class="vs-tabs--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.debounce(child.getAttrs)"
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
import vsIcon from '../vsIcon/vsIcon.vue'

export default {
  name:'VsTabs',
  components:{vsIcon},
  props:{
    modelValue: {
      default: 0,
      type: [Number, String],
    },
    defaultColor:{
      default: null,
      type: String
    },
    color:{
      default: 'primary',
      type: String
    },
    hoverText: {
      default: true,
      type: [Boolean, Number, String]
    },
    hoverLine: {
      default: 0,
      type: [Boolean, Number, String]
    },
    tagColor:{
      default: 'primary',
      type: String
    },
    alignment:{
      default: 'left',
      type: String,
    },
    position:{
      default: 'top',
      type: String
    }
  },
  emits: ['update:modelValue'],
  data:()=>({
    //topx:'auto',
    //heightx:2,
    hover:false,
    childHover:0,
    childActive:0,
    colorActive: 'primary',
    //leftx:0,
    //widthx:0,
    these:false,
    refsLi: [],
    childrenItems: []
  }),
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
    }
  }
}
</script>
