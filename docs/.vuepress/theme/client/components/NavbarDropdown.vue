<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs, watch } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import type { NavbarItem, ResolvedNavbarItem } from '../../shared/index.js'

const props = defineProps({
  item: {
    type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
    required: true,
  },
})

const { item } = toRefs(props)

const dropdownAriaLabel = computed(
  () => item.value.ariaLabel || item.value.text
)

const open = ref(false)
const route = useRoute()
watch(
  () => route.path,
  () => {
    open.value = false
  }
)

/**
 * Open the dropdown when user tab and click from keyboard.
 *
 * Use event.detail to detect tab and click from keyboard.
 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
 */
const handleDropdown = (value = null): void => {
  if(value !== null) {
    open.value = value;
  } else {
    open.value = !open.value
  }
}

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
  arr[arr.length - 1] === item
</script>

<template>
  <div class="navbar-dropdown-wrapper" :class="{ open }">
    <a class="navbar-dropdown-title" @mouseenter="handleDropdown(true)" @click="handleDropdown">
      <span class="title">{{ item.text }}</span>
      <!-- <span class="arrow" :class="open ? 'down' : 'right'"></span> -->
      <vs-icon class="" icon="keyboard_arrow_down"></vs-icon>
    </a>

<!--    <button
      class="navbar-dropdown-title-mobile"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="open = !open"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>-->

    <DropdownTransition>
      <ul v-show="open" class="navbar-dropdown">
        <li
          v-for="child in item.children"
          :key="child.text"
          class="navbar-dropdown-item"
        >
          <template v-if="child.children">
            <h4 class="navbar-dropdown-subtitle">
              <AutoLink
                v-if="child.link"
                :item="child"
                @focusout="
                  isLastItemOfArray(child, item.children) &&
                    child.children.length === 0 &&
                    (open = false)
                "
              />

              <span v-else>{{ child.text }}</span>
            </h4>

            <ul class="navbar-dropdown-subitem-wrapper">
              <li
                v-for="grandchild in child.children"
                :key="grandchild.link"
                class="navbar-dropdown-subitem"
              >
                <AutoLink
                  :item="grandchild"
                  @focusout="
                    isLastItemOfArray(grandchild, child.children) &&
                      isLastItemOfArray(child, item.children) &&
                      (open = false)
                  "
                />
              </li>
            </ul>
          </template>

          <template v-else>
            <AutoLink
              :item="child"
              @focusout="
                isLastItemOfArray(child, item.children) && (open = false)
              "
            />
          </template>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<style lang="scss">
@use '../styles/config' as *;

.navbar-dropdown-wrapper {
	.navbar-dropdown-title {
		display: flex;
		align-items: center;
		justify-content: center;
		i {
			transition: all 0.25s ease;
		}
		&:hover {
			i {
				transform: rotate(180deg);
			}
		}
	}
	.navbar-dropdown {
		.navbar-dropdown-item {
			color: inherit;
			line-height: 1.5rem;
			h4 {
				margin: 0.45rem 0 0;
				border-top: 1px solid #eee;
				padding: 0.45rem 1.5rem 0 1.25rem;
			}
			.navbar-dropdown-subitem-wrapper {
				padding: 0;
				list-style: none;
				.navbar-dropdown-subitem {
					font-size: 0.9em;
				}
			}
			a {
				display: block;
				height: 1.5rem;
				line-height: 1.5rem;
				position: relative;
				border-bottom: none;
				font-weight: 400;
				margin-bottom: 0;
				padding: 0 1.5rem 0 1.25rem;
				font-size: 0.75rem;
				&:hover {
					color: $accentColor;
				}
				&.router-link-active {
					color: $accentColor;
					&::after {
						content: "";
						width: 0;
						height: 0;
						border-left: 5px solid $accentColor;
						border-top: 3px solid transparent;
						border-bottom: 3px solid transparent;
						position: absolute;
						top: calc(50% - 2px);
						left: 9px;
					}
				}
			}
			&:first-child {
				h4 {
					margin-top: 0;
					padding-top: 0;
					border-top: 0;
				}
			}
		}
	}
}


@media (max-width: $MQMobile) {
  .navbar-dropdown-wrapper {
    &.open {
      .navbar-dropdown-title {
        margin-bottom: 0.5rem;
      }
    }
    .navbar-dropdown {
      transition: all 0.1s ease-out;
      .navbar-dropdown-item {
        h4 {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }
        .navbar-dropdown-subitem {
          font-size: 14px;
          padding-left: 1rem;
        }
      }
    }
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item h4,
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item > a {
    font-size: 15px;
    height: 2rem;
    line-height: 2rem;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item h4::after,
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item > a::after {
    display: none !important;
  }
}
@media (min-width: $MQMobile) {
  .navbar-dropdown-wrapper {
    height: 3rem;
    &:hover {
      .navbar-dropdown {
        visibility: visible !important;
        transform: translate(0) !important;
        opacity: 1 !important;
      }
    }
    .navbar-dropdown-title {
      .arrow {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid $arrowBgColor;
        border-bottom: 0;
      }
    }
    .navbar-dropdown {
      visibility: hidden;
      opacity: 0;
      transform: translate(0, -10px);
      height: auto !important;
      box-sizing: border-box;
      max-height: calc(100vh - 2.7rem);
      overflow-y: auto;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #fff;
      padding: 0.6rem 0;
      box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.06);
      text-align: left;
      border-radius: 0px 0px 8px 8px;
      white-space: nowrap;
      margin: 0;
      transition: all 0.3s ease;
      a {
        &::after {
          display: none !important;
        }
      }
    }
  }
}

</style>
