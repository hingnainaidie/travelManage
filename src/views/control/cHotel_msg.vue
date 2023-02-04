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
			<h1>酒店信息</h1>
			<div>
				<el-select v-model="place" slot="prepend" placeholder="请选择地区" >
				    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
				</el-select>
				<el-button slot="append" style="margin-left: 1%;" icon="el-icon-search" @click="search">搜索</el-button>
				<div  style="margin-top: 1%">
					<el-table	
					        :data="HotelList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					        stripe
					        style="width: 100%"
					        ref="recordTable"
					        :height="tableHeight">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="hotelId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
					    		align="center"
					            prop="hotelName"
					            label="酒店名称">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="hotelLocation"
					            label="酒店地址">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="hotelRemainingCapacity"
						        label="酒店最大客容量">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="hotelMaxCapacity"
						        label="酒店剩余客容量">
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
			      :total="HotelList.length">
			    </el-pagination>
			  </div>
			</template>
		</div>
	</div>
</template>

<script>
	import { tGetHotelInfo } from '@/api/index.js';
	import { sGetChoseHotelInfo } from '@/api/index.js';
	export default {
		name: 'cHotel_msg',
		data(){
			return{
				//--------------------检测是否登录-------------------------
				isLogin:false,
				//--------------------检测是否登录-------------------------
				HotelList:[],
				//-------------根据字段查询---------------
				chosestr:'',//选中的地址字段
				//-------------根据字段查询---------------
				//-------------分页--------------------
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				tableHeight: 450, //默认初始值
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
				userInfo:localStorage.getItem('userInfo'),
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
			//查看酒店信息
			sHotelInfo(){
				this.userLevel = window.localStorage.userLevel;
				if(!window.localStorage.userId || this.userLevel != 0){
					console.log("未登录");
					this.isLogin = true;
					console.log(this.isLogin);
				}
				else{
					this.isLogin = false;
					tGetHotelInfo().then(res => {
						if(res != -1){
							this.HotelList = res.data.datas;
							for(let i = 0; i < this.HotelList.length; i++)
							{
								this.HotelList[i].hotelId = i + 1;							
							}
						}
					})
				}
				
			},
			//根据字段搜索酒店信息
			sChoseHotelInfo(){
				let data = {
					hotelLocation: this.chosestr
				};
				sGetChoseHotelInfo(data).then(res => {
					if(res != -1){
						this.HotelList = res.data.datas;
						for(let i = 0; i < this.HotelList.length; i++)
						{
							this.HotelList[i].hotelId = i + 1;							
						}
					}
				})
			},
			//搜索
			search(){
				this.chosestr = this.place;
				this.chosestr = this.place;
				if(this.chosestr == '查看所有'){
					this.sHotelInfo();
				}else{
					this.sChoseHotelInfo();
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				//页面初始化的时候执行
				this.sHotelInfo();
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