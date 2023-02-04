<template>
	<div>
		<el-row>
		  <el-page-header @back="goBack" content="新建投诉">
		  </el-page-header>
		</el-row>
		<el-main>
			<el-form>
				<el-form-item label="投诉描述">
				    <el-input id="input1" type="textarea" placeholder="请输入投诉描述" v-model="complaintDescription" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
				  </el-form-item>
			</el-form>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="newComplain()">提交</el-button>
		</el-row>
		
	</div>
</template>

<script>
	import {createComEvent} from '@/api/index.js';
	export default {
		name: 'new_complain',
		data() {
		  return {
			tuserId:'',
		    complaintDescription:'',
		    checked: false,
			complaintInfo:[]
		  };
		},
	  methods: {
	    goBack() {
	            console.log('go back');
	    		this.$router.push({
	    		  path: "/visiter_mng/my_msg/my_complain"
	    		})
	          },
			newComplain(){
				if (this.complaintDescription == '') {
				  alert("请输入投诉描述")
				} else{
					this.tuserId = window.localStorage.userId;
					createComEvent({complaintDescription:this.complaintDescription,tuserId:this.tuserId}).then((res) => {
						console.log(res.data.datas);
						this.complaintInfo=res.data.datas;
						console.log(this.complaintInfo);
						// this.complaint_id=res.data.datas.complaintId;
						// this.description=res.data.datas.complaintDescription;
						// this.complaint_start_time=res.data.datas.complaintBegintime;
						// this.complaint_end_time=res.data.datas.complaintMidtime;
						// this.complaint_status=res.data.datas.complaintEndtime;
						// this.complaint_status=res.data.datas.complaintStatus;
						// this.complaint_result=res.data.datas.complaintResults;
						// if(this.complaint_status==2){
						// 	this.complaint_status='已处理';
						// }else{
						// 	if(this.complaint_status==1){
						// 		this.complaint_status='处理中';
						// 	}else{
						// 		this.complaint_status='未处理';
						// 	}
						// }
					})
					alert("成功创建！")
					this.$router.push({
					  path: "/visiter_mng/my_msg/my_complain"
					})
				}
			}
	  }
	}
</script>

<style>
</style>