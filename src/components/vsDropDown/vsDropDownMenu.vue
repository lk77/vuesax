<template>
  <transition name="dropdownx">
    <div
      v-show="dropdownVisible"
      ref="options"
      :class="{'rightx':vsDropRight || $parent.rightx,'notHeight': notHeight}"
      :style="{
        'left':left,
        'top':top,
        'padding':padding,
        'margin':'-'+margin
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
        :style="{
          'margin': margin
        }"
        :class="[ vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after']"
      ></div>
    </div>
  </transition>
</template>

<script>
import waitForElementToExist from "../../utils/waitForElementToExist";
export default {
  name: "VsDropdownMenu",
  inject: ['vsInsert', 'vsBlurOnScroll', 'vsLeaveTolerance', 'vsLeaveDelay'],
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
    leaveTimeout: null
  }),
  computed: {
    left() {
      if(this.vsLeaveTolerance && this.vsLeaveTolerance > 0) {
        return `${this.leftx + (this.vsLeaveTolerance * 2)}px`;
      }

      return `${this.leftx}px`;
    },
    top() {
      if(this.vsLeaveTolerance && this.vsLeaveTolerance > 0) {
        return `${this.topx + (this.notHeight ? this.vsLeaveTolerance*2 : 0)}px`;
      }

      return `${this.topx}px`;
    },
    padding() {
      if(this.vsLeaveTolerance && this.vsLeaveTolerance > 0) {
        return [
          `${this.vsLeaveTolerance+(this.notHeight ? 0 : 10)}px`,
          `${this.vsLeaveTolerance}px`,
          `${this.vsLeaveTolerance}px`,
          `${this.vsLeaveTolerance}px`,
        ].join(' ');
      }

      return undefined;
    },
    margin() {
      if(this.vsLeaveTolerance && this.vsLeaveTolerance > 0) {
        return `${this.vsLeaveTolerance}px`
      }

      return undefined;
    }
  },
  watch:{
    dropdownVisible(val) {
      let dropdownGroup = this.childrenItems.filter(item => item.activeGroup !== undefined)
      dropdownGroup.forEach((item_group)=>{
        item_group.activeGroup = false
      })
      this.setDirection()

      !val ? this.$parent.rightx = false : null

      this.$parent.vsDropdownVisible = val;
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
        if(this.leaveTimeout) {
          clearTimeout(this.leaveTimeout);
          this.leaveTimeout = null;
        }
        this.widthx = this.$el.clientWidth
      } else if(this.vsTriggerClick === 'mouseleave') {
        if(this.leaveTimeout) {
          clearTimeout(this.leaveTimeout);
          this.leaveTimeout = null;
        }
      }
    },
    mouseleavex() {
      if (!this.vsTriggerClick || (this.vsTriggerClick === 'mouseleave' && this.leaveTimeout === null)) {
        this.leaveTimeout = setTimeout(() => {
          this.dropdownVisible = this.$parent.vsDropdownVisible = false
          this.widthx = this.$el.clientWidth
        }, this.vsLeaveDelay)
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
    blurOnScroll(vsInsertEl, elp) {
      if ('IntersectionObserver' in window) {
        setTimeout(() => {
          let observer = new IntersectionObserver((entries) => {
            if (entries.length > 0 && entries[0].intersectionRatio === 0) {
              this.dropdownVisible = this.$parent.vsDropdownVisible = false
            }
          }, {root: vsInsertEl})
          observer.observe(elp);
        }, 0)
      }
    },
    insertBody(){
      let elp = this.$el
      this.parentNode = this.$root.$el.parentNode
      waitForElementToExist(this.vsInsert).then(vsInsertEl => {
        vsInsertEl.prepend(elp)

        if(this.vsBlurOnScroll) {
          this.blurOnScroll(vsInsertEl, elp)
        }
      })
    }
  }
}
</script>
