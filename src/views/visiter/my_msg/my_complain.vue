<template>
	<div>
		<div class="my_complain">
			<h2>我的投诉</h2>
		</div>
		<div>
		 <el-row class="new_complain">
		  <el-button type="primary" @click="newComplain()">新建</el-button>
		 </el-row>
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
	import {getAllComEvents,showVisComEvent} from '@/api/index.js';
		    export default {
				name:'my_complain',
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
					complainList:[],
					tuserId:'' //需要获取当前游客id
					// complainList: [{
					// 			  complaint_id: 'co000001',
					// 			  description: 'xxx',
					// 			  complaint_status: 2
					// }, {
					// 	complaint_id: 'co000002',
					// 	description: 'xxx',
					// 	complaint_status: 1
					// }, {
					// 	complaint_id: 'co000003',
					// 	description: 'xxx',
					// 	complaint_status: 0
					// }],
		        }
		      },
			  methods: {
				  initComplainList(){
					  this.tuserId = window.localStorage.userId;
				  	  showVisComEvent({tuserId:this.tuserId}).then((res) => {
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
			    newComplain(){
			  	  this.$router.push({
			  	    path: "/visiter_mng/my_msg/new_complain"
			  	  })
			    },
				check_complain(row){
				  this.$router.push({
				    path: "/visiter_mng/my_msg/check_complain",
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
					const property = column['property'];
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
	.my_complain{
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