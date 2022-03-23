<template lang="html">
  <div
    :style="[style, $attrs.style]"
    :class="[`vs-textarea-${color}`, {'textarea-danger': counter ? (modelValue && modelValue.length > counter) : false, 'focusx': isFocus}, $attrs.class]"
    class="vs-component vs-con-textarea"
  >
    <h4 v-if="label">
      {{ label }}
    </h4>

    <textarea
      v-bind="attrs"
      :value="modelValue"
      class="vs-textarea"
    >
    </textarea>

    <div
      v-if="counter"
      class="count vs-textarea--count"
    >
      {{ modelValue ? modelValue.length : 0 }} / {{ counter }}
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name: "VsTextarea",
  emits: ['focus', 'blur', 'update:modelValue'],
  inheritAttrs:false,
  props:{
    modelValue:{},
    label:{
      default:null,
      type: String
    },
    color:{
      default:'primary',
      type:String
    },
    counter:{
      default: null,
      type: [Number, String]
    },
    counterDanger:{
      default: false,
      type: Boolean
    },
    height:{
      default:null,
      type: String
    },
    width:{
      default:null,
      type: String
    }
  },
  data:()=>({
    isFocus: false
  }),
  computed:{
    style() {
      let style = {}
      style.border = `1px solid ${this.isFocus?_color.getColor(this.color,1):'rgba(0, 0, 0,.08)'}`
      style.height = this.height
      style.width = this.width

      return style
    },
    attrs() {
      return {
        ...utils.allowedAttrs(this.$attrs),
        onInput:(evt) => {
          this.$emit('update:modelValue', evt.target.value)
        },
        onFocus:() => {
          this.focus()
        },
        onBlur:() => {
          this.blur()
        }
      }
    }
  },
  watch:{
    modelValue() {
      if(this.modelValue && this.modelValue.length > this.counter) {
        this.$emit('update:counterDanger', true)
      } else {
        this.$emit('update:counterDanger', false)
      }
    }
  },
  methods:{
    focus() {
      this.isFocus = true
      this.$emit('focus')
    },
    blur() {
      this.isFocus = false
      this.$emit('blur')
    }
  }
}

</script>
