<template>
  <div
    :style="styleChip"
    :class="[
      `vs-chip-${color}`,
      {
        'closable': closable,
        'con-color': color,
        'bg-chip-transparent': transparent
      }
    ]"
    class="con-vs-chip"
  >
    <span class="text-chip vs-chip--text">
      <slot />
    </span>

    <button
      v-if="closable"
      class="btn-close vs-chip--close"
      type="button"
      @click="closeChip"
    >
      <vs-icon
        :icon-pack="iconPack"
        :icon="closeIcon"
      />
    </button>
  </div>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VsChip',
  props:{
    item:{
      type:Boolean,
    },
    modelValue:{},
    active:{
      type:Boolean,
      default:true,
    },
    text:{
      type:String,
      default:null,
    },
    closable:{
      type:[Boolean,String],
      default:false,
    },
    color:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    closeIcon:{
      type:String,
      default:'clear',
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click', 'vs-remove', 'update:modelValue'],
  computed:{
    styleChip () {
      const background = this.transparent ? _color.getColor(this.color, .15) : _color.getColor(this.color, 1)
      const color = this.transparent ? _color.getColor(this.color, 1) : this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'

      return {
        background: background,
        color: color
      }
    },
    eliminado() {
      if(this.item) {
        return true
      } else {
        if(this.vsClosable) {
          return this.modelValue
        } else {
          return true
        }
      }
    }
  },
  methods:{
    closeChip () {
      this.$emit('update:modelValue', false)
      this.$emit('click')
    },
    remove(){
      this.$emit('vs-remove', false)
      this.$emit('update:modelValue', false)
    }
  }
}
</script>
