<template>
	<div>
		<div class="complain_solve">
			<h2>投诉管理</h2>
		</div>
		<div>
			<el-table border :data='complainList' style='width: 100%; padding: auto;'>
				<el-table-column prop='complaintId' label='投诉编号' width="200"></el-table-column>
				<el-table-column prop='complaintDescription' label='投诉事件描述' min-width="270"></el-table-column>
				<el-table-column prop='complaintStatus' label='投诉处理状态' :filters="status"
					:filter-method="filterHandle" width="120">
					<template slot-scope="scope">
						<el-tag
						:type="color(scope.row.complaintStatus)">{{sta(scope.row.complaintStatus)}}</el-tag>
					</template>
				</el-table-column>
				<!-- <el-table-column prop='StatusName' label='投诉处理状态'  width="120">
				</el-table-column> -->
					<el-table-column>
						<template slot-scope="scope">
							<el-link :underline="false" @click="check_complain(scope.row)">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
						</template>
					</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
	import {getAllComEvents} from '@/api/index.js';
		    export default {
				name:'complain_solve',
		      data() {
		        return {
					status: [{
						text: '未处理',
						value: "0"
						},
						{
							text: '已处理',
							value: "2"
						}
						],
						complainList: []
		        }
		      },
			  methods: {
				  initComplainList(){
					  getAllComEvents().then((res) => {
					if(res != -1){
						this.complainList = res.data.datas;
						//两层循环修改数据
						this.complainList.forEach((item)=>{
							console.log(item.complaintStatus);
							this.status.forEach((itemin)=>{
								if(item.complaintStatus==itemin.value){
									item.StatusName=itemin.text;
									return true;
								}
							})
						})
						console.log(this.complainList);
						console.log(this.complainList.complaintStatus);
						if(this.complainList.complaintStatus=="1"){
							console.log("已处理");
						}
					}
					
				})

				  },
				check_complain(row){
				  this.$router.push({
				    path: "/staff_mng/events_solve/check_complain",
					query: {
					          complaintId: row.complaintId
					}// 要传递的参数
				  })
				},
				sta(data) {
					if (data == 0) {
						return "未处理"
					} else if (data == 1) {
						return "处理中"
					} else if (data == 2) {
						return "已处理"
					}
				},
				color(data){
					if (data == 0) {
						return "primary"
					} else if (data == 1) {
						return "warning"
					} else if (data == 2) {
						return "info"
					}
				},
				filterHandle(value, row, column) {
					console.log(value);
					const property = column['property'];
					console.log(row[property]);
					return row[property] === value;
				}
			  },
			  mounted() {
			  	this.$nextTick(() => {
			  		  		//页面初始化的时候执行
			  		  		this.initComplainList();
			  		  	})
			  }
		    }
</script>
<style>
	.complain_solve{
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}
	.new_complain{
		margin-bottom:20px;
	}
	h2{
		color: gray;
	}
</style>