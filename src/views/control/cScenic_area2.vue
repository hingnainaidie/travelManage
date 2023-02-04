<template>
	<div style="height: 100%;">
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
				<el-col :span="12">
					<div id='chartPie' style="height: 300px;"></div>
				</el-col>
				<el-col :span="12">
					<div id='chartColumn' style="height: 300px;"></div>
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
						<el-col :span="6">
							<div>
								<el-button slot="append" icon="el-icon-download" @click="dataOut">导出销售表格</el-button>
							</div>
						</el-col>
					</el-row>	
				</div>
			</el-col>
			<div>
				<div v-if="typyid == 1">
					<el-table	
						:data="moneyList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
						stripe
						style="width: 100%"
						ref="recordTable"
						:height="tableHeight"
						id="table">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeYear"
								label="年份">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeMonth"
								label="月份">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeDay"
								label="日期">
						</el-table-column>
						<el-table-column
								align="center"
								prop="money"
								label="销售额">
						</el-table-column>
					</el-table>
				</div>
				<div v-else-if="typyid == 2">
					<el-table	
						:data="moneyList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
						stripe
						style="width: 100%"
						id="table">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeYear"
								label="年份">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeMonth"
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
						:data="moneyList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
						stripe
						style="width: 100%"
						id="table">
						<el-table-column
								width="100px;"
								align="center"
								prop="moneyId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="ticketUsetimeYear"
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
			<template>
				<div class="block">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-sizes="[10,20,50,100]"
						:page-size="10"
						layout="total, sizes, prev, pager, next, jumper"
						:total="moneyList.length">
					</el-pagination>
				</div>
			</template>
		</div>
	</div>
	
</template>

