<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { useToggle } from '@vueuse/core'
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ResolvedSidebarItem } from '../../shared/index.js'
import { isActiveSidebarItem } from '../utils/index.js'

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

const isOpenDefault = computed(() =>
  item.value.collapsible ? isActive.value : true
)
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  if (item.value.collapsible) {
    e.preventDefault()
    // toggle open status on click
    toggleIsOpen()
  }
}

// reset open status after navigation
const unregisterRouterHook = router.afterEach((to) => {
  nextTick(() => {
    isOpen.value = isOpenDefault.value
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})
</script>

<template>
  <li :class="{
      'sidebar-group': item.children?.length > 0
  }">
    <AutoLink v-if="item.link" :class="itemClass" :item="item" />
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span
        v-if="item.collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen" class="sidebar-item-children">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </DropdownTransition>
  </li>
</template>

<style lang="scss">
@use '../styles/config' as *;

.span-new-update {
	position: absolute;
	right: 5px;
	background: $accentColor;
	color: #fff;
	font-size: 10px;
	font-weight: lighter !important;
	border-radius: 5px;
	padding-bottom: 2px;
	padding-left: 4px;
	padding-right: 4px;
	line-height: 15px;
	top: 50%;
	transform: translate(0, -50%);
	text-transform: capitalize;
}
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
		display: none;
	}
}
a {
	&.sidebar-item {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-item {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-item {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: 500;
				opacity: 1 !important;
			}
		}
	}
}

//group
.sidebar-group {
	&:not(.first) {
		margin-top: 1em;
	}
	.sidebar-group {
		padding-left: 0.5em;
	}
	&:not(.collapsable) {
		.sidebar-heading {
			cursor: auto;
			color: inherit;
		}
	}
}
.sidebar-heading {
	color: #999;
	transition: color 0.15s ease;
	cursor: pointer;
	font-size: 1.1em;
	padding-left: 1.5rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
	.arrow {
		position: relative;
		top: -0.12em;
		left: 0.5em;
	}
	&.open {
		.arrow {
			top: -0.18em;
		}
	}
}
.sidebar-heading.open,
.sidebar-heading:hover {
	color: inherit;
}
.sidebar-item-children {
	transition: height 0.1s ease-out;
	overflow: hidden;
}
//group map
.sidebar-group {
	&:not(.first) {
		margin-top: 1em;
	}
	.sidebar-group {
		padding-left: 0.5em;
	}
	&:not(.collapsable) {
		.sidebar-heading {
			cursor: auto;
			color: inherit;
		}
	}
}
.sidebar-heading {
	color: #999;
	transition: color 0.15s ease;
	cursor: pointer;
	font-size: 1.1em;
	padding-left: 1.5rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
	.arrow {
		position: relative;
		top: -0.12em;
		left: 0.5em;
	}
	&.open {
		.arrow {
			top: -0.18em;
		}
	}
}
.sidebar-heading.open,
.sidebar-heading:hover {
	color: inherit;
}
.sidebar-item-children {
	transition: height 0.1s ease-out;
	overflow: hidden;
}

//link
.span-new-update {
	position: absolute;
	right: 5px;
	background: $accentColor;
	color: #fff;
	font-size: 10px;
	font-weight: lighter !important;
	border-radius: 5px;
	padding-bottom: 2px;
	padding-left: 4px;
	padding-right: 4px;
	line-height: 15px;
	top: 50%;
	transform: translate(0, -50%);
	text-transform: capitalize;
}
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
		display: none;
	}
}
a {
	&.sidebar-item {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-item {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-item {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: 500;
				opacity: 1 !important;
			}
		}
	}
}

// link map
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
	}
}
a {
	&.sidebar-item {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-item {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-item {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: bold;
				opacity: 1 !important;
			}
		}
	}
}

//sidebar map
.no-sidebar {
	.sidebar-map {
		background: transparent;
	}
	.notiads {
		box-shadow: none;
	}
}
.sidebar-map {
	position: fixed;
	right: 0px;
	background-color: #fdfdfd;
	z-index: 1000;
	bottom: 0px;
	top: $navbarHeight;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	.sidebar-items-map {
		width: 7.5rem;
		.sidebar-item-children {
			& > li {
				& > a {
					display: none;
				}
			}
			.sidebar-item {
				&.active {
					border-left: 1px solid #000;
					color: #000;
					font-weight: bold;
				}
			}
		}
	}
	.con-carbon-noti {
		width: 9rem;
		position: relative;
		height: 100%;
	}
	ul {
		width: 100%;
		padding-left: 0px;
	}
	li {
		list-style: none;
		position: relative;
		display: block;
		.sidebar-item {
			padding: 5px;
			padding-left: 10px;
			font-size: 0.7rem;
		}
	}
	.sidebar-group {
		margin-top: 0px;
		.sidebar-item-children {
			padding-top: 0px;
			padding-bottom: 0px;
		}
	}
}

@media only screen and (max-width: 1100px) {
    .notiads {
        .btn-patreon {
            display: none !important;
        }
    }
    .c-sidebar-map {
        display: none;
    }
    .sidebar {
        .sidebar-sub-headers {
            display: block !important;
        }
    }
    .page {
        width: 100%;
        padding-right: 0px !important;
    }
    .sidebar-map {
        width: calc(100% - $sidebarWidth);
        height: 140px;
        position: relative;
        margin-left: $sidebarWidth;
        .notiads {
            box-shadow: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.03);
            padding-left: 30px;
            box-shadow: none !important;
            border-bottom: 1px solid rgba(0,0,0,0);
        }
    }
    .carbon {
        margin-bottom: 0px !important;
        width: 330px;
        .carbon-wrap {
            display: flex;
            .carbon-text {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: left;
            }
        }
        .carbon-img {
            img {
                width: auto !important;
            }
        }
    }
    .con-carbon-noti {
        width: 100% !important;
        .notiads {
            flex-direction: row;
        }
        .sponsor-special {
            margin-left: 10px;
            width: auto !important;
            padding: 0px !important;
            h4 {
                display: none;
            }
        }
    }
    .no-sidebar {
        .sidebar-map {
            .notiads {
                padding-left: 30px;
                box-shadow: none !important;
                border-bottom: 1px solid rgba(0,0,0,0);
            }
        }
        .carbon {
            margin-bottom: 0px !important;
            width: 330px;
            .carbon-wrap {
                display: flex;
                .carbon-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: left;
                }
            }
            .carbon-img {
                img {
                    width: auto !important;
                }
            }
        }
        .con-carbon-noti {
            width: 100%;
            .notiads {
                flex-direction: row;
            }
            .sponsor-special {
                margin-left: 10px;
                width: auto !important;
                padding: 0px !important;
                h4 {
                    display: none;
                }
            }
        }
        .c-sidebar-map {
            display: none;
        }
    }
}

@media only screen and (max-width: 400px) {
  .sidebar-map {
        height: auto;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .notiads {
        position: relative;
        display: block;
        .sponsor-special {
            display: none;
        }
        .carbon {
            width: 100%;
            margin-top: 5px;
            img {
                max-width: 100px !important;
            }
        }
    }
}


</style>
