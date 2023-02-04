<template>
	<div>
		<el-page-header @back="goBack" content="投诉详情页面">
		</el-page-header>
		<el-main>
			<el-descriptions class="margin-top"  :column="3" :size="size" border>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉编号
			      </template>
			      {{complaint_id}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉事件描述
			      </template>
			      {{description}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉时间
			      </template>
			     {{complaint_start_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        结束时间
			      </template>
			      {{complaint_end_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉处理状态
			      </template>
			      {{complaint_status}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        投诉结果
			      </template>
			      {{complaint_result}}
			    </el-descriptions-item>
			  </el-descriptions>
		</el-main>
	</div>
</template>

<script>
	import {checkComEvent} from '@/api/index.js';
	export default {
		name:'check_complain',
		data() {
		  return {
		    complaintId:'',
		    complaint_id: '',
		    description: '',
		    complaint_start_time:'',
		    complaint_end_time:'',
		    complaint_status: '',
		    complaint_result:'',
		    complaintInfo:[]
		  }
		},
		watch: {
		    '$route': 'gettingData'
		  },
		  computed: {
		      comUse() {
		        if(this.complaint_status=="已处理"){
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
		        var querycomplaintId = this.$route.query.complaintId
		        this.complaintId = querycomplaintId
		      },
			  initCheckComplaint(){
			  	  checkComEvent({complaintId:this.complaintId}).then((res) => {
			  				this.complaintInfo=res.data.datas;
			  				console.log(this.complaintInfo);
			  				this.complaint_id=res.data.datas.complaintId;
			  				this.description=res.data.datas.complaintDescription;
			  				this.complaint_start_time=res.data.datas.complaintBegintime;
			  				this.complaint_end_time=res.data.datas.complaintEndtime;
			  				this.complaint_status=res.data.datas.complaintStatus;
			  				this.complaint_result=res.data.datas.complaintResult;
			  							if(this.complaint_status==2){
			  								this.complaint_status='已处理';
			  							}else{
			  								if(this.complaint_status==1){
			  									this.complaint_status='处理中';
			  								}else{
			  									this.complaint_status='未处理';
			  								}
			  							}
			  			})
			    },
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/visiter_mng/my_msg/my_complain"
				})
		      }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  			console.log(this.complaintId);
	  		//页面初始化的时候执行
	  		this.initCheckComplaint();	
	  	})
	  }
	}
</script>

<style>
</style>