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
			    <el-input size="medium" v-model="form.username" placeholder="请输入姓名"></el-input>
			  </el-form-item>
			  <div style="margin-top: 8px;margin-bottom: 18px;margin-left: 10px;">
				  请输入性别
				  <el-radio v-model="form.usergender" label="男" style="margin-left: 50px;">男</el-radio>
				  <el-radio v-model="form.usergender" label="女">女</el-radio>
			  </div>
			  <el-form-item>
			    <el-input size="medium" v-model="form.useridentify" placeholder="请设置身份证号"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-input size="medium" v-model="form.userphone" placeholder="请输入手机号码"></el-input>
			  </el-form-item>
            <el-form-item>
              <el-input size="medium" v-model="form.useraccount" placeholder="请设置用户名"></el-input>
            </el-form-item>
			<el-form-item>
			  <el-input size="medium" v-model="form.userphone" placeholder="请输入手机号码"></el-input>
			</el-form-item>
            <el-form-item>
              <el-input size="medium" type="password" v-model="form.userpwd" placeholder="请设置登录密码"></el-input>
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
  export default {
    name: 'register',
    data() {
      return {
        form: {
			
          username: '',
		  usergender: '',
		  useridentify: '',
		  userphone: '',
          useraccount:'',
          userpwd: '',
          userrepwd: '',
          
        },
        checked: false
      };
    },
    methods: {
      submsg() {
        if (this.form.username == '') {
          alert("请输入用户名")
        } else if (this.form.pwd == '') {
          alert("请输入密码")
        } else if (this.form.pnum == '') {
          alert("请输入电话号码")
        } else if (this.form.pwd != this.form.repwd) {
          alert("两次输入密码不一样")
        } else if(!this.checked){
          alert("请勾选同意条款和隐私权政策")
        }else {
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
