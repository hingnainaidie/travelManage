<template>
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
			<h1>游客详细信息</h1>
			<div>
				<div>
					<el-row :gutter="20">
						<el-col :span="5">
							<div>
								<el-select v-model="stringType" slot="prepend" placeholder="请选择类型" @change="checkchange">
								    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
								</el-select>
							</div>						
						</el-col>
						<el-col :span="8" v-if="typecheck">
							<div>
								<el-input v-model="string" placeholder="请输入内容(支持模糊查询)"></el-input>
							</div>	
						</el-col>
						<el-col :span="8" v-if="typedatecheck">
							<div class="block22">
							    <el-date-picker
								  style="width: 100%;"
							      v-model="string"
							      align="right"
							      type="date"
							      placeholder="选择日期"
								  value-format="yyyy-MM-dd"
								  @change="gettime">
							    </el-date-picker>
							</div>
						</el-col>
						<el-col :span="6">
							<div>
								<el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
							</div>
						</el-col>
					</el-row>
				</div>
				<div style="margin-top: 1%">
					<el-table
						:data="visiterList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
						stripe
						style="width: 100%"
						ref="recordTable"
						:height="tableHeight">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="userId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="userAccount"
					            label="账号">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="userName"
						        label="姓名">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="userGender"
						        label="性别">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="userPhone"
						        label="手机号">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketId"
						        label="票id">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="scenicName"
						        label="对应景区">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketStatus"
						        label="票状态">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketBuyTime"
						        label="购票时间">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketUsetime"
						        label="票使用时间">
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
						:page-sizes="[20,50,100,200]"
						:page-size="20"
						layout="total, sizes, prev, pager, next, jumper"
						:total="visiterList.length">
					</el-pagination>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import { staffsearchForAllVisitors, staffsearchByName, staffsearchByPhone, staffsearchByScenic, staffsearchByUseTime} from '@/api/index.js';
	import { sGetScenicInfo } from '@/api/index.js';
	export default {
		name: 'sVisiters',
		data(){
			return{
				//--------------------检测是否登录-------------------------
				isLogin:false,
				//--------------------检测是否登录-------------------------
				//-----------工作人员对应的景区信息---------------------
				scenicname:window.localStorage.getItem.scenicName,
				scenicId:0,
				//-----------工作人员对应的景区信息---------------------
				visiterList: [],
				string: '',
				stringType: '',//选择查询什么信息
				typeid:0,//查询信息对应id 1，2，3，4，5
				typecheck:true,
				typedatecheck:false,
				//------------保存选中日期---------------
				chooosedatetemp:[],
				chooseday:0,
				choosemonth:0,
				chooseyear:0,
				//------------保存选中日期---------------
				//-------------分页--------------------
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				tableHeight: 450, //默认初始值
				//-------------分页--------------------
				options: [{
					value: '选项1',
					label: '游客姓名',
				},
				{
					value: '选项2',
					label: '手机号',
				},
				{
					value: '选项3',
					label: '票使用时间',
				},
				{
					value: '选项4',
					label: '查看全部游客信息',
				}],
				
			}
		},
		methods:{
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
			//值班人员获取自己对应景区的信息
			ScenicInfo(){
				this.belongScenicName = window.localStorage.scenicName;
				if(!this.belongScenicName || this.belongScenicName == '没有'){
					console.log("未登录");
					this.isLogin = true;
					console.log(this.isLogin);
				}
				else{
					this.isLogin = false;
					let data = {
						scenicName: this.belongScenicName
					};
					sGetScenicInfo(data).then(res => {
						if(res != -1){
							this.scenicId = res.data.datas.scenicId;
							console.log(res)
							let data2 = {
								scenicId: this.scenicId,
							}
							staffsearchForAllVisitors(data2).then((res) => {
								if(res != -1){
									this.visiterList = res.data.datas;
									for(let i = 0; i < this.visiterList.length; i++)
									{
										this.visiterList[i].userId = i + 1;							
									}
								}
							})
						}
					})
				}
				
				
				
			},
			gettime(value){
				this.chooosedatetemp = value.toString().split('-');
				this.chooseyear = this.chooosedatetemp[0];
				this.choosemonth = this.chooosedatetemp[1];
				this.chooseday = this.chooosedatetemp[2];
			},
			checkchange(value){
				switch (value){
					case '查看全部游客信息':{
						this.typecheck = false;
						this.typedatecheck = false;
						this.string = '';
					}
						break;
					case '游客姓名':{
						this.typecheck = true;
						this.typedatecheck = false;
						this.string = '';
					}
						break;
					case '手机号':{
						this.typecheck = true;
						this.typedatecheck = false;
						this.string = '';
					}
						break;
					case '票使用时间':{
						this.typecheck = false;
						this.typedatecheck = true;
						this.string = '';
					}
						break;
					default:
						break;
				}
			},
			search(){
			  //打印数据
			  switch (this.stringType){
			  	case "游客姓名":
				{
					let data = {
						userName: this.string,
						scenicId: this.scenicId,
					}
					staffsearchByName(data).then((res) => {
						if(res != -1){
							this.visiterList = res.data.datas;
							for(let i = 0; i < this.visiterList.length; i++)
							{
								this.visiterList[i].userId = i + 1;							
							}
						}
					})
					break;
				}	
				case "手机号":
				{
					let data = {
						userPhone: this.string,
						scenicId: this.scenicId,
					}
					staffsearchByPhone(data).then((res) => {
						if(res != -1){
							this.visiterList = res.data.datas;
							for(let i = 0; i < this.visiterList.length; i++)
							{
								this.visiterList[i].userId = i + 1;							
							}
						}
					})
					break;
				}
				case "票使用时间":
				{
					let data = {
						scenicId: this.scenicId,
						ticketUsetimeYear:this.chooseyear,
						ticketUsetimeMonth:this.choosemonth,
						ticketUsetimeDay:this.chooseday
					}
					staffsearchByUseTime(data).then((res) => {
						if(res != -1){
							console.log(res);
							this.visiterList = res.data.datas;
							for(let i = 0; i < this.visiterList.length; i++)
							{
								this.visiterList[i].userId = i + 1;							
							}
						}
					})
					break;
				}
				case "查看全部游客信息":
				{
					let data = {
						scenicId: this.scenicId,
					}
					staffsearchForAllVisitors(data).then((res) => {
						if(res != -1){
							this.visiterList = res.data.datas;
							for(let i = 0; i < this.visiterList.length; i++)
							{
								this.visiterList[i].userId = i + 1;							
							}
						}
					})
					break;
				}
			  	default:
			  		break;
			  }
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.ScenicInfo();
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
	.block{
		margin-top: 1.5%;
		text-align: center;
	}
	.class4{
		margin-bottom: 2%;
	}
</style>