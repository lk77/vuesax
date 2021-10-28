import vuesaxOptions from "./utils/options";
import * as vsComponents from "./components";
import vsTheme from "./utils/theme";
import DefineVuesaxMixin from "./defineGlobalMixin";

export default function install(app, options = {}) {
  // set default options
  for (let prop in vuesaxOptions) {
    if (!options[prop]) {
      options[prop] = vuesaxOptions[prop]
    }
  }
  // Use Components
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent);
  })
  if (options) {
    if (Object.prototype.hasOwnProperty.call(options, 'theme')) {
      if (Object.prototype.hasOwnProperty.call(options.theme, 'colors')) {
        if (typeof window !== 'undefined') {
          vsTheme.vsfunction(options.theme.colors, options.server)
        }
      }
    }
  }
  // Define vuesax functions and properties ($vs)
  DefineVuesaxMixin(app, options);
}
