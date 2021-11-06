<template>
  <RawOutboundLink>
    <span class="sr-only">{{ themeLocale.openInNewWindow }}</span>
  </RawOutboundLink>
</template>

<script setup lang="ts">
/**
 * Override the built-in `<OutboundLink>` for a11y
 */
import { OutboundLink as RawOutboundLink } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

const themeLocale = useThemeLocaleData()
</script>
