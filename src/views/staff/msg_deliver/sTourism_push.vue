<template>
	<div>
		<div class="mypagetitle">
				<h2>旅游信息管理</h2>
				</div>
		<el-row>
		  <el-button type="info" plain @click="newInfo()">发布旅游信息</el-button>
		</el-row>
		<el-main>
			<el-table
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="tripInfoTime"
			        label="旅游信息时间"
			        width="180" 
					align="center">
			      </el-table-column>
			      <el-table-column
			        prop="tripInfoTitle"
			        label="旅游信息名称"
			        width="500"
					align="center">
			      </el-table-column>
			      <!-- <el-table-column
			        prop="tripInfoStatus"
			        label="旅游信息状态"
					:filters="status"
					:filter-method="filterHandle"
			        width="200">
					<template slot-scope="scope">
						{{sta(scope.row.tripInfoStatus)}}
					</template>
			      </el-table-column> -->
				  <el-table-column
				  width="180">    
				  <template slot-scope="scope">
					  <el-link :underline="false" @click="checkInfo(scope.row)">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
					  </template>
				  </el-table-column>
				  <el-table-column>
					  <template slot-scope="scope">
					  <el-link :underline="false" @click="deInfo(scope.row)">删除<i class="el-icon-delete el-icon--right"></i> </el-link>
					</template>
				  </el-table-column>

			</el-table>
		</el-main>
		
	</div>
</template>

<script>
	import { showTripInfos } from '@/api/index.js';
	import { deleteTripInfo } from '@/api/index.js';
	export default {
	  data() {
	    return {
			status: [{
					text: '进行中',
					value: 0
				},
				{
					text: '已过期',
					value: 1
				}
			],
	      tableData: []
	    }
	  },
	  methods: {
		  originPage(){
			  
			// console.log("打印到控制台");
			showTripInfos().then((res) => {
				if(res != -1){
					this.tableData = res.data.datas;
					console.log(this.tableData);
					//两层循环修改数据
					this.tableData.forEach((item)=>{
						console.log(item.tripInfoStatus);
						this.status.forEach((itemin)=>{
							if(item.tripInfoStatus==itemin.value){
								item.StatusName=itemin.text;
								return true;
							}
						})
					})
					console.log(this.tableData);
					console.log(this.tableData.tripInfoStatus);
					if(this.tableData.tripInfoStatus==1){
						console.log("已处理");
					}
				}
				
			})  
			  
		  },
		  sta(data) {
		  	if (data == 0) {
		  		return "进行中"
		  	} else if (data == 1) {
		  		return "已过期"
		  	}
		  },
		
		
		
	    newInfo(){
	  	  this.$router.push({
	  	    path: "/staff_mng/msg_deliver/newsTourism"
	  	  })
	    },
		checkInfo(row){
		  this.$router.push({
		    path: "/staff_mng/msg_deliver/chsTourism",
			query: {
			          tripInfoId: row.tripInfoId
			}// 要传递的参数
		  })
		},
		deInfo(row) {
		        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning',
		          center: true
		        }).then(() => {
					console.log("删除");
				deleteTripInfo({tripInfoId:row.tripInfoId}).then((res) => {
				if(res != -1){
					console.log(row);
					console.log(res);
				}
				//刷新页面
				this.originPage();
			});
				
		          this.$message({
		            type: 'success',
		            message: '删除成功!',
					duration: 1500
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除',
					duration: 1500
		          });
		        });
		      },
			  filterHandle(value, row, column) {
			  	return row.tripInfoStatus === value
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