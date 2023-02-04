<template>
	<div>
		<div class="cqmap">
			  <el-image 
			    :src="cqMap"
			      ></el-image>
		</div>
		<div class="cqk" >
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover">
				<div>
					<el-descriptions :column="1" style="font-size:12px">
					  <el-descriptions-item label="名称">{{this.scenies[indexcqk].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexcqk].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexcqk].scenicCapacity - this.scenies[indexcqk].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexcqk].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
					
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexcqk].sceniccomfor" :status="this.scenies[indexcqk].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			      :src="ciqikou"
			      @click="maipiao(indexcqk)"
			      ></el-image>
			  </el-popover>
			  
			  
			
			  
		</div>
		
		
		<div class="dlt" >
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexdlt].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexdlt].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdlt].scenicCapacity - this.scenies[indexdlt].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdlt].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdlt].sceniccomfor" :status="this.scenies[indexdlt].sceniccomforstatue"></el-progress>
					</div>
				</div>
				<div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			     :src="dalitang" 
			      @click="maipiao(indexdlt)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="dzs">
			<el-popover
			    placement="right-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexdzs].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexdzs].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdzs].scenicCapacity - this.scenies[indexdzs].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdzs].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdzs].sceniccomfor" :status="this.scenies[indexdzs].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="danzishi"
			      @click="maipiao(indexdzs)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="hv">
			<el-popover
			    placement="right-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexhv].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexhv].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhv].scenicCapacity - this.scenies[indexhv].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhv].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhv].sceniccomfor" :status="this.scenies[indexhv].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="happyValley"
			      @click="maipiao(indexhv)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="hyd">
			<el-popover
			    placement="right-start"
			    title="标题"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexhyd].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexhyd].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhyd].scenicCapacity - this.scenies[indexhyd].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhyd].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhyd].sceniccomfor" :status="this.scenies[indexhyd].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="hongyadong"
			      @click="maipiao(indexhyd)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="yby">
			<el-popover
			    placement="right-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexyby].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexyby].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexyby].scenicCapacity - this.scenies[indexyby].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexyby].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexyby].sceniccomfor" :status="this.scenies[indexyby].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="yuanboyuan"
			      @click="maipiao(indexyby)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="zms">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexzms].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexzms].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexzms].scenicCapacity - this.scenies[indexzms].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexzms].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexzms].sceniccomfor" :status="this.scenies[indexzms].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="zhaomushan"
			      @click="maipiao(indexzms)"
			      ></el-image>
			  </el-popover>
		</div>
		<div class="jfb">
			<el-popover
			    placement="right-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexjfb].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexjfb].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexjfb].scenicCapacity - this.scenies[indexjfb].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexjfb].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexjfb].sceniccomfor" :status="this.scenies[indexjfb].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="jiefangbei"
			      @click="maipiao(indexjfb)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="lsm">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexlsm].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexlsm].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexlsm].scenicCapacity - this.scenies[indexlsm].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexlsm].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexlsm].sceniccomfor" :status="this.scenies[indexlsm].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="lieshimu"
			      @click="maipiao(indexlsm)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="ns">
			<el-popover
			    placement="right-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexns].scenicName}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexns].scenicLocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexns].scenicCapacity - this.scenies[indexns].scenicCurrentNumber}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexns].scenicPrice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前景区拥挤程度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexns].sceniccomfor" :status="this.scenies[indexns].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					<h4>点击景区图标购票</h4>
				</div>
			    <el-image slot="reference"
			    :src="nanshan"
			      @click="maipiao(indexns)"
			      ></el-image>
			  </el-popover>
			
		</div>
		<!--抽屉-->
		<el-drawer
		  title="购票页面"
		  :visible.sync="drawer"
		  :size="size">
		  <div v-if="isRegister" class="class4">
			  <el-alert
			      title="账号未登录"
			      type="warning"
			      description="请前往主页面登录"
			      show-icon>
			    </el-alert>
		  </div>
		  <div v-if="isBuyTicketSuccess" class="class4">
			<el-alert
				title="购票成功"
				type="success"
				description="祝您拥有愉快的一天"
				show-icon>
			</el-alert>
		  </div>
		  <div v-if="isBuyTicketFailed" class="class4">
			<el-alert
				title="购票失败,请稍后再试"
				type="error"
				show-icon>
			</el-alert>
		  </div>
		  <div>
			<el-descriptions class="class2" :column="3" border>
			    <el-descriptions-item labelStyle="width: 150px" contentStyle="width: 250px">
			      <template slot="label">
			        <i class="el-icon-location-outline"></i>
			        所选景区名称
			      </template>
			      {{draw.name}}
			    </el-descriptions-item>
			  </el-descriptions>
			  
			<!--买票时间-->
		    <div class="block">
		        <span class="demonstration">购票时间选择</span>
		        <el-date-picker style="margin-left: 5%;"
		          v-model="draw.buyDate"
		          align="right"
		          type="date"
		          placeholder="选择日期"
				  value-format="yyyy-MM-dd"
		          :picker-options="pickerOptions"
				  @change="gettime">
		        </el-date-picker>
				<!-- <el-button type="success" icon="el-icon-check" circle @click="datainfo"></el-button> -->
		    </div>
			<div v-if="ischoosetime" class="class1">
				<h1>当日景区拥挤程度</h1>
				<div class="comforstyle">
					<el-progress :text-inside="true" :stroke-width="22" :percentage="sceniccomforchooseday" :status="sceniccomforstatuechooseday"></el-progress>
				</div>
			</div>
		    <!--买票张数-->
			<div v-if="ischoosetime" style="margin-top: 28px;margin-left: 5%;">
				<span class="demonstration"  style="margin-top: 8px;margin-bottom: 18px">购票张数</span>
				<template>
					<el-input-number v-model="draw.ticketCount" size="small"  @change="handleChange" :min="1" :max="10" label="描述文字" style="margin-left: 5%;"></el-input-number>
				</template>
			</div>
			<!--总价-->
			<div v-if="ischoosetime" style="margin-top: 28px;margin-bottom: 18px;margin-left: 5%;">
				总价
				<span style="margin-left: 80px;">{{draw.ticketCount*draw.ticketPrice}}   元</span>
			</div>
			<!--确认购买-->
			<el-button v-if="ischoosetime" type="danger" style="margin-top: 18px;margin-bottom: 18px;margin-left: 20px;" @click="buyTicket">确认购买</el-button>
		  </div>
		</el-drawer>
	</div>
