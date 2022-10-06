import { injectDirectionClass } from "./utils/rtl";
import vsFunctions from './functions'
import { reactive } from "vue"
/**
 * Vuesax global mixin, all vueasx functions and properties injected
 * in the @beforeCreate hook.
 */

export default (app, options) => {
  let $vs = vsFunctions(reactive(options), app);
  app.provide('$vs', $vs);

  app.mixin({
    watch: {
      '$vs.rtl': {
        handler(val) {
          injectDirectionClass(val)
        }
      }
    },
    beforeCreate() {
      if(!this.$vs) {
        this.$vs = $vs;
      }
    },
    mounted() {
      // inject the direction class for the initial options
      injectDirectionClass(this.$vs.rtl)
    }
  })
};
