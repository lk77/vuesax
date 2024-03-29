---
API:
 - name: color
   type: String
   parameters: null
   description: Change the color of the dropdown.
   default: primary
 - name: vs-trigger-click
   type: Boolean, String
   parameters: mouseleave
   description: Determine if the dropdown opens when you click, changing the default functionality. You can pass "mouseleave",  in which case the dropdown opens when you click, but closes automatically when the mouse leave the dropdown.
   default: false
 - name: divider
   type: Boolean
   parameters: null
   description: Add a top line to split a link from others.
   default: false
 - name: vs-label
   type: String
   parameters: null
   description: Title of the item group (vs-dropdown-group).
   default: Options
 - name: vs-custom-content
   type: Boolean
   parameters: null
   description: Determines whether the component will contain custom elements.
   default: false
 - name: vs-collapse
   type: Boolean
   parameters: null
   description: Determines if the group of options is closed until the user poses in the title (vs-dropdown-group).
   default: false
 - name: vs-icon
   type: String
   parameters: null
   description: Define the icon show when have a (vs-dropdown-group).
   default: keyboard_arrow_right
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: material-icons
 - name: vs-insert
   type: String
   parameters: css selector
   description: You can specify in which element the dropdown will be created, with a selector.
   default: body
 - name: vs-leave-tolerance
   type: Number
   parameters: px
   description: You can specify a tolerance in px around the dropdown. The dropdown will not close itself if the mouse remain within that tolerance. Useful without 'vs-trigger-click' or with 'vs-trigger-click="mouseleave"'.
   default: 0
 - name: vs-leave-delay
   type: Number
   parameters: ms
   description: You can specify a delay in ms before the dropdown closes. The dropdown will not close itself if the mouse re-enter the dropdown within that delay. Useful without 'vs-trigger-click' or with 'vs-trigger-click="mouseleave"'.
   default: 0
---

# DropDown

<box header>

  Easy to implement options that seem only when the user needs them

</box>

<box>

## Default

To add the Dropdown we have three types of components the main `vs-dropdown` that contains the element that makes the` vs-dropdown-menu` appear and to add each item within it we have the component `vs-dropdown-item`

:::tip Links
  To add an internal link using [vue-router](https://router.vuejs.org/) you can do them simply by adding the property [to](https://router.vuejs.org/api/#to) as if it were a [vue-router](https://router.vuejs.org/) link

  In case you need an external link or normal html, simply do it with the href property

  ```html
    <!-- to: internal link -->
    <vs-dropdown-item to="/myLink">
      my Link name
    </vs-dropdown-item>

    <!-- href: external link-->
    <vs-dropdown-item href="/myLink">
      my Link name
    </vs-dropdown-item>
  ```
:::

<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-Default />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="examplex">

    <vs-dropdown >
      <a class="a-icon" href="#">
        Dropdown hover
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown >
      <a class="a-icon" href.prevent>
        Dropdown Option Disabled
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item disabled>
          Option 2
        </vs-dropdown-item >
        <vs-dropdown-item disabled divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</template>
</vuecode>
</box>


<box>

## Color

You can change the color of the component with the property `color`

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-Color />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="examplex">

    <input type="color" v-model="colorx">

    <vs-dropdown :color="colorx">
      <a class="a-icon" href="#">
        Dropdown hover
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'#c80948'
  }),
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="color"]
    border: 0px;
    width: 30px;
    height: 30px;
    display: block;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</template>
</vuecode>
</box>

<box>

## Option Group

If you need to group the options you can use the subcomponent `vs-dropdown-group` which as a required parameter is `vs-label` to define the group title

:::tip
  The group can be hidden from the user and only open when it is sitting on the property with the `vs-collapse` property

  You can modify the icon with a property `vs-icon`
:::

<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-Group />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="examplex">
    <vs-dropdown>
      <a class="a-icon" href.prevent>
        Dropdown Option Group
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>
        <vs-dropdown-group>
          <vs-dropdown-item>
            Option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            Option 2
          </vs-dropdown-item>

          <vs-dropdown-group>
            <vs-dropdown-item>
              sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              sub Options 2
            </vs-dropdown-item>
          </vs-dropdown-group>

        </vs-dropdown-group>
        <vs-dropdown-item divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <vs-dropdown  >
      <a class="a-icon" href.prevent>
        Dropdown Group Collapse
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item to="/components/">
          Option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          Option 2
        </vs-dropdown-item>

        <vs-dropdown-group vs-collapse vs-label="Group Collapse" vs-icon="add">
          <vs-dropdown-item>
            Option Collapse 1
          </vs-dropdown-item>
          <vs-dropdown-item >
           Option Collapse 2
          </vs-dropdown-item>
          <vs-dropdown-group>
            <vs-dropdown-item>
              Sub Options 1
            </vs-dropdown-item>
            <vs-dropdown-item>
              Sub Options 2
            </vs-dropdown-item>

            <vs-dropdown-group vs-collapse>
              <vs-dropdown-item vs-label="Sub Collapse">
                Sub Collapse 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                Sub Collapse 2
              </vs-dropdown-item>
            </vs-dropdown-group>

          </vs-dropdown-group>
        </vs-dropdown-group>

        <vs-dropdown-item divider>
          Option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>

