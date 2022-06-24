<template>
  <div>
	  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    },
	methods: {
	}
  }
</script>


<style scoped>
  .app {
    width: 100%;
	min-width: 800px;
	height: 60px;
  }
  .appicon {
    height: 60px;
    width: 100%;
    background-color: #545c64;
  }
  .appname {
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    float: left;
	margin-left: 20px;
	margin-right: 20px;
  }
  .topMenu{
	  float:left;
	  min-width: 600px;
	  height: 70px;
  }
  .user {
    line-height: 60px;
    float: right;
    margin-right: 20px;
  }

  .el-dropdown-link {
    font-size: 20px;
    cursor: pointer;
    color: white;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
