<template>
  <div
    :class="{'vs-sidebar-item-active':active}"
    class="vs-sidebar--item"
    @click="setIndexActive"
  >
    <router-link
      v-if="to"
      :to="to"
    >
      <vs-icon
        :icon-pack="iconPack"
        :icon="icon"
      >
      </vs-icon>
      <slot></slot>
    </router-link>
    <a
      v-else
      :href="href"
    >
      <vs-icon
        :icon-pack="iconPack"
        :icon="icon"
      >
      </vs-icon>
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name:'VsSidebarItem',
  props:{
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default:'#',
      type: String
    },
    to: {
      default:null,
      type: [String, Object]
    },
    index: {
      default: null,
      type: [String, Number]
    },
  },
  emits: ['click'],
  data() {
    return {
      parent: null,
      active: false,
    }
  },
  created() {
    this.searchParent(this, (parent) => {
      this.parent = parent;
      this.active = this.getActive();
      this.parent.childrenItems.push({
        icon: this.icon,
        iconPack: this.iconPack,
        href: this.href,
        to: this.to,
        index: this.index,
        active: this.active
      });
    })
  },
  methods:{
    getActive () {
      return this.parent.getActive() === this.index
    },
    setIndexActive () {
      this.parent.setIndexActive(this.index)
      this.$emit('click')
    },
    searchParent(_this, callback) {
      let parent = _this.$parent
      if (!parent.childrenItems) {
        this.searchParent(parent, callback)
      } else {
        callback(parent)
      }
    }
  }
}
</script>
