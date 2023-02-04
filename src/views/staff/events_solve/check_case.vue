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
		<el-row type="flex" class="row-bg" justify="end">
		  <el-button type="success" style="margin-right:20px" @click="dialogFormVisible = true" >生成旅游事件</el-button>
		  <!-- Form -->
		  <!-- <el-button type="text" @click="dialogFormVisible = true">生成旅游事件</el-button> -->
		  
		  <el-dialog title="生成旅游事件" :visible.sync="dialogFormVisible">
		    <el-form :model="form">
		      <el-form-item label="旅游事件名称" :label-width="formLabelWidth">
		        <el-input v-model="form.name" autocomplete="off"></el-input>
		      </el-form-item>
		      <el-form-item label="旅游事件类型" :label-width="formLabelWidth">
		        <el-select v-model="form.tripEventClassification" placeholder="请选择旅游事件类型">
		          <!-- <el-option label="区域一" value="shanghai"></el-option> -->
				  <el-option v-for="item in typeList" :key="item.value" :value="item.value"></el-option>
		        </el-select>
		      </el-form-item>
			  <el-form-item label="旅游事件现场信息" :label-width="formLabelWidth">
			    <el-input v-model="form.currentInfo" autocomplete="off"></el-input>
			  </el-form-item>
		    </el-form>
		    <div slot="footer" class="dialog-footer">
		      <el-button @click="dialogFormVisible = false">取 消</el-button>
		      <el-button type="primary" @click="clickTest()">确 定</el-button>
		    </div>
		  </el-dialog>
		  <el-button type="primary" style="margin-right:20px" @click="submitMethod()" :disabled="caseUse">提交处理方案</el-button>
		</el-row>
	</div>
</template>

<script>
	import {checkCaEvent,changeCaEvent} from '@/api/index.js';
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
			case_result:'',
			caseInfo:[],
			userId:'',
			dialogFormVisible: false,
			form: {
				 name: '',//旅游事件名称
			     tripEventClassification:'',//旅游事件分类
			     currentInfo:''//现场信息
			},
			typeList: [{
					value: "自然灾害",
					label: "自然灾害"
				}, {
					value: "事故灾难",
					label: "事故灾难"
				}, {
					value: "公共卫生事件",
					label: "公共卫生事件"
				}, {
					value: "社会安全事件",
					label: "社会安全事件"
				}, {
					value: "经营突发事件",
					label: "经营突发事件"
				}],
			formLabelWidth: '150px',
			tripEvent:{
				userId:'',
				tripEventTitle:'',
				tripEventDescription:'',
				tripEventClassification:'',
				tripEventLocation:'',
				tripEventInfo:''
			}
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
			  this.userId = window.localStorage.userId;
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
				  path: "/staff_mng/events_solve/case_solve"
				})
		      },
		submitMethod(row){
			this.$router.push({
			  path: "/staff_mng/events_solve/submit_case_method",
			  query: {
			            caseId: this.caseId
			  }// 要传递的参数
			})
		},
		clickTest(){
			this.tripEvent.userId=this.userId;
			this.tripEvent.tripEventTitle=this.form.name;
			this.tripEvent.tripEventDescription=this.description;
			this.tripEvent.tripEventClassification=this.form.tripEventClassification;
			this.tripEvent.tripEventLocation=this.case_place;
			this.tripEvent.tripEventInfo=this.form.currentInfo;
			console.log(this.tripEvent);
			changeCaEvent(this.tripEvent).then((res) => {
				console.log(res.data.datas);
			})
			this.dialogFormVisible= false;
			alert("成功生成旅游事件！");
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
	.row-bg{
		margin_left: 20px;
	}
</style>