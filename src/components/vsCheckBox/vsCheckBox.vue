<template lang="html">
  <div
    :class="[`vs-checkbox-${color}`, `vs-checkbox-${size}`, $attrs.class]"
    :style="$attrs.style"
    class="vs-component con-vs-checkbox"
  >
    <input
      v-bind="attrs"
      :checked="isChecked || $attrs.checked"
      :value="modelValue"
      type="checkbox"
      class="vs-checkbox--input"
      @change="toggleValue"
    >
    <span
      :style="style"
      class="checkbox_x vs-checkbox"
    >
      <span
        :style="style_check"
        class="vs-checkbox--check"
      >
        <vs-icon
          :icon="icon"
          :icon-pack="iconPack"
          class="vs-checkbox--icon"
        />
      </span>
    </span>
    <span class="con-slot-label">
      <slot />
    </span>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name:'VsCheckbox',
  //inheritAttrs: false,
  props:{
    color:{
      default:'primary',
      type:String,
    },
    modelValue:{},
    icon:{
      default:'check',
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    vsValue:{
      type:[Boolean,Array,String,Number,Object],
      default:false
    },
    size:{
      default: 'default',
      type: String
    }
  },
  computed:{
    attrs() {
      return {
        ...utils.allowedAttrs(this.$attrs)
      }
    },
    style_check() {
      return {
        background: this.isChecked ? _color.getColor(this.color, 1) : null,
      }
    },
    style() {
      return {
        border: `2px solid ${this.isChecked ? _color.getColor(this.color, 1) : 'rgb(180, 180, 180)'}`,
      }
    },
    isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.modelValue
    },
  },
  methods:{
    giveColor(color) {
      return _color.rColor(color)
    },
    toggleValue(evt) {
      if(this.isArrayx()) {
        this.setArray()
      } else if (typeof(this.vsValue) == 'string') {
        this.setValueString()
      }
      else {
        this.$emit('update:modelValue', !this.modelValue)
        this.$emit('change', evt)
      }
    },
    setArray() {
      // Copy Array
      const modelValue = this.modelValue.slice(0)
      if(this.isArrayIncludes()) {
        modelValue.splice(modelValue.indexOf(this.vsValue), 1)
        this.$emit('update:modelValue', modelValue)
        this.$emit('change', modelValue)
      } else {
        modelValue.push(this.vsValue)
        this.$emit('update:modelValue', modelValue)
        this.$emit('change', modelValue)
      }
    },
    setValueString() {
      if(this.modelValue == this.vsValue) {
        this.$emit('update:modelValue', null)
        this.$emit('change', null)
      } else {
        this.$emit('update:modelValue', this.vsValue)
        this.$emit('change', this.vsValue)
      }
    },
    isArrayIncludes() {
      let modelx = this.modelValue
      let modelValue = this.vsValue
      return modelx.includes(modelValue)
    },
    isArrayx() {
      return Array.isArray(this.modelValue)
    }
  }
}
</script>
