import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
//import Badge from './components/global/Badge.vue';
//import CodeGroup from './components/global/CodeGroup';
//import CodeGroupItem from './components/global/CodeGroupItem.vue';
import OutboundLink from './components/global/OutboundLink.vue';
import { useScrollPromise } from '@vuepress/theme-default/lib/client/composables';
import './styles/theme.scss';
import vueThemes from './vueThemes';
import themeConfig from './themeConfig';
import tooltip from './directives/tooltip.js';
import "./styles/tooltip.css";
export default defineClientAppEnhance(({ app, router }) => {
    app.component('OutboundLink', OutboundLink);

    app.directive("tooltip", tooltip);

    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
        await useScrollPromise().wait();
        return scrollBehavior(...args);
    };
    app.config.globalProperties.$vueThemes = vueThemes;
    app.config.globalProperties.$themeConfig = themeConfig;
});
