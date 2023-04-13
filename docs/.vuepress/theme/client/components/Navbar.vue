<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, onMounted, ref } from 'vue'
import { useThemeLocaleData } from '../composables/index.js'
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
        (navbarBrand.value?.offsetWidth || 0)
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
<!--    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />-->

    <span ref="navbarBrand" class="con-btns-header">
      <NavbarBrand class="home-link" style="min-width:140px"/>
      <div :class="{'linksColor':!home}" class="navbar-items-wrapper" :style="linksWrapperStyle">
        <slot name="before" />
        <NavbarItems class="can-hide" />
        <slot name="after" />
<!--        <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />-->
        <!--<NavbarSearch />-->
      </div>
    </span>
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
		border-left: 1px solid rgba(0,0,0,0.05);
		border-right: 1px solid rgba(0,0,0,0.05);
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
	box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.04) !important;
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
    padding-left: 3rem;
    .can-hide {
      display: none;
    }
  }
}
</style>
