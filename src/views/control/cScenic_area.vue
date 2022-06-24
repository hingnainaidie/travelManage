<template>
	<div>
		<div class="cqmap">
			  <el-image 
			    :src="cqMap"></el-image>
		</div>		
		<div class="cqk" >	
			    <el-image slot="reference"
			      :src="ciqikou"
			      ></el-image>			 
		</div>		
		<div class="dlt" >			
			    <el-image slot="reference"
			     :src="dalitang" 
			      ></el-image>			
		</div>		
		<div class="dzs">			
			    <el-image slot="reference"
			    :src="danzishi"
			      ></el-image>			
		</div>		
		<div class="hv">			
			    <el-image slot="reference"
			    :src="happyValley"
			      ></el-image>		 
		</div>	
		<div class="hyd">			
			    <el-image slot="reference"
			    :src="hongyadong"
			      ></el-image>			 
		</div>		
		<div class="yby">			
			    <el-image slot="reference"
			    :src="yuanboyuan"
			      ></el-image>		
		</div>		
		<div class="zms">			
			    <el-image slot="reference"
			    :src="zhaomushan"
			      ></el-image>			
		</div>		
		<div class="jfb">			
			    <el-image slot="reference"
			    :src="jiefangbei"
			      ></el-image>			
		</div>		
		<div class="lsm">			
			    <el-image slot="reference"
			    :src="lieshimu"
			      ></el-image>			 
		</div>		
		<div class="ns">			
			    <el-image slot="reference"
			    :src="nanshan"
			      ></el-image>			 
		</div>
	</div>
</template>



<script>
	export default {
	  name: 'scenic_area',
	  data(){
	    return{
			//图片地址
			cqMap:require("../../assets/img/CQMap2.png"),
			ciqikou: require("../../assets/img/ciqikou.png"),
			dalitang:require("../../assets/img/dalitang.png"),
			danzishi:require("../../assets/img/danzishi.png"),
			happyValley:require("../../assets/img/happyValley.png"),
			hongyadong:require("../../assets/img/hongyadong.png"),
			yuanboyuan:require("../../assets/img/yuanboyuan.png"),
			zhaomushan:require("../../assets/img/zhaomushan.png"),
			jiefangbei:require("../../assets/img/jiefangbei.png"),
			lieshimu:require("../../assets/img/lieshimu.png"),
			nanshan:require("../../assets/img/nanshan.png"),
			//保存选中的景区名称
			select_name:'',
	    }
	  },
	  methods:{
	  }
	}
</script>

<style>
	.cqmap{
		z-index: 1;
		position: absolute;
		margin-top: -1%;
		margin-left: 10%;
		width: 58%;
		height: fit-content;
	}
	.cqk{
		z-index: 2;
		position: absolute;
		margin-top: 19%;
		margin-left: 14%;
		width: 10%;
		height: fit-content;
	}
	.cqk:hover{
		transform: scale(1.5);
/* 		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 9%;
		width: 20%;
		height: fit-content; */
	}
	.chose_cqk{
		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 9%;
		width: 20%;
		height: fit-content;
	}
	
	.dlt{
		z-index: 2;
		position: absolute;
		margin-top: 12%;
		margin-left: 18%;
		width: 11%;
		height: fit-content;
	}
	.dlt:hover{
			transform: scale(1.5);
		}
	.chose_dlt{
		z-index: 3;
		position: absolute;
		margin-top: 9%;
		margin-left: 14%;
		width: 18%;
		height: fit-content;
	}
	
	.dzs{
		z-index: 2;
		position: absolute;
		margin-top: 17.4%;
		margin-left: 37.6%;
		width: 10%;
		height: fit-content;
	}
	.dzs:hover{
		transform: scale(1.5);
		}
	.chose_dzs{
		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 33%;
		width: 18%;
		height: fit-content;
	}
	.hv{
		z-index: 2;
		position: absolute;
		margin-top: 4%;
		margin-left: 37%;
		width: 12%;
		height: fit-content;
	}
	.hv:hover{
			transform: scale(1.5);
		}
	.chose_hv{
		z-index: 3;
		position: absolute;
		margin-top: 2%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	.hyd{
		z-index: 2;
		position: absolute;
		margin-top: 23.5%;
		margin-left: 32.5%;
		width: 12%;
		height: fit-content;
	}
	.hyd:hover{
			transform: scale(1.5);
		}
	.chose_hyd{
		z-index: 3;
		position: absolute;
		margin-top: 21%;
		margin-left: 30%;
		width: 18%;
		height: fit-content;
	}
	.yby{
		z-index: 2;
		position: absolute;
		margin-top: 8.5%;
		margin-left: 41.8%;
		width: 9%;
		height: fit-content;
	}
	.yby:hover{
			transform: scale(1.5);
		}
	.chose_yby{
		z-index: 3;
		position: absolute;
		margin-top: 3%;
		margin-left: 38%;
		width: 18%;
		height: fit-content;
	}
	.zms{
		z-index: 2;
		position: absolute;
		margin-top: 8.7%;
		margin-left: 28.3%;
		width: 10%;
		height: fit-content;
	}
	.zms:hover{
			transform: scale(1.5);
		}
	.chose_zms{
		z-index: 3;
		position: absolute;
		margin-top: 5%;
		margin-left: 25%;
		width: 18%;
		height: fit-content;
	}
	.jfb{
		z-index: 2;
		position: absolute;
		margin-top: 14.8%;
		margin-left: 29.7%;
		width: 5.2%;
		height: fit-content;
	}
	.jfb:hover{
			transform: scale(1.5);
		}
	.chose_jfb{
		z-index: 3;
		position: absolute;
		margin-top: 8%;
		margin-left: 27.5%;
		width: 10%;
		height: fit-content;
	}
	.lsm{
		z-index: 2;
		position: absolute;
		margin-top: 23%;
		margin-left: 21.6%;
		width: 9%;
		height: fit-content;
	}
	.lsm:hover{
			transform: scale(1.5);
		}
	.chose_lsm{
		z-index: 3;
		position: absolute;
		margin-top: 16%;
		margin-left: 17%;
		width: 18%;
		height: fit-content;
	}
	.ns{
		z-index: 2;
		position: absolute;
		margin-top: 29.7%;
		margin-left: 37.5%;
		width: 11%;
		height: fit-content;
	}
	.ns:hover{
			transform: scale(1.5);
		}
	.chose_ns{
		z-index: 3;
		position: absolute;
		margin-top: 26.5%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	
</style>