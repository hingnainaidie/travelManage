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
		      <el-menu-item index="/visiter_mng/travel_msg/scenic_area">
		        <i class="el-icon-s-flag"></i>
		        <span slot="title">景区信息</span>
		      </el-menu-item>
			  <el-menu-item index="/visiter_mng/travel_msg/car_msg">
			    <i class="el-icon-s-home"></i>
			    <span slot="title">停车场信息</span>
			  </el-menu-item>
			  <el-menu-item index="/visiter_mng/travel_msg/hotel_msg">
			    <i class="el-icon-s-data"></i>
			    <span slot="title">酒店信息</span>
			  </el-menu-item>
		    </el-menu>	
		  </el-aside>
		  <el-main class="main" style="height: 90vh;">
			  <router-view/>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
	  name: 'travel_msg',
	  data(){
	    return{
			userInfo: localStorage.getItem('userInfo'),
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