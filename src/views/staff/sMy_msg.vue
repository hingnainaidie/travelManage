<template>
	<div class="top">
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
		      <el-menu-item index="/staff_mng/sMy_msg/sBasemsg">
		        <i class="el-icon-user-solid"></i>
		        <span slot="title">我的基本信息</span>
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
	  name: 'sMy_msg',
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