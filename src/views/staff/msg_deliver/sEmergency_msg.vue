<<template>
	<div class="events">
		<h2>预警信息列表</h2>
		<div>
			<el-table border :data='warnInfoList' style='width: 100%; padding: auto;' v-loading="loading" element-loading-text="拼命加载中"
				element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
				<el-table-column prop='tripEventTime' label='事件发生时间' width="170" align="center"></el-table-column>
				<el-table-column prop='tripEventTitle' label='事件名称' min-width="220" align="center"></el-table-column>
				<el-table-column prop='staffWarningInformation' label='预警消息内容' min-width="420" align="center"></el-table-column>
			</el-table>
		</div>

	</div>
	</template>

	<script>
		import {getEmergency} from '@/api/index.js';
		export default {
			name: "cEmergency_msg",
			data() {
				return {
					warnInfoList: [],
					loading:false,   //遮罩

				}
			},
			methods: {
				//初始化预警消息列表
				initMessage(){
					this.loading=true;
					//获取所有预警信息
					this.instance.getEmergency().then(res =>{
						this.warnInfoList=res.data.datas;
						//设置遮罩时间
						setTimeout(() => {
							this.loading = false;
						}, 50)
					})
				}
				
			},
			mounted(){
				this.$nextTick(() =>{
					//页面初始化执行
					this.initMessage();
				})
			}
		}
	</script>

	<style>
		.events {
			text-align: center;
			margin: auto;
			min-width: 700px;
		}

		h2 {
			color: gray;
		}
	</style>
