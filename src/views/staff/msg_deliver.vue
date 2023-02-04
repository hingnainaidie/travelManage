<template>
	<div>
		<el-container>
			<el-aside width="200px">
		    <el-menu 
			:default-active="this.$router.path" 
			@select="handleSelect" 
			mode="vertical"
			background-color="#545c64"
		    text-color="#fff" 
			active-text-color="#ffd04b"
			style="height: 90vh;">
		      <el-menu-item index="/staff_mng/msg_deliver/sCase_manage">
		        <i class="el-icon-s-check"></i>
		        <span slot="title">旅游事件管理</span>
		      </el-menu-item>
			  <el-menu-item index="/staff_mng/msg_deliver/sEmergency_msg">
			    <i class="el-icon-warning"></i>
			    <span slot="title">预警信息接收</span>
			  </el-menu-item>
			  <el-menu-item index="/staff_mng/msg_deliver/sTourism_push">
			    <i class="el-icon-s-order"></i>
			    <span slot="title">旅游信息管理</span>
			  </el-menu-item>
		    </el-menu>	
		  </el-aside>
		  <el-main class="main" >
			  <router-view/>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
	  name: 'msg_deliver',
	  data(){
	    return{
			userInfo: localStorage.getItem('userInfo'),
	    }
	  },
	  methods: {
	    handleSelect(key) {
	      this.$router.push({
	        path: key,
			query:{data:this.userInfo}
	      })
	    }
	  }
	}
</script>

<style>
</style>