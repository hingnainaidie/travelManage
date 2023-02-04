<template>
	<div>
		<el-row>
		  <el-page-header @back="goBack" content="新建报案">
		  </el-page-header>
		</el-row>
		<el-main>
			<h3>报案事件地点</h3>
			<el-input id="input1" type="input" placeholder="请输入报案事件地点" v-model="casePlace" :rows="1" show-word-limit style=" 100%"></el-input>
		  <h3>报案事件描述</h3>
		  <el-input id="input1" type="textarea" placeholder="请输入报案事件描述" v-model="caseDescription" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="newCase()">提交</el-button>
		</el-row>
		
	</div>
</template>

<script>
	import {createCaEvent} from '@/api/index.js';
	export default {
		name: 'new_case',
		data() {
		  return {
			  tuserId:'',
		    casePlace:'',
			caseDescription:'',
		    checked: false,
			caseInfo:[]
		  };
		},
	  methods: {
	    goBack() {
	            console.log('go back');
	    		this.$router.push({
	    		  path: "/visiter_mng/my_msg/my_case"
	    		})
	          },
		newCase(){
			if (this.casePlace == '') {
			  alert("请输入报案事件地点")
			} else if (this.caseDescription == '') {
			  alert("请输入报案事件描述")
			} else{
				this.tuserId = window.localStorage.userId;
				createCaEvent({casePlace:this.casePlace,caseDescription:this.caseDescription,tuserId:this.tuserId}).then((res) => {
					console.log(res.data.datas);
					this.caseInfo=res.data.datas;
					console.log(this.caseInfo);
				})
				alert("成功创建！")
				this.$router.push({
				  path: "/visiter_mng/my_msg/my_case"
				})
			}
		}
	  }
	}
</script>

<style>
</style>