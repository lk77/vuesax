<template lang="html">
  <div :class="{'headerx':header}" class="con-box">
    <div class="box">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    header:{
      default:false,
      type:Boolean,
    }
  },
  mounted(){
    let h = this.$el.querySelector('h2') || this.$el.querySelector('h3')
    if(h) {
    let a = h.querySelector('a')
      // console.dir(a.attribut/es[0].value);
      let hrefx = a.attributes[0].value.replace('#','')
      a.parentNode.id = ''
      a.closest('.con-box').id = hrefx

    }
  }
}
</script>

<style lang="scss">
/*.box {
	& > ul {
		& > li {
			margin-left: 25px;
			list-style: outside;
			& > ul {
				& > li {
					list-style: circle;
				}
			}
		}
	}
}*/


.headerx {
	margin-top: -70px !important;
	width: 100% !important;
	margin-left: 0px !important;
	.box {
		border-top: 1px solid #f0f0f0;
		text-align: center;
		border-radius: 0px 0px 10px 10px !important;
		box-shadow: 0 20px 40px -15px rgba(0,0,0,0) !important;
		background: transparent;
		p {
			text-align: left;
			padding-left: 35px;
		}
	}
}
.con-box {
	padding-top: 50px;
	width: calc(100% - 30px);
	margin-left: 15px;
	margin-top: -40px;
	.box {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0 20px 40px -15px rgba(0,0,0,0.05);
		margin-bottom: 15px;
		overflow: hidden;
		margin-top: 0px;
		.header {
			border-bottom: 0px solid rgba(0,0,0,0.03) !important;
		}
		h2 {
			border-radius: 6px 6px 0px 0px;
			padding: 10px;
			width: calc(100% - 30px);
			border-bottom: 0px !important;
			transition: all 0.25s ease;
			font-weight: bold;
			font-size: 1.4rem;
			&:hover {
				padding-left: 30px;
			}
			a {
				text-decoration: none !important;
			}
		}
		h3 {
			padding: 10px;
			font-weight: bold;
		}
		p {
			width: 100%;
			padding: 6px 20px;
			background: transparent;
			margin-top: 0px;
		}
	}
}
.con-box .box > ul,
.con-box .box > li {
	margin-left: 20px;
}
.box {
	pre {
		border-radius: 0px !important;
	}
}
.con-demo {
	pre {
		border-radius: 10px !important;
	}
}


@media (max-width: 550px) {
  .con-box {
    .box {
      h2 {
        font-size: 16px;
      }
      .vs-row {
        p {
          margin: 0px !important;
          width: 100%;
        }
      }
    }
  }
  .con-box .box p,
  .con-box .box li {
    font-size: 11px;
  }
}


</style>
