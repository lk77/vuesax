<template>
  <tr
    ref="tableTr"
    :class="[`tr-table-state-${state}`, {'is-selected':isSelected, 'selected': data, 'is-expand': maxHeight != '0px', 'activeEdit': activeEdit, 'hoverFlat': $parent.hoverFlat}]"
    class="tr-values vs-table--tr"
    @dblclick="dblclicktr"
    @click="clicktr"
  >
    <td
      v-if="$parent.multiple || $slots.expand"
      :class="{'active-expanded': expanded}"
      class="td-check"
    >
      <vs-checkbox
        v-if="$parent.multiple"
        :checked="isSelected"
        size="small"
        @change="handleCheckbox"
      />

      <vs-icon v-if="$slots.expand">
        keyboard_arrow_down
      </vs-icon>
    </td>
    <slot></slot>
  </tr>
</template>
<script>
import {h} from 'vue'
import utils from '../../utils'
import trExpand from './vsTrExpand.vue'
export default {
  name: 'VsTr',
  props:{
    state:{
      type:String,
      default: null
    },
    data: {
      default: null
    },
  },
  data:()=>({
    colspan:0,
    expanded: false,
    maxHeight:'0px',
    activeEdit: false
  }),
  computed:{
    styleExpand () {
      return {
        maxHeight: this.maxHeight
      }
    },
    getColspanExpand () {
      let lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length
      return lengthx
    },
    isSelected(){
      if(this.$parent.multiple && this.$parent.modelValue) {
        return this.data ? this.$parent.modelValue.some(
              (item) => JSON.stringify(item) === JSON.stringify(this.data)
            ) : false
      } else {
        return this.data ? this.$parent.modelValue == this.data : false
      }
    }
  },
  watch: {
    '$parent.datax'() {
      this.collapseExpandedData()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.colspan = this.$parent.$refs.thead.querySelectorAll('th').length
      if (this.$slots.expand) {
        this.colspan++
      }
    })
  },
  created() {
    if(this.$slots.expand) this.$parent.hasExpadableData = true
  },
  methods:{
    handleCheckbox() {
      this.$parent.handleCheckbox(this.data)
    },
    insertAfter(e,i){
      if(e.nextSibling){
        e.parentNode.insertBefore(i,e.nextSibling);
      } else {
        e.parentNode.appendChild(i);
      }
    },
    clicktr (evt) {
      this.$parent.clicktr(this.data, true)

      if (this.$slots.expand) {
        this.clicktd(evt)
      }
    },
    dblclicktr () {
      this.$parent.dblclicktr(this.data, true)
    },
    clicktd (evt) {
      if(this.$parent.multiple || !this.$slots.expand) return
      let tr = evt.target.closest('tr')
      if(this.expanded) {
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      } else {
        tr.classList.add('tr-expandedx');

        let comp = {
          render: () => {
            return h(trExpand, { colspan: this.colspan }, this.$slots.expand)
          },
          parent: this
        };
        const fragment = new DocumentFragment();
        utils.mount(comp, {
          element: fragment,
          app: this.$vs.getCurrentInstance(),
          props: {}
        });
        this.insertAfter(tr, fragment)
        this.expanded = true
      }
    },
    collapseExpandedData() {
      if(this.expanded){
        const tr = this.$refs.tableTr
        tr.parentNode.removeChild(tr.nextSibling)
        tr.classList.remove('tr-expandedx')
        this.expanded = false
      }
    }
  }
}
</script>
