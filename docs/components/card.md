---
API:
  - name: header
    type: slot
    parameters:
    description: slot header card
    default: null
  - name: footer
    type: slot
    parameters:
    description: slot footer card
    default: null
  - name: media
    type: slot
    parameters:
    description: slot image media
    default: null
  - name: extra-content
    type: slot
    parameters:
    description: slot extra contend and card
    default: null
  - name: fixed-height
    type: Boolean
    parameters:
    description: Set the card with 100% of height
    default: false
  - name: actionable
    type: Boolean
    parameters:
    description: Hover effect
    default: false
contributors:
  - fergardi
  - RodSwanston
---

# Card

<box header>

  Cards contain content and actions about a single subject.

</box>

<box>

## Default

To add a card we have the `vs-card` component, for the internal structure we use several **slots** (`header`, `footer`, `media`, ... )

<vuecode md>
<template #demo>
<div>
<vs-row vs-justify="center">
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
    <vs-card>
      <template v-slot:header>
        <h3>
          Hello world !
        </h3>
      </template>
      <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <template v-slot:footer>
        <vs-row vs-justify="flex-end">
          <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
          <vs-button color="primary" icon="turned_in_not"></vs-button>
          <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
        </vs-row>
      </template>
    </vs-card>
  </vs-col>
</vs-row>
</div>
</template>
<template #code>

```html
<vs-row vs-justify="center">
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
    <vs-card>
      <template v-slot:header>
        <h3>
          Hello world !
        </h3>
      </template>
      <template v-slot>
        <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
      </template>

      <template v-slot:footer>
        <vs-row vs-justify="flex-end">
          <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
          <vs-button color="primary" icon="turned_in_not"></vs-button>
          <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
        </vs-row>
      </template>
    </vs-card>
  </vs-col>
</vs-row>
```

</template>
</vuecode>
</box>

<box>

## Media

There are cases in which you need to add an image or video on the card so we have the `slot="media"`

<vuecode md>
<template #demo>
<div>
  <Demos-Card-Media />
</div>
</template>
<template #code>

```html
<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card2.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.cardx
  margin 15px
</style>
```

</template>
</vuecode>
</box>

<box>

## Fixed Height

If you need to set card with the same height, send the prop `fixed-height` and cards set to 100% of height.

<vuecode md>
<template #demo>
<div>
  <Demos-Card-FixedHeight />
</div>
</template>
<template #code>

```html
<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx" fixedHeight>
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card class="cardx" fixedHeight>
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card2.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.cardx
  margin 15px
</style>

```

</template>
</vuecode>
</box>

<box>

## Hover

You can add hover functionality with the property `actionable`

<vuecode md>
<template #demo>
<div>
    <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient">Delete</vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card2.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient" >Delete</vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
</div>
</template>
<template #code>

```html
<vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient">Delete</vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <template #header>
          <h3>
            Hello world !
          </h3>
        </template>
        <template #media>
          <img :src="$withBase('/card2.png')">
        </template>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <template #footer>
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient" >Delete</vs-button>
          </vs-row>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
```

</template>
</vuecode>
</box>





