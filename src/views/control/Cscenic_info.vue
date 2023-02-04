<template>
	<div>
		<div>
			<div>
				<div v-if="isLogin" class="class4">
				    <el-alert
						title="账号未登录"
						type="warning"
						description="请前往主页面登录"
						show-icon>
					</el-alert>
				</div>
				<h1>景区监控信息</h1>
				<div>
					<el-row :gutter="13">
						<el-col :span="6">
							<div>
								<el-select v-model="stringType" slot="prepend" placeholder="请选择类型" @change="checkchange">
								    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
								</el-select>
							</div>						
						</el-col>
						<el-col :span="6" v-if="choosebyname">
							<div style="margin-left: -10%;">
								<el-input v-model="string" placeholder="请输入内容(支持模糊查询)"></el-input>
							</div>	
						</el-col>
						<el-col :span="6" v-if="choosecheck">
							<div class="block">
							    <el-date-picker
							      v-model="date"
							      align="right"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions"
								  value-format="yyyy-MM-dd">
							    </el-date-picker>
							</div>
						</el-col>
						<el-col :span="4">
							<div>
								<el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
							</div>
						</el-col>
					</el-row>
				</div>
				<div>
					<el-table
					        :data="monitorList"
					        stripe
					        style="width: 100%">
						<el-table-column
								width="100px;"
								align="center"
						        prop="monitorId"
						        label="监控序号">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
								prop="scenicName"
								label="所属景区">
						</el-table-column>
					    <el-table-column
								align="center"
					            prop="monitorTime"
					            label="监控日期">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="monitorLocation"
					            label="监控位置">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="monitorContent"
						        label="监控内容">
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { sGetScenicInfo } from '@/api/index.js';
	import { ControlgetAllMonitor, ControlgetAllMontorByDate } from '@/api/index.js';
	import { ControlgetMonitorByName } from '@/api/index.js';
	export default {
		name: 'Cscenic_info',
		data(){
			return{
				userLevel:4,
				//--------------------检测是否登录-------------------------
				isLogin:false,
				//--------------------检测是否登录-------------------------
				monitorList: [],
				//----------------查找----------------
				stringType:'',
				choosecheck:false,
				choosebyname:false,
				string:'',//输入景区名称查询
				scenicid:'',
				options: [{
					value: '选项1',
					label: '通过时间查找',
				},
				{
					value: '选项2',
					label: '通过景区名称查找',
				},
				{
					value: '选项3',
					label: '查看全部监控',
				}],
				//----------------查找----------------
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
							onClick(picker) {
								picker.$emit('pick', new Date());
							}
						}, 
						{
							text: '昨天',
							onClick(picker) {
							  const date = new Date();
							  date.setTime(date.getTime() - 3600 * 1000 * 24);
							  picker.$emit('pick', date);
							}
						}, 
						{
							text: '一周前',
							onClick(picker) {
								const date = new Date();
								date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
								picker.$emit('pick', date);
							}
					}]
				},
				value1: '',
				date: '',
				choosemonitorTime:'',//选中的日期
				userId:0,
			}
	    },
		methods:{
			checkchange(value){
				switch (value){
					case '通过时间查找':{
						this.choosecheck = true;
						this.choosebyname = false;
					}
						break;
					case '通过景区名称查找':{
						this.choosecheck = false;
						this.choosebyname = true;
					}
						break;
					case '查看全部监控':{
						this.choosecheck = false;
						this.choosebyname = false;
					}
						break;
					default:
						break;
				}
			},
			//获取当前景区信息
			initMonitorList(){
				this.userId = window.localStorage.userId;
				this.userLevel = window.localStorage.userLevel;
				if(!this.userId || this.userLevel != 0){
					console.log("未登录");
					this.isLogin = true;
					console.log(this.isLogin);
				}
				else{
					this.isLogin = false;
					ControlgetAllMonitor().then((res) => {
						if(res != -1){
							this.monitorList = res.data.datas;
						}
					}) 
				}
				 
			},
			//返回景区名称获取景区id
			GetNameById(){
				let data = {
					scenicName: this.scenicname,
				};
				sGetScenicInfo(data).then(res => {
					if(res != -1){
						this.scenicid = res.data.datas.scenicId;
					}
				})
			},
		  //搜索
		  search(){
			  this.userId = window.localStorage.userId;
			  if(!this.userId){
			  	this.isLogin = true;
			  }
			  else{
				  this.isLogin = false;
				  if(this.stringType == '通过时间查找'){
				  				  this.choosemonitorTime = this.date
				  				  let data = {
				  					monitorTime: this.choosemonitorTime,
				  				  };
				  				  ControlgetAllMontorByDate(data).then((res) => {
				  					  if(res != -1){
				  						console.log(res);
				  						this.monitorList = res.data.datas;
				  					  }
				  				  })
				  }else{
				  				  if(this.stringType == '通过景区名称查找')
				  				  {
				  					  let data = {
				  					  	scenicName: this.string
				  					  };
				  					  ControlgetMonitorByName(data).then((res) => {
				  					  	if(res != -1){
				  							console.log(res);
				  					  		this.monitorList = res.data.datas;
				  					  	}
				  					  })
				  				  }else{
				  					  this.initMonitorList();
				  				  }
				  				  
				  }
			  }
			  
			  
		  }
		},
		mounted() {
			this.$nextTick(() => {
				//页面初始化的时候执行
				this.GetNameById();
				this.initMonitorList();
				
			})
		},
	}
</script>

<style>

.class4{
		margin-bottom: 2%;
	}
</style>