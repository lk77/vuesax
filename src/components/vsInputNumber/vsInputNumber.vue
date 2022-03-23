<template lang="html">
  <div
    :class="[
      `vs-input-number-size-${size}`,
      `vs-input-number-${color}`,
      {'isChangeValue':isChangeValue},
      $attrs.class
    ]"
    class="vs-input-number"
    :style="$attrs.style"
  >
    <button
      v-repeat-click="less"
      :disabled="$attrs.disabled"
      :class="{
        limit:parseInt(modelValue) <= parseInt(min)
      }"
      :style="{
        background:getColor
      }"
      class="btn-less vs-input-number--button-less"
      type="button"
    >
      <vs-icon
        :icon-pack="iconPack"
        :icon="iconDec"
      ></vs-icon>
    </button>
    <span v-if="label">{{ label }}</span>
    <input
      v-bind="attrs"
      ref="input"
      :style="styleInput"
      :value="modelValue"
      :disabled="isDisabled"
      :min="min"
      :max="max"
      type="number"
      class="vs-input-number--input"
    >
    <button
      v-repeat-click="plus"
      :disabled="$attrs.disabled"
      :class="{
        limit:parseInt(modelValue) >= parseInt(max) && max !== null
      }"
      :style="{
        background:getColor
      }"
      class="btn-plus vs-input-number--button-plus"
      type="button"
    >
      <vs-icon
        :icon-pack="iconPack"
        :icon="iconInc"
      ></vs-icon>
    </button>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import utils from "../../utils";

export default {
  name:'VsInputNumber',
  emits: ['blur', 'update:modelValue'],
  directives: {
    repeatClick: {
      beforeMount(el, binding/*, vnode*/) {
        let intervalx = null;
        let startT;
        const functionx = binding.value;
        const bucle = () => {
          if (new Date() - startT < 100) {
            functionx();
          }
          clearInterval(intervalx);
          intervalx = null;
        };
        const eventx = (e) => {
          if (e.button !== 0) return;
          startT = new Date();
          var escuchando = function() {
            if (bucle) {
              bucle.apply(this, arguments);
            }
            el.removeEventListener('mouseup', escuchando, false);
          };
          el.addEventListener('mouseleave', escuchando ,false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        }
        el.addEventListener('mousedown', eventx ,false);

      }
    }
  },
  inheritAttrs:false,
  props:{
    modelValue:{},
    color:{
      default:'primary',
      type:String
    },
    label: {
      default: null,
      type: String
    },
    max:{
      default:null,
      type:[Number,String]
    },
    min:{
      default:0,
      type:[Number,String]
    },
    size:{
      default:null,
      type:String
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    iconDec:{
      default:'remove',
      type:String
    },
    iconInc:{
      default:'add',
      type:String
    },
    step:{
      default:1,
      type:[Number,String]
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  data:()=>({
    isChangeValue:false
  }),
  computed:{
    styleInput() {
      return {
        width:`${this.getLength}px`
      }
    },
    getLength(){
      if(this.modelValue){
        return this.modelValue.toString().length * 9.1
      } else {
        return 0
      }
    },
    getColor(){
      return _color.getColor(this.color,1)
    },
    attrs(){
      return {
        ...utils.allowedAttrs(this.$attrs),
        onBlur:(evt)=>{
          if(parseFloat(this.modelValue) > parseFloat(this.max)) {
            this.$emit('update:modelValue',this.max)
          } else if (parseFloat(this.modelValue) < parseFloat(this.min)) {
            this.$emit('update:modelValue',this.min)
            this.$emit('blur',evt)
          }
        },
        onInput:(evt)=>{
          this.$emit('update:modelValue',evt.target.value)
        }
      }
    }
  },
  watch:{
    modelValue(){
      this.isChangeValue = true
      setTimeout(()=>{
        this.isChangeValue = false
      },200)
    }
  },
  methods:{
    plus(){
      let newValue
      if(this.modelValue === ''){
        newValue = 0
        this.$emit('update:modelValue',this.fixPrecision(newValue))
      } else  {
        if(this.max?parseFloat(this.modelValue)<parseFloat(this.max):true){
          newValue = parseFloat(this.modelValue) + parseFloat(this.step)
          this.$emit('update:modelValue',this.fixPrecision(newValue))
        }
      }
    },
    less(){
      let newValue
      if(this.modelValue === ''){
        newValue = 0
        this.$emit('update:modelValue',this.fixPrecision(newValue))
      } else  {
        if(this.min?parseFloat(this.modelValue)>parseFloat(this.min):true){
          newValue = parseFloat(this.modelValue) - parseFloat(this.step)
          this.$emit('update:modelValue',this.fixPrecision(newValue))
        }
      }
    },
    fixPrecision(n) {
      const precision = (this.step + '').split('.')[1];
      return n.toFixed(precision ? precision.length : 0);
    }
  }
}
</script>
