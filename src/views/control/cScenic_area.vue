<template>
	<div>
		
		<div class="cqmap">
			  <el-image 
			    :src="cqMap"@click="jumpAdd(indexcqk)"
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
					  <el-descriptions-item label="名称">{{this.scenies[indexcqk].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexcqk].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexcqk].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexcqk].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
					
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexcqk].sceniccomfor" :status="this.scenies[indexcqk].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			      :src="ciqikou"
			      @click="jumpAdd(indexcqk)"
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
					  <el-descriptions-item label="名称">{{this.scenies[indexdlt].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexdlt].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdlt].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdlt].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdlt].sceniccomfor" :status="this.scenies[indexdlt].sceniccomforstatue"></el-progress>
					</div>
				</div>
				
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			     :src="dalitang" 
			      @click="jumpAdd(indexdlt)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="dzs">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexdzs].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexdzs].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexdzs].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexdzs].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexdzs].sceniccomfor" :status="this.scenies[indexdzs].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="danzishi"
			      @click="jumpAdd(indexdzs)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="hv">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexhv].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexhv].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhv].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhv].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhv].sceniccomfor" :status="this.scenies[indexhv].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="happyValley"
			      @click="jumpAdd(indexhv)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="hyd">
			<el-popover
			    placement="left-start"
			    title="标题"
			    width="500"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexhyd].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexhyd].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexhyd].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexhyd].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexhyd].sceniccomfor" :status="this.scenies[indexhyd].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="hongyadong"
			      @click="jumpAdd(indexhyd)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="yby">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexyby].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexyby].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexyby].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexyby].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexyby].sceniccomfor" :status="this.scenies[indexyby].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="yuanboyuan"
			      @click="jumpAdd(indexyby)"
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
					  <el-descriptions-item label="名称">{{this.scenies[indexzms].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexzms].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexzms].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexzms].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexzms].sceniccomfor" :status="this.scenies[indexzms].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="zhaomushan"
			      @click="jumpAdd(indexzms)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="jfb">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexjfb].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexjfb].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexjfb].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexjfb].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexjfb].sceniccomfor" :status="this.scenies[indexjfb].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="jiefangbei"
			      @click="jumpAdd(indexjfb)"
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
					  <el-descriptions-item label="名称">{{this.scenies[indexlsm].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexlsm].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexlsm].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexlsm].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexlsm].sceniccomfor" :status="this.scenies[indexlsm].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="lieshimu"
			      @click="jumpAdd(indexlsm)"
			      ></el-image>
			  </el-popover>
			
		</div>
		
		<div class="ns">
			<el-popover
			    placement="left-start"
			    title="景区信息"
			    width="200"
			    trigger="hover"
			    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				<div>
					<el-descriptions :column="1">
					  <el-descriptions-item label="名称">{{this.scenies[indexns].scenicname}}</el-descriptions-item>
					  <el-descriptions-item label="位置">{{this.scenies[indexns].sceniclocation}}</el-descriptions-item>
					  <el-descriptions-item label="剩余票数/张" :span="1.5">{{this.scenies[indexns].sceniccapacity}}</el-descriptions-item>
					  <el-descriptions-item label="票价/元每人" :span="1.5">{{this.scenies[indexns].scenicprice}}</el-descriptions-item>
					  </el-descriptions-item>
					</el-descriptions>
				</div>
				<div class="class1">
					<h3>当前舒适度</h3>
					<div class="comforstyle">
						<el-progress :text-inside="true" :stroke-width="22" :percentage="this.scenies[indexns].sceniccomfor" :status="this.scenies[indexns].sceniccomforstatue"></el-progress>
					</div>
				</div>
			    <div>
					
				</div>
			    <div>
					<h3>点击跳转</h3>
				</div>
			    <el-image slot="reference"
			    :src="nanshan"
			      @click="jumpAdd(indexns)"
			      ></el-image>
			  </el-popover>
			
		</div>
		<!--抽屉-->
		
	</div>
</template>



