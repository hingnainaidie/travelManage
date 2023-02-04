<template>
	<div class="top">
		<el-descriptions :title="tripEvent.tripEventTitle" :column="2">
			<el-descriptions-item label="地点">{{tripEvent.tripEventLocation}}</el-descriptions-item>
			<el-descriptions-item label="上传者">{{tripEvent.userName}}</el-descriptions-item>
			<el-descriptions-item label="时间">{{tripEvent.tripEventTime}}</el-descriptions-item>
			<el-descriptions-item label="类别">
				<el-tag size="small">{{tripEvent.tripEventClassification}}</el-tag>
			</el-descriptions-item>
		</el-descriptions>
		<div style="color: gray;">
			<div>旅游事件描述：</div>
			<div style="margin-top: 10px;margin-bottom: 20px;">{{tripEvent.tripEventDescription}}</div>
		</div>
		<div>
			<div style="margin-bottom: 10px;">
				<el-row>
					<el-col :span="8">
						<el-select v-model="cate_value" placeholder="请选择" @change='cateChange()'>
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-col>
					<el-col :span="16">
						<div style="height: 40px;line-height: 40px;color:chocolate;">当前选中预案名称：{{choosePre}}</div>
					</el-col>
				</el-row>
			</div>
			<el-table border :data="emergencyList" height="200" highlight-current-row
				@current-change="handleCurrentChange">
				<el-table-column width="200px;" align="center" prop="emergencyTime" label="预案时间"></el-table-column>
				<el-table-column align="center" prop="emergencyName" label="预案名称"></el-table-column>
				<el-table-column label="操作" align="center" width="120">
					<template slot-scope="scope">
						<el-button size="mini" type="warning" @click="showEmergeDetail(scope.row.emergencyId)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="color: gray; margin-top:20px;">
				<div style="margin: 10px;">预警信息编辑：</div>
				<textarea class="input" v-model="emergencyMsg" placeholder="请输入预警信息"
				  style="width:100%; min-height: 80px;"></textarea>
			</div>
			<div style="margin-top: 40px;">
				<div style="float: left;">
					<el-button type="warning" @click="wait()">取消</el-button>
				</div>
				<div style="float: right;">
					<el-button type="primary" @click="sendEmergency()">确定并发送预警信息</el-button>
				</div>
			</div>
			<!-- 预案详情查看 -->
			<el-dialog title="预案详情" :visible.sync="isShowDetail" :center='true' width="800px">
				<div>
					<el-descriptions class="margin-top" :column="1">
						<el-descriptions-item label="预案名称">{{emergeDetail.emergencyName}}</el-descriptions-item>
						<el-descriptions-item label="预案时间">{{emergeDetail.emergencyTime}}</el-descriptions-item>
						<el-descriptions-item label="预案类别">
							<el-tag size="small">{{emergeDetail.emergencyClassification}}</el-tag>
						</el-descriptions-item>
						<el-descriptions-item label="预案描述">{{emergeDetail.emergencyDescription}}</el-descriptions-item>
						<el-descriptions-item label="解决方法">{{emergeDetail.emergencySolution}}</el-descriptions-item>
					</el-descriptions>
			
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="isShowDetail = false">返回</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dealEvent",
		data() {
			return {
				emergencyMsg:'',
				tripId:this.$route.query.data,
				isShowDetail:false,
				choosePre: "",
				chooseId:"",
				chooseMsg:"",
				tripEvent: {},
				cate_value: "自然灾害",
				options: [{
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
				emergencyList: [],
				//预案详情（接收后端传回的数据）
				emergeDetail: {}

			}
		},
		methods: {
			handleCurrentChange(val) {
				this.choosePre = val.emergencyName;
				this.chooseId = val.emergencyId;
				this.chooseMsg=val.emergencySolution;
			},
			showEmergeDetail(item) {
				this.isShowDetail = true;
				this.instance.emergeDetail({
					emergencyId:item
				}).then(res =>{
					this.emergeDetail=res.data.datas;
				})
			},
			cateChange(){
				this.instance.showEmergesByType({
				   emergencyClassification:this.cate_value
				 }).then(res => {
					 this.emergencyList=res.data.datas;
				 })
			},
			sendEmergency(){
				if(this.emergencyMsg==""){
					alert("请输入预警信息");
				}else if(this.choosePre==""){
					alert("请选择预案！")
				}else{
					//确定并发送预警信息
					this.instance.saveEmergency({
					   tripEventId:this.tripId,
					   staffWarningInformation:this.emergencyMsg,
						emergencyId:this.chooseId,
						guidanceInstructionInfo:this.chooseMsg
					 }).then(res => {
						 this.$router.back();
					 })
				}
			},
			wait(){
				this.$router.back();
			}
		},
		mounted(){
			this.cateChange();
			this.instance.getDetailChecked({
				tripEventId:this.tripId
			}).then(res=>{
				this.tripEvent=res.data.datas;
				this.emergencyMsg="时间"+this.tripEvent.tripEventTime+","+"在"+this.tripEvent.tripEventLocation
									+"发生了"+this.tripEvent.tripEventTitle+"。"+"请在游客们提高警惕，保护人身安全";
			});
		}
	}
</script>

<style scoped>
	.top {
		margin: auto;
		width: 800px;
	}
	.input {
	  width: 100%;
	  border: 2px solid #545c64;
	  border-radius: 10px;
	  /*css3属性IE不支持*/
	}
	
	.input:focus {
	  border-color: #ffd04b;
	  outline: 0;
	}
</style>
