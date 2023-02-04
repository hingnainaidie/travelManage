<template>
	
		<div>
			<div class="cqmap">
				  <el-image 
				    :src="cqMap"
				      ></el-image>
			</div>
			<div class="cqk" >
				<el-popover
				    placement="left-start"
				    title="景区信息"
				    width="200"
				    trigger="hover">
					<div>
						<el-descriptions :column="1" style="font-size:12px">
						  <el-descriptions-item label="名称">{{this.scenies[indexcqk].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexcqk].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexcqk].scenicCapacity - this.scenies[indexcqk].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexcqk].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
						
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexcqk].sceniccomfor" :status="this.scenies[indexcqk].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				      :src="ciqikou"
				      @click="maipiao(indexcqk)"
				      ></el-image>
				  </el-popover>
				  
				  
				
				  
			</div>
			
			
			<div class="dlt" >
				<el-popover
				    placement="left-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexdlt].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexdlt].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdlt].scenicCapacity - this.scenies[indexdlt].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdlt].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdlt].sceniccomfor" :status="this.scenies[indexdlt].sceniccomforstatue"></el-progress>
						</div>
					</div>
					<div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				     :src="dalitang" 
				      @click="maipiao(indexdlt)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="dzs">
				<el-popover
				    placement="right-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexdzs].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexdzs].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdzs].scenicCapacity - this.scenies[indexdzs].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdzs].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdzs].sceniccomfor" :status="this.scenies[indexdzs].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="danzishi"
				      @click="maipiao(indexdzs)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="hv">
				<el-popover
				    placement="right-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexhv].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexhv].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhv].scenicCapacity - this.scenies[indexhv].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhv].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhv].sceniccomfor" :status="this.scenies[indexhv].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="happyValley"
				      @click="maipiao(indexhv)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="hyd">
				<el-popover
				    placement="right-start"
				    title="标题"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexhyd].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexhyd].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhyd].scenicCapacity - this.scenies[indexhyd].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhyd].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhyd].sceniccomfor" :status="this.scenies[indexhyd].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="hongyadong"
				      @click="maipiao(indexhyd)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="yby">
				<el-popover
				    placement="right-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexyby].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexyby].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexyby].scenicCapacity - this.scenies[indexyby].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexyby].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexyby].sceniccomfor" :status="this.scenies[indexyby].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="yuanboyuan"
				      @click="maipiao(indexyby)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="zms">
				<el-popover
				    placement="left-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexzms].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexzms].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexzms].scenicCapacity - this.scenies[indexzms].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexzms].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexzms].sceniccomfor" :status="this.scenies[indexzms].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="zhaomushan"
				      @click="maipiao(indexzms)"
				      ></el-image>
				  </el-popover>
			</div>
			<div class="jfb">
				<el-popover
				    placement="right-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexjfb].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexjfb].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexjfb].scenicCapacity - this.scenies[indexjfb].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexjfb].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexjfb].sceniccomfor" :status="this.scenies[indexjfb].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="jiefangbei"
				      @click="maipiao(indexjfb)"
				      ></el-image>
				  </el-popover>
				
			</div>
			
			<div class="lsm">
				<el-popover
				    placement="left-start"
				    title="景区信息"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<div>
						<el-descriptions :column="1">
						  <el-descriptions-item label="名称">{{this.scenies[indexlsm].scenicName}}</el-descriptions-item>
						  <el-descriptions-item label="位置">{{this.scenies[indexlsm].scenicLocation}}</el-descriptions-item>
						  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexlsm].scenicCapacity - this.scenies[indexlsm].scenicCurrentNumber}}</el-descriptions-item>
						  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexlsm].scenicPrice}}</el-descriptions-item>
						  </el-descriptions-item>
						</el-descriptions>
					</div>
					<div class="class1">
						<h3>当前景区拥挤程度</h3>
						<div class="comforstyle">
							<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexlsm].sceniccomfor" :status="this.scenies[indexlsm].sceniccomforstatue"></el-progress>
						</div>
					</div>
				    <div>
						<h4>点击景区图标购票</h4>
					</div>
				    <el-image slot="reference"
				    :src="lieshimu"
				      @click="maipiao(indexlsm)"
				      ></el-image>
				  </el-popover>
				
			</div>
		</div>
</template>