<script>
	
	export default {
	  name: 'scenic_area',
	  data(){
	    return{
			
			
			
			//图片地址
			cqMap:require("../../assets/img/CQMap2.png"),
			ciqikou: require("../../assets/img/ciqikou.png"),
			dalitang:require("../../assets/img/dalitang.png"),
			danzishi:require("../../assets/img/danzishi.png"),
			happyValley:require("../../assets/img/happyValley.png"),
			hongyadong:require("../../assets/img/hongyadong.png"),
			yuanboyuan:require("../../assets/img/yuanboyuan.png"),
			zhaomushan:require("../../assets/img/zhaomushan.png"),
			jiefangbei:require("../../assets/img/jiefangbei.png"),
			lieshimu:require("../../assets/img/lieshimu.png"),
			nanshan:require("../../assets/img/nanshan.png"),
			//保存选中的景区名称
			select_name:'',
			//暂存买票信息
			tempdata: {
				user_id: "",
				scenic_name: "",
				ticket_buy_time: "",
				ticket_use_time: "",							
				ticketPrice: ""
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
			

			//所有景区信息
			scenies: [{
				scenicname:'磁器口',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'大礼堂',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'弹子石',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'欢乐谷',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'洪崖洞',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'园博园',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'照母山',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'解放碑',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'烈士墓',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			},
			{
				scenicname:'南山',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			}
			]
	    }
	  },
	  methods:{
		  
		  initSceni(){
			  console.log("asasas");
			  console.log(this.scenies);
			  console.log("asasas");
			  //找下标
			  this.indexcqk = this.scenies.findIndex(item => item.scenicname=='磁器口');
			  this.indexdlt = this.scenies.findIndex(item => item.scenicname=='大礼堂');
			  this.indexdzs = this.scenies.findIndex(item => item.scenicname=='弹子石');
			  this.indexhv = this.scenies.findIndex(item => item.scenicname=='欢乐谷');
			  this.indexhyd = this.scenies.findIndex(item => item.scenicname=='洪崖洞');
			  this.indexyby = this.scenies.findIndex(item => item.scenicname=='园博园');
			  this.indexzms = this.scenies.findIndex(item => item.scenicname=='照母山');
			  this.indexjfb = this.scenies.findIndex(item => item.scenicname=='解放碑');
			  this.indexlsm = this.scenies.findIndex(item => item.scenicname=='烈士墓');
			  this.indexns = this.scenies.findIndex(item => item.scenicname=='南山');
		  },
		  jumpAdd(index){
			  console.log(index);
			  console.log(this.scenies[index].scenicname);
			  
			  this.$router.push({name:'cScenic_area2',params: {name:this.scenies[index].scenicname}}) 
			  
		  }
	  },
	  mounted() {
	  	this.initSceni();
	  },
		
	}
</script>

<style>
	.cqmap{
		z-index: 1;
		position: absolute;
		margin-top: -1%;
		margin-left: 10%;
		width: 58%;
		height: fit-content;
	}
	.cqk{
		z-index: 2;
		position: absolute;
		margin-top: 19%;
		margin-left: 14%;
		width: 10%;
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
		margin-top: 12%;
		margin-left: 18%;
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
		margin-top: 17.4%;
		margin-left: 37.6%;
		width: 10%;
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
		margin-top: 4%;
		margin-left: 37%;
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
		margin-top: 23.5%;
		margin-left: 32.5%;
		width: 12%;
		height: fit-content;
	}
	.hyd:hover{
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
		margin-top: 8.5%;
		margin-left: 41.8%;
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
		margin-top: 8.7%;
		margin-left: 28.3%;
		width: 10%;
		height: fit-content;
	}
	.zms:hover{
			transform: scale(1.5);
		}
	.chose_zms{
		z-index: 3;
		position: absolute;
		margin-top: 5%;
		margin-left: 25%;
		width: 18%;
		height: fit-content;
	}
	.jfb{
		z-index: 2;
		position: absolute;
		margin-top: 14.8%;
		margin-left: 29.7%;
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
		margin-top: 23%;
		margin-left: 21.6%;
		width: 9%;
		height: fit-content;
	}
	.lsm:hover{
			transform: scale(1.5);
		}
	.chose_lsm{
		z-index: 3;
		position: absolute;
		margin-top: 16%;
		margin-left: 17%;
		width: 18%;
		height: fit-content;
	}
	.ns{
		z-index: 2;
		position: absolute;
		margin-top: 29.7%;
		margin-left: 37.5%;
		width: 11%;
		height: fit-content;
	}
	.ns:hover{
			transform: scale(1.5);
		}
	.chose_ns{
		z-index: 3;
		position: absolute;
		margin-top: 26.5%;
		margin-left: 34%;
		width: 18%;
		height: fit-content;
	}
	
</style>