</template>



<script>
	import { tGetScenicInfo } from '@/api/index.js';
	import { sGetScenicInfo } from '@/api/index.js';
	import { countTicketNum } from '@/api/index.js';
	import { visiterBuyTicket } from '@/api/index.js';
	export default {
		name: 'scenic_area',
		data(){
			return{
				//抽屉所需参数
				draw:{
					name:'',
					ticketCount:1,
					buyDate:'',
					ticketPrice:0,
				},
				//买票信息
				buyTicketInfo: [],
				//-----------------------选择日期返回后端获取当日景区舒适度---------------------------------
				chooosedatetemp:[],
				chooseday:0,
				choosemonth:0,
				chooseyear:0,
				
				ischoosetime:false,
				soldout:0,//已经卖出去的票数
				sceniccomforchooseday:0,//景区舒适度
				sceniccomforstatuechooseday:'',//景区舒适度状态
				scenicCapacitytemp:0,//选择景区的最大容量
				//-----------------------选择日期返回后端获取当日景区舒适度---------------------------------
				//图片地址
				cqMap:require("../../../assets/img/withblackbackground.png"),
				ciqikou: require("../../../assets/img/ciqikou.png"),
				dalitang:require("../../../assets/img/dalitang.png"),
				danzishi:require("../../../assets/img/danzishi.png"),
				happyValley:require("../../../assets/img/happyValley.png"),
				hongyadong:require("../../../assets/img/hongyadong.png"),
				yuanboyuan:require("../../../assets/img/yuanboyuan.png"),
				zhaomushan:require("../../../assets/img/zhaomushan.png"),
				jiefangbei:require("../../../assets/img/jiefangbei.png"),
				lieshimu:require("../../../assets/img/lieshimu.png"),
				nanshan:require("../../../assets/img/nanshan.png"),
				//---------------------------------买票-------------------------------------------
				//---------------------------------提示-------------------------------------------
				isRegister:false,
				isBuyTicketSuccess:false,
				isBuyTicketFailed:false,
				//---------------------------------提示-------------------------------------------
				//买票是否成功
				buybackcode:0,
				//保存选中的景区名称
				select_id:0,
				//暂存买票信息
				tempdata: {
					user_id:0,
					scenic_id: 0,
					ticket_buy_time: "",
					ticket_usetime_year:0,		
					ticket_usetime_month:0,	
					ticket_usetime_day:0,	
					ticketPrice:0
				},
				//抽屉宽度
				size:'600px',
				//购票日期只能选5天
				pickerOptions: {
					disabledDate(time) {
						const times = new Date(new Date().toLocaleDateString()).getTime() + 5 * 8.64e7 - 1
						return time.getTime() < Date.now() - 8.64e7 || time.getTime() > times// 如果没有后面的-8.64e7就是不可以选择今天的
					}
				},	
				//存放各个景区的下标
				indexcqk:'',
				indexdlt:'',
				indexdzs:'',
				indexhv:'',
				indexhyd:'',
				indexyby:'',
				indexzms:'',
				indexjfb:'',
				indexlsm:'',
				indexns:'',
				//快捷选项
				drawer: false,
				scenies: []
			}
		},
		methods:{
			handleChange(){
				//console.log(this.draw.ticketCount);
			},
			//减少票数
			declineCount(){
				if(this.draw.ticketCount>0)
				{
					this.draw.ticketCount-=1;
				}
			},
			//增加票数
			addCount(){ 
				this.draw.ticketCount+=1;
			},
			//----------------------------------选择日期获取当日舒适度--------------------------------
			//返回景区名称获取景区id
			GetNameById(){
				let data = {
					scenicName: this.select_name
				};
				sGetScenicInfo(data).then(res => {
					if(res != -1){
						this.select_id = res.data.datas.scenicId;
						this.scenicCapacitytemp = res.data.datas.scenicCapacity;
						this.GetTicketNumByDay();
					}
				})
			},
			//返回景区对应日期已出售票数
			GetTicketNumByDay(){
				let data = {
					scenicId:this.select_id,
					ticketUsetimeYear:this.chooseyear,
					ticketUsetimeMonth:this.choosemonth,
					ticketUsetimeDay:this.chooseday
				}
				countTicketNum(data).then(res=>{
					if(res != -1){
						this.soldout = res.data.datas.countTicket;
						this.sceniccomforchooseday = parseInt(this.soldout) / parseInt(this.scenicCapacitytemp) * 100;
						this.sceniccomforchooseday = parseFloat(this.numFilter(this.sceniccomforchooseday));
						if(this.sceniccomforchooseday < 30){
							this.sceniccomforstatuechooseday = 'success';
						}else{
							if(this.sceniccomforchooseday < 65){
								this.sceniccomforstatuechooseday = 'warning';
							}else{
								this.sceniccomforstatuechooseday = 'exception';
							}
						}
						this.ischoosetime = true;
					}
				})
			},
			//查看当天票数
			GetTicketNum(value){
				
				let data = {
					scenicId:this.scenies[value].scenicId,
					ticketUsetimeYear:new Date().getFullYear(),
					ticketUsetimeMonth:new Date().getMonth() + 1,
					ticketUsetimeDay:new Date().getDate()
				}
				countTicketNum(data).then(res=>{
					if(res != -1){
						console.log(res.data.datas.countTicket);
						this.scenies[value].scenicCurrentNumber = this.scenies[value].scenicCurrentNumber + res.data.datas.countTicket;
					}
				})
			},
			gettime(value){
				this.chooosedatetemp = value.toString().split('-');
				this.chooseyear = this.chooosedatetemp[0];
				this.choosemonth = this.chooosedatetemp[1];
				this.chooseday = this.chooosedatetemp[2];
				this.select_name = this.draw.name;
				this.GetNameById();
			},
			//----------------------------------选择日期获取当日舒适度--------------------------------
			//买票
			buyTicket(){
				var user_id=window.localStorage.userId;
				this.tempdata = {
					user_id:user_id
				}
				if(!this.tempdata.user_id){
					console.log("未登录");
					this.isRegister = true;
				}
				else{
					this.isRegister = false;
					//当前时间格式化
					var date = new Date();
					var seperator1 = "-";
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var strDate = date.getDate();
					if (month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if (strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					for (let i = 0; i < this.draw.ticketCount; i++) {
						this.tempdata= {
							user_id: user_id,
							scenic_id:this.select_id,
							ticket_buy_time: year +
											"-" + 
											month +
											"-" +
											strDate,
							ticket_usetime_year: this.chooseyear,
							ticket_usetime_month: this.choosemonth,
							ticket_usetime_day: this.chooseday,
							ticketPrice: this.draw.ticketPrice
						};
						console.log("买买买票");
						console.log(this.tempdata);
						this.visitertrybuyTicket();
					}
					this.tempdata = "";
				}
				
			},
			//买买买票
			visitertrybuyTicket(){
				let data = {
					userId:this.tempdata.user_id,
					scenicId:this.tempdata.scenic_id,
					ticketBuyTime:this.tempdata.ticket_buy_time,
					ticketUsetimeYear:this.tempdata.ticket_usetime_year,
					ticketUsetimeMonth:this.tempdata.ticket_usetime_month,
					ticketUsetimeDay:this.tempdata.ticket_usetime_day,
					ticketPrice:this.tempdata.ticketPrice,
					ticketStatus:0
				}
				visiterBuyTicket(data).then(res => {
					if(res != -1){
						console.log("买票返回信息");
						console.log(res);
						if(res.data.code == 666){
							this.buybackcode = res.data.code;
						}
						else{
							this.buybackcode = 702;
						}
					}
					if(this.buybackcode == 666){
						this.isBuyTicketSuccess=true;
						console.log("买票成功");
					}
					else{
						
						this.isBuyTicketFailed = true;
						console.log("买票失败");
					}
				})
				
				
			},
			//获取景区基本信息
			tScenicInfo(){
				tGetScenicInfo().then(res => {
					if(res != -1){
						this.scenies = res.data.datas;	 
						// //找下标
						this.indexcqk = this.scenies.findIndex(item => item.scenicName=='磁器口');
						this.indexdlt = this.scenies.findIndex(item => item.scenicName=='人民大礼堂');
						this.indexdzs = this.scenies.findIndex(item => item.scenicName=='弹子石老街');
						this.indexhv = this.scenies.findIndex(item => item.scenicName=='欢乐谷');
						this.indexhyd = this.scenies.findIndex(item => item.scenicName=='洪崖洞');
						this.indexyby = this.scenies.findIndex(item => item.scenicName=='园博园');
						this.indexzms = this.scenies.findIndex(item => item.scenicName=='照母山森林公园');
						this.indexjfb = this.scenies.findIndex(item => item.scenicName=='人民解放碑');
						this.indexlsm = this.scenies.findIndex(item => item.scenicName=='歌乐山');
						this.indexns = this.scenies.findIndex(item => item.scenicName=='南山');
						
						this.scenies.push({ sceniccomforstatue: "" });

						for (let i = 0; i < this.scenies.length; i++) {
							this.scenies[i].sceniccomfor = parseInt(this.scenies[i].scenicCurrentNumber) / parseInt(this.scenies[i].scenicCapacity) * 100;
							this.scenies[i].sceniccomfor = parseFloat(this.numFilter(this.scenies[i].sceniccomfor));
							if(this.scenies[i].sceniccomfor < 30){
								this.scenies[i].sceniccomforstatue = 'success';
							}else{
								if(this.scenies[i].sceniccomfor < 65){
									this.scenies[i].sceniccomforstatue = 'warning';
								}else{
									this.scenies[i].sceniccomforstatue = 'exception';
								}
							}
						}
					}
				})
			},
			numFilter (value) {
				// 截取当前数据到小数点后两位
				let realVal = parseFloat(value).toFixed(2)
				return realVal
			},
			maipiao(index){
				this.isBuyTicketSuccess=false;
				this.isBuyTicketFailed = false;
				//console.log(index);
				//console.log(this.scenies[index].scenicName);
				this.draw.name=this.scenies[index].scenicName;
				this.draw.ticketPrice = this.scenies[index].scenicPrice;
				this.draw.ticketCount = 1;
				this.soldout = 0;
				this.sceniccomforchooseday = 0;
				this.sceniccomforstatuechooseday = '';
				this.scenicCapacitytemp = 0;
				this.draw.buyDate = '';
				this.ischoosetime = false;
				this.drawer = true;
			  
			}
		},
		mounted() {
			this.tScenicInfo();
			// this.initSceni();
		},
	  
		
	}
</script>

<style>
	.class2{
		width: 90%;
		margin-left: 5%;
	}
	.block{
		width: 90%;
		margin-left: 5%;
		margin-top: 23px;
		margin-bottom: 20px;
	}
	.class1{
		width: 90%;
		margin-left: 5%;
	}
	.cqmap{
			z-index: 1;
			position: absolute;
			margin-top: -2.9%;
			margin-left: 6.5%;
			width: 72.5%;
			height: fit-content;
	}
	.cqk{
		z-index: 2;
		position: absolute;
		margin-top: 23%;
		margin-left: 18.3%;
		width: 11%;
		height: fit-content;
	}
	.cqk:hover{
		transform: scale(1.5);
/* 		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 9%;
		width: 20%;
		height: fit-content; */
	}
	.chose_cqk{
		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 9%;
		width: 20%;
		height: fit-content;
	}
	
	.dlt{
		z-index: 2;
		position: absolute;
		margin-top: 15.3%;
		margin-left: 22.5%;
		width: 11%;
		height: fit-content;
	}
	.dlt:hover{
			transform: scale(1.5);
		}
	.chose_dlt{
		z-index: 3;
		position: absolute;
		margin-top: 9%;
		margin-left: 14%;
		width: 18%;
		height: fit-content;
	}
	
	.dzs{
		z-index: 2;
		position: absolute;
		margin-top: 20.3%;
		margin-left: 44.4%;
		width: 11%;
		height: fit-content;
	}
	.dzs:hover{
		transform: scale(1.5);
		}
	.chose_dzs{
		z-index: 3;
		position: absolute;
		margin-top: 14%;
		margin-left: 33%;
		width: 18%;
		height: fit-content;
	}
	.hv{
		z-index: 2;
		position: absolute;
		margin-top: 5.3%;
		margin-left: 43%;
		width: 12%;
		height: fit-content;
	}
	.hv:hover{
			transform: scale(1.5);
		}
	.chose_hv{
		z-index: 3;
		position: absolute;
		margin-top: 2%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	.hyd{
		z-index: 2;
		position: absolute;
		margin-top: 28.3%;
		margin-left: 40%;
		width: 12%;
		height: fit-content;
	}
	.hyd:hover{
		z-index: 3;
			transform: scale(1.5);
		}
	.chose_hyd{
		z-index: 3;
		position: absolute;
		margin-top: 21%;
		margin-left: 30%;
		width: 18%;
		height: fit-content;
	}
	.yby{
		z-index: 2;
		position: absolute;
		margin-top: 11.3%;
		margin-left: 49.9%;
		width: 9%;
		height: fit-content;
	}
	.yby:hover{
			transform: scale(1.5);
		}
	.chose_yby{
		z-index: 3;
		position: absolute;
		margin-top: 3%;
		margin-left: 38%;
		width: 18%;
		height: fit-content;
	}
	.zms{
		z-index: 2;
		position: absolute;
		margin-top: 10.7%;
		margin-left: 34%;
		width: 11%;
		height: fit-content;
	}
	.zms:hover{
			transform: scale(1.5);
		}
	.chose_zms{
		z-index: 3;
		position: absolute;
		margin-top: 9%;
		margin-left: 25%;
		width: 18%;
		height: fit-content;
	}
	.jfb{
		z-index: 2;
		position: absolute;
		margin-top: 18.5%;
		margin-left: 35.5%;
		width: 5.2%;
		height: fit-content;
	}
	.jfb:hover{
			transform: scale(1.5);
		}
	.chose_jfb{
		z-index: 3;
		position: absolute;
		margin-top: 8%;
		margin-left: 27.5%;
		width: 10%;
		height: fit-content;
	}
	.lsm{
		z-index: 2;
		position: absolute;
		margin-top: 27.6%;
		margin-left: 26.5%;
		width: 9.5%;
		height: fit-content;
	}
	.lsm:hover{
			transform: scale(1.5);
		}
	.chose_lsm{
		z-index: 3;
		position: absolute;
		margin-top: 22%;
		margin-left: 17%;
		width: 18%;
		height: fit-content;
	}
	.ns{
		z-index: 2;
		position: absolute;
		margin-top: 35%;
		margin-left: 44.5%;
		width: 11%;
		height: fit-content;
	}
	.ns:hover{
		z-index: 3;
		transform: scale(1.5);
	}
	.chose_ns{
		z-index: 2;
		position: absolute;
		margin-top: 26.5%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	.class4{
		margin-bottom: 2%;
	}
</style>