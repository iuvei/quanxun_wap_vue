<template>
  <div class="cepingDetail">
   <ul v-for="item in data">
   	 <li class="cepingDetail-content">
   	 	<h3>{{item.head.titlename}} <span class="pingce">评测了</span> {{item.head.caipiao}}</h3>
   	 	<div class="tuwen">
   	 		<img src="">
   	 		<div class="right-wrap">
   	 			<h4>{{item.head.caipiao}}</h4>
   	 			<div class="game">
   	 				<span class="game-name">{{item.meta.name}}</span>
   	 				<span class="game-dot" v-for="(i,index) in item.meta.gamelist">{{i}}</span>
   	 			</div>
   	 			<div class="plat">
   	 				<span class="plat-name">{{item.plat.name}}</span>
   	 				<span class="plat-dot" v-for="(j,index) in item.plat.platlist">{{j}}</span>
   	 			</div>
   	 			<div class="youshi">
   	 				<span v-for="(h,index) in item.describe">{{h}}</span>   	 	
   	 			</div>
   	 		</div>
   	 	</div>
   	 	<!--<div class="score">
   	 		<div class="score-single" v-for="(f,index) in item.scoretag">
   	 			<span class="name">{{f}}：</span>   	 
   	 			<img src="">
   	 			<span class="score">9.0分</span>
   	 		</div>
   	 	</div>  -->
   	 	<div class="content">
   	 		<p>{{item.content}}</p>
   	 		<p>{{item.content}}</p>
   	 	</div>  
   		<div class="liaojie">{{item.liaojie}}</div>
   	</li>
   	
   </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.cepingDetail{
	// background-color:#fff;
	// width:100%;
	// height:100%;
	overflow:auto;
	margin-top:1.2rem;
	padding-bottom:3rem;
	.cepingDetail-content{
		padding:0.2rem 0.1rem 0 0.25rem;
		h3{
			font-size:38px;
			color: #333333;
			span.pingce{
				color: #f6ad48;font-size: 38px;
			}
		}
		.tuwen{
			margin-top:0.2rem;
			img{
				width:244px;
				height:198px;
				background-color:#ccc;
				position:absolute;
			}
			.right-wrap{
				padding-left:260px;
				margin-left:2px;
				h4{
					color:#111;
					font-size:0.4rem;
				}
				.game{
					margin-top:10px;
					.game-name{
						font-size:0.3rem;
						color:#000;
					}
					.game-dot{
						background-color:#eb9B28;
						margin:0 1%;
						padding:5px 10px;
						color:#fff;
						font-size:0.3rem;
					}
				}
				.plat{
					margin-top:16px;
					.plat-name{
						font-size:0.3rem;
						color:#000;
					}
					.plat-dot{
						background-color:#eb9B28;
						margin:0 1%;
						padding:2px 12px;
						color:#fff;
						font-size:0.3rem;
					}
				}
				.youshi{
					margin-top:10px;
					box-sizing:border-box;
					padding-left:0.9rem;
					position:relative;
					span:first-child{
						font-size:0.3rem;
						margin-right:14px;
						position:absolute;
						left:0;
						color:#000;
					}
					span:last-child{
						font-size:0.3rem;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						width:100%;
						display:inline-block;
					}
				}
			}
		}
		.score{
			margin-top:40px;
			overflow:hidden;			// height:100px;
			.score-single{
				float:left;
				width:49%;
				span.name{
					font-size:0.3rem;
					float:left;
					width:4em;				
				}
				img{
					width:47%;
					height:34px;
					background-color:#ccc;
				}
				img:before{
					content:'';
					width:20%;
					background-color:orange;
					height:34px;
					position:absolute;
					left:1;
				}
				span.score{
					color:red;
					font-size:0.3rem;
					vertical-align:top;
					line-height:0.5rem;
				}
			}
			.score-single:first-child,.score-single:nth-child(3){
				span.name{
					width:3em;
				}
			}
		}
		.content{
			text-indent:2em;
			line-height:1.6;
			margin-top:26px;
			p{
				margin:0.5rem 0;
			}
		}
		.liaojie{
			height: 1.3rem;
			width:100%;
			margin-left:-0.25rem;
			margin-right:-0.15rem;
			font-size:28px;color: #cb7e1d;opactiy:0.95;
			border-top:1px solid #ccc;
			padding-top:20px;
			padding-left:20px;
			position:fixed;
			bottom:1.3rem;
			z-index:1;
			background-color:#fff;
			text-align: center;
		}
	}
}
.cepingDetail:before{
	content:'';
	position:absolute;
	width:100%;
	height:100%;
	background-color:#fff;
	z-index:-1;
}
</style>