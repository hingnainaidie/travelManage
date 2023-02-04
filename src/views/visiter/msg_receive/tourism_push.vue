<template>
	<div>
		<div class="mypagetitle">
				<h2>旅游信息列表</h2>
				</div>
		<el-main>
			<el-table
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="tripInfoTime"
			        label="旅游信息时间"
			        width="280"
					align="center">
			      </el-table-column>
			      <el-table-column
			        prop="tripInfoTitle"
			        label="旅游信息名称"
			        width="480"
					align="center">
			      </el-table-column>
				  <el-table-column
				    prop="tripInfoDescription"
				    label="旅游信息描述"
					align="center">
				  </el-table-column>
			     
				  
		
			</el-table>
		</el-main>
	</div>
</template>

<script>
	import { showTripInfos } from '@/api/index.js';
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