<template>
	<div>
		<el-page-header @back="goBack" content="旅游事件详情">
			</el-page-header>
			<el-main>
				<el-descriptions class="margin-top"  :column="3" :size="size" border>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游事件编号
				      </template>
				      {{trip_event_id}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游事件名称
				      </template>
				      {{trip_event_title}}
				    </el-descriptions-item>
					<el-descriptions-item>
					  <template slot="label">
					    旅游事件描述
					  </template>
					  {{trip_event_description}}
					</el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游事件分类
				      </template>
				     {{trip_event_classification}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游事件发生地点
				      </template>
				      {{trip_event_location}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        旅游事件发生时间
				      </template>
				      {{trip_event_time}}
				    </el-descriptions-item>
				    <!-- <el-descriptions-item>
				      <template slot="label">
				        旅游事件状态
				      </template>
				      {{trip_event_status}}
				    </el-descriptions-item> -->
					<el-descriptions-item>
					  <template slot="label">
					    旅游事件现场信息
					  </template>
					  {{trip_event_info}}
					</el-descriptions-item>
					<el-descriptions-item>
					  <template slot="label">
					    诱导与指令信息
					  </template>
					  {{guidance_instruction_info}}
					</el-descriptions-item>
					
				  </el-descriptions>
			</el-main>
	</div>
</template>

<script>
	import { checkTripEvent } from '@/api/index.js';
	export default {
		name:'checkTe',
		data() {
		  return {
			user_id:'',
			tripEventId:'',
		    trip_event_id: '',
			trip_event_title: '',
			trip_event_description:'',
			trip_event_classification:'',
		    trip_event_location: '',
			trip_event_time:'',
			// trip_event_status:'',
			trip_event_info:'',
			guidance_instruction_info:''
		  }
		},
		watch: {
		    '$route': 'gettingData'
		  },
		  computed: {
		      tripEventUse() {
		        if(this.trip_event_status=="已处理"){
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
		        var querytripEventId = this.$route.query.tripEventId
		        this.tripEventId = querytripEventId
		  				
		      },
			  //初始化
			  initCheckEvent(){
				  this.user_id = window.localStorage.userId;
			  	  checkTripEvent({tripEventId:this.tripEventId}).then((res) => {
			  				this.Eventlist=res.data.datas;
			  				console.log(this.Eventlist);
			  				this.trip_event_id=res.data.datas.tripEventId;
			  				this.trip_event_title=res.data.datas.tripEventTitle;
			  				this.trip_event_description=res.data.datas.tripEventDescription;
							this.trip_event_classification=res.data.datas.tripEventClassification;
							this.trip_event_location=res.data.datas.tripEventLocation;
			  				this.trip_event_time=res.data.datas.tripEventTime;
			  				// this.trip_event_status=res.data.datas.tripEventStatus;
							this.trip_event_info=res.data.datas.tripEventInfo;
							this.guidance_instruction_info=res.data.datas.guidanceInstructionInfo;
							console.log("tripEventTitle:",this.tripEventTitle)
							if(this.trip_Event_status==2){
								this.trip_Event_status='已处理';
							}else{
								if(this.trip_Event_statustrip_Event_status==1){
									this.trip_Event_status='处理中';
								}else{
									this.trip_Event_status='未处理';
								}
							}
			  			})
			    },
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/staff_mng/msg_deliver/sCase_manage"
				})
		      }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  			console.log(this.tripEventId);
	  		//页面初始化的时候执行
	  		this.initCheckEvent();	
	  	})
	  }
	}
</script>

<style>
</style>