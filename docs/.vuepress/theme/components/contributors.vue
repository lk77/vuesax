<template>
  <div v-if="contribuitorsx.length > 0" class="con-contribuitor">
    <h3 :class="{'allcontribuitors':contributors == 'all'}">{{title || 'contributors of'}} <b>Vuesax</b>  </h3>
    <ul>
      <template v-for="(contributor,index) in contribuitorsx">
          <li v-if="index < 19" :title="contributor.login">
            <a target="_blank" :href="contributor.html_url" rel="noopener noreferrer">
              <img :src="contributor.avatar_url" alt="">
              <img class="img-blur" :src="contributor.avatar_url" alt="">
            </a>
          </li>
        </template>
        <template v-for="(contributor,index) in contribuitorsx">
          <li :class="{'is-see-more':index == 19}" v-if="index == 19" title="See more">
            <router-link
              to="/contribuitors/"
            >
              <vs-icon class="" icon="add"></vs-icon>
            </router-link>
          </li>
        </template>
    </ul>
    <div v-if="contributors == 'all'" class="con-btns-contribuitors">
      <button type="button" name="button">
        <!-- <a href="">Contribuitors</a> -->
        <router-link
          to="/contribuitors/"
        >Contributors</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    repo:{
      default:null,
      type:String,
    },
    contributors:{
      type:[Array, String],
      default:null
    },
    title:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      contribuitorsx:[],
    }
  },


  mounted(){
    this.consultContributors()
  },
  watch:{
    contribuitors(){
      // console.log("cambio", this.Contribuitors);
      this.Contribuitorsx = []
      this.consultContributors()
    }
  },
  methods:{
    consultContributors(){
      if(!this.contributors) {
        return
      }

      if(this.contributors == 'all'){
        fetch('https://api.github.com/repos/'+this.repo+'/contributors')
        .then(response => response.json())
        .then(json => {
         this.contribuitorsx = json
        })
      } else {
        this.contribuitors.forEach((item)=>{
          fetch(`https://api.github.com/users/${item}`)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            this.contribuitorsx.push(json)
          })
        })

      }
    }
  }
}
</script>

<style lang="scss">
@use '../styles/config' as *;
.con-btns-contribuitors {
	margin-top: 40px;
	button {
		transition: all 0.2s ease;
		top: 0px;
		border: 0px;
		background: transparent;
		a {
			border-radius: 10px !important;
			padding: 13px;
			background: $accentColor;
			color: #fff;
			display: block;
			padding-left: 35px;
			padding-right: 35px;
			transition: all 0.3s ease;
			border-radius: 15px !important;
			&:hover {
				box-shadow: 0px 9px 28px -9px #5b3cc4 !important;
			}
		}
	}
}
.allcontribuitors {
	text-align: left !important;
	font-size: 30px;
	margin-bottom: 20px;
}
.con-contribuitor {
	width: 100%;
	position: relative;
	padding: 10px;
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding-left: 0px !important;
		li {
			margin: 7px;
			list-style: none !important;
			position: relative;
			transition: all 0.3s ease;
			z-index: 200;
			&:hover {
				transform: scale(1.1);
				z-index: 300;
			}
			img {
				width: 50px;
				height: 50px;
				border-radius: 35%;
				z-index: 100;
				position: relative;
				display: block;
			}
			a {
				i {
					font-size: 30px;
					color: #fff;
				}
			}
		}
	}
	h3 {
		text-align: center;
		padding: 10px;
	}
}
.is-see-more {
	background: #5b3cc4;
	border-radius: 18px;
	display: flex;
	cursor: pointer;
	&:hover {
		transform: scale(1) !important;
		box-shadow: 0px 9px 28px -9px #5b3cc4 !important;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
}
.img-blur {
	position: absolute !important;
	left: 0px;
	bottom: -5px;
	z-index: 50 !important;
	filter: blur(7px);
	opacity: 0.5;
}
</style>