<script>
	import { tGetScenicInfo } from '@/api/index.js';
	export default {
		name: 'scenic_area',
		data(){
			return{
				//--------------------检测是否登录-------------------------
				isLogin:false,
				//--------------------检测是否登录-------------------------
				//图片地址
				cqMap:require("../../assets/img/withblackbackground.png"),
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
				//存放各个景区的下标
				indexcqk:'',
				indexdlt:'',
				indexdzs:'',
				indexhv:'',
				indexhyd:'',
				indexyby:'',
				indexzms:'',
				indexjfb:'',
				indexlsm:'',
				indexns:'',
				//快捷选项
				drawer: false,
				scenies: [],
				//选中跳转，保存选中景区的名称
				choosescenicname:'',
				//用户个人信息
				userId:0,
				userLevel:4,
				
			}
		},
		methods:{
			//获取景区基本信息
			llltGetScenicInfo(){
				this.isLogin = false;
				tGetScenicInfo().then(res => {
					if(res != -1){
						this.scenies = res.data.datas;	 
						// //找下标
						this.indexcqk = this.scenies.findIndex(item => item.scenicName=='磁器口');
						this.indexdlt = this.scenies.findIndex(item => item.scenicName=='人民大礼堂');
						this.indexdzs = this.scenies.findIndex(item => item.scenicName=='弹子石老街');
						this.indexhv = this.scenies.findIndex(item => item.scenicName=='欢乐谷');
						this.indexhyd = this.scenies.findIndex(item => item.scenicName=='洪崖洞');
						this.indexyby = this.scenies.findIndex(item => item.scenicName=='园博园');
						this.indexzms = this.scenies.findIndex(item => item.scenicName=='照母山森林公园');
						this.indexjfb = this.scenies.findIndex(item => item.scenicName=='人民解放碑');
						this.indexlsm = this.scenies.findIndex(item => item.scenicName=='歌乐山');
						this.indexns = this.scenies.findIndex(item => item.scenicName=='南山');
						this.scenies.push({ sceniccomforstatue: "" });
						for (let i = 0; i < this.scenies.length; i++) {
							this.scenies[i].sceniccomfor = parseInt(this.scenies[i].scenicCurrentNumber) / parseInt(this.scenies[i].scenicCapacity) * 100;
							this.scenies[i].sceniccomfor = parseFloat(this.numFilter(this.scenies[i].sceniccomfor));
							if(this.scenies[i].sceniccomfor < 30){
								this.scenies[i].sceniccomforstatue = 'success';
							}else{
								if(this.scenies[i].sceniccomfor < 65){
									this.scenies[i].sceniccomforstatue = 'warning';
								}else{
									this.scenies[i].sceniccomforstatue = 'exception';
								}
							}
						}
					}
				})
				
			},
			numFilter (value) {
				// 截取当前数据到小数点后两位
				let realVal = parseFloat(value).toFixed(2)
				return realVal
			},
			choosesce(value){
				this.isLogin = false;
				switch (value){
					case this.indexcqk:
					this.choosescenicname = '磁器口';
						break;
					case this.indexdlt:
					this.choosescenicname = '人民大礼堂';
						break;
					case this.indexlsm:
					this.choosescenicname = '歌乐山';
						break;
					case this.indexjfb:
					this.choosescenicname = '人民解放碑';
						break;
					case this.indexhyd:
					this.choosescenicname = '洪崖洞';
						break;
					case this.indexns:
					this.choosescenicname = '南山';
						break;
					case this.indexdzs:
					this.choosescenicname = '弹子石老街';
						break;
					case this.indexyby:
					this.choosescenicname = '园博园';
						break;
					case this.indexzms:
					this.choosescenicname = '照母山森林公园';
						break;
					case this.indexhv:
					this.choosescenicname = '欢乐谷';
						break;
					default:
						break;
				}
				this.userId = window.localStorage.userId;
				this.userLevel = window.localStorage.userLevel;
				console.log(this.userId);
				if(!this.userId || this.userLevel != 0){
					console.log("未登录");
					this.isLogin = true;
					console.log(this.isLogin);
				}
				else{
					this.isLogin = false;
					this.$router.push({ name:'cScenic_area2',
						query:{name:this.choosescenicname} });
				}
				
				
			}
		},
		mounted() {
			this.llltGetScenicInfo();
		},
	  
		
	}
</script>

<style>
	.cqmap{
		z-index: 1;
		position: absolute;
		margin-top: -2.9%;
		margin-left: 6.5%;
		width: 72.5%;
		height: fit-content;
	}
	.cqk{
		z-index: 2;
		position: absolute;
		margin-top: 23%;
		margin-left: 18.3%;
		width: 11%;
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
		margin-top: 15.3%;
		margin-left: 22.5%;
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
		margin-top: 20.3%;
		margin-left: 44.4%;
		width: 11%;
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
		margin-top: 5.3%;
		margin-left: 43%;
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
		margin-top: 28.3%;
		margin-left: 40%;
		width: 12%;
		height: fit-content;
	}
	.hyd:hover{
		z-index: 3;
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
		margin-top: 11.3%;
		margin-left: 49.9%;
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
		margin-top: 10.7%;
		margin-left: 34%;
		width: 11%;
		height: fit-content;
	}
	.zms:hover{
			transform: scale(1.5);
		}
	.chose_zms{
		z-index: 3;
		position: absolute;
		margin-top: 9%;
		margin-left: 25%;
		width: 18%;
		height: fit-content;
	}
	.jfb{
		z-index: 2;
		position: absolute;
		margin-top: 18.5%;
		margin-left: 35.5%;
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
		margin-top: 27.6%;
		margin-left: 26.5%;
		width: 9.5%;
		height: fit-content;
	}
	.lsm:hover{
			transform: scale(1.5);
		}
	.chose_lsm{
		z-index: 3;
		position: absolute;
		margin-top: 22%;
		margin-left: 17%;
		width: 18%;
		height: fit-content;
	}
	.ns{
		z-index: 2;
		position: absolute;
		margin-top: 35%;
		margin-left: 44.5%;
		width: 11%;
		height: fit-content;
	}
	.ns:hover{
		z-index: 3;
		transform: scale(1.5);
	}
	.chose_ns{
		z-index: 2;
		position: absolute;
		margin-top: 26.5%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	.class4{
		margin-bottom: 2%;
	}
	
</style>