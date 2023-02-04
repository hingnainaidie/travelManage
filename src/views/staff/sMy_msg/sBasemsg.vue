<template>
	<div class='top'>
		<el-descriptions class="margin-top" title="我的基本信息" :column="1">
			<template slot="extra">
				<el-button type="primary" size="small" @click="dialog1Click()">修改基本信息</el-button>
				<el-button type="warning" size="small" @click="dialog2Click()">修改密码</el-button>
				<el-button type="warning" size="small" @click="logout()">登出</el-button>
			</template>
			<el-descriptions-item label="用户名">{{form.user_name}}</el-descriptions-item>
			<el-descriptions-item label="手机号">{{form.user_phone}}</el-descriptions-item>
		 <el-descriptions-item label="身份">
				<el-tag size="small">{{tranLevel(form.user_level)}}</el-tag>
			</el-descriptions-item>
			<el-descriptions-item label="身份证号">{{form.user_identify}}</el-descriptions-item>
			<el-descriptions-item label="性别">{{form.user_gender}}</el-descriptions-item>
		</el-descriptions>
		<el-dialog title="修改基本信息" :visible.sync="dialog1">
			<el-form :model="formChange">
				<el-form-item label="用户名" label-width="120px">
					<el-input v-model="formChange.userName"></el-input>
				</el-form-item>
				<el-form-item label="手机号" label-width="120px">
					<el-input v-model="formChange.userPhone"></el-input>
				</el-form-item>
				<el-form-item label="身份证号" label-width="120px">
					<el-input v-model="formChange.userIdentify"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialog1 = false">取 消</el-button>
				<el-button type="primary" @click="dialog1Sure()">确 定</el-button>
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
				<el-button type="primary" @click="dialog2Sure()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "basemsg",
		data() {
			return {
				dialog1: false,
				dialog2: false,
				form: {
					user_id: window.localStorage.userId,
					user_name: window.localStorage.userName,
					user_phone: window.localStorage.userPhone,
					user_identify:window.localStorage.userIdentify,
					user_gender:window.localStorage.userGender,
					user_level:window.localStorage.userLevel
				},
				formChange: {
					userId: '',
					userName: '',
					userPhone: '',
					userIdentify: ''
				},
				userPwd: '',
				userNewPwd: '',
				userNewPwd1: ''
			}
		},
		methods: {
			tranLevel(data){
				if(data==0){
					return "控制中心";
				}else if(data==1){
					return "工作人员";
				}else{
					return "游客";
				}
			},
			dialog1Click() {
				this.formChange.userId = this.form.user_id;
				this.formChange.userName = this.form.user_name;
				this.formChange.userPhone = this.form.user_phone;
				this.formChange.userIdentify = this.form.user_identify;
				this.dialog1 = true;
		 },
			dialog2Click(){
				this.userPwd="";
				this.userNewPwd1="";
				this.userNewPwd="";
				this.dialog2 = true;
			},
			dialog1Sure() {
				this.instance.editInfo(this.formChange).then(res => {
					if(res.data.datas.isSuccess){
						window.localStorage.setItem("userName",this.formChange.userName);
						window.localStorage.setItem("userPhone",this.formChange.userPhone);
						window.localStorage.setItem("userIdentify",this.formChange.userIdentify);
						this.form.user_name=this.formChange.userName,
						this.form.user_phone=this.formChange.userPhone,
						this.form.user_identify=this.formChange.userIdentify,
						alert("修改成功");
					}else{
						alert("修改失败")
					}
				});
				this.dialog1 = false;
			},
			dialog2Sure() {
				if (this.userNewPwd != this.userNewPwd1) {
					alert("两次输入新密码不匹配");
				} else {
					this.instance.editPwd({
						userId:this.form.user_id,
						userPwd: this.userPwd,
						newPwd: this.userNewPwd
					}).then(res => {
						if(res.data.datas.isSuccess){
							alert("修改成功");
							window.localStorage.clear();
							this.$router.push({path:"/login"});
						}else{
							alert(res.data.datas.error);
						}
					});
					this.dialog2 = false;
				}
			},
			//退出登录
			logout(){
				window.localStorage.clear();
				this.$router.push({path:"/login"})
			}
		}
	}
</script>

<style scope>
	.margin-top {
		margin: 10px;
	}
</style>
