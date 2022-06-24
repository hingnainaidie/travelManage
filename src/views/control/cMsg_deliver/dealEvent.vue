<template>
	<div class="top">
		<el-descriptions :title="tripEvent.trip_event_title" :column="2">
			<el-descriptions-item label="地点">{{tripEvent.trip_event_location}}</el-descriptions-item>
			<el-descriptions-item label="上传者">{{tripEvent.user_name}}</el-descriptions-item>
			<el-descriptions-item label="时间">{{tripEvent.trip_event_time}}</el-descriptions-item>
			<el-descriptions-item label="类别">
				<el-tag size="small">{{tripEvent.trip_event_classification}}</el-tag>
			</el-descriptions-item>
		</el-descriptions>
		<div style="color: gray;">
			<div>旅游事件描述：</div>
			<div style="margin-top: 10px;margin-bottom: 20px;">{{tripEvent.trip_event_description}}</div>
		</div>
		<div>
			<div style="margin-bottom: 20px;">
				<el-row>
					<el-col :span="8">
						<el-select v-model="cate_value" placeholder="请选择">
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
			<el-table border :data="emergencyList" height="250" highlight-current-row
				@current-change="handleCurrentChange">
				<el-table-column width="200px;" align="center" prop="emergency_time" label="预案时间"></el-table-column>
				<el-table-column align="center" prop="emergency_name" label="预案名称"></el-table-column>
				<el-table-column label="操作" align="center" width="120">
					<template slot-scope="scope">
						<el-button size="mini" type="warning" @click="showEmergeDetail(scope.$index, scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="margin-top: 40px;">
				<div style="float: left;">
					<el-button type="warning" @click="wait()">取消</el-button>
				</div>
				<div style="float: right;">
					<el-button type="primary">确定并发送预警信息</el-button>
				</div>
			</div>
			<!-- 预案详情查看 -->
			<el-dialog title="预案详情" :visible.sync="isShowDetail" :center='true' width="800px">
				<div>
					<el-descriptions class="margin-top" :column="1">
						<el-descriptions-item label="预案名称">{{emergeDetail.emergency_name}}</el-descriptions-item>
						<el-descriptions-item label="预案时间">{{emergeDetail.emergency_time}}</el-descriptions-item>
						<el-descriptions-item label="预案类别">
							<el-tag size="small">{{emergeDetail.emergency_classification}}1</el-tag>
						</el-descriptions-item>
						<el-descriptions-item label="预案描述">{{emergeDetail.emergency_description}}</el-descriptions-item>
						<el-descriptions-item label="解决方法">{{emergeDetail.emergency_solution}}</el-descriptions-item>
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
				isShowDetail:false,
				choosePre: "",
				tripEvent: {
					trip_event_time: "2022-11-11 12:11:10",
					trip_event_title: "xxx旅游事件",
					trip_event_location: "重庆市沙坪坝区景阳花园",
					trip_event_classification: "类别一",
					user_name: "时影",
					trip_event_description: "查看信息查看高级景区信息：舒适度、景区基本信息、票务销售信息、离区入区情况，查看停车场信息：对应停车场的剩余容量、位置查看酒店信息：对应酒店的剩余容量、位置查看游客信息：表"
				},
				cate_value: "事故灾害",
				options: [{
					value: "自然灾害",
					label: "自然灾害"
				}, {
					value: "事故灾害",
					label: "事故灾害"
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
				emergencyList: [{
						emergency_time: '2022-08-23 14:34:12',
						emergency_name: '蛇来了',
						emergency_classification: '事故灾害'

					},
					{
						emergency_time: '2021-07-14 15:34:00',
						emergency_name: '设施损坏',
						emergency_classification: '事故灾害'

					},
					{
						emergency_time: '2022-06-29 09:44:12',
						emergency_name: '地震',
						emergency_classification: '事故灾害'

					},
					{
						emergency_time: '2021-07-14 15:34:00',
						emergency_name: '设施损坏',
						emergency_classification: '事故灾害'

					},
					{
						emergency_time: '2022-06-29 09:44:12',
						emergency_name: '地震',
						emergency_classification: '事故灾害'

					}
				],
				//预案详情（接收后端传回的数据）
				emergeDetail: {
					emergency_time: '1231432',
					emergency_name: 'xxxxxxx',
					emergency_classification: '类型1',
					emergency_description: '这是描述',
					emergency_solution: '这是解决方法'
				}

			}
		},
		methods: {
			handleCurrentChange(val) {
				this.choosePre = val.emergency_name;
			},
			wait() {
				this.$router.push({
					path: "/control_mng/cMsg_deliver/cInstruct"
				})
			},
			showEmergeDetail(index,item) {
				this.isShowDetail = true;
				console.log(index);
			},
		}
	}
</script>

<style scoped>
	.top {
		margin: auto;
		width: 800px;
	}
</style>
