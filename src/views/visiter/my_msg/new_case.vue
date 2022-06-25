<template>
	<div>
		<el-row>
		  <el-page-header @back="goBack" content="新建报案">
		  </el-page-header>
		</el-row>
		<el-main>
			报案事件地点
			<el-input id="input1" type="input" placeholder="请输入报案事件地点" v-model="form.place" :rows="1" show-word-limit style=" 100%"></el-input>
		  报案事件描述
		  <el-input id="input1" type="textarea" placeholder="请输入报案事件描述" v-model="form.description" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="newCase()">提交</el-button>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		name: 'new_case',
		data() {
		  return {
		    form: {
		      place: '',
		      description:''
		    },
		    checked: false
		  };
		},
	  methods: {
	    goBack() {
	            console.log('go back');
	    		this.$router.push({
	    		  path: "/visiter_mng/my_msg/my_complain"
	    		})
	          },
		newCase(){
			if (this.form.place == '') {
			  alert("请输入报案事件地点")
			} else if (this.form.description == '') {
			  alert("请输入报案事件描述")
			} else{
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