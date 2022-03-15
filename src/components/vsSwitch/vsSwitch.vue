<template lang="html">
  <button
    :class="[
      `vs-switch-${color}`,
      {
        'vs-switch-active':isChecked || $attrs.checked
      },
      $attrs.class
    ]"
    :style="[style, $attrs.style]"
    class="vs-component vs-switch">
    <input
      v-bind="attrs"
      ref="inputCheckbox"
      :disabled="$attrs.disabled"
      :value="modelValue"
      class="input-switch vs-switch--input"
      type="checkbox">

    <span
      ref="on"
      :class="{'active-text':isChecked || $attrs.checked}"
      class="text-on text-switch vs-switch--text">
      <slot name="on"/>

      <vs-icon
        :icon-pack="iconPack"
        :icon="vsIconOn || vsIcon"
        class="icons-switch vs-switch--icon"
      ></vs-icon>
    </span>
    <span
      ref="off"
      :class="{'active-text':!isChecked && !$attrs.checked}"
      class="text-off text-switch vs-switch--text">
      <!-- gato con botas -->
      <slot name="off"/>
      <vs-icon
        :icon-pack="iconPack"
        :icon="vsIconOff || vsIcon"
        class="icons-switch vs-switch--icon"
      ></vs-icon>
    </span>
    <span class="vs-circle-switch vs-switch--circle"/>
  </button>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name:'VsSwitch',
  inheritAttrs:false,
  props:{
    modelValue:{},
    color:{
      default:'primary',
      type:String
    },
    vsIcon:{
      default:null,
      type:String
    },
    vsIconOn:{
      default:null,
      type:String
    },
    vsIconOff:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    vsValue:{}
  },
  data:()=>({
    widthx:42,
    checkboxClicked: false,
  }),
  computed:{
    style(){
      return {
        background: this.modelValue?_color.getColor(this.color,1):null,
        width: `${this.widthx}px`
      }
    },
    attrs(){
      return {
        ...utils.allowedAttrs(this.$attrs),
        onInput: (evt) => {
          evt.stopPropagation();
          this.toggleValue(evt)
        },
      }
    },
    isChecked(){
      return this.isArrayx() ? this.isArrayIncludes() : this.modelValue
    },
  },
  mounted(){
    this.$nextTick(()=>{
      let w = this.$refs.on.clientWidth>this.$refs.off.clientWidth?this.$refs.on.clientWidth:this.$refs.off.clientWidth
      this.widthx = w + 24
    })

  },
  methods:{
    toggleValue(evt){
      if(Array.isArray(this.modelValue)){
        this.setArray(evt)
      }
      else {
        this.$emit('update:modelValue', !this.modelValue)
        this.$emit('change',evt)
      }
    },
    setArray(evt){
      const modelValue = this.modelValue.slice(0) // Copy Array.
      if(this.isArrayIncludes()){
        modelValue.splice(modelValue.indexOf(this.vsValue),1) // delete modelValue
        this.$emit('update:modelValue', modelValue)
        this.$emit('change', evt)
      } else {
        modelValue.push(this.vsValue) // add modelValue new
        this.$emit('update:modelValue', modelValue)
        this.$emit('change', evt)
      }
    },
    isArrayIncludes(){
      let modelx = this.modelValue
      let modelValue = this.vsValue
      return modelx.includes(modelValue)
    },
    isArrayx(){
      return Array.isArray(this.modelValue)
    }
  },
}
</script>
