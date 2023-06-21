<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared/index.js'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})
const github = computed(() => frontmatter.value.github)
</script>

<template>
  <div v-if="features.length" class="features">
    <div v-for="feature in features" :key="feature.title" class="feature">
      <div class="con-text-feature">
        <h2 v-html="feature.title"/>
        <p v-html="feature.details"/>
        <div v-if="feature.button" class="con-btns-features">
          <button type="button" name="button">
                  <router-link
                    class="nav-link"
                    :to="feature.button.link"
                    :exact="feature.button.link === '/'"
                  >{{ feature.button.text ? feature.button.text : 'see more' }}
                  </router-link>
                </button>
                <!-- <button v-if="feature.github" type="button" name="button"> -->
                <a target="_blank" class="flaticon-github githubx" :href="github" rel="noopener noreferrer"></a>
                <!-- </button> -->
        </div>
      </div>
      <div class="con-img-feature">
        <component v-if="feature.component" :is="feature.component"></component>
      </div>
    </div>
  </div>
</template>
