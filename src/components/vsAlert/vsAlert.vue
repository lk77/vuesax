<template>
  <transition
    :class="$attrs.class"
    :style="$attrs.style"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-if="active"
      v-bind="attrs"
      ref="alert"
      :class="[`con-vs-alert-${color}`,{
        'con-icon':icon,
      }]"
      :style="styleAlert"
      class="con-vs-alert"
    >
      <div
        v-if="closable"
        class="con-x vs-alert--close"
        @click="$emit('update:active',false)"
      >
        <vs-icon
          :icon-pack="iconPack"
          :icon="closeIcon"
        ></vs-icon>
      </div>

      <h4
        v-if="title"
        :style="styleTitle"
        class="titlex vs-alert--title"
        v-text="title"
      ></h4>

      <div
        :class="{'con-icon': icon}"
        class="vs-alert"
      >
        <vs-icon
          v-if="icon"
          :icon-pack="iconPack"
          :icon="icon"
          class="icon-alert"
        ></vs-icon>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import utils from '../../utils'
import _color from '../../utils/color.js'

export default {
  name:'VsAlert',
  props:{
    active:{
      type:[Boolean,String],
      default:true
    },
    title:{
      type:String,
      default:null
    },
    closable:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'primary'
    },
    margin:{
      type:[String,Boolean],
      default:'10px'
    },
    icon:{
      type:String,
      default:null
    },
    closeIcon:{
      type:String,
      default:'close'
    },
    iconPack:{
      type:String,
      default:'material-icons'
    }
  },

  computed:{
    attrs() {
      return {
        ...utils.allowedAttrs(this.$attrs)
      }
    },
    styleAlert () {
      return {
        background: _color.getColor(this.color,.15),
        boxShadow: `0px 0px 25px 0px ${_color.getColor(this.color,.15)}`,
        color: _color.getColor(this.color,1)
      }
    },
    styleTitle () {
      return {
        boxShadow: `0px 6px 15px -7px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if(this.$refs.alert) {
        let h = this.$refs.alert.scrollHeight
        this.$refs.alert.style.height = h + 'px'
      }
    })
  },
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      if(this.$refs.alert) {
        let h = this.$refs.alert.scrollHeight
        this.$refs.alert.style.height = h + 'px'
      }

      el.style.opacity = 1
      done()
    },
    leave(el) {
      if(this.$refs.alert) {
        this.$refs.alert.style.height = 0 + 'px'
      }

      el.style.opacity = 0
    }
  }
}
</script>
