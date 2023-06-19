<script setup lang="ts">
import Home from '@theme/Home.vue'
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import {computed, onMounted, onUnmounted, reactive, ref} from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared/index.js'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables/index.js'
import c10k from "../components/contributors/contribution/10k.vue";
import footerContributors from "../components/contributors/footerContributors.vue";
import pull5 from "../components/contributors/pull/5pull.vue";
import c100 from "../components/contributors/contribution/100.vue";
import pull1 from "../components/contributors/pull/1pull.vue";
import pull20 from "../components/contributors/pull/20pull.vue";
import c30k from "../components/contributors/contribution/30k.vue";
import c1k from "../components/contributors/contribution/1k.vue";
import pull50 from "../components/contributors/pull/50pull.vue";

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
])

const weeks = (array) => {
  let aporte = 0
  // let aporte = 0
  array.forEach((item) => {
    aporte += item.a
  })
  return aporte
}
const consultContributors = () => {
  fetch('https://api.github.com/repos/lusaxweb/vuesax/stats/contributors')
    .then(response => response.json())
    .then(json => {
      // console.log(JSON.stringify(json));
      // var json = api
      // descomentar cuando sea real la solicitud
      json.forEach((item) => {
        item.weeks = weeks(item.weeks)
      })


      function compare(a, b) {
        if (a.weeks > b.weeks)
          return -1;
        if (a.weeks < b.weeks)
          return 1;
        return 0;
      }


      data.users = json.sort(compare);
      // console.log('response',json);
      // data.star = json.stargazers_count
    })
}
const consultarPulls = () => {
  fetch('https://api.github.com/repos/lusaxweb/vuesax/pulls?state=all')
    .then(response => response.json())
    .then(json => {
      let jsonx = []
      json.map((item) => {
        jsonx.push(item.user.login)
      })
      let count = {}
      // let jsonx = ["Sascha8a","Sascha8a","dasisyouyu","RodSwanston","RALMAZ","JamieBunyassi","VicGUTT","fergardi","VicGUTT","ManuelRovira","fergardi","eyedeceiver03","fergardi","ManuelRovira","fergardi","eyedeceiver03","ManuelRovira","fergardi","eyedeceiver03","eyedeceiver03","fergardi","fergardi","francauxach","cristijora","cristijora","cristijora","Apokly","Apokly","morkro"]

      jsonx.forEach((item) => {
        if (count.hasOwnProperty(item)) {
          count[item]++
        } else {
          count[item] = 1
        }
      })
      data.request = count
      // console.log(JSON.stringify(jsonx));
    })
}

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
  consultContributors()
  consultarPulls()
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

const data = reactive({
  users: [],
  request: {},
  state: 1,
  awwards: [
    {
      title: 'Contribution',
      medals: [
        {
          name: 'c100',
          description: 'Have 100 points of contribution to vuesax'
        },
        {
          name: 'c1k',
          description: 'Have 1k points of contribution to vuesax'
        },
        {
          name: 'c10k',
          description: 'Have 10k points of contribution to vuesax'
        },
        {
          name: 'c30k',
          description: 'Have 30k points of contribution to vuesax'
        },
      ]
    },
    {
      title: 'Pull Request',
      medals: [
        {
          name: 'pull1',
          description: 'Have 1 Pull Request on github for vuesax'
        },
        {
          name: 'pull5',
          description: 'Have 5 Pull Request on github for vuesax'
        },
        {
          name: 'pull20',
          description: 'Have 20 Pull Request on github for vuesax'
        },
        {
          name: 'pull50',
          description: 'Have 50 Pull Request on github for vuesax'
        },
      ]
    }
  ]
});
</script>

