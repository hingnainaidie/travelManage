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
			  <el-menu-item index="/control_mng/cInfo_manage/cScenic_info">
			    <i class="el-icon-video-camera-solid"></i>
			    <span slot="title">景区监控信息</span>
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
	  name: 'cInfo_manage',
	  data(){
	    return{
			
	    }
	  },
	  methods: {
	    handleSelect(key) {
	      this.$router.push({
	        path: key,
			
	      })
	    }
	  }
	}
</script>

<style>
</style>