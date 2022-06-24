<template>
	<div>
		<div>
			<h1>值班人员基本信息</h1>
			<div>
				<el-button slot="append" icon="el-icon-circle-plus-outline" @click="addstaff" class="addstaffstyle">添加值班人员</el-button>
			</div>
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
							
					        :data="staffList"
					        stripe
					        style="width: 100%">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="staffId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="staffaccount"
					            label="账号">
					    </el-table-column>
						<el-table-column
								align="center"
						        prop="staffscenic"
						        label="所属景区">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="staffname"
						        label="姓名">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="staffgender"
						        label="性别">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="staffphone"
						        label="手机号">
						</el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="staffidentify"
						        label="身份证号">
						</el-table-column>
						
						
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'staff_manage',
	  data(){
	    return{
			staffList: [],
			string: '',
			stringType: '',
			options: [{
				value: '选项1',
				label: '所属景区',
			},
			{
				value: '选项2',
				label: '姓名',
			}],
	    }
	  },
	  methods:{
	  		  //获取游客信息
	  		  initStaffList(){
	  			  this.staffList = [
	  				  {
	  					  staffId:1,
	  					  staffaccount: "12345",
	  					  staffscenic: "小绿人儿",
						  staffname:"磁器口",
						  staffgender:"女",
						  staffphone:"20220623001",
						  staffidentify:"1234567",
	  				  },
	  				  {
	  					  staffId:2,
	  					  staffaccount: "12345",
	  					  staffscenic: "小黄杯儿",
	  					  staffname:"人们大礼堂",
	  					  staffgender:"女",
	  					  staffphone:"20220623001",
	  					  staffidentify:"123456",
	  				  }];
	  		  },
			  search(){
				  //打印数据
				  console.log(this.stringType);
				  console.log(this.string);
			  },
			  addstaff(){
				  this.$router.push('/control_mng/staff_reg');
			  }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		//页面初始化的时候执行
	  		this.initStaffList();
	  		
	  	})
	  },
	}
</script>

<style>
	.addstaffstyle{
		margin-bottom: 21px;
		width: 20%;
	}
</style>