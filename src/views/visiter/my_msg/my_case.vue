<template>
	<div>
		<div class="my_case">
			<h2>我的报案</h2>
		</div>
		<div>
			<el-row class="new_case">
			  <el-button type="primary" @click="newCase()">新建</el-button>
			</el-row>
		</div>
		<div>
			<el-table border :data='caseList' style='width: 100%; padding: auto;'>
				<el-table-column prop='caseId' label='报案编号' width="200"></el-table-column>
				<el-table-column prop='caseDescription' label='报案事件描述' min-width="270"></el-table-column>
				<el-table-column prop='caseStatus' label='报案处理状态' :filters="status"
					:filter-method="filterHandle" width="120">
					<template slot-scope="scope">
						<el-tag
						:type="color(scope.row.caseStatus)">{{sta(scope.row.caseStatus)}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column>
					<template slot-scope="scope">
						<el-link :underline="false" @click="check_case(scope.row)">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import {showVisCaseEvent} from '@/api/index.js';
	export default {
		name:'my_case',
	  data() {
	    return {
		  status: [{
		  		text: '未处理',
		  		value: 0
		  	},
		  	{
		  		text: '已处理',
		  		value: 2
		  	}
		  ],
		  caseList: [],
		  tuserId:''
	    }
	  },
	  methods: {
		  initCaseList(){
			  this.tuserId = window.localStorage.userId;
			  console.log(this.tuserId);
		  	  showVisCaseEvent({tuserId:this.tuserId}).then((res) => {
		  				if(res != -1){
		  					this.caseList = res.data.datas;
		  					console.log(this.caseList);
		  					//两层循环修改数据
		  					this.caseList.forEach((item)=>{
		  						console.log(item.caseStatus);
		  						this.status.forEach((itemin)=>{
		  							if(item.caseStatus==itemin.value){
		  								item.StatusName=itemin.text;
		  								return true;
		  							}
		  						})
		  					})
		  					console.log(this.caseList);
		  					console.log(this.caseList.caseStatus);
		  					if(this.caseList.caseStatus==1){
		  						console.log("已处理");
		  					}
		  				}	
		  			})
		    },
	    newCase(){
	  	  this.$router.push({
	  	    path: "/visiter_mng/my_msg/new_case"
	  	  })
	    },
		check_case(row){
		  this.$router.push({
		    path: "/visiter_mng/my_msg/check_case",
			query: {
			          caseId: row.caseId
			}// 要传递的参数
		  })
		},
		sta(data) {
			if (data == 0) {
				return "未处理"
			} else if (data == 1) {
				return "处理中"
			} else if (data == 2) {
				return "已处理"
			}
		},
		color(data){
			if (data == 0) {
				return "primary"
			} else if (data == 1) {
				return "warning"
			} else if (data == 2) {
				return "info"
			}
		},
		filterHandle(value, row, column) {
			const property = column['property'];
			return row[property] === value;
		}
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		  		//页面初始化的时候执行
	  		  		this.initCaseList();
	  		  	})
	  }
	}
</script>

<style>
	.my_case{
		text-align: center;
		margin: auto;
		min-width: 1000px;
	}
	.new_case{
		margin-bottom:20px;
	}
	h2{
		color: gray;
	}
</style>