<template lang="html">
  <div
    :class="{
      'autocompletex':autocomplete,
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}"
    :style="getWidth"
    class="con-select">
    <label
      v-if="label"
      ref="inputSelectLabel"
      class="vs-select--label">{{ label }}</label>
    <div class="input-select-con">
      <!-- v-model="modelValueFilter" -->
      <input
        v-bind="attrs"
        :value="modelValuex"
        ref="inputselect"
        :readonly="!autocomplete"
        class="input-select vs-select--input"
        type="text"
        @keydown.esc.stop.prevent="closeOptions">

      <button
        :class="{'activeBtnClear': activeBtnClear}"
        class="icon-select-clear vs-select--icon-clear"
        @click="clearValue">
        <i class="material-icons">
          close
        </i>
      </button>

      <vs-icon
        v-if="!activeBtnClear"
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-select vs-select--icon"
      ></vs-icon>

      <transition name="fadeselect">
        <div
          v-show="active"
          ref="vsSelectOptions"
          :style="cords"
          :class="[`vs-select-${color}`,{'scrollx':scrollx}]"
          class="vs-select--options">
          <ul ref="ulx">
            <slot/>
          </ul>
          <ul v-show="clear">
            <li @click="filterItems(''),changeValue()" >
              {{ noData }}
            </li>
          </ul>
        </div>
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
        class="con-text-validation">
        <span class="span-text-validation span-text-validation-success">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger">
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning">
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation">
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
import utils from "../../utils";
export default {
  name: "VsSelect",
  props: {
    modelValue: {},
    noData: {
      default: "No data available",
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: "primary",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: "material-icons",
      type: String
    },
    icon: {
      default: "keyboard_arrow_down",
      type: String
    },
    iconClear: {
      default: "close",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  data: () => ({
    modelValueFilter: "",
    active: false,
    modelValuex: "",
    clear: false,
    scrollx: false,
    cords: {},
    filterx: false,
    childrenItems: []
  }),
  computed: {
    activeBtnClear() {
      return this.autocomplete && this.filterx;
    },
    getWidth() {
      return this.width ? `width:${this.width};` : null;
    },
    parent() {
      return this;
    },
    attrs() {
      return {
        ...this.$attrs,
        onBlur: event => {
          if (
            this.autocomplete && event.relatedTarget
              ? !event.relatedTarget.closest(".vs-select--options")
              : false
          ) {
            this.closeOptions();
          }
          this.$emit("blur", event);
        },
        onFocus: event => {
          this.$emit("focus", event);
          if (event.keyCode ? event.keyCode : event.which) {
            this.focus();
          }
        },
        onMouseup: () => {
          this.focus();
        },
        onInput: event => {
          if (this.autocomplete) {
            this.$emit("input-change", event);
          }
        },
        onKeyup: event => {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            event.preventDefault();
            let childrens = this.childrenItems.filter(item => {
              return item.visible;
            });
            childrens[0].$el.querySelector(".vs-select--item").focus();
          } else {
            if (this.autocomplete) {
              this.filterItems(event.target.value);
            }
          }

          this.childrenItems.map(item => {
            item.modelValueInputx = this.$refs.inputselect.modelValue;
          });
        }
      };
    }
  },
  watch: {
    modelValue(event) {
      this.modelValuex = this.modelValue;
      this.$emit("change", event);
    },
    active() {
      this.$nextTick(() => {
        if (this.active) {
          utils.insertBody(this.$refs.vsSelectOptions);
          setTimeout(() => {
            this.childrenItems.forEach(item => {
              if (item.focusValue) {
                item.focusValue();
              }
            });
            if (this.$refs.ulx.scrollHeight >= 260) this.scrollx = true;
          }, 100);
        } else {
          let [parent] = document.getElementsByTagName("body");
          parent.removeChild(this.$refs.vsSelectOptions);
        }
      });
    }
  },
  mounted() {
    // this.$refs.inputselect.modelValue = this.modelValue
    this.changeValue();
    if (this.active) {
      utils.insertBody(this.$refs.vsSelectOptions);
    }
  },
  beforeUnmount() {
    let [parent] = document.getElementsByTagName("body");

    if (this.active) {
      this.closeOptions();
    }
    if (
      parent &&
      this.$refs.vsSelectOptions &&
      this.$refs.vsSelectOptions.parentNode === parent
    ) {
      parent.removeChild(this.$refs.vsSelectOptions);
    }
  },
  updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    clearValue() {
      this.focus();
      this.filterItems("");
      this.changeValue();
    },
    addMultiple(modelValue) {
      let currentValues = this.modelValue ? this.modelValue : [];
      if (currentValues.includes(modelValue)) {
        currentValues.splice(currentValues.indexOf(modelValue), 1);
        this.$emit('update:modelValue', currentValues);
        this.changeValue();
        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(modelValue);
          this.$emit('update:modelValue', currentValues);
          this.filterItems("");
          this.changeValue();
          // this.$refs.inputselect.modelValue += ','
          this.$refs.inputselect.focus();
        } else {
          currentValues.push(modelValue);
          this.$emit('update:modelValue', currentValues);
          this.changeValue();
        }
      }
    },
    filterItems(modelValue) {
      if (modelValue) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }
      let items = this.childrenItems;

      items.forEach(item => {
        if (item.childrenItems.length > 0) {
          items = [...items, ...item.childrenItems];
        }
      });

      items.map(item => {
        if (!("text" in item)) return;

        let text = item.text;

        if (this.multiple) {
          let modelValuesx = modelValue.split(",");
          modelValuesx.forEach(modelValue_multi => {
            if (text.toUpperCase().indexOf(modelValue_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(modelValue.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });

      let lengthx = items.filter(item => {
        return item.visible;
      });

      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }

      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    changeValue() {
      this.filterx = false;
      if (this.multiple) {
        let modelValues = this.modelValue ? this.modelValue : [];
        let options = this.childrenItems;

        options.forEach(item => {
          if (item.childrenItems.length > 0) {
            options = [...options, ...item.childrenItems];
          }
        });

        let optionsValues = [];
        modelValues.forEach(item => {
          options.forEach(item_option => {
            if (item_option.modelValue == item) {
              let text = item_option.text;
              text = text.replace("check_circle", "");
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.modelValue = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.modelValue = this.modelValuex;
        }
      }
    },
    focus() {
      this.active = true;
      document.addEventListener('click', this.clickBlur);
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      let inputx = this.$refs.inputselect;
      if (this.autocomplete && this.multiple) {
        setTimeout(() => {
          if (inputx.modelValue) {
            this.$refs.inputselect.modelValue = inputx.modelValue += ",";
          }
          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }

      if (!this.autocomplete) {
        if (
          this.multiple ? this.modelValue.length == 0 : !this.modelValue || this.multiple
        ) {
          setTimeout(() => {
            const el = this.childrenItems[0].$el.querySelector(".vs-select--item");
            if (el) el.focus();
          }, 50);
        }
      }
      this.$nextTick(() => {
        this.cords = this.changePosition();
      });
    },
    clickBlur(event) {
      if (event.target === this.$refs.inputselect) {
        return
      }
      let closestx = event.target.closest(".vs-select--option");

      if (!closestx) {
        this.closeOptions();
        if (this.autocomplete) {
          this.filterItems("");
        }
        this.changeValue();
      }
    },
    closeOptions() {
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener("click", this.clickBlur);
    },
    changePosition() {
      let elx = this.$refs.inputselect;
      let content = this.$refs.vsSelectOptions;
      let conditional = this.autocomplete;
      let topx = 0;
      let leftx = 0;
      let widthx = 0;
      let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      if (
        elx.getBoundingClientRect().top + content.scrollHeight + 20 >=
        window.innerHeight
      ) {
        topx =
          elx.getBoundingClientRect().top +
          elx.clientHeight +
          scrollTopx -
          content.scrollHeight;
        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional
          ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5
          : elx.getBoundingClientRect().top + scrollTopx;
      }

      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;

      let cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${widthx}px`
      };

      return cords;
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      let h = el.scrollHeight;
      el.style.height = h + "px";
      done();
    },
    leave: function(el) {
      el.style.height = 0 + "px";
    },
    setLabelClass: function(label, focusing) {
      if (!label) {
        return;
      }

      if (focusing) {
        label.classList.add("input-select-label-" + this.color + "--active");
        return;
      }

      label.classList.remove("input-select-label-" + this.color + "--active");
    }
  }
};
</script>