<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page">
      <div class="custom-layout">
      <div class="con-contributors">
        <ul class="menu">
          <li :class="{'estas-contribucion':data.state==1}" @click="data.state=1">
            Rank
          </li>
          <li :class="{'estas-contribucion':data.state==2}" @click="data.state=2">
            Awards
          </li>
        </ul>
        <div class="con-contenedores">
          <div v-if="data.state==1" class="con-rank">
            <table>
              <thead>
              <tr>
                <th>Pos</th>
                <th>User</th>
                <th>Name</th>
                <th>Contribution</th>
                <th>Pull Request</th>
                <th>Commits</th>
                <th>Points</th>
                <th>GitHub</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(user,index) in data.users" style="">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="user.author.avatar_url" alt="">
                </td>
                <td>{{ user.author.login }}</td>
                <td class="medals">
                  <c100 v-if="user.weeks > 100"/>
                  <c1k v-if="user.weeks > 1000"/>
                  <c10k v-if="user.weeks > 10000"/>
                  <c30k v-if="user.weeks > 30000"/>
                  <!-- {{awwards(user.weeks)}} -->
                </td>
                <td class="medals-pull">
                  <pull1 v-if="data.request[user.author.login] >= 1"/>
                  <pull5 v-if="data.request[user.author.login] >= 5"/>
                  <pull20 v-if="data.request[user.author.login] >= 20"/>
                  <pull50 v-if="data.request[user.author.login] >= 50"/>
                  <!-- {{request(user.weeks)}} -->
                </td>
                <td>{{ user.total }}</td>
                <td>{{ user.weeks }}</td>
                <td class="iconx-github">
                  <a class="flaticon-github " :href="user.author.html_url"></a>
                </td>
                <!-- <td>{{user}}</td> -->
              </tr>
              </tbody>
            </table>
          </div>

          <div v-else class="con-awwards">
            <div v-for="awward in data.awwards" class="con-awward">
              <h2>{{ awward.title }}</h2>
              <ul>
                <li v-for="medal in awward.medals">
                  <div class="con-card-awward">
                    <component :is="medal.name"></component>
                    <p>
                      {{ medal.description }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

<!--        <footer-contributors/>
        <Footer/>-->
      </div>
    </div>
    </slot>
  </div>
</template>

<style lang="scss">
//@use '../theme/styles/config' as *;

.con-contenedores {
	margin-top: 20px;
}
.con-contributors {
	width: 100%;
	overflow: hidden;
	ul {
		&.menu {
			margin-top: 20px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			li {
				position: relative;
				list-style: none;
				padding: 15px;
				cursor: pointer;
				&:before {
					width: 0%;
					height: 2px;
					//background: $accentColor;
					position: absolute;
					content: '';
					bottom: 0px;
					left: 50%;
					transform: translate(-50%);
					transition: all 0.3s ease;
				}
				&.estas-contribucion {
					&:before {
						width: 100% !important;
					}
				}
			}
		}
	}
	.con-rank {
		width: 100%;
		max-width: 1000px;
		box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);
		border-radius: 8px;
		margin: auto;
		padding-left: 10px;
		padding-right: 10px;
		overflow: auto;
		table {
			width: 100%;
			position: relative;
			thead {
				tr {
					&:first-child {
						border-top: 0px;
					}
				}
				th {
					padding: 15px;
					font-weight: normal;
				}
			}
			tr {
				cursor: default;
				border-bottom: 1px solid rgba(0,0,0,0.05);
				background: #fff !important;
				th {
					border: 0px;
				}
				td {
					border: 0px;
					&.medals {
						svg {
							display: inline-block;
							position: relative;
							width: 40px;
						}
					}
					&.medals-pull {
						svg {
							display: inline-block;
							position: relative;
							width: 50px;
						}
					}
					&.iconx-github {
						text-align: center;
						a {
							margin: auto;
							width: 100%;
							text-align: center;
							display: block;
							color: rgba(0,0,0,0.4);
							transition: all 0.2s ease;
							&:hover {
								//color: $accentColor;
							}
						}
					}
					img {
						width: 50px;
						border-radius: 50%;
					}
				}
			}
		}
	}
	.con-awward {
		width: 100%;
		max-width: 950px;
		margin: auto;
		h2 {
			padding: 10px;
			border-bottom: 0px;
		}
		ul {
			overflow: auto;
			width: 100%;
			white-space: nowrap;
			padding-bottom: 10px;
			li {
				display: inline-block;
				max-width: 190px;
				margin: 20px;
				box-shadow: 0px 10px 40px -6px rgba(0,0,0,0.1);
				border-radius: 8px;
				padding-bottom: 15px;
				&:first-child {
					margin-left: 0px;
				}
				.con-card-awward {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}
				p {
					width: 100%;
					display: block;
					position: relative;
					clear: both;
					white-space: normal;
					padding: 10px;
					font-size: 12px;
					text-align: center;
				}
				svg {
					width: 110px;
				}
			}
		}
	}
}

</style>
