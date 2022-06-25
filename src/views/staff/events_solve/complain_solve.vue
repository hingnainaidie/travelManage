<template>
	<div>
		<el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="complaint_id"
		        label="投诉编号"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="complaint_status"
		        label="投诉处理状态"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="description"
		        label="投诉事件描述">
		      </el-table-column>
			 <el-table-column>
			 	<el-link :underline="false" @click="check_complain()">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
			 </el-table-column>
		</el-table>
	</div>
</template>
<script>
		    export default {
		      data() {
		        return {
		          tableData: [{
		            complaint_id: 'co000001',
		            complaint_status: '已处理',
		            description: 'xxx'
		          }, {
		            complaint_id: 'co000002',
		            complaint_status: '处理中',
		            description: 'xxx'
		          }, {
		            complaint_id: 'co000003',
		            complaint_status: '未处理',
		            description: 'xxx'
		          }]
		        }
		      },
			  methods: {
				check_complain(){
				  this.$router.push({
				    path: "/staff_mng/events_solve/check_complain"
				  })
				}
			  }
		    }
</script>
<style>
</style>