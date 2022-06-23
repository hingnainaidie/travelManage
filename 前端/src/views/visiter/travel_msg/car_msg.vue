<template>
	<div>
		停车场信息
		<div>
			<h1>停车场信息</h1>
			<div>
				<el-select v-model="select" slot="prepend" placeholder="请选择地区">
				      <el-option label="两江新区" value="1"></el-option>
				      <el-option label="渝中区" value="2"></el-option>
				      <el-option label="渝北区" value="3"></el-option>
					  <el-option label="南岸区" value="4"></el-option>
					  <el-option label="沙坪坝区" value="5"></el-option>
				    </el-select>
				<!-- <el-select v-model="selectData" slot="prepend" placeholder="请选择地区" >
				    <el-option v-for="(item, index) in categoryList" :key="index" :label="item.categoryName" :value="item.categoryId"></el-option>
				</el-select> -->
				<el-button slot="append" icon="el-icon-search">搜索</el-button>
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
	export default {
	  name: 'car_msg',
	  data(){
	    return{
			parkingList: []
	    }
	  },
	  methods:{
		  //获取停车场信息
		  initParkingList(){
			  this.parkingList = [
				  {
					  parkingId:1,
					  parkingAddress: "重庆市渝中区a停车场",
					  docSummary: "10个车位可用",
				  },
				  {
					  parkingId:2,
					  parkingAddress: "重庆市南岸区b停车场",
					  docSummary: "30个车位可用",
				  }
			  ];

			  
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