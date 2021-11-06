import { defineClientAppSetup } from '@vuepress/client';
import { setupDarkMode, setupSidebarItems } from '@vuepress/theme-default/lib/client/composables';
export default defineClientAppSetup(() => {
    setupDarkMode();
    setupSidebarItems();
});
