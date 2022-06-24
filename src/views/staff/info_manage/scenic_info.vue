<template>
	<div>
		景区监控信息
		<div>
			<h1>景区监控信息</h1>
			<div>
				<div class="block">
				    
				    <el-date-picker
				      v-model="date"
				      align="right"
				      type="date"
				      placeholder="选择日期"
				      :picker-options="pickerOptions">
				    </el-date-picker>
					
						<el-button slot="append" icon="el-icon-search" @click="search" style="margin-left: 10px;">搜索</el-button>
					
					
				  </div>
				
				<div>
					<el-table
					        :data="parkingList"
					        stripe
					        style="width: 100%">
						<el-table-column
								width="100px;"
								align="center"
						        prop="monitorId"
						        label="监控序号">
						</el-table-column>	
					    <el-table-column
								width="100px;"
								align="center"
					            prop="monitorDate"
					            label="监控日期">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="monitorPlace"
					            label="监控位置">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="monitorContent"
						        label="监控内容">
						</el-table-column>
						
						
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'scenic_info',
	  data(){
	    return{
			parkingList: [],
			 pickerOptions: {
			  disabledDate(time) {
				return time.getTime() > Date.now();
			  },
			  shortcuts: [{
				text: '今天',
				onClick(picker) {
				  picker.$emit('pick', new Date());
				}
			  }, {
				text: '昨天',
				onClick(picker) {
				  const date = new Date();
				  date.setTime(date.getTime() - 3600 * 1000 * 24);
				  picker.$emit('pick', date);
				}
			  }, {
				text: '一周前',
				onClick(picker) {
				  const date = new Date();
				  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
				  picker.$emit('pick', date);
				}
			  }]
			},
			value1: '',
			date: '',
	    }
	  },
	  methods:{
		  //获取停车场信息
		  initParkingList(){
			  this.parkingList = [
				  {
					  monitorId:1,
					  monitorDate:"2022_06_21_17_07",
					  monitorPlace: "欢乐谷",
					  monitorContent: "xxx",
				  },
				  {
					  monitorId:2,
					  monitorDate:"2022_06_23_22_07",
					  monitorPlace: "人民解放碑",
					  monitorContent: "xxx",
				  }
			  ];
	
			  
		  },
		  //搜索
		  search(){
			  console.log(this.date)
		  }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		//页面初始化的时候执行
	  		this.initParkingList();
	  		
	  	})
	  },
	}
</script>

<style>
</style>