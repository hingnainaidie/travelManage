<template>
  <div class='app'>
    <el-container style="padding: 0px; margin: 0px;">
		<el-header style="height: 60px; padding: 0px; margin: 0px;">
			<div class='appicon'>
			  <div class='appname'>旅游综合管理平台</div>
			  <div class="topMenu">
				  <el-menu
				      :default-active="this.$router.path"
				      class="el-menu-demo"
				      mode="horizontal"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b"
				      @select="handleSelect"
				    >
					<el-menu-item index="/control_mng/control_leader">
					    <i class="el-icon-menu"></i>
					    <span slot="title">首页</span>
					</el-menu-item>
				    <el-menu-item index="/control_mng/cTravel_msg/cScenic_area">
				        <i class="el-icon-s-promotion"></i>
				        <span slot="title">旅游信息查询</span>
				    </el-menu-item>
					<el-menu-item index="/control_mng/cInfo_manage/cScenic_info">
					    <i class="el-icon-s-comment"></i>
					    <span slot="title">监控查看</span>
					</el-menu-item>
					<el-menu-item index="/control_mng/cMsg_deliver/cInstruct">
					    <i class="el-icon-s-comment"></i>
					    <span slot="title">消息中心</span>
					</el-menu-item>
					<el-menu-item index="/control_mng/staff_manage">
					    <i class="el-icon-s-comment"></i>
					    <span slot="title">工作人员管理</span>
					</el-menu-item>
					<el-menu-item index="/control_mng/cMy_msg/cBasemsg">
					    <i class="el-icon-s-custom"></i>
					    <span slot="title">我的</span>
					</el-menu-item>
				</el-menu>
			  </div>
			  <div class="user">
			    <div @click='login()'>{{userName}}</div>
			  </div>
			</div>
		</el-header>
		<el-main style="padding: 0px; margin: 0px;">
			<router-view />
		</el-main>
	</el-container>
  </div>
</template>

<script>
  export default {
    name: 'control_mng',
    data() {
      return {
		  userName:'',
      }
    },
	methods: {
	  handleSelect(key) {
	    this.$router.push({
	      path: key,
		  
	    })
	  },
	  login(){
	  		  if(window.localStorage.userId!=0){
	  		  }else{
	  		  	this.$router.push({
	  		  	  path: "/login"
	  		  	})
	  		  }
	  }
	},
	mounted() {
		if(window.localStorage.userId!=0){
			this.userName=window.localStorage.userName;
		}else{
			this.userName="登录";
		}
	}
  }
</script>


<style scoped>
  .app {
    width: 100%;
	min-width: 1100px;
	height: 60px;
  }
  .appicon {
    height: 60px;
    width: 100%;
    background-color: #545c64;
  }
  .appname {
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    float: left;
	margin-left: 20px;
	margin-right: 20px;
  }
  .topMenu{
	  float:left;
	  min-width: 600px;
	  height: 70px;
  }
  .user {
	color:#fff;
    line-height: 60px;
    float: right;
    margin-right: 20px;
  }

</style>
