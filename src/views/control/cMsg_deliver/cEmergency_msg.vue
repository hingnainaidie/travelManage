<<template>
	<div class="events">
		<h2>预警信息列表</h2>
		<div>
			<el-table border :data='warnInfoList' style='width: 100%; padding: auto;'>
				<el-table-column prop='trip_event_time' label='事件发生时间' width="170" align="center"></el-table-column>
				<el-table-column prop='trip_event_title' label='事件名称' min-width="220" align="center"></el-table-column>
				<el-table-column prop='staff_warning_information' label='预警消息内容' min-width="420" align="center"></el-table-column>
			</el-table>
		</div>

	</div>
	</template>

	<script>
		export default {
			name: "cEmergency_msg",
			data() {
				return {
					warnInfoList: [{
						trip_event_time: "2022-6-23 12:00:19",
						trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
						staff_warning_information: "预警信息1啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦"
					},
					{
						trip_event_time: "2022-6-23 12:00:19",
						trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
						staff_warning_information: "预警信息2"
					},
					{
						trip_event_time: "2022-6-23 12:00:19",
						trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
						staff_warning_information: "预警信息3"
					},
					{
						trip_event_time: "2022-6-23 12:00:19",
						trip_event_title: "重庆某景区xxxx发生重大坍塌事件",
						staff_warning_information: "预警信息4"
					}
				],

				}
			},
			methods: {
				
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
