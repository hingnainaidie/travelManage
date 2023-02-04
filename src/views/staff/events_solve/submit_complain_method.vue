<template>
	<div>
		<el-page-header @back="goBack" content="投诉详情页面">
		</el-page-header>
		<el-main>
			<el-descriptions  class="margin-top"  :column="3" :size="size" border>
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
		<el-main>
			处理方案
			<el-input id="input1" type="textarea" placeholder="请输入处理方案" v-model="methodComplaint" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
		</el-main>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="submitMethod()">提交</el-button>
		</el-row>
		</el-main>
	</div>
</template>

<script>
	import {checkComEvent,solveComEvent} from '@/api/index.js';
	export default {
        name:'submit_complain_method',
		data() {
		  return {
			  // complaint_id: 'co000002',
			  // description: 'xxx',
			  // complaint_start_time:'2022/05/22',
			  // complaint_end_time:'-',
			  // complaint_status: '处理中',
			  // complaint_result:'-',
			  suserId:'',
			  complaintId:'',
			  complaint_id: '',
			  description: '',
			  complaint_start_time:'',
			  complaint_end_time:'',
			  complaint_status: '',
			  complaint_result:'',
			  complaintInfo:[],
		      methodComplaint:'',
			  returnComplaint:{
				  suserId:'',
				  complaintId:'',
				  complaintDescription:'',
				  complaintBegintime:'',
				  complaintStatus:'',
				  complaintEndtime:'',
				  complaintResult:''
			  }
		  };
		},
		watch: {
		    '$route': 'gettingData'
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
			  initsubmitComplaint(){
				  this.suserId = window.localStorage.userId;
				  console.log(this.suserId);
			  	  checkComEvent({complaintId:this.complaintId}).then((res) => {
			  				this.complaintInfo=res.data.datas;
			  				console.log(this.complaintInfo);
			  				this.complaint_id=res.data.datas.complaintId;
			  				this.description=res.data.datas.complaintDescription;
			  				this.complaint_start_time=res.data.datas.complaintBegintime;
			  				this.complaint_end_time=res.data.datas.complaintMidtime;
			  				this.complaint_status=res.data.datas.complaintEndtime;
			  				this.complaint_status=res.data.datas.complaintStatus;
			  				this.complaint_result=res.data.datas.complaintResults;
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
				  path: "/staff_mng/events_solve/complain_solve"
				})
		      },
		submitMethod(){
			this.returnComplaint.suserId=this.suserId;
			this.returnComplaint.complaintId=this.complaint_id;
			this.returnComplaint.complaintDescription=this.description;
			this.returnComplaint.complaintBegintime=this.complaint_start_time;
			this.returnComplaint.complaintStatus=this.complaint_status;
			this.returnComplaint.complaintResult=this.methodComplaint;
			console.log(this.returnComplaint)
			if (this.methodComplaint == '') {
			  alert("请输入处理方案")
			}  else{
				solveComEvent(this.returnComplaint).then((res) => {
					console.log(res.data.datas);
							  				this.complaintInfo=res.data.datas;
							  				console.log(this.complaintInfo);
							  				this.complaint_id=res.data.datas.complaintId;
							  				this.description=res.data.datas.complaintDescription;
							  				this.complaint_start_time=res.data.datas.complaintBegintime;
							  				this.complaint_end_time=res.data.datas.complaintMidtime;
							  				this.complaint_status=res.data.datas.complaintEndtime;
							  				this.complaint_status=res.data.datas.complaintStatus;
							  				this.complaint_result=res.data.datas.complaintResults;
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
				alert("成功创建！")
				this.$router.push({
				  path: "/staff_mng/events_solve/complain_solve"
				})
			}
		}
	  },
	  mounted() {
	  	this.$nextTick(() => {
			console.log(this.complaintId);
	  		//页面初始化的时候执行
	  		this.initsubmitComplaint();	
	  	})
	  }
	}
</script>

<style>
</style>