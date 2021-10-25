<template lang="html">
  <li
    v-bind="$attrs"
    v-show="visible"
    :data-text="text"
    class="vs-component">
    <button
      v-bind="attrs"
      ref="item"
      :disabled="disabled"
      :style="styles"
      :class="{
        'activex':$parent.parent.multiple?getValue.indexOf(modelValue) != -1:getValue == modelValue,
        'con-icon':$parent.parent.multiple,
        'disabledx':disabledx
      }"
      class="vs-select--item"
      type="button"
      name="button"
      @keydown.backspace.prevent="backspace"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="clickOption()">
      <vs-icon
        v-if="$parent.parent.multiple"
        class="icon-item vs-select--item-icon"
        icon="check_circle"></vs-icon>
      <span
        v-html="getText"></span>
    </button>
  </li>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VsSelectItem',
  inheritAttrs:false,
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    modelValue:{
      default:null,
    },
    text:{
      default:null,
    }
  },
  data:()=>({
    hoverx:false,
    visible:true,
    getText:null,
    modelValueInputx:''
  }),
  computed:{
    disabledx(){
      if(this.$parent.parent.multiple){
        if(this.isActive){
          return false
        } else {
          return this.$parent.parent.maxSelected == this.$parent.parent.modelValue.length
        }
      } else {
        return false
      }
    },
    isActive(){
      return this.$parent.parent.multiple?this.getValue.indexOf(this.modelValue) != -1:this.getValue == this.modelValue
    },
    attrs() {
      return {
        ...this.$attrs,
        onBlur: (event) => {
          if(event.relatedTarget?!event.relatedTarget.closest('.vs-select--options'):true) {
            this.$parent.parent.closeOptions()
          }
        },
        onClick: (event) => this.clickOption(event),
        onMouseover: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(true)
        },
        onMouseout: (event) => {
          this.$emit('mouseover',event)
          this.changeHover(false)
        }
      }
    },
    styles(){
      return {
        background: this.isActive?_color.getColor(this.$parent.parent.color,.1):null,
        color: this.isActive?_color.getColor(this.$parent.parent.color,1):null,
        fontWeight: this.isActive?'bold':null
      }
    },
    getValue(){
      return this.$parent.parent.modelValue
    }
  },
  watch:{
    '$parent.parent.active': function () {
      this.$nextTick(() => {
        if( this.$parent.parent.multiple?this.getValue.indexOf(this.modelValue) != -1:this.getValue == this.modelValue ) {
          this.$emit('update:isSelected', true)
          this.getText = this.text
          this.putValue()
        } else {
          this.$emit('update:isSelected', false)
          this.getText = this.text
          this.putValue()
        }
      })
    },
    modelValueInputx(){
      if(this.visible){
        let modelValueInputx = this.modelValueInputx.split(',')
        if(modelValueInputx[modelValueInputx.length-1] == ''){
          this.getText = this.text
          return
        }
        let modelValuex = modelValueInputx[modelValueInputx.length-1]
        var re = new RegExp(modelValuex,"i");
        if(this.text.toUpperCase().indexOf(modelValuex.toUpperCase()) == 0){
          modelValuex = this.MaysPrimera(modelValuex)
        }
        let text = this.text.replace(re,`<span class="searchx">${modelValuex}</span>`)
        this.getText = text
      } else {
        this.getText = this.text
      }
    }
  },
  created(){
    this.putValue()
    this.$nextTick(() => {
      if( this.$parent.parent.multiple?this.getValue.indexOf(this.modelValue) != -1:this.getValue == this.modelValue ) {
        this.$emit('update:isSelected', true)
        this.getText = this.text
        this.putValue()
      } else {
        this.$emit('update:isSelected', false)
        this.getText = this.text
        this.putValue()
      }
    })
  },
  updated(){
    this.putValue()
  },
  methods:{
    searchParent(_this, callback) {
      let parent = _this.$parent
      if (!parent.$el.className) return
      if (!Object.prototype.hasOwnProperty.call(parent, 'childrenItems')) {
        this.searchParent(parent, callback)
      } else {
        callback(parent)
      }
    },
    changeHover(booleanx){
      this.hoverx = booleanx
    },
    MaysPrimera(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace(){
      if(this.$parent.parent.autocomplete){
        let modelValueInput = this.$parent.parent.$refs.inputselect.modelValue
        this.$parent.parent.$refs.inputselect.modelValue = modelValueInput.substr(0,modelValueInput.length-1)
        this.$parent.parent.$refs.inputselect.focus()
      }
    },
    navigateOptions(orientation){
      let
        orientationObject = 'nextSibling',
        lengthx = 0

      function getNextLi(li,orientationObject){
        if(li && li.localName == 'li'){
          let lix = li[orientationObject]
          if(li.style){
            if(li.style.display == 'none'){
              return getNextLi(lix,orientationObject)
            } else {
              return li
            }
          } else {
            return li
          }
        } else {
          return false
        }
      }

      var children = this.$parent.parent.childrenItems

      children.forEach((item)=>{
        if(item.childrenItems.length > 0) {
          children = [...children,...item.childrenItems]
        }
      })

      children = children.filter((item) => {
        return item.childrenItems.length == 0 && item.$el.localName != 'span'
      })

      if(orientation == 'prev'){
        orientationObject = 'previousSibling'
        lengthx = children.length
      }
      let nextElement = getNextLi(this.$el[orientationObject],orientationObject)

      if(nextElement){
        nextElement.querySelector('.vs-select--item').focus()
      } else {
        if (lengthx === children.length) lengthx--
        getNextLi(children[lengthx == 0?1:lengthx].$el,orientationObject).querySelector('.vs-select--item').focus()
      }
    },
    focusValue(index){
      if(this.$parent.parent.multiple?this.$parent.parent.modelValue.indexOf(this.modelValue) != -1:this.modelValue == this.$parent.parent.modelValue){
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      } else if (index === 0) {
        if(!this.$parent.parent.autocomplete){
          setTimeout( () => {
            this.$refs.item.focus()
          }, 50);
        }
      }
    },
    putValue(){
      if(this.modelValue == this.$parent.parent.modelValue){
        this.$parent.parent.modelValuex = this.text
      }

    },
    clickOption(){
      if(this.disabledx){
        return
      }
      let text = this.text
      if(!this.$parent.parent.multiple){
        this.$parent.parent.active = false
        document.removeEventListener('click',this.$parent.parent.clickBlur)
        this.$parent.parent.modelValuex = text
        this.$parent.parent.$emit('update:modelValue',this.modelValue)
        this.$parent.parent.changeValue()
      } else if (this.$parent.parent.multiple) {
        this.$parent.parent.modelValuex = text
        this.$parent.parent.addMultiple(this.modelValue)
      }
      this.$parent.parent.childrenItems.map((item)=>{
        item.modelValueInputx = ''
      })
    },

    // methods colors
    isColor(){
      return _color.isColor(this.color)
    },
  }
}
</script>