```

</template>
</vuecode>
</box>

<box>

## Custom Content

Sometimes when we need something more personalized and not necessarily a menu for it you can add any content and have the dropdown functionality with the property `vs-custom-content`

:::tip
  For better functionality in the user's aspect when doing some interaction with the custom dropdown you can add that it is only activated and deactivated by a click event with the property `vs-trigger-click`

  Since vuesax3@^4.3.0 you can pass `mouseleave` to `vs-trigger-click` if you want to open the dropdown with a click but still close it when the mouse leave the menu.
:::


<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-Custom />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="examplex">

    <vs-dropdown vs-custom-content vs-trigger-click="mouseleave">
      <a class="a-icon" href.prevent>
        Click me open login
        <vs-icon class="" icon="expand_more"></vs-icon>
      </a>

      <vs-dropdown-menu class="loginx">
        <h3>Login</h3>
        <p>Welcome to vuesax, add your data to enter</p>


        <vs-input
    :valid.sync="valid.email"
    success-text="Correo Valido"
    danger-text="The email does not meet the requirements"
    type="email" label-placeholder="Email" v-model="value1"/>

    <vs-input
        :valid.sync="valid.password"
        success-text="Password Valida"
        danger-text="The password must have at least 8 characters, 1 number, 1 special character"
        type="password"
        label-placeholder="Password" v-model="value2"/>

        <vs-button width="100%" color="success" type="gradient">Login</vs-button>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data:()=>({
    value1:'',
    value2:'',
    valid:{
      email:false,
      password:false,
    }
  }),
  methods:{
    logx(){
      console.log("click");
    }
  }
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
.vs-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
</style>
```

</template>
</vuecode>
</box>


<box class="vs-insert-box">

## VsInsert
<i>Since vuesax3@^4.3.0</i>

Sometimes we need to insert the dropdown menu into another element than body, you can pass a css selector to the property `vs-insert` and the dropdown will be inserted there.

by default, the dropdown menu will remain open even if it's not visible due to the scroll, you can use `:vs-blur-on-scroll="true"` to automatically close the dropdown menu when it goes out of view.

:::tip
  You want to use `position: relative` on the container, for a better scrolling experience, and to avoid overflow issues related to `position: static`
:::

<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-VsInsert />
</div>
</template>
<template #code>

```html
<template>
  <div class="examplex" style="flex-direction: column;">
    <div id="vs-insert-container">
      <div id="vs-insert">
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="success">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="success"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="danger">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="danger"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="warning">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="warning"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="dark">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="dark"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="rgb(134, 4, 98)">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container" :vs-blur-on-scroll="true">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="rgb(134, 4, 98)"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.vs-insert-box .box
  overflow:visible!important;
#vs-insert-container
  position: relative;
  height: 400px;
  width: 100%;
  background-color: #fafafa;
  overflow: scroll;
  #vs-insert
    width: 100%;
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
```

</template>
</vuecode>
</box>


<box>

## Button

You can customize the component or element that initialize the dropdown in this case, it is a Button that is the most common

:::tip
  The component or element that initializes the dropdown is the one inside it with the possibility of total customization and flexibility in the required use
:::

:::tip
Vuesax uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://material.io/icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

```html
<vs-dropdown>
  <!-- element that initializes the dropdown -->

  <vs-dropdown-menu>
    <!-- items and elements within the menu or custom dropdown -->
  </vs-dropdown-menu>
</vs-dropdown>
```
:::

<vuecode md>
<template #demo>
<div>
  <Demos-DropDown-Button />
</div>
</template>
<template #code>

```html
<template lang="html">
  <div class="examplex">
    <vs-button class="btnx withDropdown" type="filled">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          option 1
        </vs-dropdown-item>
        <vs-dropdown-item>
          option 2
        </vs-dropdown-item>
        <vs-dropdown-group>
          <vs-dropdown-item>
            option 1
          </vs-dropdown-item>
          <vs-dropdown-item>
            option 2
          </vs-dropdown-item>

        </vs-dropdown-group>
        <vs-dropdown-item divider>
          option 3
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx withDropdown" type="success-gradient">Dropdown</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" type="success-gradient" icon="more_horiz"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          Home
        </vs-dropdown-item>
        <vs-dropdown-item>
          Contributors
        </vs-dropdown-item>
        <vs-dropdown-item divider>
          Logout
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>


    <vs-button class="btnx withDropdown" type="danger-line-down">Icons</vs-button>
    <vs-dropdown>
      <vs-button class="btn-drop" type="danger-line-down" icon="mood"></vs-button>
      <!-- <a href="#">Hola mundo</a> -->

      <vs-dropdown-menu>
        <vs-dropdown-item>
          <vs-icon class="" icon="mood"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon class="" icon="mood_bad"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon class="" icon="sentiment_dissatisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon class="" icon="sentiment_satisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon class="" icon="sentiment_very_dissatisfied"></vs-icon>
        </vs-dropdown-item>
        <vs-dropdown-item>
          <vs-icon class="" icon="sentiment_very_satisfied"></vs-icon>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  button
    margin: 0px !important;
    &.btnx
      height: 38px!important;
      margin-left: 10px !important;
      border-radius: 5px 0px 0px 5px;
    &.btn-drop
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid rgba(255, 255, 255,.2);
</style>
```

</template>
</vuecode>
</box>
