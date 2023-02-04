<template>
	<div>
		<el-button type="primary" @click="addEmergency"><i class="el-icon-plus"></i>新增紧急预案
		</el-button>
		<h3 style="color: gray;text-align: center;font-size: 30px;">紧急预案库</h3>
		<el-table height="66vh" v-loading="loading" element-loading-text="拼命加载中" border
			element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
			:data="emergencyList" stripe style="width: 100%" >
			<el-table-column width="200px;" align="center" prop="emergencyTime" label="预案时间" ></el-table-column>
			<el-table-column min-width="300px;" align="center" prop="emergencyName" label="预案名称" ></el-table-column>
			<el-table-column prop='emergencyClassification' label='预案类别' width="150px" align="center" :filters="cates":filter-method="filterHandle">
				<template slot-scope="scope">
					<el-tag>{{scope.row.emergencyClassification}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="250px">
				<template slot-scope="scope">
					<el-button size="mini" type="warning" @click="showEmergeDetail(scope.row.emergencyId)">详情</el-button>
					<el-button size="mini" type="success" @click="emergeEdit(scope.row.emergencyId)">修改</el-button>
					<el-button size="mini" type="danger" @click="emergeDelete(scope.row.emergencyId)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 弹出框新增应急预案开始 -->
		<el-dialog title="新增紧急预案" :visible.sync="isShow" :center='true' width="1000px">
			<el-form :model="emergeForm">
				<el-form-item label="预案名称" label-width="150px">
					<el-input v-model="emergeForm.emergencyName" autocomplete="off" placeholder="请输入预案名称"></el-input>
				</el-form-item>
				<el-form-item label="预案分类" label-width="150px">
					<el-select v-model="emergeForm.emergencyClassification" placeholder="请选择预案类型">
						<el-option v-for="item in typeList" :key="item.value" :value="item.value">
						</el-option>
					</el-select>
					<!-- <el-input v-model="emergeForm.emergency_classification" autocomplete="off"></el-input> -->
				</el-form-item>
				<el-form-item label="预案描述" label-width="150px">
					<el-input v-model="emergeForm.emergencyDescription" autocomplete="off" type="textarea" :rows="5"
						placeholder="请输入预案描述"></el-input>
				</el-form-item>
				<el-form-item label="解决方法" label-width="150px">
					<el-input v-model="emergeForm.emergencySolution" autocomplete="off" type="textarea" :rows="5"
						placeholder="请输入解决方法"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShow = false">取 消</el-button>
				<el-button type="primary" @click="docSubmit">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 预案详情查看 -->
		<el-dialog title="预案详情" :visible.sync="isShowDetail" :center='true' width="800px">
			<div>
				<el-descriptions class="margin-top" :column="1">
					<el-descriptions-item label="预案名称">{{emergeDetail.emergencyName}}</el-descriptions-item>
					<el-descriptions-item label="预案时间">{{emergeDetail.emergencyTime}}</el-descriptions-item>
					<el-descriptions-item label="预案类别">
						<el-tag size="small">{{emergeDetail.emergencyClassification}}</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="预案描述">{{emergeDetail.emergencyDescription}}</el-descriptions-item>
					<el-descriptions-item label="解决方法">{{emergeDetail.emergencySolution}}</el-descriptions-item>
				</el-descriptions>

			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShowDetail = false">返回</el-button>
			</span>
		</el-dialog>
		
		<!-- 紧急预案修改 -->
		<el-dialog title="新增紧急预案" :visible.sync="isShowEdit" :center='true' width="1000px">
			<el-form :model="editForm">
				<el-form-item label="预案名称" label-width="150px">
					<el-input v-model="editForm.emergencyName" autocomplete="off" placeholder="请输入预案名称"></el-input>
				</el-form-item>
				<el-form-item label="预案分类" label-width="150px">
					<el-select v-model="editForm.emergencyClassification" placeholder="请选择预案类型">
						<el-option v-for="item in typeList" :key="item.value" :value="item.value">
						</el-option>
					</el-select>
					<!-- <el-input v-model="emergeForm.emergency_classification" autocomplete="off"></el-input> -->
				</el-form-item>
				<el-form-item label="预案描述" label-width="150px">
					<el-input v-model="editForm.emergencyDescription" autocomplete="off" type="textarea" :rows="5"
						placeholder="请输入预案描述"></el-input>
				</el-form-item>
				<el-form-item label="解决方法" label-width="150px">
					<el-input v-model="editForm.emergencySolution" autocomplete="off" type="textarea" :rows="5"
						placeholder="请输入解决方法"></el-input>
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
	import{showEmerges,emergeDetail,addEmerge,deleteEmerge,editEmerge} from '@/api/index.js';
	export default {
		data() {
			return {
				cates: [{
									value: "自然灾害",
									text: "自然灾害"
								}, {
									value: "事故灾难",
									text: "事故灾难"
								}, {
									value: "公共卫生事件",
									text: "公共卫生事件"
								}, {
									value: "社会安全事件",
									text: "社会安全事件"
								}, {
									value: "经营突发事件",
									text: "经营突发事件"
								}
								],
				emergencyList: [], //用于存放所有预案数据
				loading: false, //加载数据时的遮罩
				isShow: false, //显示新增预案对话框
				isShowDetail: false, //显示预案详情对话框
				typeList: [{
					value: "自然灾害",
					label: "自然灾害"
				}, {
					value: "事故灾难",
					label: "事故灾难"
				}, {
					value: "公共卫生事件",
					label: "公共卫生事件"
				}, {
					value: "社会安全事件",
					label: "社会安全事件"
				}, {
					value: "经营突发事件",
					label: "经营突发事件"
				}],
				//新增预案表单（前端传入）
				emergeForm: {
					userId:1,      //需要接收登录者的id
					emergencyName: '',
					emergencyClassification: '',
					emergencyDescription: '',
					emergencySolution: ''
				},
				//预案详情（接收后端传回的数据）
				emergeDetail: {},
				//修改预案
				editForm:{
					emergencyId:0,
					userId:2,      //需要接收登录者的id
					emergencyName: '',
					emergencyClassification: '',
					emergencyDescription: '',
					emergencySolution: ''
				},   //修改紧急预案,
				isShowEdit:false
			}
		},
		methods: {
			filterHandle(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},
			//初始化页面
			initEmergeList() {
				//加载
				this.loading = true;
				//获取所有紧急预案
				this.instance.showEmerges().then(res =>{
					this.emergencyList=res.data.datas;
					//设置遮罩时间
					setTimeout(() => {
						this.loading = false;
					}, 50)
				})

			},
			//添加应急预案
			addEmergency() {
				this.isShow = true;
			},
			//提交新添的紧急预案
			docSubmit() {
				//关闭对话框
				this.isShow = false;
				this.emergeForm.userId=window.localStorage.userId;
				//返回数据给后端
				this.instance.addEmerge(this.emergeForm).then(res=>{
					console.log(this.emergeForm.userId);
					this.$message({
					  message: "成功新增预案！",
					  type:'success',
					  duration:500,
					  center:true
					});
					//刷新页面
					this.initEmergeList();
				})
			},
			//查看单条应急预案详情
			showEmergeDetail(item) {
				this.isShowDetail = true;
				this.instance.emergeDetail({
					emergencyId:item
				}).then(res =>{
					this.emergeDetail=res.data.datas;
				})
			},
			//修改紧急预案（1）
			emergeEdit(item){
				this.isShowEdit=true;
				this.instance.emergeDetail({
					emergencyId:item
				}).then(res=>{
					this.editForm.emergencyName=res.data.datas.emergencyName;
					this.editForm.emergencyClassification=res.data.datas.emergencyClassification;
					this.editForm.emergencyDescription=res.data.datas.emergencyDescription;
					this.editForm.emergencySolution=res.data.datas.emergencySolution;
					this.editForm.emergencyId=item;//获取当前待修改紧急预案id
					this.editForm.userId=window.localStorage.userId;//获取修改者用户id
				})
			},
			//确认提交修改后的预案（2）
			ensure(){
				this.isShowEdit=false;
				console.log(this.editForm);
				this.instance.editEmerge(this.editForm).then(res=>{
					if(res==1){
						this.$message({
						  message: "成功修改预案！",
						  type:'success',
						  duration:500,
						  center:true
						});
					}
					
					//刷新页面
					this.initEmergeList();
				})
			},
			//删除此应急预案
			emergeDelete(item) {
				this.instance.deleteEmerge({
					emergencyId:item
				}).then(res =>{
					this.$message({
					  message: "成功删除预案！",
					  type:'success',
					  duration:500,
					  center:true
					});
					//重新加载页面
					this.initEmergeList();
				})
				
			},

		},
		mounted() {
			this.$nextTick(() => {
				//页面初始化执行
				this.initEmergeList();
			});
		},
	}
</script>

<style>
</style>
