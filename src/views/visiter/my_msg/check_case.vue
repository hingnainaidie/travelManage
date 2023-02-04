<template>
	<div>
		<el-page-header @back="goBack" content="案件详情页面">
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
				    报案地点
				  </template>
				  {{case_place}}
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
	</div>
</template>

<script>
	import {checkCaEvent} from '@/api/index.js';
	export default {
		name:'check_case',
		data() {
		  return {
			caseId:'',
		    case_id: '',
		    description: '',
		    case_start_time:'',
		    case_create_time:'',
		    case_end_time:'',
			case_place:'',
		    case_status: '',
		    case_result:''
		  }
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
		  	  checkCaEvent({caseId:this.caseId}).then((res) => {
		  				this.caseInfo=res.data.datas;
		  						console.log(this.caseInfo);
		  						this.case_id=res.data.datas.caseId;
		  						this.description=res.data.datas.caseDescription;
		  						this.case_start_time=res.data.datas.caseBegintime;
		  						this.case_create_time=res.data.datas.caseMidtime;
		  						this.case_end_time=res.data.datas.caseEndtime;
								this.case_place=res.data.datas.casePlace;
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
				  path: "/visiter_mng/my_msg/my_case"
				})
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