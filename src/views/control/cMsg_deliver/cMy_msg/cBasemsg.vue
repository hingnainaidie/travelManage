<template>
	<div class='top'>
		<el-descriptions class="margin-top" title="我的基本信息" :column="1">
		    <template slot="extra">
		      <el-button type="primary" size="small" @click="dialog1 = true">修改基本信息</el-button>
			  <el-button type="warning" size="small" @click="dialog2 = true">修改密码</el-button>
		    </template>
		    <el-descriptions-item label="用户名">{{form.user_name}}</el-descriptions-item>
		    <el-descriptions-item label="手机号">{{form.user_phone}}</el-descriptions-item>
		    <el-descriptions-item label="身份">
		      <el-tag size="small">指挥中心</el-tag>
		    </el-descriptions-item>
		    <el-descriptions-item label="身份证号">{{form.user_identify}}</el-descriptions-item>
			<el-descriptions-item label="性别">女</el-descriptions-item>
		  </el-descriptions>
		  <el-dialog title="修改基本信息" :visible.sync="dialog1">
		    <el-form :model="form">
		      <el-form-item label="用户名" label-width="120px">
		        <el-input v-model="form.user_name" ></el-input>
		      </el-form-item>
			  <el-form-item label="手机号" label-width="120px">
			    <el-input v-model="form.user_phone"></el-input>
			  </el-form-item>
			  <el-form-item label="身份证号" label-width="120px">
			    <el-input v-model="form.user_identify"></el-input>
			  </el-form-item>
		    </el-form>
		    <div slot="footer" class="dialog-footer">
		      <el-button @click="dialog1 = false">取 消</el-button>
		      <el-button type="primary" @click="dialog1 = false">确 定</el-button>
		    </div>
		  </el-dialog>
		  <el-dialog title="修改密码" :visible.sync="dialog2">
		    <el-form :model="form">
		      <el-form-item label="旧密码" label-width="120px">
		        <el-input v-model="userPwd" type="password"></el-input>
		      </el-form-item>
			  <el-form-item label="新密码" label-width="120px">
				<el-input v-model="userNewPwd" type="password"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" label-width="120px">
				<el-input v-model="userNewPwd1" type="password"></el-input>
			  </el-form-item>
		    </el-form>
		    <div slot="footer" class="dialog-footer">
		      <el-button @click="dialog2 = false">取 消</el-button>
		      <el-button type="primary" @click="dialog2 = false">确 定</el-button>
		    </div>
		  </el-dialog>
	</div>
</template>

<script>
	export default {
	  name: "cBasemsg",
	  data(){
	    return {
			dialog1: false,
			dialog2: false,
			form:{
				user_id:'1',
				user_name: '郑维维',
				user_phone: '18100000000',
				user_identify:'500208481000203938'
			},
			userPwd:'',
			userNewPwd:'',
			userNewPwd1:''
	    }
	  },
	  methods:{
	  }
	}
</script>

<style scope>
	.margin-top{
		margin: 10px;
	}
</style>