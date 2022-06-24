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
			  <el-menu-item index="/visiter_mng/msg_receive/pre_emergency">
			    <i class="el-icon-message-solid"></i>
			    <span slot="title">应急预警信息</span>
			  </el-menu-item>
			  <el-menu-item index="/visiter_mng/msg_receive/tourism_push">
			    <i class="el-icon-s-opportunity"></i>
			    <span slot="title">旅游信息</span>
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
	  name: 'msg_receive',
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