<template>
	<div>
		<el-page-header @back="goBack" content="旅游信息详情">
			</el-page-header>
			<el-main>
				<el-descriptions class="margin-top"  :column="3" :size="size" border>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游信息编号
				      </template>
				      {{trip_info_id}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游信息名称
				      </template>
				      {{trip_info_title}}
				    </el-descriptions-item>

				    <el-descriptions-item>
				      <template slot="label">
				        旅游信息上传时间
				      </template>
				      {{trip_info_time}}
				    </el-descriptions-item>
				    <!-- <el-descriptions-item>
				      <template slot="label">
				        旅游信息状态
				      </template>
				      {{trip_info_status}}
				    </el-descriptions-item> -->
					<el-descriptions-item>
					  <template slot="label">
					    旅游信息描述
					  </template>
					  {{trip_info_description}}
					</el-descriptions-item>
				  </el-descriptions>
			</el-main>
	</div>
	
</template>

<script>
	import { checkTripInfo } from '@/api/index.js';
	export default {
		name:'checkInfo',
		data() {
		  return {
			suser_id:'',
			tripInfoId:'',
		    trip_info_id: '',
		    trip_info_title: '',
		    trip_info_time:'',
		    // trip_info_status:'',
		    trip_info_description:'',
			
		  }
		},
		watch: {
		    '$route': 'gettingData'
		  },
		  computed: {
		      tripInfoUse() {
		        if(this.trip_info_status=="已处理"){
					return  true;
				}
				return false;
		      },
		    },
		  created() {
		    this.gettingData()
		  },
	  methods: {
		  // 获取数据
		      gettingData() {
		        var querytripInfoId = this.$route.query.tripInfoId
		        this.tripInfoId = querytripInfoId
				console.log(this.$route.query)
				console.log("tripInfoId:",this.tripInfoId)
		      },
			  //初始化
			  initCheckInfo(){
				  this.suser_id=window.localStorage.userId;
			  	  checkTripInfo({tripInfoId:this.tripInfoId}).then((res) => {
			  				this.infolist=res.data.datas;
			  				console.log(this.infolist);
			  				this.trip_info_id=res.data.datas.tripInfoId;
			  				this.trip_info_title=res.data.datas.tripInfoTitle;
			  				this.trip_info_description=res.data.datas.tripInfoDescription;
			  				this.trip_info_time=res.data.datas.tripInfoTime;
			  				// this.trip_info_status=res.data.datas.tripInfoStatus;
			  							// if(this.trip_info_status==1){
			  							// 	this.trip_info_status='已过期';
			  							// }else{
			  							// 		this.trip_info_status='进行中';
			  							// 	}
			  							
			  			})
			    },
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/staff_mng/msg_deliver/sTourism_push"
				})
		      },
			  
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  			console.log(this.tripInfoId);
	  		//页面初始化的时候执行
	  		this.initCheckInfo();	
	  	})
	  }
	}
</script>

<style>
</style>

