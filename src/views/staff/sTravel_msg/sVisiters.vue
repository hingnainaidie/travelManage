<template>
	<div>
		游客信息
		<div>
			<h1>游客详细信息</h1>
			<div>
				<div>
					<el-row :gutter="10">
						<el-col :span="3">
							<div>
								<el-select v-model="stringType" slot="prepend" placeholder="请选择类型" >
								    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
								</el-select>
							</div>						
						</el-col>
						<el-col :span="6">
							<div>
								<el-input v-model="string" placeholder="请输入内容"></el-input>
							</div>	
						</el-col>
						<el-col :span="6">
							<div>
								<el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
							</div>
						</el-col>
						
					</el-row>
					
				</div>
				
				<div>
					<el-table
							
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
			visiterList: [],
			string: '',
			stringType: '',
			options: [{
				value: '选项1',
				label: '游客姓名',
			},
			{
				value: '选项2',
				label: '手机号',
			},
			{
				value: '选项3',
				label: '景区名称',
			},
			{
				value: '选项4',
				label: '票使用时间',
			}],
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
	  
	  			  
	  		  },
			  search(){
				  //打印数据
				  console.log(this.stringType);
				  console.log(this.string);
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