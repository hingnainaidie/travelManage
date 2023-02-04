<template>
    <div>
      <div class="msg">
        <el-card class="box-card">
          <div slot="header">
            <span>USER-LOGIN</span>
          </div>
          <div>
            <el-form :model="form">
              <el-form-item>
                <el-input size="medium" v-model="form.userAccount" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input size="medium" type="password" v-model="form.userPassword" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submsg()" size="medium" class="w-100">登录</el-button>
              </el-form-item>
            </el-form>
            <div class="tip">
              <el-link type="primary" href="/register">新用户注册</el-link>
              <span> | </span>
              <el-link type="primary">忘记密码</el-link>
            </div>
          </div>
        </el-card>
      </div>
    </div>
</template>

<script>
  import { loginSystem } from '@/api/index.js';
  export default {
    name: 'login',
    data() {
      return {
        form: {
          userAccount: '',
          userPassword: ''
        },
		userInfo: {}
      };
    },
    methods:{
      submsg(){
        if (this.form.userAccount == '') {
          alert("请输入用户名");
        } else if (this.form.userPassword == '') {
          alert("请输入密码");
        }else{
			loginSystem(this.form).then((res) => {
					if(res != -1 &&  res.data.code == 666){
						this.$message({
							type: 'success',
							message: '登录成功!',
							duration:500,
							center:true
						  });
						this.userInfo = res.data.datas;
						console.log(this.userInfo);
						//存数据
						window.localStorage.setItem('userId', this.userInfo.userId);
						window.localStorage.setItem('scenicId', this.userInfo.scenicId);
						window.localStorage.setItem('scenicName', this.userInfo.scenicName);
						window.localStorage.setItem('userName', this.userInfo.userName);
						window.localStorage.setItem('userGender', this.userInfo.userGender);
						window.localStorage.setItem('userIdentify', this.userInfo.userIdentify);
						window.localStorage.setItem('userLevel', this.userInfo.userLevel);
						window.localStorage.setItem('userPhone', this.userInfo.userPhone);
						window.localStorage.setItem('userAccount', this.userInfo.userAccount);
						
						if(this.userInfo.userLevel == 0) //指挥中心
						{
							this.$router.push({ name:'control_leader'})
						}
						else if(this.userInfo.userLevel == 1)  //工作人员
						{
							this.$router.push({ name:'staff_leader' })
						}
						else //游客
						{
							this.$router.push({ name:'visiter_leader' })
						}
					}
					else if( res.data.code == 700){
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
.msg{
  width:500px;
  text-align: center;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
  .tip{
    margin-right:0;
    margin-left:300px;
  }
</style>