<template>
	<div>
		<el-page-header @back="goBack" content="案件详情页面">
		</el-page-header>
		<el-main>
			<el-descriptions class="margin-top"  :column="3" :size="size" border>
			    <el-descriptions-item>
			      <template slot="label">
			        报案编号
			      </template>
			      {{case_id}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案事件描述
			      </template>
			      {{description}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案时间
			      </template>
			     {{case_start_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        立案时间
			      </template>
			     {{case_create_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        结束时间
			      </template>
			      {{case_end_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案处理状态
			      </template>
			      {{case_status}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉结果
			      </template>
			      {{case_result}}
			    </el-descriptions-item>
			  </el-descriptions>
		</el-main>
	</div>
</template>

<script>
	export default {
		name:'check_case',
		data() {
		  return {
		    case_id: 'ca000002',
			description: 'xxx',
			case_start_time:'2022/05/22',
			case_create_time:'2022/05/23',
			case_end_time:'-',
		    case_status: '处理中',
			case_result:'-'
		  }
		},
	  methods: {
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/visiter_mng/my_msg/my_case"
				})
		      }
	  }
	}
</script>

<style>
</style>