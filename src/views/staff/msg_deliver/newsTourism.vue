<template>
	<div>
		<el-row>
		<el-page-header @back="goBack" content="发布旅游信息">
			</el-page-header>
			</el-row>
			<el-main>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
				  <el-form-item label="旅游信息名称" prop="trip_info_title">
				    <el-input v-model="ruleForm.trip_info_title" placeholder="请输入旅游信息名称"></el-input>
				  </el-form-item>
				  <el-form-item label="旅游信息描述" prop="trip_info_description">
				      <el-input type="textarea" v-model="ruleForm.trip_info_description" placeholder="请输入旅游信息描述"></el-input>
				    </el-form-item>
				  
				  <el-form-item>
				    <el-button type="info" plain @click="submitForm('ruleForm')">立即创建</el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
				  </el-form-item>
				  
				</el-form>
			</el-main>
	</div>
	
</template>

<script>
	import { createTripInfo } from '@/api/index.js';

	export default {
	    data() {
	      return {
	        ruleForm: {
	          trip_info_title: '',
	          trip_info_description: '',
			  suser_id:''
	        },
	        rules: {
	          trip_info_title: [
	            { required: true, message: '请输入旅游信息名称', trigger: 'blur' },
	            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
	          ],
	          trip_info_description: [
	            { required: true, message: '请输入旅游信息描述', trigger: 'blur' }
	          ]
	          
	        }
	      };
	    },
	    methods: {
			goBack() {
			        console.log('go back');
					this.$router.push({
					  path: "/staff_mng/msg_deliver/sTourism_push"
					})
			      },
	      submitForm(formName) {
			this.ruleForm.suser_id = window.localStorage.userId;
			let data = {
				tripInfoTitle: this.ruleForm.trip_info_title,
				tripInfoDescription: this.ruleForm.trip_info_description,
				suserId:this.ruleForm.suser_id,
				// tripInfoStatus: "进行中",
			};
			console.log(this.ruleForm);
			console.log(data);
			createTripInfo(data).then((res) => {
				if(res != -1){
					
					console.log(res);
				}
				
			})
			
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('发布成功!');
	          } else {
	            console.log('发布失败!');
	            return false;
	          }
	        });
			
			this.$router.push({
			  path: "/staff_mng/msg_deliver/sTourism_push"
			})
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
		  
	    }
	  }
</script>

<style>
</style>