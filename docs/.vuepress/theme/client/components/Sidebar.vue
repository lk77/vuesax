<script setup lang="ts">
import NavbarItems from '@theme/NavbarItems.vue'
import SidebarItems from '@theme/SidebarItems.vue'
import NavbarLinks from "../../../../../olddocs/.vuepress/theme/components/NavbarLinks.vue";
</script>

<template>
  <aside class="sidebar">
    <div class="c-sidebar">
<!--      <NavbarItems />-->
      <slot name="top" />
      <SidebarItems />
      <slot name="bottom" />
    </div>
  </aside>
</template>

<style lang="scss">
@use '../styles/config' as *;

.sponsor-sidebar {
	padding-bottom: 10px;
	h4 {
		padding: 10px;
	}
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		li {
			background: transparent;
			margin: 5px;
			margin-top: 0px;
			border-radius: 10px;
			border: 1px dashed #dcdcdc;
			cursor: pointer;
			transition: all 0.25s ease;
			a {
				width: 50px;
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: rgba(0,0,0,0.15);
				transition: all 0.25s ease;
			}
			&:hover {
				border: 1px dashed #f96854;
				background: rgba(249,104,84,0.13);
				transform: translate(0, -3px);
				box-shadow: 0px 4px 10px 0px rgba(249,104,84,0.13);
				a {
					color: #f96854;
				}
			}
		}
	}
}
.c-sidebar {
	width: calc(100% - 5px);
	margin-right: 5px;
	overflow: auto;
	height: calc(100% - 10px);
	margin-top: 5px;
	padding-right: 5px;
}
.sidebar {
	&.activeSuggestion {
		.sidebar-items {
			filter: blur(3px);
		}
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	a {
		display: inline-block;
	}
	.nav-links {
		display: none;
		border-bottom: 1px solid $borderColor;
		padding: 0.5rem 0 0.75rem 0;
		a {
			font-weight: 600;
			opacity: 1 !important;
		}
	}
	.sidebar-items {
		padding: 1rem 0;
	}
}
.sidebar .nav-links .nav-item,
.sidebar .nav-links .repo-link {
	display: block;
	line-height: 1.25rem;
	font-size: 1.1em;
	padding: 0.5rem 0 0.5rem 1.5rem;
}

@media (max-width: $MQMobile) {
  .sidebar {
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.04);
    .nav-links {
      display: block;
    }
    .sidebar-items {
      padding: 1rem 0 !important;
    }
  }
}

</style>
