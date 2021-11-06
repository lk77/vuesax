<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page">
      <transition name="pagex" v-if="frontmatter.home">
        <Home/>
      </transition>

      <transition v-else name="homex">
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, ref, Transition } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import Page from '../components/Page.vue'
import Sidebar from '../components/Sidebar.vue'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '@vuepress/theme-default/lib/client/composables'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<style lang="scss">
  .homex-enter-active,
  .homex-leave-active {
    transition: all 0.25s;
  }
  .homex-enter {
    opacity: 0;
    position: absolute !important;
    transform: translate(-100%) !important;
    .logo-g {
      opacity: 0;
      position: absolute !important;
      transform: translate(0, -100%) !important;
    }
  }
  .homex-leave-to {
    opacity: 0;
    transform: translate(100%) !important;
    position: absolute !important;
    .logo-g {
      opacity: 0;
      transform: translate(0, 100%) !important;
      position: absolute !important;
    }
  }
  .homex-enter-active .logo-g,
  .homex-leave-active .logo-g {
    transition: all 0.25s 0.3s;
  }
  .pagex-enter-active,
  .pagex-leave-active {
    transition: all 0.25s;
  }
  .pagex-enter {
    opacity: 0;
    position: absolute !important;
    transform: translate(-100%) !important;
  }
  .pagex-leave-to {
    opacity: 0;
    position: absolute !important;
    transform: translate(100%) !important;
  }
  .pagex-enter-active .sidebar,
  .pagex-leave-active .sidebar {
    transition: all 0.25s 0.3s;
  }

@media only screen and (max-width: 1100px) {
  .con-contributors {
    width: 100% !important;
    padding-right: 0px;
    padding: 10px;
  }
}
</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="css">
	/*
  	Flaticon icon font: Flaticon
  	Creation date: 24/04/2018 20:17
  	*/

@font-face {
  font-family: "Flaticon";
  src: url("../icons/font/Flaticon.eot");
  src: url("../icons/font/Flaticon.eot?#iefix") format("embedded-opentype"),
       url("../icons/font/Flaticon.woff") format("woff"),
       url("../icons/font/Flaticon.ttf") format("truetype"),
       url("../icons/font/Flaticon.svg#Flaticon") format("svg");
  font-weight: normal;
  font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: "Flaticon";
    src: url("../icons/font/Flaticon.svg#Flaticon") format("svg");
  }
}

[class^="flaticon-"]:before, [class*=" flaticon-"]:before,
[class^="flaticon-"]:after, [class*=" flaticon-"]:after {
  font-family: Flaticon;
        font-size: 21px;
font-style: normal;
}

.flaticon-instagram:before { content: "\f100"; }
.flaticon-dribbble:before { content: "\f101"; }
.flaticon-paypal:before { content: "\f102"; }
.flaticon-slack:before { content: "\f103"; }
.flaticon-reddit:before { content: "\f104"; }
.flaticon-twitch:before { content: "\f105"; }
.flaticon-vimeo:before { content: "\f106"; }
.flaticon-github:before { content: "\f107"; }
.flaticon-behance:before { content: "\f108"; }
.flaticon-pinterest:before { content: "\f109"; }
.flaticon-snapchat:before { content: "\f10a"; }
.flaticon-linkedin:before { content: "\f10b"; }
.flaticon-googlePlus:before { content: "\f10c"; }
.flaticon-youtube:before { content: "\f10d"; }
.flaticon-twitter:before { content: "\f10e"; }
.flaticon-facebook:before { content: "\f10f"; }

</style>