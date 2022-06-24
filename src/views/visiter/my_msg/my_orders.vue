<template>
	<div class='orders'>
		<h2>我的订单</h2>
		<div>
			<el-table border :data='ticketList' style='width: 100%; padding: auto;'>
				<el-table-column prop='scenic_name' label='景区名称' width="200"></el-table-column>
				<el-table-column prop='scenic_location' label='景区位置' min-width="270"></el-table-column>
				<el-table-column prop='ticket_use_time' label='使用时间' width="120"></el-table-column>
				<el-table-column prop='ticket_buy_time' label='购票时间' width="180"></el-table-column>
				<el-table-column prop='ticket_price' label='购买单价(元)' width="80"></el-table-column>
				<el-table-column prop='ticket_status' label='票状态' :filters="status"
					:filter-method="filterHandle" width="120">
					<template slot-scope="scope">
						<el-tag
						:type="color(scope.row.ticket_status)">{{sta(scope.row.ticket_status)}}</el-tag>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my_orders",
		data() {
			return {
				status: [{
						text: '未使用',
						value: 0
					},
					{
						text: '已使用',
						value: 1
					},
					{
						text: '已过期',
						value: 2
					}
				],
				ticketList: [{
					scenic_name: "zww1",
					scenic_location: "重庆市开州区xxx街xxx号",
					ticket_use_time: "2022-08-24",
					ticket_buy_time: "2022-08-23 14:34:12",
					ticket_price: 35,
					ticket_status: 0
				}, {
					scenic_name: "zww2",
					scenic_location: "重庆市沙坪坝区xxx街xxx号",
					ticket_use_time: "2021-07-14",
					ticket_buy_time: "2021-07-14 15:34:00",
					ticket_price: 45,
					ticket_status: 1
				}, {
					scenic_name: "zww3",
					scenic_location: "重庆市大学城xxx街xxx号",
					ticket_use_time: "2021-06-30",
					ticket_buy_time: "2022-06-29 09:44:12",
					ticket_price: 25,
					ticket_status: 2
				}]
			}
		},
		methods: {
			sta(data) {
				if (data == 0) {
					return "未使用"
				} else if (data == 1) {
					return "已使用"
				} else if (data == 2) {
					return "已过期"
				}
			},
			color(data){
				if (data == 0) {
					return "primary"
				} else if (data == 1) {
					return "info"
				} else if (data == 2) {
					return "warning"
				}
			},
			filterHandle(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
		}
	}
</script>

<style>
	.orders{
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}
	h2{
		color: gray;
	}
</style>