<script>
	import FileSaver from 'file-saver'
	import * as XLSX from 'xlsx'
	import { sGetScenicInfo } from '@/api/index.js';
	import { getAllTicketMoney } from '@/api/index.js';
	import { getTicketMoneyByMonth } from '@/api/index.js';
	import { getLatestFiveYearTicketMoney } from '@/api/index.js';
	import { staffCountScenicIn } from '@/api/index.js';
	import { staffCountScenicOut } from '@/api/index.js';
	import * as echarts from 'echarts'
	export default {
		name: 'cScenic_area2',
		data(){
			return{
				ticketYear:[0,0,0,0,0,0,0,0,0,0,0,0],
				
				getScenicname: '',  //接收上一页面的传参
				scenicname:'',
				sceniclocation: '',
				sceniccapacity:0,
				sceniccurrnum:0,
				scenicprice:0,
				scenicprofile:'',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
				//-------------分页--------------------
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				tableHeight: 250, //默认初始值
				//-------------分页--------------------
				//-----------------------------查询票务信息------------------------------
				select_id:0,//当前景区id
				//销售额查看
				moneyList: [],
				stringType:'',//存放选择的类型,需要返回给后端：周、月、年
				typyid:1,//周：0，月：1，年：2
				year:'',
				//-----------------------------查询票务信息------------------------------
				//图片
				chartColumn: null,
				chartPie: null,
				scenicin:0,//扇形图：入区
				scenicout:0,//扇形图：离区
				scenicinOut:["入区","离区"],
				scenicData:[
					{value:'',name:'入区'},
					{value:'',name:'离区'},
				],
				options: [
				{
					value: '选项1',
					label: '该月票务统计',
				},
				{
					value: '选项2',
					label: '该年票务统计',
				},
				{
					value: '选项3',
					label: '近五年票务统计',
				}],
				//用户个人信息
				
				
			}
		},
		watch: {
		    '$route': 'gettingData'
		  },
		methods:{
			//导出票务销售情况按钮
			dataOut(){
				let workbook = XLSX.utils.table_to_book(document.getElementById('table')); //需要在table上定义一个id
				try {
				  XLSX.writeFile(workbook, 'award.xlsx');
				  this.$message({
					type: 'success',
					message: '导出成功,注意查收系统下载文件'
				  })
				} catch (e) {
				  this.$message({
					type: 'success',
					message: '导出失败,失败信息:' + e
				  })
				}
			},
			ticketYearColumn(){
				let data = {
					scenicName: this.getScenicname
				};
				sGetScenicInfo(data).then(res => {
					if (res != -1) {
						this.select_id = res.data.datas.scenicId;
						var date = new Date();
						this.year = date.getFullYear();
						var month = date.getMonth() + 1;
						let data2 = {
							scenicId: this.select_id,
							ticketUsetimeYear: this.year,
							ticketUsetimeMonth: month
						}
						getTicketMoneyByMonth(data2).then(res => {
							// console.log(res);
							for (let i = 0; i < res.data.datas.length; i++) {
								var index=parseInt(res.data.datas[i].ticketUsetimeMonth-1);
								var value=parseInt(res.data.datas[i].money);
								this.ticketYear.splice(index,1,value);
								this.drawColumnChart();
							}
							
						})
					}
				})
			},
			drawColumnChart() {
				this.chartColumn = echarts.init(document.getElementById('chartColumn'));
				this.chartColumn.setOption({
					title: {
						text: "今年月销售额分析"
					},
					tooltip: {}, //提示框
					legend: {
						data: ['销售额']
					},
					xAxis: {
						data: ['一月', '二月', '三月', '四月','五月', '六月', '七月', '八月','九月', '十月', '十一月', '十二月'] //x轴
					},
					yAxis: {}, //不写的话，y轴默认就标出数字
					//=====图标的数据
					series: [{
							name: "销售额(元)", //鼠标放上去浮现的内容，跟data一样
							type: "bar", //指定条形图类型
							data: this.ticketYear //分别对应vue、react那几个x轴的数值
						}]
					})
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
								data: this.scenicData,
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
			//计算入区人数
			CountScenicIn(){
				let data = {
					scenicName: this.getScenicname
				};
				sGetScenicInfo(data).then(res => {
					if(res != -1){
						this.select_id = res.data.datas.scenicId;
						var date = new Date();
						var year = date.getFullYear();
						var month = date.getMonth() + 1;
						var strDate = date.getDate() - 0;
						let data2 = {
							scenicId:this.select_id,
							ticketUsetimeYear: year,
							ticketUsetimeMonth: month,
							ticketUsetimeDay: strDate,
						};
						staffCountScenicIn(data2).then(res => {
							this.scenicin = res.data.datas.scenicIn;
							this.scenicData[0].value=this.scenicin;
							staffCountScenicOut(data2).then(res => {
								console.log(res);
								this.scenicout = res.data.datas.scenicOut;
								this.scenicData[1].value=this.scenicout;
								this.drawPieChart();
							})
							
							
						})
						
						
					}
				})
				
			},
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange (size) {
				console.log(size,'size');
				this.pagesize = size;
				console.log(this.pagesize); //每页下拉显示数据
			},
			handleCurrentChange (currentPage) {
				console.log(currentPage,'currentPage');
				this.currentPage = currentPage;
				console.log(this.currentPage); //点击第几页
			},
			//从之前的界面获取数据
			gettingData(){
				this.getScenicname = this.$route.query.name;
				console.log("新页面：",this.getScenicname);
			},
			//返回上一页
			returnPage(){
				 this.$router.push({name:'cScenic_area'})
			},
			numFilter (value) {
			  // 截取当前数据到小数点后两位
			  let realVal = parseFloat(value).toFixed(2)
			  return realVal
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
			//控制中心获取景区基本信息
			ScenicInfo(){
				let data = {
					scenicName: this.getScenicname
				};
				sGetScenicInfo(data).then(res => {
					if(res != -1){
						this.select_id = res.data.datas.scenicId;
						console.log(this.select_id);
						this.scenicname = res.data.datas.scenicName;
						this.sceniclocation = res.data.datas.scenicLocation;
						this.sceniccapacity = res.data.datas.scenicCapacity;
						this.sceniccurrnum = res.data.datas.scenicCurrentNumber;
						this.scenicprice = res.data.datas.scenicPrice;
						this.scenicprofile = res.data.datas.scenicProfile;
						this.sceniccomfor = parseInt(res.data.datas.scenicCurrentNumber)/parseInt(res.data.datas.scenicCapacity)*100;
						this.sceniccomfor = parseFloat(this.numFilter (this.sceniccomfor));
						if(this.sceniccomfor < 30){
							this.sceniccomforstatue = 'success';
						}else{
							if(this.sceniccomfor < 65){
								this.sceniccomforstatue = 'warning';
							}else{
								this.sceniccomforstatue = 'exception';
							}
						}
					}
				})
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
				if(this.stringType == '每天票务'){
					this.typyid = 0;
				}else{
					if(this.stringType == '该月票务统计'){
						this.typyid = 1;
						var date = new Date();
						var year = date.getFullYear();
						var month = date.getMonth() + 1;
						let data = {
							scenicId:this.select_id,
							ticketUsetimeYear:year,
							ticketUsetimeMonth:month
						}
						getAllTicketMoney(data).then(res => {
							this.moneyList = res.data.datas;
							for(let i = 0; i < this.moneyList.length; i++){
								this.moneyList[i].moneyId = i+1;
							}
						})
					}
					else{
						if(this.stringType == '该年票务统计'){
							this.typyid = 2;
							var date = new Date();
							this.year = date.getFullYear();
							var month = date.getMonth() + 1;
							let data = {
								scenicId:this.select_id,
								ticketUsetimeYear:this.year,
								ticketUsetimeMonth:month
							}
							getTicketMoneyByMonth(data).then(res => {
								this.moneyList = res.data.datas;
								for(let i = 0; i < this.moneyList.length; i++){
									this.moneyList[i].moneyId = i+1;
									this.moneyList[i].ticketUsetimeYear = this.year;
								}
							})
						}
						else{
							this.typyid = 3;//打印该景区近五年票务
							var date = new Date();
							var year = date.getFullYear();
							let data = {
								scenicId:this.select_id,
								ticketUsetimeYear:year,
							}
							getLatestFiveYearTicketMoney(data).then(res => {
								this.moneyList = res.data.datas;
								for(let i = 0; i < this.moneyList.length; i++){
									this.moneyList[i].moneyId = i+1;
								}
							})
							
						}
					}
				}
				console.log(this.typyid);
			},
		},
		created() {
		    this.gettingData()
		  },
		mounted() {
			this.$nextTick(() => {
				this.ScenicInfo();
				//页面初始化的时候执行
				this.initScenicInfo();
				this.CountScenicIn();
				this.ticketYearColumn();
				// 根据浏览器高度设置初始高度
				this.tableHeight = window.innerHeight - this.$refs.recordTable.$el.offsetTop - 70
				// 监听浏览器高度变化，改变表格高度
				window.onresize = () =>{
					this.tableHeight = window.innerHeight - this.$refs.recordTable.$el.offsetTop - 70
				}
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
	.block{
		margin-top: 1.5%;
		text-align: center;
	}
</style>