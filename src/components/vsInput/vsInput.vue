<template>
  <div
    ref="coninput"
    :style="[styleLabel, $attrs.style]"
    :class="[`vs-input-${color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':success,
      'input-icon-validate-danger':danger,
      'input-icon-validate-warning':warning,
      'is-label-placeholder':labelPlaceholder
    }, $attrs.class]"
    class="vs-component vs-con-input-label vs-input"
  >
    <label
      v-if="labelPlaceholder?false:label"
      class="vs-input--label"
      for=""
      @click="focusInput"
    >{{ label }}</label>
    <div class="vs-con-input">
      <input
        v-bind="attrs"
        ref="vsinput"
        :style="style"
        :autofocus="autofocus"
        :class="[size,{
          'hasValue':modelValue !== '',
          'hasIcon':icon,
          'icon-after-input':iconAfter
        }]"
        :placeholder="null"
        :value="modelValue"
        :type="$attrs.type?$attrs.type:'text'"
        class="vs-inputx vs-input--input"
      >
      <transition name="placeholderx">
        <span
          v-if="isValue&&(labelPlaceholder||$attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
            labelPlaceholder&&(size),
            size,
            {
              'vs-placeholder-label': labelPlaceholder,
            }]"
          class="input-span-placeholder vs-input--placeholder"
          @click="focusInput"
        >
          {{ $attrs.placeholder || labelPlaceholder }}
        </span>
      </transition>

      <vs-icon
        v-if="icon"
        :class="{'icon-after':iconAfter, 'icon-no-border':iconNoBorder}"
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-inputx notranslate vs-input--icon"
        @click="focusInput(); $emit('icon-click');"
      >
      </vs-icon>

      <transition name="icon-validate">
        <span
          v-if="success || danger || warning"
          :class="{'icon-before':iconAfter}"
          class="input-icon-validate vs-input--icon-validate"
        >
          <vs-icon
            :class="{'icon-before':iconAfter}"
            :icon-pack="valIconPack"
            :icon="getIcon"
          ></vs-icon>
        </span>
      </transition>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation vs-input--text-validation"
      >
        <span class="span-text-validation span-text-validation-success vs-input--text-validation-span">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger vs-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning vs-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation vs-input--text-validation-span"
      >
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import utils from '../../utils'
export default {
  name:'VsInput',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  inheritAttrs: false,
  props:{
    modelValue:{
      default:'',
      type:[String,Number]
    },
    labelPlaceholder:{
      default:null,
      type:[String,Number]
    },
    label:{
      default:null,
      type:[String,Number]
    },
    autofocus:{
      default:false,
      type:[Boolean,String]
    },
    icon:{
      default:null,
      type:String
    },
    iconAfter:{
      default:false,
      type:[Boolean,String]
    },
    iconNoBorder:{
      default:false,
      type:Boolean
    },
    iconPack:{
      default:'material-icons',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    success:{
      default:false,
      type:Boolean
    },
    danger:{
      default:false,
      type:Boolean
    },
    warning:{
      default:false,
      type:Boolean
    },
    successText:{
      default: null,
      type:String
    },
    dangerText:{
      default: null,
      type:String
    },
    warningText:{
      default: null,
      type:String
    },
    descriptionText:{
      default: null,
      type:String
    },
    size:{
      default:'normal',
      type:String
    },
    valIconPack:{
      default:'material-icons',
      type:String
    },
    valIconSuccess:{
      default: null,
      type:String
    },
    valIconDanger:{
      default: null,
      type:String
    },
    valIconWarning:{
      default: null,
      type:String
    },
  },
  emits: ['focus', 'blur', 'update:modelValue'],
  data:()=>({
    isFocus:false
  }),
  computed:{
    style(){
      return {
        border: `1px solid ${this.isFocus?_color.getColor(this.color,1):'rgba(0, 0, 0,.2)'}`,
      }
    },
    styleLabel(){
      return {
        color: this.isFocus?_color.getColor(this.color,1):null,
      }
    },
    attrs(){
      return {
        ...utils.allowedAttrs(this.$attrs),
        onInput: (evt) => {
          this.$emit('update:modelValue',evt.target.value)
        },
        onFocus: (evt) => {
          this.$emit('focus',evt)
          this.changeFocus(true)
        },
        onBlur: (evt) => {
          this.$emit('blur',evt)
          this.changeFocus(false)
        }
      }
    },
    isValue(){
      return this.labelPlaceholder?true:!this.modelValue
    },
    getIcon(){
      return this.danger  ? this.valIconDanger
           : this.warning ? this.valIconWarning
           : this.success ? this.valIconSuccess
           : ''
    },
  },
  methods:{
    // animation
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h + 'px'
      done()
    },
    leave: function (el) {
      el.style.height = 0 + 'px'
    },
    focusInput(){
      this.$refs.vsinput.focus()
    }
  },
}
</script>
