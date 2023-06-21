<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
import Contributors from './contributors.vue';
import Trofeos from './trofeos.vue';
import {computed} from "vue";
import {useDarkMode} from "../composables";
import {usePageFrontmatter, withBase} from "@vuepress/client";
import {DefaultThemeHomePageFrontmatter} from "../../shared";
import Partners from "./Partners.vue";
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const isDarkMode = useDarkMode()
const heroImage = computed(() => {
    if (!frontmatter.value.heroImage) {
      return null
    }

    return withBase(frontmatter.value.heroImage)
  })
const repo = computed(() => frontmatter.value.repo)
</script>

<template>
  <main class="con-home vs-component">
    <HomeHero>
      <div class="contenedor">
        <HomeFeatures/>
        <div class="contribuitors">
          <div class="con-contribuitors">
            <Contributors :title="'Contributors'" :repo="repo" contributors="all"/>
          </div>
          <div class="con-svg-trofeos">
            <Trofeos/>
          </div>
        </div>
      </div>
      <Partners/>
    </HomeHero>
    <!--<HomeContent />-->
    <HomeFooter />
  </main>
</template>

<style type="scss">
.con-home,
.con-contributors {
  //padding-right: 9rem;
  width: 100%;
}

@media only screen and (max-width: 1100px) {
  .con-home {
    padding-right: 0px;
  }
}
</style>
