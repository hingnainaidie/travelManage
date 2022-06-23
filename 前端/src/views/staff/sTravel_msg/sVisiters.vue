<template>
	<div>
		游客信息
		<div>
			<h1>游客详细信息</h1>
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
					        :data="visiterList"
					        stripe
					        style="width: 100%">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="visiterId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="visiteraccount"
					            label="账号">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="visitername"
						        label="姓名">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="visitergender"
						        label="性别">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="visiterphone"
						        label="手机号">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketId"
						        label="票id">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketstatus"
						        label="票状态">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketbuytime"
						        label="购票时间">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="ticketusetime"
						        label="票使用时间">
						</el-table-column>
						
						
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'sVisiters',
	  data(){
	    return{
			visiterList: []
	    }
	  },
	  methods:{
	  		  //获取游客信息
	  		  initVisitersList(){
	  			  this.visiterList = [
	  				  {
	  					  visiterId:1,
	  					  visiteraccount: "12345",
	  					  visitername: "小黄杯儿",
						  visitergender:"女",
						  visiterphone:"123123123123",
						  ticketId:"20220623001",
						  ticketstatus:"0",
						  ticketbuytime:"202206210732",
						  ticketusetime:"202206250000",
	  				  },
	  				  {
	  					  visiterId:2,
	  					  visiteraccount: "54321",
	  					  visitername: "小绿人儿",
	  					  visitergender:"女",
	  					  visiterphone:"234567890111",
	  					  ticketId:"20220623002",
	  					  ticketstatus:"1",
	  					  ticketbuytime:"202206220932",
	  					  ticketusetime:"202206280000",
	  				  }
	  			  ];
	  
	  			  
	  		  }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		//页面初始化的时候执行
	  		this.initVisitersList();
	  		
	  	})
	  },
	}
</script>

<style>
</style>