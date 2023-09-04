<script setup lang="ts">
  import NavbarBrand from '@theme/NavbarBrand.vue'
  import NavbarItems from '@theme/NavbarItems.vue'
  import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
  import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
  import {computed, onMounted, ref} from 'vue'
  import {useThemeLocaleData} from '../composables/index.js'
  import {usePageFrontmatter, withBase} from "@vuepress/client";
  import NavbarLinks from "../../../../../olddocs/.vuepress/theme/components/NavbarLinks.vue";
  import ToggleDarkModeButton from "../../../../../olddocs/.vuepress/theme/components/ToggleDarkModeButton.vue";
  import {DefaultThemeHomePageFrontmatter} from "../../shared";

  const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()

  defineEmits(['toggle-sidebar'])

  const themeLocale = useThemeLocaleData()

  const navbar = ref<HTMLElement | null>(null)
  const navbarBrand = ref<HTMLElement | null>(null)

  const linksWrapperMaxWidth = ref(0)
  const linksWrapperStyle = computed(() => {
    if (!linksWrapperMaxWidth.value) {
      return {}
    }
    return {
      maxWidth: linksWrapperMaxWidth.value + 'px',
    }
  })
  const home = computed(() => frontmatter.value.home);
  const repoLink = computed(() => themeLocale.value.repoLink);

  // avoid overlapping of long title and long navbar links
  onMounted(() => {
    // TODO: migrate to css var
    // refer to _variables.scss
    const MOBILE_DESKTOP_BREAKPOINT = 719
    const navbarHorizontalPadding =
      getCssValue(navbar.value, 'paddingLeft') +
      getCssValue(navbar.value, 'paddingRight')
    const handleLinksWrapWidth = (): void => {
      if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
        linksWrapperMaxWidth.value = 0
      } else {
        linksWrapperMaxWidth.value =
          navbar.value!.offsetWidth -
          navbarHorizontalPadding -
          Math.min(150, (navbarBrand.value?.offsetWidth || 0))
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    window.addEventListener('orientationchange', handleLinksWrapWidth, false)
  })

  function getCssValue(el: HTMLElement | null, property: string): number {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
      property
      ]
    const num = Number.parseInt(val, 10)
    return Number.isNaN(num) ? 0 : num
  }
</script>

<template>
  <header :class="{'shadow':true}" ref="navbar" class="navbar">
    <div class="sidebar-button" @click="$emit('toggle-sidebar')" style="display:none">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon">
        <path fill="currentColor"
              d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
      </svg>
    </div>
    <!--  <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />-->
    <span ref="navbarBrand" class="con-btns-header">
      <NavbarBrand class="home-link" style="min-width:140px"/>
      <div :class="{'linksColor':!home}" class="navbar-items-wrapper" :style="linksWrapperStyle">
        <slot name="before"/>
        <NavbarItems class="can-hide"/>
        <slot name="after"/>
        <!--        <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />-->
        <!--<NavbarSearch />-->
      </div>
    </span>

    <div class="con-redes-download" style="margin-left: auto;">
      <a
        title="Github"
        v-if="repoLink"
        :href="repoLink"
        class="repo-link flaticon-github"
        target="_blank"
        rel="noopener noreferrer">
        <!-- {{ repoLabel }} -->
        <!-- <OutboundLink/> -->
      </a>
      <a target="_blank" title="@vuesax" href="https://twitter.com/vuesax">
        <vs-icon class="flaticon-twitter twitterx" icon=""></vs-icon>
      </a>
      <!--<a target="_blank" title="Discord" class="icon-discord" href="https://discord.gg/6AZNXEa">
        <svg v-if="data.mounted" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
      </a>-->

      <!--<a href="https://github.com/lusaxweb/lk77/releases/download/v3.8.61/vuesax-3.8.61.zip" class="btn-download">
        <vs-icon class="" icon="get_app"></vs-icon>
        <span>Download</span>
      </a>-->

      <!--<div title="Change Color Primary" v-if="!$page.frontmatter.home" class="con-colors-input">
        <div :style="{
          'box-shadow': '0px 5px 20px -4px rgba(var(--vs-primary),.9)',
          'background': 'rgb(var(--vs-primary))'}" class="con-inputx-c">
          <input @change="changeColor($event.target.value)" type="color" name="" :value="color">
        </div>
      </div>-->

      <!--<btnApps />-->
    </div>
  </header>
</template>

<style lang="scss">
  @use '../styles/config' as *;

  .st0 {
    fill: #5b5777;
  }

  .icon-discord {
    position: relative;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  .con-redes-download {
    display: flex;
    align-items: center;
    justify-content: center;

    .twitterx {
      &:before {
        font-size: 1.2rem !important;
      }
    }

    .repo-link {
      &:before {
        font-size: 1.2rem !important;
      }
    }

    a {
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding: 0px 4px;
      transition: all 0.25s ease;
      color: #5b5777;
    }

    .btn-download {
      padding: 12px 10px;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid rgba(0, 0, 0, 0.05);
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      margin-left: 5px;
      cursor: pointer;

      span {
        margin-left: 5px;
      }
    }
  }

  .con-inputx-c {
    overflow: hidden;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    box-shadow: 0px 0px;
  }

  .con-colors-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    input {
      border: 0px;
      background: transparent;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .shadow {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.04) !important;
  }

  .logo {
    transition: all 0.3s ease;
  }

  .visible {
    opacity: 1;
    transform: translate(0);
  }

  .navbar {
    height: 3rem !important;
    padding: 0.4rem 1rem;
    line-height: 1.5rem;
    position: fixed;
    background: #fff;
    z-index: 1200 !important;
    width: calc(100% + 7px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      font-size: 1rem;
    }

    .home-link {
      margin-left: 2.5rem;
      margin-right: 3.5rem;
    }

    .con-btns-header {
      display: flex;
      align-items: center;
    }

    .logo {
      height: 2.3rem;
      vertical-align: top;
    }

    .site-name {
      font-size: 1.3rem;
      display: none;
      font-weight: 600;
      color: #5b5777;
      position: relative;
    }

    .navbar-items-wrapper {
      font-size: 0.9rem;
      position: relative;
      top: 0rem;
      transition: all 0.2s ease;
    }
  }

  .navbar a,
  .navbar span,
  .navbar img {
    display: block;
  }

  @media (max-width: $MQMobile) {
    .navbar-items-wrapper {
      line-height: 48px;
    }
    .navbar {
      padding-left: 1rem;

      .can-hide {
        display: none;
      }
    }
  }
</style>
