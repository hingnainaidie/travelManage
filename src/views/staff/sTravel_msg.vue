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
		      <el-menu-item index="/staff_mng/sTravel_msg/sScenic_area">
		        <i class="el-icon-s-flag"></i>
		        <span slot="title">景区信息</span>
		      </el-menu-item>
			  <el-menu-item index="/staff_mng/sTravel_msg/sCar_msg">
			    <i class="el-icon-s-home"></i>
			    <span slot="title">停车场信息</span>
			  </el-menu-item>
			  <el-menu-item index="/staff_mng/sTravel_msg/sHotel_msg">
			    <i class="el-icon-s-data"></i>
			    <span slot="title">酒店信息</span>
			  </el-menu-item>
			  <el-menu-item index="/staff_mng/sTravel_msg/sVisiters">
			    <i class="el-icon-user-solid"></i>
			    <span slot="title">游客信息</span>
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
	  name: 'sTravel_msg',
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