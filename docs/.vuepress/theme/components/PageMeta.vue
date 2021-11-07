<template>
  <footer class="page-meta content">
    <div v-if="editNavLink" class="meta-item edit-link content">
      <NavLink class="meta-item-label" :item="editNavLink" />
      <OutboundLink/>
    </div>

    <div v-if="lastUpdated" class="meta-item last-updated">
      <span class="meta-item-label">{{ themeLocale.lastUpdatedText }}: </span>
      <span class="meta-item-info">{{ lastUpdated }}</span>
    </div>

    <div
      v-if="contributors && contributors.length"
      class="meta-item contributors"
    >
      <span class="meta-item-label">{{ themeLocale.contributorsText }}: </span>
      <span class="meta-item-info">
        <template v-for="(contributor, index) in contributors" :key="index">
          <span class="contributor" :title="`email: ${contributor.email}`">
            {{ contributor.name }}
          </span>
          <template v-if="index !== contributors.length - 1">, </template>
        </template>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  usePageData,
  usePageFrontmatter,
  useSiteLocaleData,
} from '@vuepress/client'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {
  DefaultThemeNormalPageFrontmatter,
  DefaultThemePageData,
  NavLink as NavLinkType,
} from '../../shared'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import { resolveEditLink } from '@vuepress/theme-default/lib/client/utils'
import NavLink from './NavLink.vue'

const useEditNavLink = (): ComputedRef<null | NavLinkType> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<DefaultThemePageData>()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

  return computed(() => {
    const showEditLink =
      frontmatter.value.editLink ?? themeLocale.value.editLink ?? true
    if (!showEditLink) {
      return null
    }

    const {
      repo,
      docsRepo = repo,
      docsBranch = 'main',
      docsDir = '',
      editLinkText,
    } = themeLocale.value

    if (!docsRepo) return null

    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern:
        frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern,
    })

    if (!editLink) return null

    return {
      text: editLinkText ?? 'Edit this page',
      link: editLink,
    }
  })
}

const useLastUpdated = (): ComputedRef<null | string> => {
  const siteLocale = useSiteLocaleData()
  const themeLocale = useThemeLocaleData()
  const page = usePageData<DefaultThemePageData>()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

  return computed(() => {
    const showLastUpdated =
      frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true

    if (!showLastUpdated) return null

    if (!page.value.git?.updatedTime) return null

    const updatedDate = new Date(page.value.git?.updatedTime)

    return updatedDate.toLocaleString(siteLocale.value.lang)
  })
}

const useContributors = (): ComputedRef<
  null | Required<DefaultThemePageData['git']>['contributors']
> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<DefaultThemePageData>()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

  return computed(() => {
    const showContributors =
      frontmatter.value.contributors ?? themeLocale.value.contributors ?? true

    if (!showContributors) return null

    return page.value.git?.contributors ?? null
  })
}

const themeLocale = useThemeLocaleData()
const editNavLink = useEditNavLink()
const lastUpdated = useLastUpdated()
const contributors = useContributors()
</script>


<style lang="scss">
.edit-link {
	&.content {
		padding: 1rem 2rem !important;
		padding-top: 0 !important;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 10;
		a {
			margin-top: 0px !important;
			margin-right: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #807b9f;
		}
	}
}

@media (max-width: 550px) {
  .edit-link {
    text-align: center;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>