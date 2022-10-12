<template>
  <td
    ref="td"
    :class="{'td-edit': $slots.edit}"
    class="td vs-table--td"
  >
    <span @click="clicktd">
      <vs-icon
        v-if="$slots.edit"
        class="icon-edit"
        icon="edit"
      >
      </vs-icon>
      <slot></slot>
      <span
        v-if="$slots.edit"
        class="empty"
      >
        {{ data ? '' : 'Empty' }}
      </span>
    </span>

    <!--    <transition name="td">
          <div
            v-if="activeEdit"
            class="con-edit-td">
            <slot name="edit"></slot>
            <vs-button
              icon="clear"
              size="small"
              color="primary"
              type="flat"
              @click="close"></vs-button>
          </div>
        </transition>-->
  </td>
</template>
<script>
  import {h} from 'vue';
  import trExpand from './vsTrExpand.vue'
  import utils from "../../utils";

  export default {
    name: 'VsTd',
    props: {
      data: {
        default: null
      }
    },
    data: () => ({
      activeEdit: false
    }),
    watch: {
      activeEdit() {
        this.$parent.activeEdit = this.activeEdit
      }
    },
    methods: {
      insertAfter(e, i) {
        if (e.nextSibling) {
          e.parentNode.insertBefore(i, e.nextSibling);
        } else {
          e.parentNode.appendChild(i);
        }
      },
      clicktd(evt) {
        if (this.$slots.edit) {
          let tr = evt.target.closest('tr')
          if (!this.activeEdit) {
            let comp = {
              render: () => {
                return h(trExpand, {
                  colspan: this.$parent.colspan,
                  close: true,
                  onClose: this.close
                }, this.$slots.edit)
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
            this.activeEdit = true
            setTimeout(() => {
              window.addEventListener('click', this.closeEdit)
            }, 20)
          }
        }
      },
      closeEdit(evt) {
        if (!evt.target.closest('.tr-expand') && !evt.target.closest('.vs-select--options')) {
          this.close()
        }
      },
      close() {
        let tr = this.$refs.td.closest('tr')
        this.activeEdit = false
        tr.parentNode.removeChild(tr.nextSibling)
        window.removeEventListener('click', this.closeEdit)
      },
      saveEdit() {
        this.activeEdit = false
      }
    }
  }
</script>
