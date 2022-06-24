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
		      <el-menu-item index="/visiter_mng/my_msg/basemsg">
		        <i class="el-icon-user-solid"></i>
		        <span slot="title">我的基本信息</span>
		      </el-menu-item>
			  <el-menu-item index="/visiter_mng/my_msg/my_orders">
			    <i class="el-icon-s-goods"></i>
			    <span slot="title">我的订单</span>
			  </el-menu-item>
			  <el-menu-item index="/visiter_mng/my_msg/my_complain">
			    <i class="el-icon-s-claim"></i>
			    <span slot="title">我的投诉</span>
			  </el-menu-item>
			  <el-menu-item index="/visiter_mng/my_msg/my_case">
			    <i class="el-icon-s-help"></i>
			    <span slot="title">我的报案</span>
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
	  name: 'my_msg',
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