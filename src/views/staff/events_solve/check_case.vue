<template>
	<div>
		<el-page-header @back="goBack" content="报案详情页面">
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
		<el-row type="flex" class="row-bg" justify="end">
		  <el-button type="success" @click="generateCase()">生成旅游事件</el-button>
		  <el-button type="primary" @click="submitMethod()">提交处理方案</el-button>
		</el-row>
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
				  path: "/staff_mng/events_solve/case_solve"
				})
		      },
		submitMethod(){
			this.$router.push({
			  path: "/staff_mng/events_solve/submit_case_method"
			})
		},
		generateCase(){
			alert("成功生成！")
		}
	  }
	}
</script>

<style>
</style>