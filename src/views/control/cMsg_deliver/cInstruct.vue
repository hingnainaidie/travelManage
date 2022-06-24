<template>
	<div class="events">
		<h2>旅游事件管理</h2>
		<div style="float: right; margin-bottom: 10px;">
			<el-button type="primary" @click="checkOld()">已处理历史事件</el-button>
		</div>
		<div>
		  <el-table border :data='tripEventList' style='width: 100%; padding: auto;'>
		    <el-table-column prop='emergencytrip_event_time' label='事件上传时间' width="200"></el-table-column>
		    <el-table-column prop='trip_event_title' label='事件名称' min-width="350"></el-table-column>
		    <el-table-column prop='trip_event_classification' label='事件类别'>
		    	<template slot-scope="scope">
		    		<el-tag>{{scope.row.trip_event_classification}}</el-tag>
		    	</template>
		    </el-table-column>
		    <el-table-column label='操作' width="120">
		      <template slot-scope='scope'>
		        <el-button size="mini" type="warning" @click='deal(scope.row)'>点击处理</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		</div>
	</div>
</template>

<script>
	export default {
	  name: "basemsg",
	  data(){
	    return {
			tripEventList:[
				{
					emergencytrip_event_time:"2022-6-23 12:00:19",
					trip_event_title:"重庆某景区xxxx发生重大坍塌事件",
					trip_event_classification:"类别1"
				},
				{
					emergencytrip_event_time:"2022-6-23 12:00:19",
					trip_event_title:"重庆某景区xxxx发生重大坍塌事件",
					trip_event_classification:"类别1"
				},
				{
					emergencytrip_event_time:"2022-6-23 12:00:19",
					trip_event_title:"重庆某景区xxxx发生重大坍塌事件",
					trip_event_classification:"类别1"
				},
				{
					emergencytrip_event_time:"2022-6-23 12:00:19",
					trip_event_title:"重庆某景区xxxx发生重大坍塌事件",
					trip_event_classification:"类别1"
				}
			]
	    }
	  },
	  methods:{
		  checkOld(){
			  this.$router.push({
			    path: "/control_mng/cMsg_deliver/cInstructOld"
			  })
		  },
		  deal(){
			  this.$router.push({
			    path: "/control_mng/cMsg_deliver/dealEvent"
			  })
		  }
	  }
	}
</script>

<style>
	.events{
		text-align: center;
		margin: auto;
		min-width: 700px;
	}
	h2{
		color: gray;
	}
</style>