<template>
	 <div class="block">
	    <el-carousel height="910px" style="margin-top: 5px;margin-bottom: 5px;">
	      <el-carousel-item v-for="item in srcs" :key="item">
	        <el-image :src="item"  class="main"></el-image>
	      </el-carousel-item>
	    </el-carousel>
		
	  </div>
</template>

<script>
	export default {
	
	name: 'visiter_leader',
	data(){
		return{
			srcs:{
				main1:require("../../assets/img/main_page.jpeg"),
				main2:require("../../assets/img/main_page2.jpeg"),
				main3:require("../../assets/img/main_page3.jpeg"),
				main4:require("../../assets/img/main_page4.jpeg"),
			}
			
		}	
	},
	methods:{
		
	},
	mounted() {
		this.$nextTick(() => {
			
		})
	}
}
</script>

<style>
.main{
	 width: 100%;
	    /*background: #f2f2f2;*/
	    display: flex;
	
},
.zmd{
	
}
</style>
