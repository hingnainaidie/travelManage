<template>
	<div>
		<el-page-header @back="goBack" content="投诉详情页面">
		</el-page-header>
		<el-main>
			<el-descriptions  class="margin-top"  :column="3" :size="size" border>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉编号
			      </template>
			      {{complaint_id}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉事件描述
			      </template>
			      {{description}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉时间
			      </template>
			     {{complaint_start_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        结束时间
			      </template>
				  {{complaint_end_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉处理状态
			      </template>
			      {{complaint_status}}
			    </el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    投诉结果
				  </template>
				  {{complaint_result}}
				</el-descriptions-item>
			  </el-descriptions>
		</el-main>
		<el-main>
			处理方案
			<el-input id="input1" type="textarea" placeholder="请输入处理方案" v-model="form.method" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
		</el-main>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="submitMethod()">提交</el-button>
		</el-row>
		</el-main>
	</div>
</template>

<script>
	export default {
        name:'submit_complain_method',
		data() {
		  return {
			  complaint_id: 'co000002',
			  description: 'xxx',
			  complaint_start_time:'2022/05/22',
			  complaint_end_time:'-',
			  complaint_status: '处理中',
			  complaint_result:'-',
		    form: {
		      method:''
		    }
		  };
		},
	  methods: {
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/staff_mng/events_solve/complain_solve"
				})
		      },
		submitMethod(){
			if (this.form.method == '') {
			  alert("请输入处理方案")
			}  else{
				alert("成功创建！")
				this.$router.push({
				  path: "/staff_mng/events_solve/complain_solve"
				})
			}
		}
	  }
	}
</script>

<style>
</style>