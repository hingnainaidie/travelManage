<template>
	<div class='orders' style="height: 80vh;">
		<h2>我的订单</h2>
		<div>
			<el-table border :data='ticketList' style='width: 100%; padding: auto;'>
				<el-table-column prop='scenicName' label='景区名称' width="200"></el-table-column>
				<el-table-column prop='scenicLocation' label='景区位置' min-width="270"></el-table-column>
				<el-table-column prop='ticketUseTimeDay' label='使用时间' width="100">
					<template slot-scope="scope" >
						{{scope.row.ticketUsetimeYear+"-"+scope.row.ticketUsetimeMonth+"-"+scope.row.ticketUsetimeDay}}
					</template>
				</el-table-column>
				<el-table-column prop='ticketBuyTime' label='购票时间' width="150">
				</el-table-column>
				<el-table-column prop='ticketPrice' label='购买单价(元)' width="50"></el-table-column>
				<el-table-column prop='ticketStatus' label='票状态' :filters="status" :filter-method="filterHandle"
					width="120">
					<template slot-scope="scope">
						<el-tag :type="color(scope.row.ticketStatus)"
							@click="useTicketm(scope.row)">
							{{sta(scope.row.ticketStatus)}}</el-tag>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import {
		useTicket
	} from '@/api/index.js';
	export default {
		name: "my_orders",
		data() {
			return {
				status: [{
						text: '点击使用',
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
				ticketList: []
			}
		},
		methods: {
			useTicketm(data) {
				if (data.ticketStatus == 0) {
					//点击使用
					this.instance.useTicket({
						ticketId: data.ticketId,
						ticketUsetimeYear:data.ticketUsetimeYear,
						ticketUsetimeMonth:data.ticketUsetimeMonth,
						ticketUsetimeDay:data.ticketUsetimeDay
					}).then(res => {
						if(res.data.datas.isSuccess){
							alert("使用成功");
							this.instance.showTickets({
								userId: window.localStorage.userId
							}).then(res => {
								this.ticketList = res.data.datas
							})
						}else{
							alert(res.data.datas.error);
						}
					})
				}
			},
			sta(data) {
				if (data == 0) {
					return "点击使用"
				} else if (data == 1) {
					return "已使用"
				} else if (data == 2) {
					return "已过期"
				}
			},
			color(data) {
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
		},
		mounted() {
			this.instance.showTickets({
				userId: window.localStorage.userId
			}).then(res => {
				this.ticketList = res.data.datas;
			})
		}
	}
</script>

<style>
	.orders {
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}

	h2 {
		color: gray;
	}

	<yle>
