<template>
	<div>
		<el-row>
		  <el-page-header @back="goBack" content="新建投诉">
		  </el-page-header>
		</el-row>
		<el-main>
			<el-form>
				<el-form-item label="投诉描述">
				    <el-input id="input1" type="textarea" placeholder="请输入投诉描述" v-model="form.description" :rows="10" maxlength="300" show-word-limit style=" 100%"></el-input>
				  </el-form-item>
			</el-form>
		</el-main>
		<el-row type="flex" class="row-bg" justify="center">
			<el-button type="primary" @click="newComplain()">提交</el-button>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		name: 'new_complain',
		data() {
		  return {
		    form: {
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
			newComplain(){
				if (this.form.description == '') {
				  alert("请输入投诉描述")
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