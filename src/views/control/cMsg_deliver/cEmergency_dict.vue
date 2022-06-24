<template>
	<div>
		<el-button type="primary" @click="addEmergency"><i class="el-icon-plus"></i>新增紧急预案
		</el-button>
		<h3 style="color: gray;text-align: center;font-size: 30px;">紧急预案库</h3>
		<el-table height="66vh" v-loading="loading" element-loading-text="拼命加载中" border
			element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
			:data="emergencyList" stripe style="width: 100%">
			<el-table-column width="200px;" align="center" prop="emergency_time" label="预案时间" ></el-table-column>
			<el-table-column min-width="300px;" align="center" prop="emergency_name" label="预案名称" ></el-table-column>
			<el-table-column prop='emergency_classification' label='预案类别' width="150px" align="center" 
				:filters="cates":filter-method="filterHandle">
				<template slot-scope="scope">
					<el-tag>{{scope.row.emergency_classification}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="200px">
				<template slot-scope="scope">
					<el-button size="mini" type="warning" @click="showEmergeDetail(scope.$index, scope.row)">详情
					</el-button>
					<el-button size="mini" type="danger" @click="emergeDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 弹出框新增应急预案开始 -->
		<el-dialog title="新增紧急预案" :visible.sync="isShow" :center='true' width="1000px">
			<el-form :model="emergeForm">
				<el-form-item label="预案名称" label-width="150px">
					<el-input v-model="emergeForm.emergency_name" autocomplete="off" placeholder="请输入预案名称"></el-input>
				</el-form-item>
				<el-form-item label="预案分类" label-width="150px">
					<el-select v-model="emergeForm.emergency_classification" placeholder="请选择预案类型">
						<el-option v-for="item in typeList" :key="item.value" :value="item.value">
						</el-option>
					</el-select>
					<!-- <el-input v-model="emergeForm.emergency_classification" autocomplete="off"></el-input> -->
				</el-form-item>
				<el-form-item label="预案描述" label-width="150px">
					<el-input v-model="emergeForm.emergency_description" autocomplete="off" type="textarea" :rows="5"
						placeholder="请输入预案描述"></el-input>
				</el-form-item>
				<el-form-item label="解决方法" label-width="150px">
					<el-input v-model="emergeForm.emergency_solution" autocomplete="off" type="textarea" :rows="5"
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
					<el-descriptions-item label="预案名称">{{emergeDetail.emergency_name}}</el-descriptions-item>
					<el-descriptions-item label="预案时间">{{emergeDetail.emergency_time}}</el-descriptions-item>
					<el-descriptions-item label="预案类别">
						<el-tag size="small">{{emergeDetail.emergency_classification}}1</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="预案描述">{{emergeDetail.emergency_description}}</el-descriptions-item>
					<el-descriptions-item label="解决方法">{{emergeDetail.emergency_solution}}</el-descriptions-item>
				</el-descriptions>

			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShowDetail = false">返回</el-button>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				cates: [{
					value: "自然灾害",
					text: "自然灾害"
				}, {
					value: "事故灾害",
					text: "事故灾害"
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
				emergencyList: [{
						emergency_time: '2022-08-23 14:34:12',
						emergency_name: '蛇来了',
						emergency_classification: '自然灾害'

					},
					{
						emergency_time: '2021-07-14 15:34:00',
						emergency_name: '设施损坏',
						emergency_classification: '自然灾害'

					},
					{
						emergency_time: '2022-06-29 09:44:12',
						emergency_name: '地震',
						emergency_classification: '经营突发事件'

					}
				], //用于存放所有预案数据
				loading: false, //加载数据时的遮罩
				isShow: false, //显示新增预案对话框
				isShowDetail: false, //显示预案详情对话框
				typeList: [{
					value: "自然灾害",
					label: "自然灾害"
				}, {
					value: "事故灾害",
					label: "事故灾害"
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
					emergency_name: '',
					emergency_classification: '',
					emergency_description: '',
					emergency_solution: ''
				},
				//预案详情（接收后端传回的数据）
				emergeDetail: {
					emergency_time: '1231432',
					emergency_name: 'xxxxxxx',
					emergency_classification: '类型1',
					emergency_description: '这是描述',
					emergency_solution: '这是解决方法'
				}
			}
		},
		methods: {
			//初始化页面
			initEmergeList() {
				//加载
				this.loading = false;

			},
			//添加应急预案
			addEmergency() {
				this.isShow = true;
			},
			//提交新添的紧急预案
			docSubmit() {
				//关闭对话框
				this.isShow = false;
				//返回数据给后端
			},
			//查看单条应急预案详情
			showEmergeDetail(index,item) {
				this.isShowDetail = true;
				console.log(index);
			},
			//删除此应急预案
			emergeDelete(index,item) {
				console.log(index);
				console.log(item);
			},
			filterHandle(value, row, column) {
				const property = column['property'];
				return row[property] === value;
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
