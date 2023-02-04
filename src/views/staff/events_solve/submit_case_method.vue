<template>
	<div>
		<el-page-header @back="goBack" content="报案详情页面">
		</el-page-header>
		<el-main>
			<el-descriptions class="margin-top"  :column="3" :size="size" border>
			    <el-descriptions-item>
			      <template slot="label">
			        报案编号
			      </template>
			      {{case_id}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案事件描述
			      </template>
			     {{description}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案时间
			      </template>
			     {{case_start_time}}
			    </el-descriptions-item>
				<!-- <el-descriptions-item>
				  <template slot="label">
				    立案时间
				  </template>
				 {{case_create_time}}
				</el-descriptions-item> -->
			    <el-descriptions-item>
			      <template slot="label">
			        结束时间
			      </template>
				  {{case_end_time}}
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        报案处理状态
			      </template>
			      {{case_status}}
			    </el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    投诉结果
				  </template>
				  {{case_result}}
				</el-descriptions-item>
			  </el-descriptions>
		</el-main>
		<el-main>
			处理方案
			<el-input id="input1" type="textarea" placeholder="请输入处理方案" v-model="methodCase" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
		</el-main>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="submitMethod()">提交</el-button>
		</el-row>
		</el-main>
	</div>
</template>

<script>
	import {checkCaEvent,solveCaEvent} from '@/api/index.js';
	export default {
        name:'submit_case_method',
		data() {
		  return {
			  suserId:'',
			  caseId:'',
			  case_id: '',
			  description: '',
			  case_start_time:'',
			  case_create_time:'',
			  case_end_time:'',
			  case_status: '',
			  case_result:'',
			  caseInfo:[],
			  methodCase:'',
			  returnCase:{
				  suserId:'',
				  caseId:'',
				  caseDescription:'',
				  //caseBegintime:'',
				  caseStatus:'',
				  //caseEndtime:'',
				  caseResults:''
			  }
		  };
		},
		watch: {
		    '$route': 'gettingData'
		  },
		  computed: {
		      caseUse() {
		        if(this.case_status=="已处理"){
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
		        var querycaseId = this.$route.query.caseId
		        this.caseId = querycaseId
		      },
		  initCheckCase(){
			  this.suserId = window.localStorage.userId;
		  	  checkCaEvent({caseId:this.caseId}).then((res) => {
		  				this.caseInfo=res.data.datas;
		  						console.log(this.caseInfo);
		  						this.case_id=res.data.datas.caseId;
		  						this.description=res.data.datas.caseDescription;
		  						this.case_start_time=res.data.datas.caseBegintime;
								this.case_create_time=res.data.datas.caseMidtime;
		  						this.case_end_time=res.data.datas.caseEndtime;
		  						this.case_status=res.data.datas.caseStatus;
		  						this.case_result=res.data.datas.caseResults;
		  						if(this.case_status==2){
		  							this.case_status='已处理';
		  						}else{
		  							if(this.case_status==1){
		  								this.case_status='处理中';
		  							}else{
		  								this.case_status='未处理';
		  							}
		  						}
		  			})
		    },
		goBack() {
		        console.log('go back');
				this.$router.push({
				  path: "/staff_mng/events_solve/case_solve"
				})
		      },
		submitMethod(){
			console.log(this.methodCase);
			console.log(this.returnCase);
			this.returnCase.suserId=this.suserId;
			this.returnCase.caseId=this.case_id;
			this.returnCase.caseDescription=this.description;
			//this.returnCase.caseBegintime=this.case_start_time;
			//this.returnCase.caseStatus=this.case_status;
			this.returnCase.caseResults=this.methodCase;
			console.log(this.returnCase);
			if (this.methodCase == '') {
			  alert("请输入处理方案")
			}  else{
				solveCaEvent(this.returnCase).then((res) => {
					console.log(res.data.datas);
							  				this.caseInfo=res.data.datas;
							  				console.log(this.caseInfo);
							  				this.case_id=res.data.datas.caseId;
							  				this.description=res.data.datas.caseDescription;
							  				this.case_start_time=res.data.datas.caseBegintime;
							  				this.case_end_time=res.data.datas.caseEndtime;
							  				this.case_status=res.data.datas.caseStatus;
							  				this.case_result=res.data.datas.caseResults;
											if(this.case_status==2){
												this.case_status='已处理';
											}else{
												if(this.case_status==1){
													this.case_status='处理中';
												}else{
													this.case_status='未处理';
												}
											}
							  			})
				alert("成功创建！")
				this.$router.push({
				  path: "/staff_mng/events_solve/case_solve"
				})
			}
		}
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  			console.log(this.caseId);
	  		//页面初始化的时候执行
	  		this.initCheckCase();	
	  	})
	  }
	}
</script>

<style>
</style>