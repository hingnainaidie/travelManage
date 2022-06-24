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
		      <el-menu-item index="/control_mng/cMsg_deliver/cInstruct">
		        <i class="el-icon-s-fold"></i>
		        <span slot="title">旅游事件管理</span>
		      </el-menu-item>
			  <el-menu-item index="/control_mng/cMsg_deliver/cEmergency_dict">
			    <i class="el-icon-s-order"></i>
			    <span slot="title">应急预案管理</span>
			  </el-menu-item>
			  <el-menu-item index="/control_mng/cMsg_deliver/cEmergency_msg">
			    <i class="el-icon-warning"></i>
			    <span slot="title">预警消息列表</span>
			  </el-menu-item>
		    </el-menu>	
		  </el-aside>
		  <el-main class="main">
			  <router-view/>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
	  name: 'cMsg_deliver',
	  data(){
	    return{
	    }
	  },
	  methods: {
	    handleSelect(key) {
	      this.$router.push({
	        path: key
	      })
	    }
	  }
	}
</script>

<style>
</style>