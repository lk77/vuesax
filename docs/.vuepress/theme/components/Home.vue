<template>
  <main class="con-home vs-component" :aria-labelledby="heroText ? 'main-title' : undefined">

    <div class="logo-g">
      <img v-if="heroImage" :src="heroImage" alt="hero">
    </div>

    <div class="home">
      <div v-if="heroImage && data.mounted" :class="{'doc-activo':data.doc}" class="doc-img">
        <img :src="heroImage" alt="">
      </div>
      <div v-if="data.mounted" :class="{'git-activo':data.git}" class="flaticon-github git-img">

      </div>
      <div :class="{'git-activo':data.discord}" class="doc-img">
        <img v-if="data.mounted" :src="$withBase('/Discord-Logo-White.svg')" alt="">
      </div>
      <div :class="{'homeBackgroundComponent':heroBackgroundComponent}" class="home-init">
        <component class="heroBackgroundComponent" :is="heroBackgroundComponent" v-if="data.mounted"></component>
        <header class="hero">
          <!--<img v-if="heroImage" :src="heroImage" :alt="heroAlt" class="hero-image"/>-->
          <!--<div class="flaticon-github git-img"></div>-->

          <h1 v-if="heroText" id="main-title" v-html="heroText"></h1>

          <p v-if="tagline" class="description" v-html="tagline"></p>

          <p class="actions">
            <!-- {{data.vueThemes.actionsLinks}} -->
          <ul>
            <li @mouseenter="data.doc=true" @mouseleave="data.doc=false" v-for="action in actions">
              <router-link
                class="nav-link"
                :to="action.link"
                :exact="action.link === '/'"
              >{{ action.text }}
              </router-link>
            </li>
            <li @mouseenter="data.discord=true" @mouseleave="data.discord=false">
              <a
                target="_blank"
                href="https://discord.gg/6AZNXEa"
                class="nav-link discord-link"
                rel="noopener noreferrer"
              >
                <img v-if="data.mounted" :src="$withBase('/Discord-Logo-White.png')" alt="" style="height:25px!important">
                Discord
              </a>
            </li>
            <li class="starx">
              <a @mouseenter="data.git=true" @mouseleave="data.git=false" class="flaticon-github fgithub" :href="$vueThemes.github">
                <span class="stargazers_count">{{ data.star }}</span>
              </a>
            </li>

          </ul>
          </p>
        </header>
      </div>

      <div class="contenedor">
        <div class="features" v-if="features && features.length">
          <div class="feature" v-for="feature in features">
            <div class="con-text-feature">
              <h2 v-html="feature.title"></h2>
              <p v-html="feature.details"></p>
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
                <a target="_blank" class="flaticon-github githubx" :href="$vueThemes.github" rel="noopener noreferrer"></a>
                <!-- </button> -->
              </div>
            </div>
            <div class="con-img-feature">
              <component v-if="feature.component" :is="feature.component"></component>
              <img v-if="feature.img && data.mounted" :src="$withBase(heroImage)" alt="">
            </div>
          </div>
        </div>

        <!--<HomeTemplates/>-->

        <div class="contribuitors">
          <div class="con-contribuitors">
            <contributors :title="'Contributors'" :repo="$themeConfig.repo" contributors="all"/>
          </div>
          <div class="con-svg-trofeos">
            <trofeos/>
          </div>
        </div>

        <div class="theme-default-content custom">
          <Content/>
        </div>

        <!--<template v-if="footer">
          <-- eslint-disable-next-line vue/no-v-html -->
        <!--<div v-if="footerHtml" class="footer" v-html="footer" />
        <div v-else class="footer" v-text="footer" />
      </template>-->


      </div>

      <Partners/>

    </div>

    <Footer/>
  </main>
</template>

