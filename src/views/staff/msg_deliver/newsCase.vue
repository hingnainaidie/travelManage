<template>
	<div>
		<el-row>
		  <el-page-header @back="goBack" content="新建旅游事件">
		  </el-page-header>
		</el-row>
		<el-main>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
			  <el-form-item label="旅游事件名称" prop="trip_event_title">
			    <el-input v-model="ruleForm.trip_event_title" placeholder="请输入旅游事件名称"></el-input>
			  </el-form-item>
			  <el-form-item label="旅游事件描述" prop="trip_event_description">
			      <el-input type="textarea" v-model="ruleForm.trip_event_description" placeholder="请输入旅游事件描述"></el-input>
			    </el-form-item>
			  
			  <el-form-item label="旅游事件分类" prop="trip_event_classification">
			      <el-select v-model="ruleForm.trip_event_classification" placeholder="请选择旅游事件分类">
			        <el-option label="自然灾害" value="自然灾害"></el-option>
			        <el-option label="事故灾害" value="事故灾害"></el-option>
					<el-option label="公共卫生事件" value="公共卫生事件"></el-option>
					<el-option label="社会安全事件" value="社会安全事件"></el-option>
					<el-option label="经营突发事件" value="经营突发事件"></el-option>
			      </el-select>
			    </el-form-item>
				<el-form-item label="旅游事件发生地点" prop="trip_event_location">
				  <el-input v-model="ruleForm.trip_event_location" placeholder="请输入旅游事件发生地点"></el-input>
				</el-form-item>
				<el-form-item label="旅游事件现场信息" prop="trip_event_info">
				    <el-input type="textarea" v-model="ruleForm.trip_event_info" placeholder="请输入旅游事件现场信息"></el-input>
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
	import { createTripEvent } from '@/api/index.js';
	export default {
	    data() {
	      return {
	        ruleForm: {
	          trip_event_title: '',
	          trip_event_description: '',
			  trip_event_classification:'',
			  trip_event_location:'',
			  trip_event_info:'',
			  user_id:''
	          
	        },
	        rules: {
	          trip_event_title: [
	            { required: true, message: '请输入旅游事件名称', trigger: 'blur' },
	            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
	          ],
	          trip_event_description: [
	            { required: true, message: '请输入旅游事件描述', trigger: 'blur' }
	          ],
			  trip_event_classification:[
				  { required: true, message: '请选择旅游事件分类', trigger: 'change' }
			  ],
			  trip_event_location:[
				  { required: true, message: '请输入旅游事件发送地点', trigger: 'blur' },
				  { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
			  ],
			  trip_event_info:[
				  { required: true, message: '请输入旅游事件现场信息', trigger: 'blur' }
			  ]
	          
	        }
	      };
	    },
	    methods: {
			goBack() {
			        console.log('go back');
					this.$router.push({
					  path: "/staff_mng/msg_deliver/sCase_manage"
					})
			      },
	      submitForm(formName) {
			  this.ruleForm.user_id = window.localStorage.userId;
			  let data = {
			  	tripEventTitle: this.ruleForm.trip_event_title,
			  	tripEventDescription: this.ruleForm.trip_event_description,
				tripEventClassification:this.ruleForm.trip_event_classification,
				tripEventLocation:this.ruleForm.trip_event_location,
				tripEventInfo:this.ruleForm.trip_event_info,
				userId:this.ruleForm.user_id,//?
			  };
			  console.log(this.ruleForm);
			  console.log(data);
			  createTripEvent(data).then((res) => {
			  	if(res != -1){
			  		
			  		console.log(res);
			  	}
				
				this.$router.push({
				  path: "/staff_mng/msg_deliver/sCase_manage"
				})
			  	
			  })
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('上传成功!');
	          } else {
	            console.log('上传失败!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style>
</style>