<<template>
	<div class="events">
		<el-button type="primary" style="margin-bottom: 20px;float:left" @click="returnButton"><i
				class="el-icon-arrow-left"></i>返回</el-button>
		<h2>已处理历史事件列表</h2>
		<div>
			<el-table border :data='tripEventList' style='width: 100%; padding: auto;'v-loading="loading" element-loading-text="拼命加载中"
				element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
				<el-table-column prop='tripEventTime' label='事件上传时间' width="200" align="center"></el-table-column>
				<el-table-column prop='tripEventTitle' label='事件名称' min-width="350" align="center"></el-table-column>
				<el-table-column prop='tripEventClassification' label='事件类别' align="center" width="150">
					<template slot-scope="scope">
						<el-tag>{{scope.row.tripEventClassification}}</el-tag>
					</template>
				</el-table-column>

				<el-table-column label='操作' width="220" align="center">
					<template slot-scope='scope'>
						<el-button size="mini" type="warning" @click='detail(scope.row.tripEventId)'>详情</el-button>
						<el-button size="mini" type="danger" @click="tripEventDelete(scope.row.tripEventId)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- 预案详情查看 -->
		<el-dialog title="已处理旅游事件详情" :visible.sync="isShow" :center='true' width="800px">
			<div>
				<el-descriptions class="margin-top" :column="1">
					<el-descriptions-item label="旅游事件时间">{{tripEventDetail.tripEventTime}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件名称">{{tripEventDetail.tripEventTitle}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件发生地点">{{tripEventDetail.tripEventLocation}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件类别">
						<el-tag size="small">{{tripEventDetail.tripEventClassification}}</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="上报人名字">{{tripEventDetail.userName}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件描述">{{tripEventDetail.tripEventDescription}}</el-descriptions-item>
					<el-descriptions-item label="预警信息内容">{{tripEventDetail.staffWarningInformation}}</el-descriptions-item>
					<el-descriptions-item label="诱导与指令信息">{{tripEventDetail.guidanceInstructionInfo}} </el-descriptions-item>
				</el-descriptions>

			</div>
			<span slot="footer" class="dialog-footer">
		 	<el-button @click="isShow = false">返回</el-button>
			</span>
		</el-dialog>
	</div>
	</template>

	<script>
		import{getChTEs,getDetailChecked,deleteTripEvent} from '@/api/index.js';
		export default {
			name: "cInstructOld",
			data() {
				return {
					tripEventList: [],
					loading:false,
					isShow: false,
					tripEventDetail: {}, //旅游处理事件详情查看

				}
			},
			methods: {
				//初始化页面
				initHistory(){
					this.loading=true;
					//获取所有历史已处理旅游事件
					this.instance.getChTEs().then(res=>{
						this.tripEventList=res.data.datas;
						//设置遮罩时间
						setTimeout(() => {
							this.loading = false;
						}, 50)
					})
				},
				//返回父页面
				returnButton() {
					this.$router.push({name:"cInstruct"});
				},
				//查看事件详情
				detail(item) {
					this.isShow = true;
					this.instance.getDetailChecked({
						tripEventId:item
					}).then(res=>{
						console.log("这是详情查看");
						console.log(res.data);
						this.tripEventDetail=res.data.datas;
					})
					
				},
				
				//已处理历史事件的删除
				tripEventDelete(item){
					this.instance.deleteTripEvent({
						tripEventId:item
					}).then(res=>{
						this.$message({
						  message: "成功删除预案！",
						  type:'success',
						  duration:500,
						  center:true
						});
						this.initHistory();
					})
				}
			},
			mounted(){
				this.$nextTick(()=>{
					this.initHistory();
				})
			}
		}
	</script>

	<style>
		.events {
			text-align: center;
			margin: auto;
			min-width: 700px;
		}

		h2 {
			color: gray;
		}
	</style>
