<script setup lang="ts">
import Bosque from "../../../components/bosque.vue";
import {reactive} from 'vue'
import {useThemeData} from "../composables";

const themeData = useThemeData();

const data = reactive({
  hoverText:false,
  lineaL:0,
  lineaActiva:false,
  topx:0,
});
const lineaLx = (evt) => {
  data.lineaActiva = true
  let cords = evt.target.getBoundingClientRect()
  data.lineaL = cords.left + 23
  data.topx = cords.top
}
const linealeave = () => {
  data.lineaActiva = false
}
</script>


<template>
  <footer class="footerx_theme">
    <Bosque class="bosque"/>

      <svg class="svg-piso" xmlns="http://www.w3.org/2000/svg" viewBox="4209.3 4660 1514.932 404">
        <defs>
        </defs>
        <path id="Path_1901" data-name="Path 1901" class="cls-1-piso" d="M-77.7,67.7s180-205.4,964-48,501.3-84,501.3-84l20.4,404H0Z" transform="translate(4287 4724.3)"/>
      </svg>

    <div class="con-links">
      <div class="uls">
        <ul @mouseenter="lineaLx($event),data.lineaActiva=true" @mouseleave="linealeave()" v-for="ul in themeData.footer">
          <li class="title">
            {{ul.title}}
          </li>
          <li v-for="li in ul.items">
            <a :target="li.self?'_self':'_blank'" :href="li.link">{{li.text}}</a>
          </li>
        </ul>
      </div>
      <!-- <span :style="{'left':lineaL+'px','top':lineaL+'px'}" :class="{'lineaActiva':lineaActiva}" class="lineax"></span> -->
    </div>
    <div class="con-copy">
      Copyright © 2020 vuesax.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/config' as *;

footer {
	&.footerx_theme {
		width: 100%;
		height: auto;
		background: #110d26;
		position: relative;
		z-index: 1;
		margin-top: 300px;
		display: block;
	}
}
.con-footer {
	width: 100%;
	height: 100vh;
	background: #fff;
}
.con-copy {
	position: absolute;
	right: 20px;
	bottom: 15px;
	color: rgba(255,255,255,0.2);
	z-index: 500;
	display: block;
	font-size: 12px;
	padding-right: 30px;
}
.con-links {
	position: relative;
	width: 50%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	z-index: 200;
	left: 0px;
	padding-bottom: 40px;
	padding-left: 20px;
	.lineax {
		position: absolute;
		top: -10px;
		background: #fff;
		height: 3px;
		border-radius: 5px;
		width: 30px;
		transition: all 0.3s ease;
		color: #fff;
		opacity: 0;
		left: 0px;
	}
	ul {
		display: block;
		width: 100%;
		line-height: normal;
		padding-left: 0px;
		position: relative;
		padding-left: 20px;
		li {
			padding: 4px;
			list-style: none;
		}
	}
	a {
		cursor: pointer;
		font-size: 13px;
		color: rgba(255,255,255,0.6);
		transition: all 0.2s ease;
		text-shadow: 0px 0px 5px #000;
		&:hover {
			color: #fff;
		}
	}
}
.lineaActiva {
	width: 30px !important;
	opacity: 1 !important;
}
.uls {
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	width: 100%;
	max-width: 500px;
}
.title {
	color: #fff;
	font-size: 16px;
	padding-bottom: 15px !important;
	font-weight: 500;
}
.bosque {
	position: absolute;
	z-index: 100;
	width: 33%;
	right: 10%;
	bottom: 70px;
}
.svg-piso {
	transform: translate(0, -50%);
	top: 0px;
	display: block;
	left: -6%;
	position: absolute;
	width: 120%;
	z-index: 10;
}
.cls-1-piso {
	fill: #110d26;
}


@media (max-width: $MQMobile) {
  .bosque {
    display: none;
  }
  .con-copy {
    position: static;
    text-align: center;
    padding: 10px 0;
  }
  .con-links {
    width: 100%;
  }
}


@media (max-width: $MQMobileNarrow) {
  .uls {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .con-links {
    ul {
      padding: 0 20px;
      margin-bottom: 20px;
      width: 50%;
    }
  }
}

</style>



