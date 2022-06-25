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
			      ca000002
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案事件描述
			      </template>
			      xxx
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案时间
			      </template>
			     2022/05/22
			    </el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    立案时间
				  </template>
				 2022/05/23
				</el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        结束时间
			      </template>
				  -
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案处理状态
			      </template>
			      处理中
			    </el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    投诉结果
				  </template>
				  -
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
        name:'submit_case_method',
		data() {
		  return {
		    form: {
		      method:''
		    }
		  };
		},
	  methods: {
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/staff_mng/events_solve/case_solve"
				})
		      },
		submitMethod(){
			if (this.form.method == '') {
			  alert("请输入处理方案")
			}  else{
				alert("成功创建！")
				this.$router.push({
				  path: "/staff_mng/events_solve/case_solve"
				})
			}
		}
	  }
	}
</script>

<style>
</style>