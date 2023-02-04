<template>
  <div>
    <div class="msg">
      <el-card class="box-card">
        <div slot="header">
          <span>添加工作人员</span>
        </div>
        <div>
          <el-form :model="form">
			  <el-form-item>
			    <el-input size="medium" v-model="form.username" placeholder="请输入工作人员姓名"></el-input>
			  </el-form-item>
			  <div style="margin-top: 8px;margin-bottom: 18px;margin-left: 10px;">
				  请输入性别
				  <el-radio v-model="form.usergender" label="男" style="margin-left: 50px;">男</el-radio>
				  <el-radio v-model="form.usergender" label="女">女</el-radio>
			  </div>
			  <!--所属景点-->
			  <div style="margin-top: 20px;margin-bottom: 18px; margin-left: 10px;">
				  请输入所属景点
				  <el-select v-model="scenicname" slot="prepend" placeholder="所属景点" style="margin-left: 50px;">
				      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
				  </el-select>
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
				<div style="text-align: center;">
					<el-button type="primary" @click="submsg()" size="medium" class="w-100">添加人员</el-button>
				</div>  
            </el-form-item>
            
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'staffRegister',
    data() {
      return {
        form: {
          userName: '',
          userGender: '',
          userIdentify: '',
          userPhone: '',
          userAccount:'',
          userPassword: '',
		  scenicId: '',
        },
        scenicName: '',
		options: [{
				value: '选项1',
				label: '欢乐谷',
			},
			{
				value: '选项2',
				label: '人民大礼堂',
			},
			{
				value: '选项3',
				label: '照母山森林公园',
			},
			{
				value: '选项4',
				label: '园博园',
			},
			{
				value: '选项5',
				label: '弹子石老街',
			},
			{
				value: '选项6',
				label: '洪崖洞',
			},
			{
				value: '选项7',
				label: '南山',
			},
			{
				value: '选项8',
				label: '歌乐山',
			},
			{
				value: '选项9',
				label: '人民解放碑',
			},
			{
				value: '选项10',
				label: '磁器口',
			}],
			userInfo: this.$route.query.data,
      };
    },
    methods: {
      submsg() {
		  var pattern = new RegExp("[A-Za-z0-9]+");
		  console.log(this.form.userIdentify)
		  var sTmpStr = new String(this.form.userIdentify);
		  var sTmpStr2 = new String(this.form.userPhone);
        if (this.form.username == '') {
          alert("请输入用户名")
        } else if (this.form.pwd == '') {
          alert("请输入密码")
        } else if (this.form.pnum == '') {
          alert("请输入电话号码")
        } else if(this.userIdentify.length != 18){
			alert("身份证长度不合法");
		}else if(this.userPhone.length != 11){
			alert("手机号长度不合法");
		}else if(pattern.test(this.userAccount)){
			alert("账号只能为数字和字母组合");
		} else {
			this.form.userLevel = 1;
			sGetScenicInfo({scenicName: this.scenicName}).then(res => {
					if(res != -1){
						this.form.scenicId = res.data.datas.scenicId;
						registerSystem(this.form).then((res) => {
								if(res != -1){
									
									console.log(res);
								}
								
							})
					}
				})
			
			
      }
    }
  },
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