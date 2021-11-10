<p align="center">
  <a href="https://lusaxweb.github.io/vuesax/">
<img width="40%" src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/vuesax-logo-beta.png" alt="vuesax" />
<img src="https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/vuesax-components.gif" alt="vuesax" />
   </a>
  </p>

  </br>

  <p align="center">
  <a href="https://travis-ci.org/lusaxweb/vuesax">
    <img src="https://img.shields.io/travis/lusaxweb/vuesax.svg" alt="travis ci badge">
  </a>
  <a href="https://www.npmjs.com/package/vuesax">
    <img src="https://img.shields.io/npm/dm/vuesax.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuesax">
    <img src="https://img.shields.io/npm/v/vuesax.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vuesax"><img src="https://img.shields.io/npm/l/vuesax.svg" /></a>
  <a href="https://discord.gg/6AZNXEa">
    <img src="https://discordapp.com/api/guilds/467198491920433153/widget.png" alt="Chat">
  </a>
</p>

## Introduction

[Vuesax](https://lusaxweb.github.io/vuesax/) is a framework of components based on [vue.js](https://vuejs.org/), it is a framework that is designed from scratch to be incrementally adoptable.

The framework is focused on facilitating the development of applications, improving the design of the same without removing the necessary functionality. we want all the components to be independent in colors, shapes and design for a freedom that we like all front-end but without losing the speed of creation and production.

## Vuesax 3 for Vue 3

This fork bring vue 3 support to vuesax 3,
There is still a lot of work to do, and there is still issues
with some components, like VsTable, VsSwitch and VsSelect.

You should look for vuesax-next for vuesax 4, which is still in alpha.

## Links

- 📘 [Documentation](https://lk77.github.io/vuesax/)
-
## Components

- [Buttons](https://lk77.github.io/vuesax/components/)
- [Selects](https://lk77.github.io/vuesax/components/selects.html)
- [Notifications](https://lk77.github.io/vuesax/components/notifications.html)
- [Switch](https://lk77.github.io/vuesax/components/switch.html)
- [CheckBox](https://lk77.github.io/vuesax/components/checkbox.html)
- [Radio](https://lk77.github.io/vuesax/components/radio.html)
- [Input](https://lk77.github.io/vuesax/components/input.html)
- [Dialogs](https://lk77.github.io/vuesax/components/dialog.html)
- [Tabs](https://lk77.github.io/vuesax/components/tabs.html)
- [Slider](https://lk77.github.io/vuesax/components/slider.html)
- [InputNumber](https://lk77.github.io/vuesax/components/number.html)
- [Tooltip](https://lk77.github.io/vuesax/components/tooltip.html)
- [Upload](https://lk77.github.io/vuesax/components/upload.html)
- [Loading](https://lk77.github.io/vuesax/components/loading.html)
- [Popup](https://lk77.github.io/vuesax/components/popup.html)
- [Avatar](https://lk77.github.io/vuesax/components/avatar.html)
- [Breadcrumb](https://lk77.github.io/vuesax/components/breadcrumb.html)
- [Alert](https://lk77.github.io/vuesax/components/alert.html)
- [Divider](https://lk77.github.io/vuesax/components/divider.html)
- [Chip](https://lk77.github.io/vuesax/components/chip.html)
- [Progress](https://lk77.github.io/vuesax/components/progress.html)
- [Card](https://lk77.github.io/vuesax/components/card.html)
- [List](https://lk77.github.io/vuesax/components/list.html)
- [Pagination](https://lk77.github.io/vuesax/components/pagination.html)
- [Topbar](https://lk77.github.io/vuesax/components/topbar.html)
- [SideBar](https://lk77.github.io/vuesax/components/sideBar.html)
- [DropDown](https://lk77.github.io/vuesax/components/dropDown.html)
- [Table](https://lk77.github.io/vuesax/components/table.html)
- [Textarea](https://lk77.github.io/vuesax/components/textarea.html)
- [Collapse](https://lk77.github.io/vuesax/components/collapse.html)
- [Images](https://lk77.github.io/vuesax/components/images.html)

## Browser Support
Recent versions of **Firefox**, **Chrome**, **Edge**, **Opera** and **Safari**. **IE11+**

## Quick-start CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/vuesax3/dist/vuesax.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <vs-button vs-type="filled">Hello World</vs-button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@next/dist/vue.global.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuesax3/dist/vuesax.umd.js"></script>
  <script>
    const app = window.Vue.createApp({});
    app.use(window.Vuesax);
    app.mount('#app');
  </script>
</body>
</html>
```

# Install inside a NPM project
``` bash
# npm
npm install vuesax3
```

``` bash
# yarn
yarn add vuesax3
```

## Use

### All components

```javascript
import { createApp } from 'vue'
import Vuesax from 'vuesax3'

import 'vuesax3/dist/vuesax.css'
const app = createApp({})
app.use(Vuesax)
```

### Or use individual components:

```javascript
import { createApp } from 'vue'
import { vsButton, vsPrompt } from 'vuesax'
import 'vuesax/dist/vuesax.css'

const app = createApp({})
app.use(vsButton)
app.use(vsPrompt)
```

## Contribution
Please make sure to read the [Contributing Guide](https://raw.githubusercontent.com/lk77/vuesax/master/CONTRIBUTING.md) before making a pull request.

## Lusaxweb

The upstream library was created and was supported by [Lusaxweb](http://lusaxweb.net/)

## License

[MIT](https://raw.githubusercontent.com/lk77/vuesax/master/LICENSE)
