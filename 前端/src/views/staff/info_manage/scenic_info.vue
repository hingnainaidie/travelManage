<template>
	<div>
		景区监控信息
		<div>
			<h1>景区监控信息</h1>
			<div>
				<div>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
					<el-button slot="append" icon="el-icon-search">搜索</el-button>
				</div>
				
				<div>
					<el-table
							v-loading="loading"
							element-loading-text="拼命加载中"
							element-loading-spinner="el-icon-loading"
							element-loading-background="rgba(0, 0, 0, 0.8)"
					        :data="parkingList"
					        stripe
					        style="width: 100%">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="parkingId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="parkingAddress"
					            label="停车场地址">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="docSummary"
						        label="停车场剩余车位">
						</el-table-column>
						
						
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>