<template>
  <main class="page">
    <slot name="top" />

    <transition name="contentx">
      <div class="content">
        <Content class="content-pagex" :custom="false"/>
      </div>
      
    </transition>

    <!--<PageMeta />

    <PageNav />-->


    <!--<div class="content edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink/>
    </div>
    <div class="content con-api">
      <api />
      <contributors title="Contributors" :repo="this.$site.themeConfig.repo" :contributors="this.$page.frontmatter.contributors"/>
    </div>
    <div class="content page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">

          <router-link v-if="prev" class="prev" :to="prev.path">
            <vs-icon class="" icon="keyboard_arrow_left"></vs-icon>
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
            <vs-icon class="" icon="keyboard_arrow_right"></vs-icon>
          </router-link>


        </span>
      </p>
    </div>-->
    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import PageMeta from './PageMeta.vue'
import PageNav from './PageNav.vue'
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { computed, onMounted, reactive } from 'vue'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  console.log(frontmatter);

  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

console.log(frontmatter);
</script>
