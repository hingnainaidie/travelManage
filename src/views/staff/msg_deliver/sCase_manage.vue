<template>
	<div>
		<div class="mypagetitle">
				<h2>旅游事件管理</h2>
				</div>
		<el-row>
		  <el-button type="info" plain @click="newTe()">上传旅游事件</el-button>
		  
		</el-row>
		<el-main>
			<el-table
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="tripEventTime"
			        label="旅游事件时间"
			        width="180"
					align="center">
			      </el-table-column>
			      <el-table-column
			        prop="tripEventStatus"
			        label="旅游事件状态"
					:filters="status"
					:filter-method="filterHandle"
			        width="180"
					align="center">
					<template slot-scope="scope">
						{{sta(scope.row.tripEventStatus)}}
					</template>
					
			      </el-table-column>
			      <el-table-column
			        prop="tripEventDescription"
			        label="旅游事件描述"
					align="center">
			      </el-table-column>
				  <el-table-column>
					  <template slot-scope="scope">
					  <el-link :underline="false" @click="checkTe(scope.row)">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
				  </template>
				  </el-table-column>
			</el-table>
		</el-main>
		
	</div>
</template>

<script>
	import { showTripEvent } from '@/api/index.js';
	export default {
	  data() {
	    return {
			status: [{
					text: '未处理',
					value: 0
				},
				
				{
					text: '已处理',
					value: 2
				}
			],
	      tableData: []
	    }
	  },
	  methods: {
		  originPage(){
		  			// console.log("打印到控制台");
		  			showTripEvent().then((res) => {
		  				if(res != -1){
		  					this.tableData = res.data.datas;
		  					console.log(this.tableData);
		  					//两层循环修改数据
		  					this.tableData.forEach((item)=>{
		  						console.log(item.tripEventStatus);
		  						this.status.forEach((itemin)=>{
		  							if(item.tripEventStatus==itemin.value){
		  								item.StatusName=itemin.text;
		  								return true;
		  							}
		  						})
		  					})
		  					console.log(this.tableData);
		  					console.log(this.tableData.tripEventStatus);
		  					if(this.tableData.tripEventStatus==1){
		  						console.log("已处理");
		  					}
		  				}
		  				
		  			})  
		  			  
		  },
		sta(data) {
			if (data == 0) {
				return "未处理"
			} else if (data == 2) {
				return "已处理"
			}
		},
	    newTe(){
	  	  this.$router.push({
	  	    path: "/staff_mng/msg_deliver/newsCase"
	  	  })
	    },
		checkTe(row){
			// console.log(row);
			// console.log(row.tripEventId);
		  this.$router.push({
		    path: "/staff_mng/msg_deliver/checksCase",
			query: {
			          tripEventId: row.tripEventId
			}// 要传递的参数
		  })
		},
		filterHandle(value, row, column) {
			return row.tripEventStatus === value
		}
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		  		//页面初始化的时候执行
	  		  		this.originPage();
	  		  		
	  		  	})
	  }
	}
</script>

<style>
	.mypagetitle{
			text-align: center;
			margin: auto;
			min-width: 1000px;
		}
</style>