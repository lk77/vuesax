---
API:
 - name: icon
   type: String
   parameters: null
   description: Determines the icon
   default: null
 - name: icon-pack
   type: String
   parameters: null
   description: Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: color
   type: String
   parameters: Vuesax color presets, RGB, HEX, html color presets
   description: Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: black
 - name: bg
   type: String
   parameters: Vuesax color presets, RGB, HEX, html color presets
   description: Sets the background color
   default: null
 - name: size
   type: String
   parameters: small, medium, large, custom measure(75px, 3rem, 2em)
   description: Sets the size of the icon
   default: 1rem
 - name: round
   type: Boolean
   parameters: null
   description: Makes the background round.
   default: false
 - name: click
   type: Function
   parameters: null
   description: a function to be executed on click of the icon
---

# Icon

<box header>

  Renders a font icon in the desired font library

</box>


<box>

## Default

To use the icon, use the `vs-icon` component. For the main parameter, pass the `icon` property that determines which icon to show. By default, the icon uses the **Google Material Icons** font library. Another library can be selected by passing the css class/classes for the library to `icon-pack`.  Only the Material Icons library is bundled with the framework.  Other libraries will have to be included implicitly.

::: tip
Vuesax uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://fonts.google.com/icons?icon.set=Material+Icons).

**Google Material Symbols** are supported since <i>vuesax3@^4.2.2</i>. For a list of all available symbols, visit the official [Material Symbols page](https://fonts.google.com/icons?icon.set=Material+Symbols).

You will have to set `icon-pack` to either material-symbols-outlined, material-symbols-rounded or material-symbols-sharp.
You still need to include the Google Material Symbols in your project.

FontAwesome and other fonts libraries are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.

:::

<vuecode md>
<template #demo>
<div>
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care"></vs-icon>
</span>
<span>
  <vs-icon icon="pets"></vs-icon>
</span>
<span>
  <vs-icon icon="android"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer"></vs-icon>
</span>
</div>
<br/>
<h5>Google Symbols ( outlined / rounded / sharp ) : </h5>
<br/>
<div>
<span>
  <vs-icon icon="tv" icon-pack="material-symbols-outlined"></vs-icon>
</span>
<span>
  <vs-icon icon="encrypted" icon-pack="material-symbols-rounded"></vs-icon>
</span>
<span>
  <vs-icon icon="dns" icon-pack="material-symbols-sharp"></vs-icon>
</span>
</div>
</template>
<template #code>

```html
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care"></vs-icon>
</span>
<span>
  <vs-icon icon="pets"></vs-icon>
</span>
<span>
  <vs-icon icon="android"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer"></vs-icon>
</span>


<span>
  <vs-icon icon="tv" icon-pack="material-symbols-outlined"></vs-icon>
</span>
<span>
  <vs-icon icon="encrypted" icon-pack="material-symbols-rounded"></vs-icon>
</span>
<span>
  <vs-icon icon="dns" icon-pack="material-symbols-sharp"></vs-icon>
</span>
```

</template>
</vuecode>
</box>

<box>

## Color

You can change the color of the icons as well, using color names, RGB, HEX, or Vuesax variables.

<vuecode md>
<template #demo>
<div>
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" color="red"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" color="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" color="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" color="#BC1254"></vs-icon>
</span>
</div>
</template>
<template #code>

```html
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" color="red"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" color="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" color="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" color="#BC1254"></vs-icon>
</span>
```

</template>
</vuecode>
</box>

<box>

## Size

You can change the size of the Avatar with the property `size` the allowed values ​​are:

- large
- small
- Custom measure

:::tip
  In the example the last icon has the custom size of `75px` the added value will be the icon's **height** and **width** and **text-size**
:::

<vuecode md>
<template #demo>
<div>
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" color="red"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" color="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" color="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" color="#BC1254"></vs-icon>
</span>
</div>
</template>
<template #code>

```html
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" color="red"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" color="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" color="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" color="#BC1254"></vs-icon>
</span>
```

</template>
</vuecode>
</box>

<box>

## Background Color

You can change the background color with the property `bg`.

<vuecode md>
<template #demo>
<div>
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" bg="red" color="white"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" bg="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" bg="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" bg="#BC1254"></vs-icon>
</span>
</div>
</template>
<template #code>

```html
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" bg="red"></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" bg="primary"></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" bg="rgb(70, 150, 0)"></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" bg="#BC1254"></vs-icon>
</span>
```

</template>
</vuecode>
</box>

<box>

## Rounded

To make the icon round, pass the property `round`.

:::tip
  You can also pass this as `round=true`. The two are equivalent.
:::

<vuecode md>
<template #demo>
<div>
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" bg="red" color="white" round></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" bg="primary" round></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" bg="rgb(70, 150, 0)" round></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" bg="#BC1254" round></vs-icon>
</span>
</div>
</template>
<template #code>

```html
<span>
  <vs-icon icon="mood"></vs-icon>
</span>
<span>
  <vs-icon icon="child_care" size="small" bg="red" round></vs-icon>
</span>
<span>
  <vs-icon icon="pets" size="medium" bg="primary" round></vs-icon>
</span>
<span>
  <vs-icon icon="android" size="large" bg="rgb(70, 150, 0)" round></vs-icon>
</span>
<span>
  <vs-icon icon="polymer" size="75px" bg="#BC1254" round></vs-icon>
</span>
```

</template>
</vuecode>
</box>
