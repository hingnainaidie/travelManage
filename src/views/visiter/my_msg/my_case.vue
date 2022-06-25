<template>
	<div>
		<div class="my_case">
			<h2>我的报案</h2>
		</div>
		<el-row>
		  <el-button type="primary" @click="newCase()">新建</el-button>
		</el-row>
		<el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="case_id"
		        label="报案编号"
		        width="180">
		      </el-table-column>
			  <el-table-column
			    prop="description"
			    label="报案事件描述">
			  </el-table-column>
		      <el-table-column
		        prop="case_status"
		        label="报案处理状态"
		        width="180">
		      </el-table-column>
			  <el-table-column>
			  	<el-link :underline="false" @click="check_case()()">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
			  </el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      tableData: [{
	        case_id: 'ca000001',
	        case_status: '已处理',
	        description: 'xxx'
	      }, {
	        case_id: 'ca000002',
	        case_status: '处理中',
	        description: 'xxx'
	      }, {
	        case_id: 'ca000003',
	        case_status: '未处理',
	        description: 'xxx'
	      }]
	    }
	  },
	  methods: {
	    newCase(){
	  	  this.$router.push({
	  	    path: "/visiter_mng/my_msg/new_case"
	  	  })
	    },
		check_case(){
		  this.$router.push({
		    path: "/visiter_mng/my_msg/check_case"
		  })
		}
	  }
	}
</script>

<style>
	.my_case{
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}
	h2{
		color: gray;
	}
</style>