<script setup lang="ts">
  import {usePageFrontmatter, useSiteLocaleData, withBase,} from '@vuepress/client'
  import {isArray} from '@vuepress/shared'
  import {computed, onMounted, reactive} from 'vue'
  import type {DefaultThemeHomePageFrontmatter} from '@vuepress/theme-default/lib/shared';
  import trofeos from './trofeos.vue'
  import NavLink from './NavLink.vue'
  import Footer from './Footer.vue'
  import contributors from './contributors.vue'
  //import homePatreons from './homePatreons.vue'
  //import homeTemplates from './HomeTemplates.vue'
  import Partners from './Partners.vue'

  const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
  const siteLocale = useSiteLocaleData()

  // hero image and title
  const heroImage = computed(() => {
    if (!frontmatter.value.heroImage) {
      return null
    }

    return withBase(frontmatter.value.heroImage)
  })
  const heroText = computed(() => {
    if (frontmatter.value.heroText === null) {
      return null
    }
    return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
  })
  const heroBackgroundComponent = computed(() => {
    if (frontmatter.value.heroBackgroundComponent === null) {
      return null
    }
    return frontmatter.value.heroBackgroundComponent || 'city'
  })
  const heroAlt = computed(
    () => frontmatter.value.heroAlt || heroText.value || 'hero'
  )
  const tagline = computed(() => {
    if (frontmatter.value.tagline === null) {
      return null
    }
    return (
      frontmatter.value.tagline ||
      siteLocale.value.description ||
      'Welcome to your VuePress site'
    )
  })

  // action buttons
  const actions = computed(() => {
    if (!isArray(frontmatter.value.vueThemes.actionsLinks)) {
      return []
    }

    return frontmatter.value.vueThemes.actionsLinks.map(({text, link, type = 'primary'}) => ({
      text,
      link,
      type,
    }))
  })

  // feature list
  const features = computed(() => {
    if (isArray(frontmatter.value.features)) {
      return frontmatter.value.features
    }
    return []
  })

  const star = computed(() => {
    if (isArray(frontmatter.value.features)) {
      return frontmatter.value.features
    }
    return []
  })

  const data = reactive({
    star: 0,
    git: false,
    doc: false,
    discord: false,
    mounted: false
  });

  onMounted(() => {
    fetch('https://api.github.com/repos/lusaxweb/vuesax')
      .then(response => response.json())
      .then(json => {
        data.star = json.stargazers_count
      });
    data.mounted = true;
  })

  // footer
  const footer = computed(() => frontmatter.value.footer)
  const footerHtml = computed(() => frontmatter.value.footerHtml)
</script>

<style lang="scss">
@use '../styles/config' as *;

.contribuitors {
  display: flex;
  align-items: center;
  justify-content: center;

  .con-svg-trofeos {
    display: block;
    width: 460px;
    margin-left: 30px;
    min-width: 460px;
  }
}

.doc-img {
  position: absolute;
  transform: translate(-5%);
  opacity: 0;
  transition: all 0.3s ease;

  & > img {
    width: 50vw;
    filter: grayscale(100%);
    opacity: 0.08;
  }
}

.githubx {
  padding: 0px;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  margin-left: 0px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $accentColor;
  color: #fff !important;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 10px 0px $accentColor;
  }
}

.doc-activo {
  opacity: 1 !important;
  transform: translate(0%);
}

.git-img {
  opacity: 0;
  transition: all 0.25s ease;
  transform: translate(-5%);

  &:before {
    font-size: 60rem !important;
    position: absolute;
    left: 100px;
    top: 0px;
    color: #f7f7f7;
  }
}

.git-activo {
  opacity: 1;
  transform: translate(0%) rotate(0deg);
}

.oculto-img {
  transform: translate(0, -100%) !important;
  opacity: 0 !important;
}

.logo-g {
  margin-left: 30px;
  padding: 10px;
  top: -10px;
  display: block;
  position: absolute;
  z-index: 1300;
  background: #fff;
  transition: all 0.3s ease;
  opacity: 1;
  transform: translate(0);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.04);
  width: 180px;
  border-radius: 6px;
  padding-top: 25px;

  & > img {
    width: 100%;
    display: block;
  }
}

.con-btns-features {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;

  button {
    margin-right: 8px;
    background: $accentColor !important;
    border: 0px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0px 0px 0px 0px $accentColor;

    a {
      display: block;
      padding: 10px;
      color: #fff;
      padding-left: 20px;
      padding-right: 20px;
    }

    &:hover {
      box-shadow: 0px 9px 28px -9px $accentColor;
    }
  }
}

.homeBackgroundComponent {
  margin-bottom: 100px;
}

.heroBackgroundComponent {
  position: absolute;
  z-index: 0;
  width: 80%;
  right: -5%;
  bottom: -5%;
  max-width: 1000px;
}

@media (min-width: 1800px) {
  .heroBackgroundComponent {
    max-width: 1500px;
  }
}

.con-img-feature {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
}

