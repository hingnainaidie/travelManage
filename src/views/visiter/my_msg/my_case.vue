<template>
	<div>
		<div class="my_case">
			<h2>我的报案</h2>
		</div>
		<div>
			<el-row class="new_case">
			  <el-button type="primary" @click="newCase()">新建</el-button>
			</el-row>
		</div>
		<div>
			<el-table border :data='caseList' style='width: 100%; padding: auto;'>
				<el-table-column prop='case_id' label='报案编号' width="200"></el-table-column>
				<el-table-column prop='description' label='报案事件描述' min-width="270"></el-table-column>
				<el-table-column prop='case_status' label='报案处理状态' :filters="status"
					:filter-method="filterHandle" width="120">
					<template slot-scope="scope">
						<el-tag
						:type="color(scope.row.case_status)">{{sta(scope.row.case_status)}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column>
					<el-link :underline="false" @click="check_case()">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name:'my_case',
	  data() {
	    return {
		  status: [{
		  		text: '未处理',
		  		value: 0
		  	},
		  	{
		  		text: '处理中',
		  		value: 1
		  	},
		  	{
		  		text: '已处理',
		  		value: 2
		  	}
		  ],
		  caseList: [{
			  case_id: 'ca000001',
			  description: 'xxx',
			  case_status: 2
		  }, {
		  	case_id: 'ca000002',
		  	description: 'xxx',
		  	case_status: 1
		  }, {
		  	case_id: 'ca000003',
		  	description: 'xxx',
		  	case_status: 0
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
	  }
	}
</script>

<style>
	.my_case{
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}
	.new_case{
		margin-bottom:20px;
	}
	h2{
		color: gray;
	}
</style>