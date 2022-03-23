<template>
  <nav v-if="prevNavLink || nextNavLink" class="page-nav content">
    <p class="inner">
      <span v-if="prevNavLink" class="prev">
        <NavLink :item="prevNavLink" />
      </span>

      <span v-if="nextNavLink" class="next">
        <NavLink :item="nextNavLink" />
      </span>
    </p>
  </nav>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isPlainObject, isString } from '@vuepress/shared'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type {
  DefaultThemeNormalPageFrontmatter,
  NavLink as NavLinkType,
  ResolvedSidebarItem,
} from '../../shared'
import { useNavLink, useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
import NavLink from './NavLink.vue'

/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (
  conf: unknown
): null | false | NavLinkType => {
  if (conf === false) {
    return null
  }

  if (isString(conf)) {
    return useNavLink(conf)
  }

  if (isPlainObject<NavLinkType>(conf)) {
    return conf
  }

  return false
}

/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (
  sidebarItems: ResolvedSidebarItem[],
  currentPath: string,
  offset: number
): null | NavLinkType => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath)
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset]
    if (!targetItem?.link) {
      return null
    }
    return targetItem as NavLinkType
  }

  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(
        item.children,
        currentPath,
        offset
      )
      if (childResult) {
        return childResult
      }
    }
  }

  return null
}

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()
const sidebarItems = useSidebarItems()
const route = useRoute()

const prevNavLink = computed(() => {
  const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev)
  if (prevConfig !== false) {
    return prevConfig
  }

  let childResult = resolveFromSidebarItems(sidebarItems.value, route.path, -1);

  if(childResult) {
     childResult.text = '< ' + childResult.text;
  }

  return childResult;
})

const nextNavLink = computed(() => {
  const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next)
  if (nextConfig !== false) {
    return nextConfig
  }

  let childResult = resolveFromSidebarItems(sidebarItems.value, route.path, 1);

  if(childResult) {
    childResult.text = childResult.text + ' >';
  }

  return childResult;
})
</script>

<style lang="scss">
.page-nav {
	&.content {
		padding-top: 1rem !important;
		padding-bottom: 0 !important;
		z-index: 10;
		.inner {
			min-height: 2rem;
			margin-top: 0 !important;
			padding-top: 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			span {
				float: left;
				cursor: pointer;
				a {
					background: #fff;
					padding: 4px 10px;
					transition: all 0.25s ease;
					text-transform: none !important;
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none !important;
					border-radius: 15px;
					color: rgba(0,0,0,0.6);
					border: 1px solid rgba(0,0,0,0.03);
					font-size: 0.85rem;
					i {
						font-size: 1rem !important;
					}
					&:hover {
						background: rgba(91,60,196,0.1);
						color: #5b3cc4;
						border: 1px solid rgba(91,60,196,0.3);
					}
				}
			}
		}
		.next {
			float: right;
			i {
				float: right;
			}
    }
    .prev, .next {
      display: flex;
    }
	}
}
@media (max-width: 550px) {
  .page-nav {
    &.content {
      span {
        font-size: 12px !important;
      }
    }
  }
}
</style>