.fgithub {
  padding: 0px !important;
  width: 42px;
  height: 42px;
  border-radius: 20px !important;
  background: #fff !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #5b3cc4;
  color: #5b3cc4 !important;

  .stargazers_count {
    position: absolute;
    right: -15px;
    background: #5b3cc4;
    border-radius: 7px;
    padding: 2px;
    padding-left: 8px;
    padding-right: 8px;
    color: #fff;
    font-size: 12px;
    transform: translate(100%);

    &:after {
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      content: '';
      width: 10px;
      height: 10px;
      background: inherit;
    }
  }
}

.actions {
  clear: both;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ul {
    padding-left: 0px !important;
    width: 100%;
  }

  * {
    list-style: none;
  }

  .starx {
    padding-right: 60px;
  }

  li {
    float: left;
    margin-right: 10px;
    transition: all 0.3s ease;

    a {
      padding: 8px;
      font-size: 15px;
      padding-left: 20px;
      padding-right: 20px;
      color: #fff;
      display: block;
      box-shadow: 0px 0px 0px 0px #5b3cc4;
      transition: all 0.25s ease;
      background: #5b3cc4;
      border-radius: 7px;

      &:hover {
        box-shadow: 0px 9px 28px -9px #5b3cc4;
      }

      &.discord-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        padding-left: 10px;
        padding-right: 15px;
        cursor: pointer;

        img {
          width: 25px;
          margin: 0px !important;
          margin-right: 10px !important;
        }
      }
    }
  }
}

#main-title {
  float: left !important;
  margin-bottom: 0 !important;
}

.home .description {
  float: left !important;
  clear: left !important;
  margin-top: 0 !important;
}

.home-init {
  width: 100vw;
  max-width: unset !important;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
}

.contenedor {
  max-width: 1300px;
  width: 100%;
  margin: 0px auto;
}

.con-home,
.con-contributors {
  //padding-right: 9rem;
  width: 100%;
}

.home {
  margin: 0;
  top: 0px;
  display: block;
  position: relative;
  padding: 3rem 2rem 0;
  width: 100%;
  max-width: 100%!important;

  .hero {
    width: calc(100% - 200px);
    position: relative;
    display: block;
    z-index: 1;
    margin-top: -15rem;
    padding-left: 3rem;

    img {
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
      color: #5b5777;
      font-weight: lighter;
      font-size: 40px;
    }

    .description {
      padding: 10px;
      padding-left: 0px;
      padding-bottom: 20px;
      font-size: 1.3rem;
      line-height: 1.3;
      color: #686489;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: #5b3cc4;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #5236b1;

      &:hover {
        background-color: #6b50ca;
      }
    }
  }

  .features {
    padding: 1.2rem;
    margin-top: 2.5rem;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    margin-bottom: 2rem;

    &:last-child {
      border-bottom: 0px solid rgba(0, 0, 0, 0.05);
    }

    &:nth-child(odd) {
      .con-text-feature {
        order: 3;
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }

    p {
      color: #5b5777;
    }

    .con-text-feature {
      max-width: 500px;
      padding: 30px;
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #807b9f;
  }
}

@media only screen and (max-width: 1100px) {
  .con-home {
    padding-right: 0px;
  }
}

@media (max-width: $MQMobile) {
  #codefund_ad {
    width: 100% !important;
    position: relative !important;
    right: 0px !important;
    margin-bottom: 20px;
  }
  .hero {
    width: 100% !important;
  }
  .contribuitors {
    flex-direction: column;
  }
  .homeBackgroundComponent {
    margin-bottom: 100px;
  }
  .logo-g {
    display: none;
  }
  .home {
    .hero {
      padding-left: 0;
    }

    .features {
      .feature {
        max-width: 100%;
        padding: 0;
        margin-bottom: 2.5rem;
        display: block;

        .con-text-feature {
          &:nth-child(odd) {
            order: 1;
          }
        }

        .con-img-feature {
          padding: 0;

          &:nth-child(odd) {
            order: 0;
          }
        }
      }
    }
  }
  .con-home {
    footer {
      margin-top: 200px;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .contribuitors {
    flex-direction: column;
  }
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .con-logo {
    img {
      margin-left: 0px;
      height: 1.8rem !important;
    }
  }
  .heroBackgroundComponent {
    right: 0;
    bottom: 0;
  }
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      width: 100% !important;

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
        padding-top: 0px !important;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .features {
      padding: 0;

      .feature {
        h2 {
          font-size: 1.25rem;
        }
      }
    }
  }
  .home .hero h1,
  .home .hero .description,
  .home .hero .action {
    margin: 1.2rem auto;
  }
  footer {
    .bosque {
      top: 60%;
      transform: scale(1.5);
      right: 15% !important;
    }
  }
}

</style>

