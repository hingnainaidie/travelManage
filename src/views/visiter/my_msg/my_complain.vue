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
				<el-table-column prop='complaint_id' label='投诉编号' width="200"></el-table-column>
				<el-table-column prop='description' label='投诉事件描述' min-width="270"></el-table-column>
				<el-table-column prop='complaint_status' label='投诉处理状态' :filters="status"
					:filter-method="filterHandle" width="120">
					<template slot-scope="scope">
						<el-tag
						:type="color(scope.row.complaint_status)">{{sta(scope.row.complaint_status)}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column>
					<el-link :underline="false" @click="check_complain()">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
		    export default {
				name:'my_complain',
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
					complainList: [{
								  complaint_id: 'co000001',
								  description: 'xxx',
								  complaint_status: 2
					}, {
						complaint_id: 'co000002',
						description: 'xxx',
						complaint_status: 1
					}, {
						complaint_id: 'co000003',
						description: 'xxx',
						complaint_status: 0
					}],
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
			    newComplain(){
			  	  this.$router.push({
			  	    path: "/visiter_mng/my_msg/new_complain"
			  	  })
			    },
				check_complain(){
				  this.$router.push({
				    path: "/visiter_mng/my_msg/check_complain"
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