<template>
  <ExternalLinkIcon>
    <span class="sr-only">{{ themeLocale.openInNewWindow }}</span>
  </ExternalLinkIcon>
</template>

<script setup lang="ts">
/**
 * Override the built-in `<OutboundLink>` for a11y
 */
/*import { OutboundLink as RawOutboundLink } from '@vuepress/plugin-external-link-icon'*/
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

const themeLocale = useThemeLocaleData()
</script>
