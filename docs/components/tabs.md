---
API:
 - name: vs-tabs
   type: Component
   parameters: null
   description: Component that contains the children vs-tab.
   default: null
 - name: v-model
   type: bind
   parameters: null
   description: Link active tab index.
   default: null
 - name: value
   type: Number, String
   parameters: null
   description: Index of active tab.
   default: 0
 - name: position
   type: String
   parameters: top, left, bottom, right
   description: Tabs menu position.
   default: null
 - name: color
   type: String
   parameters: RGB, HEX
   description: Color of the tabs component. Can be set on vs-tabs or vs-tab.
   default: null
 - name: hover-text
   type: Boolean, Number, String
   parameters: alpha or percent opacity
   description: Apply color property on hover to the text, opaque by default
   default: true
 - name: hover-line
   type: Boolean, Number, String
   parameters: alpha or percent opacity
   description: Apply color property on hover to the line below vs-tab, 0.3 opacity by default
   default: false
 - name: alignment
   type: String
   parameters: left (default), right, center, fixed
   description: Change the alignment of the tabs buttons.
   default: top
 - name: vs-tab
   type: Component
   parameters: null
   description: component that wraps everything inside.
   default: null
 - name: label
   type: String
   parameters: null
   description: Text on the tab button.
   default: null
 - name: icon
   type: String
   parameters: Same as `vs-icon` component.
   description: Add a left icon inside the tabs component.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: v-on:click-tag
   type: Callback
   parameters: tab
   description: This function is executed by clicking on the tag.
   default: null
 - name: tag
   type: Icon
   parameters: material icons
   description: Determine the icon inside the tag.
   default: null
 - name: tagColor
   type: Colors
   parameters: Default Colors RGB, HEX
   description: Determine the color of the icon inside the tag.
   default: null
 - name: useShow
   type: Boolean
   parameters:
   description: Use a v-show instead of a v-if on active vs-tab.
   default: false
---

# Tabs

<box header>

  Tabs are very easy to implement

</box>


<box>

## Default

To implement a tabs, use the `vs-tabs` component. It must include `vs-tab` child components that represent each tab.

:::tip
For the title of each tab the `vs-tab` property is implemented in the` vs-tab` component.
:::

<vuecode md>
<template #demo>
<div>
  <Demos-Tabs-Default />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="">
    <vs-tabs>
      <vs-tab label="Home">
        <div class="con-tab-ejemplo">
          Home
        </div>
      </vs-tab>
      <vs-tab label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab disabled label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
      <vs-tab label="Lorem ipsum dolor sit amet">
        <div class="con-tab-ejemplo">
          Lorem ipsum dolor sit amet
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
```

</template>
</vuecode>

</box>

<box>

## Color

You can change the color of the component with the property `color`, the parameter allows the main colors and HEX or RGB.

You can use `hover-line` property to display a translucent line, on hover, below the vs-tab.<br>
You can pass an alpha/percent opacity to `hover-line`, default opacity is 0.3.

The `hover-text` property is enabled by default, and apply color to the text on hover.<br>
You can pass an alpha/percent opacity to `hover-text`, opaque by default.

You can provide a boolean to both `hover-line` / `hover-text` properties, to enable/disable them.<br>
In that case default opacity will be used.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

:::tip
The `color` property defined on vs-tabs is the default value for all tabs, but you can override it by defining it on a vs-tab.

<i>Since vuesax3@4.1.0</i>
:::

<vuecode md>
<template #demo>
<div>
  <Demos-Tabs-Color />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="">
    <vs-tabs hover-line="100%">
      <vs-tab color="success" defaultColor="success" label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vs-tab>
      <vs-tab color="danger" defaultColor="danger" label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vs-tab>
      <vs-tab color="warning" label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab color="dark" label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
      <vs-tab color="rgb(16, 233, 179)" label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
      <vs-tab label="Default">
        <div class="con-tab-ejemplo">
          Default
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
```

</template>
</vuecode>

</box>

<box>

## Alignments

Change the alignment of the buttons with the property `alignments`. The allowed values ​​are:

- center
- right
- fixed

<vuecode md>
<template #demo>
<div>
  <Demos-Tabs-Alignments />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vs-tabs :hover-line="true" :hover-text="true">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Center
    </h3>
    <vs-tabs alignment="center" hover-line="0.3" hover-text="1">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Right
    </h3>
    <vs-tabs alignment="right" hover-line="30%" hover-text="100%">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


    <h3>
      Fixed
    </h3>
    <vs-tabs alignment="fixed" hover-line hover-text>
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


  </div>
</template>
```

</template>
</vuecode>

</box>

<box>

## Position

You can change the position of the menu with the property `position` that as a value you can have: `top`, `right`,`bottom`, `left`.

<vuecode md>
<template #demo>
<div>
  <Demos-Tabs-Position />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="">
    <h3>
      Default
    </h3>
    <vs-tabs>
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Center
    </h3>
    <vs-tabs alignment="center">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Right
    </h3>
    <vs-tabs alignment="right">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


    <h3>
      Fixed
    </h3>
    <vs-tabs alignment="fixed">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


  </div>
</template>
```

</template>
</vuecode>

</box>

<box>

## Icons

You can add a left icon inside each tab with the property `icon` that has the same values as the `icon` component.

<vuecode md>
<template #demo>
<div>
  <Demos-Tabs-Icons />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab label="Pets" icon="pets" @click="colorx = '#8B0000'">
      </vs-tab>
      <vs-tab label="Bank" icon="account_balance" @click="colorx = '#FFA500'">
      </vs-tab>
      <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#551A8B'">
      </vs-tab>
      <vs-tab label="Profile" icon="account_circle" @click="colorx = '#0000FF'">
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx: '#8B0000'
  })
}
</script>
</template>
```

</template>
</vuecode>

</box>
