<template>
	<div style="height: 50vh;">
		<div>
			<el-button @click="returnPage" style="margin-bottom: 20px;">返回</el-button>
		</div>
		<div>
			<el-descriptions direction="vertical" :column="6" border>
			  <el-descriptions-item label="名称">{{scenicname}}</el-descriptions-item>
			  <el-descriptions-item label="位置">{{sceniclocation}}</el-descriptions-item>
			  <el-descriptions-item label="最大容量/万人" :span="1.5">{{sceniccapacity}}</el-descriptions-item>
			  <el-descriptions-item label="当前人数/万人" :span="1.5">{{sceniccurrnum}}</el-descriptions-item>
			  <el-descriptions-item label="票价/元每人" :span="1.5">{{scenicprice}}</el-descriptions-item>
			  </el-descriptions-item>
			  <el-descriptions-item label="简介">{{scenicprofile}}</el-descriptions-item>
			</el-descriptions>
		</div>
		<div class="class1">
			<h1>当前舒适度</h1>
			<div class="comforstyle">
				<el-progress :text-inside="true" :stroke-width="22" :percentage="sceniccomfor" :status="sceniccomforstatue"></el-progress>
			</div>
		</div>
		<div class="class2">
			<el-row>
				<el-col :span="24">
					<div id='chartPie' style="height: 400px;"></div>
				</el-col>
			</el-row>
		</div>
		<div>
			<h1>景区票务销售情况</h1>
			<el-col :span="12">
				<div>
					<el-row :gutter="12">
						<el-col :span="10">
							<div>
								<el-select v-model="stringType" slot="prepend" placeholder="请选择类型" >
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
								</el-select>
							</div>						
						</el-col>
						<el-col :span="6">
							<div>
								<el-button slot="append" icon="el-icon-search" @click="search">查看</el-button>
							</div>
						</el-col>
					</el-row>	
				</div>
			</el-col>
			<div>
				<div v-if="typyid == 0">
					<el-table	
						:data="moneyList"
						stripe
						style="width: 100%">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="moneydate"
								label="日期">
						</el-table-column>
						<el-table-column
								align="center"
								prop="money"
								label="销售额">
						</el-table-column>
					</el-table>
				</div>
				<div v-else-if="typyid == 1">
					<el-table	
						:data="moneyList"
						stripe
						style="width: 100%">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="moneydate"
								label="月份">
						</el-table-column>
						<el-table-column
								align="center"
								prop="money"
								label="销售额">
						</el-table-column>
					</el-table>
				</div>
				<div v-else>
					<el-table	
						:data="moneyList"
						stripe
						style="width: 100%">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="moneydate"
								label="年份">
						</el-table-column>
						<el-table-column
								align="center"
								prop="money"
								label="销售额">
						</el-table-column>
					</el-table>
				</div>
			</div>
			
		</div>
	</div>
	
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		name: 'cScenic_area2',
		data(){
			return{
				getScenicname: '',  //接收上一页面的传参
				
				belongscenicinfo: [],
				scenicid: '',//接收页面跳转的该值班人员对应的景区id
				scenicname:'磁器口',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
				//图片
				chartColumn: null,
				chartPie: null,
				scenicin:3,//扇形图：入区
				scenicout:5,//扇形图：离区
				scenicinOut:["入区","离区"],
				scenicData:[
					{value:'',name:'入区'},
					{value:'',name:'离区'},
				],
				options: [{
					value: '选项1',
					label: '周',
				},
				{
					value: '选项2',
					label: '月',
				},
				{
					value: '选项3',
					label: '年',
				}],
				//销售额查看
				moneyList: [],
				stringType:'',//存放选择的类型,需要返回给后端：周、月、年
				typyid:0,//周：0，月：1，年：2
			}
		},
		watch: {
		    '$route': 'gettingData'
		  },
		methods:{
			//从之前的界面获取数据
			gettingData(){
				this.getScenicname = this.$route.params.name;
				console.log("新页面：",this.getScenicname);
			},
			//返回上一页
			returnPage(){
				 this.$router.push({name:'cScenic_area'})
			},
			//获取值班人员对应景区的信息
			initScenicInfo(){
				this.sceniccomfor = (this.sceniccurrnum/this.sceniccapacity)*100;
				if(this.sceniccomfor <= 30){
					this.sceniccomforstatue = 'success';
				}else{
					if(this.sceniccomfor <= 60){
						this.sceniccomforstatue = 'warning';
					}else{
						this.sceniccomforstatue = 'exception';
					}
				}
			},
			drawPieChart() {
			  this.chartPie = echarts.init(document.getElementById('chartPie'));
			  this.chartPie.setOption({
			    title: {
			      text: '入区离区人数情况',
			      x: 'center'
			    },
			    tooltip: {
			      trigger: 'item',
			      formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			      orient: 'vertical',
			      left: 'left',
			      data: this.scenicinOut
			    },
			    series: [{
			      name: '模拟数据',
			      type: 'pie',
			      radius: '60%',
			      center: ['50%', '60%'],
			      data:this.scenicData,
			      itemStyle: {
			        emphasis: {
			          shadowBlur: 20,
			          shadowOffsetX: 0,
			          shadowColor: 'rgba(0, 0, 0, 0.5)'
			        }
			      }
			    }]
			  })
			},
			search(){
				//打印数据
				if(this.stringType == '周'){
					this.typyid = 0;
				}else{
					if(this.stringType == '月'){
						this.typyid = 1;
					}
					else{
						this.typyid = 2;
					}
				}
				console.log(this.typyid);
				this.moneyList = [
					{
						moneyId:1,
						moneydate: "12",
						money:123,
					},
					{
						moneyId:2,
						moneydate: "13",
						money: 333,
					}];
				},
		},
		created() {
		    this.gettingData()
		  },
		mounted() {
			this.$nextTick(() => {
				//页面初始化的时候执行
				this.initScenicInfo();
				this.scenicData[0].value=this.scenicin;
				this.scenicData[1].value=this.scenicout;
				this.drawPieChart();
			})
		},
	}
</script>

<style>
	.comforstyle{
		margin-top: 10px;
	}
	.class1{
		margin-top: 10px;
	}
	.class2{
		margin-top: 25px;
	}
</style>