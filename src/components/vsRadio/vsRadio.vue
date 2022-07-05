<template lang="html">
  <label
    :class="[`vs-radio-${color}`, $attrs.class]"
    :style="$attrs.style"
    class="vs-component con-vs-radio"
  >
    <input
      v-bind="attrs"
      :checked="isChecked"
      :value="modelValue"
      :name="vsName || modelValue"
      type="radio"
      class="vs-radio--input"
    >
    <span
      class="vs-radio"
    >
      <span
        :style="styles"
        class="vs-radio--borde"
      />
      <span
        :style="styleCircle"
        class="vs-radio--circle"
      />
    </span>
    <span class="vs-radio--label">
      <slot />
    </span>
  </label>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name:'VsRadio',
  inheritAttrs:false,
  props:{
    modelValue:{},
    vsValue:{},
    vsName:{},
    color:{
      default:'primary',
      type:String
    }
  },
  emits: ['update:modelValue'],
  computed:{
    attrs(){
      return {
        ...utils.allowedAttrs(this.$attrs),
        class: '',
        style: '',
        onInput: () => this.$emit('update:modelValue', this.vsValue),
        //click: () => this.$emit('update:modelValue', this.vsValue)
      }
    },
    isChecked(){
      return this.vsValue == this.modelValue
    },
    styles(){
      return {
        'border': `2px solid ${this.isChecked?_color.getColor(this.color,1):'rgb(200, 200, 200)'}`
      }
    },
    styleCircle(){
      return {
        'background': _color.getColor(this.color,1),
        'box-shadow': `0px 3px 12px 0px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  methods:{
    giveColor(color,opacity){
      return _color.rColor(color,opacity)
    }
  }
}
</script>
