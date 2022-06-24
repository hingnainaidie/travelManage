<template>
	<div>
		酒店信息
		<div>
			<h1>酒店信息</h1>
			<div>
				<!-- <el-select v-model="select" slot="prepend" placeholder="请选择地区">
				      <el-option label="两江新区" value="1"></el-option>
				      <el-option label="渝中区" value="2"></el-option>
				      <el-option label="渝北区" value="3"></el-option>
					  <el-option label="南岸区" value="4"></el-option>
					  <el-option label="沙坪坝区" value="5"></el-option>
				    </el-select> -->
				<el-select v-model="place" slot="prepend" placeholder="请选择地区" >
				    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
				</el-select>
				<el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
				<div>
					<el-table
							
					        :data="HotelList"
					        stripe
					        style="width: 100%">
					    <el-table-column
								width="100px;"
								align="center"
					            prop="hotelId"
					            label="序号">
					    </el-table-column>
					    <el-table-column
					    		align="center"
					            prop="hotelName"
					            label="酒店名称">
					    </el-table-column>
					    <el-table-column
								align="center"
					            prop="hotelAddress"
					            label="酒店地址">
					    </el-table-column>
						<el-table-column
								align="center"
								show-overflow-tooltip
						        prop="docSummary"
						        label="酒店剩余房间">
						</el-table-column>
						
						
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'hotel_msg',
	  data(){
	    return{
			HotelList: [],
			value: '',
			place: '',
			options: [{
				value: '选项1',
				label: '两江新区',
			},
			{
				value: '选项2',
				label: '渝中区',
			},
			{
				value: '选项3',
				label: '渝北区',
			},
			{
				value: '选项4',
				label: '南岸区',
			},
			{
				value: '选项5',
				label: '沙坪坝区',
			}],
			
	    }
	  },
	  methods:{
		  initHotelList(){
			  this.HotelList = [
				  {
					  hotelId:1,
					  hotelName: "小黄杯酒店",
					  hotelAddress: "重庆市沙坪坝区a酒店",
					  docSummary: "10间房间可用",
				  },
				  {
					  hotelId:2,
					  hotelName: "小绿人酒店",
					  hotelAddress: "重庆市渝北区区b酒店",
					  docSummary: "30间房间可用",
				  }
			  ];
		  			  
		  },
		  //搜索
		  search(){
			  console.log(this.place);
		  }
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		//页面初始化的时候执行
	  		this.initHotelList();
	  		
	  	})
	  },
	}
</script>

<style>
</style>