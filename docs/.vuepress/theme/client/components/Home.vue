<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
import {computed} from "vue";
import {useDarkMode} from "../composables";
import {usePageFrontmatter, withBase} from "@vuepress/client";
import {DefaultThemeHomePageFrontmatter} from "../../shared";
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const isDarkMode = useDarkMode()
const heroImage = computed(() => {
    if (!frontmatter.value.heroImage) {
      return null
    }

    return withBase(frontmatter.value.heroImage)
  })
</script>

<template>
  <main class="con-home vs-component">
   <HomeHero>
     <div class="contenedor">
        <HomeFeatures />
      </div>
   </HomeHero>
    <!--<HomeContent />
    <HomeFooter />-->
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
