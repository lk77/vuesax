<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="/*theme-default-content*/ content content-pagex" style="margin-top: 25px;">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<style lang="scss">
@use '../styles/config' as *;

.con-api {
	z-index: 10 !important;
}
.contentx-enter-active,
.contentx-leave-active {
	transition: all 0.25s;
}
.contentx-enter {
	opacity: 0;
	position: absolute !important;
	transform: translate(-100%) !important;
}
.contentx-leave-to {
	opacity: 0;
	position: absolute !important;
	transform: translate(100%) !important;
}
.color {
	padding-bottom: 30px;
	width: 110%;
	height: 500px;
	position: absolute;
	left: -5%;
	top: 0px;
	display: block;
	z-index: 100;
	transform: rotate(-5deg) translate(0, -250px);
	border-radius: 50%;
	overflow: hidden;
}
.colorMover {
	position: absolute;
	margin-left: -25%;
	padding-bottom: 75%;
	padding-top: 75%;
	margin-top: -75%;
	animation: GradientRotation 15s steps(120) infinite;
	width: 150vw;
	height: 150vh;
	background: radial-gradient(ellipse at 70% 70%, $accentColor 8%, #c62dbf 42%, #fab261 58%);
}

@keyframes GradientRotation {
  0% {
    /* -webkit-transform: rotate(0deg); */
    transform: rotate(0deg);
  }
  100% {
    /* -webkit-transform: rotate(360deg); */
    transform: rotate(360deg);
  }
}
.color::after {
  position: absolute;
  top: 0px;
  left: 100px;
  content: '';
  width: 0px;
  height: 0px;
  box-shadow: inset 0px 0px 20px 0px rgb(255, 255, 255);
  border-radius: 50%;
  animation: gota 6s ease infinite;
  display: block;
}

.content {
	&:not(.custom) {
		display: block;
		position: relative;
		z-index: 200;
	}
}
.page {
  padding-left: 15rem;
  margin-right: 16.5rem;
  border-right: 1px solid rgba(0,0,0,.05);
	overflow: hidden;
	display: block;
	position: relative;
	z-index: 5;
	background: #fdfdfd;
	.content-pagex {
		margin: auto;
		max-width: 800px !important;
	}
	.content {
		p {
			padding: 10px;
			border-radius: 10px;
			margin-top: 6px;
		}
		h1 {
			padding: 15px;
			padding-left: 0px;
			color: #5b3cc4;
			border-radius: 0px;
			font-size: 30px;
			a {
				margin-left: 10px;
			}
		}
	}
}
.edit-link {
	&.content {
		padding: 1rem 2rem !important;
		padding-top: 0 !important;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 10;
		a {
			margin-top: 0px !important;
			margin-right: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #807b9f;
		}
	}
}
.page-nav {
	&.content {
		padding-top: 1rem !important;
		padding-bottom: 0 !important;
		z-index: 10;
		.inner {
			min-height: 2rem;
			margin-top: 0 !important;
			padding-top: 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			span {
				float: left;
				cursor: pointer;
				a {
					background: #fff;
					padding: 4px 10px;
					transition: all 0.25s ease;
					text-transform: none !important;
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none !important;
					border-radius: 15px;
					color: rgba(0,0,0,0.6);
					border: 1px solid rgba(0,0,0,0.03);
					font-size: 0.85rem;
					i {
						font-size: 1rem !important;
					}
					&:hover {
						background: rgba(91,60,196,0.1);
						color: #5b3cc4;
						border: 1px solid rgba(91,60,196,0.3);
					}
				}
			}
		}
		.next {
			float: right;
			i {
				float: right;
			}
		}
	}
}
.header-anchor {
	transition: all 0.3s ease !important;
}


@media (max-width: 700px) {
  .content {
	  width: 100% !important;
  }
}

@media (max-width: 550px) {
  .page-nav {
    &.content {
      span {
        font-size: 12px !important;
      }
    }
  }
  .color {
    display: none;
  }
  .edit-link {
    text-align: center;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}

</style>
