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
			<h1>停车场信息</h1>			
			<div>
				<el-select v-model="place" slot="prepend" placeholder="请选择地区" >
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
				</el-select>
				<el-button slot="append" style="margin-left: 1%;" icon="el-icon-search"  @click="search">搜索</el-button>
				<div  style="margin-top: 1%">
					<el-table
							:data="parkingList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
							stripe
							style="width: 100%"
							ref="recordTable"
							:height="tableHeight">
						<el-table-column
								width="100px;"
								align="center"
								prop="parkingId"
								label="序号">
						</el-table-column>
						<el-table-column
								align="center"
								prop="parkingLocation"
								label="停车场地址">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
								prop="parkingMaxCapacity"
								label="停车场总容量/个">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
								prop="parkingRemainingCapacity"
								label="停车场剩余车位/个">
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
						:total="parkingList.length">
					</el-pagination>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	import { tGetParkingInfo } from '@/api/index.js';
	import { sGetChoseParkingInfo } from '@/api/index.js';
	export default {
		name: 'sCar_msg',
		data(){
			return{
				//--------------------检测是否登录-------------------------
				isLogin:false,
				//--------------------检测是否登录-------------------------
				tableHeight: 450, //默认初始值
				parkingList: [],
				//-------------根据字段查询---------------
				chosestr:'',//选中的地址字段
				//-------------根据字段查询---------------
				//-------------分页--------------------
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				//-------------分页--------------------
				value: '',
				place: '',
				options: [{
					value: '选项1',
					label: '两江新区',
				},
				{
					value: '选项2',
					label: '渝中区',
				},
				{
					value: '选项3',
					label: '渝北区',
				},
				{
					value: '选项4',
					label: '南岸区',
				},
				{
					value: '选项5',
					label: '沙坪坝区',
				},
				{
					value: '选项6',
					label: '查看所有',
				}],
				userInfo: localStorage.getItem('userInfo'),
				userLevel:4,
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
			//值班人员查看停车场信息
			sParkingInfo(){
				console.log(window.localStorage.userId)
				this.userLevel = window.localStorage.userLevel;
				if(!window.localStorage.userId || this.userLevel != 1){
					console.log("未登录");
					this.isLogin = true;
					console.log(this.isLogin);
				}
				else{
					this.isLogin = false;
					tGetParkingInfo().then(res => {
						if(res != -1){
							this.parkingList = res.data.datas;
							for(let i = 0; i < this.parkingList.length; i++)
							{
								this.parkingList[i].parkingId = i + 1;							
							}
						}
					})
					}
				
			},
			//根据字段搜索停车场信息
			sChoseParkingInfo(){
				let data = {
					parkingLocation: this.chosestr
				};
				sGetChoseParkingInfo(data).then(res => {
					if(res != -1){
						this.parkingList = res.data.datas;
						for(let i = 0; i < this.parkingList.length; i++)
						{
							this.parkingList[i].parkingId = i + 1;							
						}
					}
				})
			},
			//搜索
			search(){
				this.chosestr = this.place;
				if(this.chosestr == '查看所有'){
					this.sParkingInfo();
				}else{
					this.sChoseParkingInfo();
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				//页面初始化的时候执行
				this.sParkingInfo();
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