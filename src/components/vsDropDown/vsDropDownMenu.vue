<template>
  <transition name="dropdownx">
    <div
      v-show="dropdownVisible"
      ref="options"
      :class="{'rightx':vsDropRight || $parent.rightx,'notHeight': notHeight}"
      :style="{
        'left':`${leftx}px`,
        'top':`${topx}px`
      }"
      class="con-vs-dropdown--menu vs-dropdown-menu"
      style="position:absolute!important;"
      @mouseleave="mouseleavex"
      @mouseenter="mouseenterx"
    >
      <!-- @mouseout="toggleMenu($event)" -->
      <!-- @mouseover="toggleMenu($event)" -->
      <ul
        v-if="!vsCustomContent"
        class="vs-component vs-dropdown--menu"
      >
        <slot />
      </ul>
      <div
        v-else
        class="vs-dropdown--custom vs-dropdown--menu"
      >
        <slot />
      </div>
      <div
        ref="menuAfter"
        :class="[ vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VsDropdownMenu",
  inject: ['vsInsert'],
  data: () => ({
    dropdownVisible: false,
    leftAfter: 20,
    leftx: 0,
    topx: 0,
    rightx: true,
    vsTriggerClick: false,
    vsDropRight: false,
    widthx: 0,
    notHeight: false,
    vsCustomContent: false,
    parentNode: null,
    childrenItems: [],
  }),
  watch:{
    dropdownVisible(val) {
      let dropdownGroup = this.childrenItems.filter(item => item.activeGroup !== undefined)
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
      this.setDirection()

      !val ? this.$parent.rightx = false : null

      this.$parent.vsDropdownVisible = val;
    },
    topx(val) {
      if(this.dropdownVisible) {
        let dropdown = this.$parent.$refs.dropdown;
        let dropdownTop = dropdown.getBoundingClientRect().top;
        let dropdownHeight = dropdown.clientHeight;
        let scrollTop =  document.querySelector(this.vsInsert).scrollTop;

        if(this.notHeight) {
          if(dropdownTop+dropdownHeight > scrollTop) {
            this.dropdownVisible = this.$parent.vsDropdownVisible = false
            this.widthx = this.$el.clientWidth
          }
        } else {
          if(val-dropdownHeight < 0) {
            this.dropdownVisible = this.$parent.vsDropdownVisible = false
            this.widthx = this.$el.clientWidth
          }
        }
      }
    }
  },
  mounted() {
    this.insertBody()
    this.$parent.childrenItems.push(this);
  },
  beforeUnmount() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods:{
    mouseenterx() {
      if (!this.vsTriggerClick) {
        this.dropdownVisible = this.$parent.vsDropdownVisible = true
        this.widthx = this.$el.clientWidth
      }
    },
    mouseleavex() {
      if (!this.vsTriggerClick || this.vsTriggerClick === 'mouseleave') {
        this.dropdownVisible = this.$parent.vsDropdownVisible = false
        this.widthx = this.$el.clientWidth
      }
    },
    setDirection() {
      setTimeout(() => {
        //const dropdown = this.parentNode
        const menuAfter = this.$refs.menuAfter
        if (!menuAfter) return
        if(this.notHeight) {
          menuAfter.style.bottom = '-5px'
          menuAfter.style.top = ''
          menuAfter.style.transform = 'rotate(225deg)'
        } else {
          menuAfter.style.top = '10px'
          menuAfter.style.bottom = ''
          menuAfter.style.transform = ''
        }
      }, 100)
    },
    toggleMenu(event){
      if(event.type === 'mouseover' && (!this.vsTriggerClick)){
        this.dropdownVisible = this.$parent.vsDropdownVisible = true
      }
      else if (!this.vsTriggerClick) {
        this.dropdownVisible = this.$parent.vsDropdownVisible = false
      }
      this.widthx = this.$el.clientWidth
    },
    insertBody(){
      let elp = this.$el
      this.parentNode = this.$root.$el.parentNode
      document.querySelector(this.vsInsert).prepend(elp)
    }
  }
}
</script>
