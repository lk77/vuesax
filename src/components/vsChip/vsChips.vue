<template lang="html">
  <div class="">
    <div
      :class="{'no-items':value.length == 0}"
      class="con-chips">
      <slot>
      </slot>

      <input
        :placeholder="modelValue.length > 0 ? null : placeholder"
        v-model="newChip"
        type="text"
        class="con-chips--input"
        @keypress.enter="addItem">
      <div
        class="x-global con-chips--remove-all"
        @click="removeTotalItems">
        <vs-icon
          :icon-pack="iconPack"
          :icon="removeIcon"
        ></vs-icon>
      </div>
    </div>
  </div>
</template>

<script>
import vsChip from './vsChip.vue'
export default {
  name:'VsChips',
  components:{
    vsChip
  },
  props:{
    modelValue:{},
    vsColor:{
      type:String,
      default:'primary',
    },
    placeholder:{
      type:String,
      default:'',
    },
    items:{
      type:Array,
    },
    iconPack:{
      type:String,
      default:'material-icons'
    },
    removeIcon:{
      type:String,
      default:'close',
    },
  },
  data: () => ({
    newChip:'',
    chip1:true,
  }),
  methods:{
    addItem(){
      let modelValueOld = this.modelValue
      modelValueOld.push(this.newChip)
      this.$emit('update:modelValue', modelValueOld)
      this.newChip = ''
    },
    removeTotalItems(){
      let modelValueOld = this.modelValue
      modelValueOld.splice(0, this.modelValue.length);
      this.$emit('update:modelValue', modelValueOld)
    }
  }
}
</script>
