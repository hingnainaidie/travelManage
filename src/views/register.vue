<template>
  <div>
    <div class="msg">
      <el-card class="box-card">
        <div slot="header">
          <span>USER-LOGIN-NEW</span>
        </div>
        <div>
          <el-form :model="form">
			  <el-form-item>
			    <el-input size="medium" v-model="form.userName" placeholder="请输入姓名"></el-input>
			  </el-form-item>
			  <div style="margin-top: 8px;margin-bottom: 18px;margin-left: 10px;">
				  请输入性别
				  <el-radio v-model="form.userGender" label="男" style="margin-left: 50px;">男</el-radio>
				  <el-radio v-model="form.userGender" label="女">女</el-radio>
			  </div>
			  <el-form-item>
			    <el-input size="medium" v-model="form.userIdentify" placeholder="请设置身份证号"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-input size="medium" v-model="form.userPhone" placeholder="请输入手机号码"></el-input>
			  </el-form-item>
            <el-form-item>
              <el-input size="medium" v-model="form.userAccount" placeholder="请设置用户名"></el-input>
            </el-form-item>
			
            <el-form-item>
              <el-input size="medium" type="password" v-model="form.userPassword" placeholder="请设置登录密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="medium" type="password" v-model="form.userrepwd" placeholder="请再次输入登录密码"></el-input>
            </el-form-item>
            <el-form-item>
				<div style="text-align: center;">
					<el-button type="primary" @click="submsg()" size="medium" class="w-100">同意并注册</el-button>
				</div>  
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked"></el-checkbox>
               <el-link type="primary">同意条款和隐私权政策</el-link>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
	import { registerSystem } from '@/api/index.js';
  export default {
    name: 'register',
    data() {
      return {
        form: {
			
          userName: '',
		  userGender: '',
		  userIdentify: '',
		  userPhone: '',
          userAccount:'',
          userPassword: '',
          userrepwd: '',
		  stempStr:'',
		  stempStr2:'',
          
        },
        checked: false
      };
    },
    methods: {
      submsg() {
		var pattern = new RegExp("[A-Za-z0-9]+");
		console.log(this.form.userIdentify)
		var sTmpStr = new String(this.form.userIdentify);
		var sTmpStr2 = new String(this.form.userPhone);
		console.log(sTmpStr)
        if (this.form.userName == '') {
          alert("请输入用户名")
        } else if (this.form.userPassword == '') {
          alert("请输入密码")
        } else if (this.form.userPhone == '') {
          alert("请输入电话号码")
        } else if (this.form.userPassword != this.form.userrepwd) {
          alert("两次输入密码不一样")
        } else if(!this.checked){
          alert("请勾选同意条款和隐私权政策")
        } else if(sTmpStr.length != 18){
			alert("身份证长度不合法");
		}else if(sTmpStr2.length != 11){
			alert("手机号长度不合法");
		}else if(!pattern.test(this.form.userAccount)){
			alert("账号只能为数字和字母组合");
		}
		else {
			this.form.userLevel = 2;
			this.form.scenicId = 1;
			registerSystem(this.form).then((res) => {
					if(res != -1 &&  res.data.code == 666){
						
						console.log(res);
						this.$message({
							type: 'success',
							message: '注册成功!'
						  });
						
						this.$router.push({ name:'login'})
					}
					else if(res.data.code == 701)	
					{
						console.log(res)
						this.$message({
							type: 'error',
							message: res.data.message
						  });
					}
					
				})
        }
      }
    }
  }
</script>

<style scoped>
  .msg {
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .tip {
    margin-right: 0;
    margin-left: 300px;
  }
</style>