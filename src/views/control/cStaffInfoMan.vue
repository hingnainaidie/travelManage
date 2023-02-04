<template>
	<div>
		<el-button style="margin-top: 1%;margin-left: 1%;" type="primary" @click="addStaff"><i class="el-icon-plus"></i>新增员工账号
		</el-button>
		<h3 style="color: gray;text-align: center;font-size: 30px;">员工信息管理</h3>
		<el-table height="66vh" v-loading="loading" element-loading-text="拼命加载中" border
			element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
			:data="StaffList" stripe style="width: 100%" >
			<el-table-column width="50px;" align="center" prop="StaffId" label="序号" ></el-table-column>
			<el-table-column min-width="200px;" align="center" prop="userName" label="姓名" ></el-table-column>
			<el-table-column min-width="100px;" align="center" prop="userGender" label="性别" ></el-table-column>
			<el-table-column min-width="150px;" align="center" prop="scenicName" label="所属景区" ></el-table-column>
			<el-table-column min-width="200px;" align="center" prop="userAccount" label="账号" ></el-table-column>
			<el-table-column min-width="150px;" align="center" prop="userPhone" label="电话号码" ></el-table-column>
			<el-table-column min-width="300px;" align="center" prop="userIdentify" label="身份证号码" ></el-table-column>
			<el-table-column label="操作" align="center" width="250px">
				<template slot-scope="scope">
					<el-button size="mini" type="success" @click="StaffEdit(scope.row.userId,scope.row.userName,scope.row.scenicName,scope.row.userAccount,scope.row.userGender)">修改</el-button>
					<el-button size="mini" type="danger" @click="StaffDelete(scope.row.userId)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 员工信息修改 -->
		<el-dialog title="员工信息修改" :visible.sync="isShowEdit" :center='true' width="400px">
			<el-descriptions class="margin-top" :column="1" :size="size" border style="margin-bottom: 10%;">
			    <el-descriptions-item :labelStyle='labelStyle'>
			      <template slot="label">
			        <i class="el-icon-user"></i>
			        员工名
			      </template>
			      {{editForm.userName}}
			    </el-descriptions-item>
				<el-descriptions-item :labelStyle='labelStyle'>
				  <template slot="label">
				    <i class="el-icon-magic-stick"></i>
				    性别
				  </template>
				  {{editForm.userGender}}
				</el-descriptions-item>
				<el-descriptions-item :labelStyle='labelStyle'>
				  <template slot="label">
				    <i class="el-icon-paperclip"></i>
				    账号
				  </template>
				  {{editForm.userAccount}}
				</el-descriptions-item>
			  </el-descriptions>
			<el-form :model="editForm">
				<el-form-item label="修改所属景区" label-width="110px">
					<el-select v-model="editForm.scenicName" placeholder="请选择景区">
						<el-option v-for="item in typeList" :key="item.value" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShowEdit = false">取 消</el-button>
				<el-button type="primary" @click="ensure">确 定</el-button>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	import{getStaffList,FindscenicIdByName,cStaffDelete,editStaffInfo} from '@/api/index.js';
	export default {
		data() {
			return {
				size:'',
				labelStyle: { 'width': '100px' },
				
				StaffList: [], //用于存放所有员工数据
				loading: false, //加载数据时的遮罩
				isShow: false, //显示新增预案对话框
				isShowDetail: false, //显示预案详情对话框
				typeList: [{
					value: '欢乐谷',
					label: '欢乐谷',
				},
				{
					value: '人民大礼堂',
					label: '人民大礼堂',
				},
				{
					value: '照母山森林公园',
					label: '照母山森林公园',
				},
				{
					value: '园博园',
					label: '园博园',
				},
				{
					value: '弹子石老街',
					label: '弹子石老街',
				},
				{
					value: '洪崖洞',
					label: '洪崖洞',
				},
				{
					value: '南山',
					label: '南山',
				},
				{
					value: '歌乐山',
					label: '歌乐山',
				},
				{
					value: '人民解放碑',
					label: '人民解放碑',
				},
				{
					value: '磁器口',
					label: '磁器口',
				}],
				//修改的员工信息
				StaffForm: {
					userId:1,      //需要接收被修改信息的员工id
					userName: '',
					scenicName: '',
				},
				//预案详情（接收后端传回的数据）
				emergeDetail: {},
				//修改员工信息
				editForm:{
					userId:1,      //被修改信息的员工id
					userName: '',
					scenicName: '',
					userAccount:'',
					userGender:'',
					scenicId:0,
				},   
				//修改员工信息,
				isShowEdit:false
			}
		},
		methods: {
			filterHandle(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			//初始化页面，加载员工信息
			initStaffList() {
				//加载
				this.loading = true;
				//获取所有员工信息
				getStaffList().then(res => {
					this.StaffList = res.data.datas;
					for(let i = 0; i < this.StaffList.length; i++)
					{
						this.StaffList[i].StaffId = i + 1;							
					}
					//设置遮罩时间
					setTimeout(() => {
						this.loading = false;
					}, 50)
				})
			},
			//添加应急预案
			addStaff() {
				this.$router.push({ name:'staff_manage1'});
			},
			//修改员工信息
			StaffEdit(item1,item2,item3,item4,item5){
				this.isShowEdit=true;
				// console.log(item1);//id
				// console.log(item2);//员工姓名
				// console.log(item3);//所属景区
				this.editForm.userId = item1;
				this.editForm.userName = item2;
				this.editForm.scenicName = item3;
				this.editForm.userAccount = item4;
				this.editForm.userGender = item5;
			},
			//确认提交修改后的员工信息
			ensure(){
				this.isShowEdit=false;
				console.log(this.editForm.scenicName);
				//根据景区名称找到id
				let data = {
					scenicName:this.editForm.scenicName
				}
				FindscenicIdByName(data).then(res => {
					if (res != -1){
						console.log("啦啦啦");
						this.editForm.scenicId = res.data.datas.scenicId;
						let data2 = {
							userId:this.editForm.userId,
							scenicId:this.editForm.scenicId
						}
						editStaffInfo(data2).then(res => {
							if(res!=1){
								console.log("进来啦");
								this.$message({
								  message: "成功修改该员工信息！",
								  type:'success',
								  duration:500,
								  center:true
								});
							}
							//刷新页面
							this.initStaffList();
						})
					}
					
				})
				
			},
			//删除此员工信息
			StaffDelete(item) {
				let data = {
					userId:item
				}
				cStaffDelete(data).then((res) => {
					if(res != -1){
						if(res.data.code == 666){
							this.$message({
							  message: "成功删除该员工信息！",
							  type:'success',
							  duration:500,
							  center:true
							});
							//重新加载页面
							this.initStaffList();
						}
						else{
							this.$message({
							  message: "删除信息失败",
							  type:'warning',
							  duration:500,
							  center:true
							});
						}
						
					}
				})
			},
		},
		mounted() {
			this.$nextTick(() => {
				//页面初始化执行
				this.initStaffList();
			});
		},
	}
</script>

<style>
</style>
