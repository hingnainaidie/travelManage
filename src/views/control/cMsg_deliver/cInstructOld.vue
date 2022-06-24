<<template>
	<div class="events">
		<el-button type="primary" style="margin-bottom: 20px;float:left" @click="returnButton"><i
				class="el-icon-arrow-left"></i>返回</el-button>
		<h2>已处理历史事件列表</h2>
		<div>
			<el-table border :data='tripEventList' style='width: 100%; padding: auto;'>
				<el-table-column prop='emergencytrip_event_time' label='事件上传时间' width="200"></el-table-column>
				<el-table-column prop='trip_event_title' label='事件名称' min-width="350"></el-table-column>
				<el-table-column prop='trip_event_classification' label='事件类别'>
					<template slot-scope="scope">
						<el-tag>{{scope.row.trip_event_classification}}</el-tag>
					</template>
				</el-table-column>

				<el-table-column label='操作' width="220" align="center">
					<template slot-scope='scope'>
						<el-button size="mini" type="warning" @click='detail(scope.$index, scope.row)'>详情</el-button>
						<el-button size="mini" type="danger" @click="tripEventDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- 预案详情查看 -->
		<el-dialog title="已处理旅游事件详情" :visible.sync="isShow" :center='true' width="800px">
			<div>
				<el-descriptions class="margin-top" :column="1">
					<el-descriptions-item label="旅游事件时间">{{tripEventDetail.trip_event_time}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件名称">{{tripEventDetail.trip_event_title}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件发生地点">{{tripEventDetail.trip_event_location}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件类别">
						<el-tag size="small">{{tripEventDetail.trip_event_classification}}</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="上报人名字">{{tripEventDetail.user_name}}</el-descriptions-item>
					<el-descriptions-item label="旅游事件描述">{{tripEventDetail.trip_event_description}}</el-descriptions-item>
					<el-descriptions-item label="预警信息内容">{{tripEventDetail.staff_warning_information}}</el-descriptions-item>
					<el-descriptions-item label="诱导与指令信息">{{tripEventDetail.guidance_instruction_info}} </el-descriptions-item>
				</el-descriptions>

			</div>
			<span slot="footer" class="dialog-footer">
		 	<el-button @click="isShow = false">返回</el-button>
			</span>
		</el-dialog>
	</div>
	</template>

	<script>
		export default {
			name: "cInstructOld",
			data() {
				return {
					tripEventList: [{
							emergencytrip_event_time: "2022-6-23 12:00:19",
							trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
							trip_event_classification: "类别1"
						},
						{
							emergencytrip_event_time: "2022-6-23 12:00:19",
							trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
							trip_event_classification: "类别2"
						},
						{
							emergencytrip_event_time: "2022-6-23 12:00:19",
							trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
							trip_event_classification: "类别1"
						},
						{
							emergencytrip_event_time: "2022-6-23 12:00:19",
							trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
							trip_event_classification: "类别1"
						}
					],
					isShow: false,
					tripEventDetail: {
						trip_event_time: '2020',
						trip_event_title: 'title1',
						trip_event_location: 'location',
						trip_event_classification: 'type',
						user_name: 'zww',
						trip_event_description: 'description',
						staff_warning_information: 'information',
						guidance_instruction_info: 'instruction'
					},

				}
			},
			methods: {
				//返回父页面
				returnButton() {
					this.$router.push({name:"cInstruct"});
				},
				//查看事件详情
				detail(index,item) {
					this.isShow = true;
					console.log(index);
					
				},
				
				//已处理历史事件的删除
				tripEventDelete(index,item){
					console.log(index);
					console.log(item);
				}
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
