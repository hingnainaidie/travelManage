<template>
	<div>
		<el-popover
		    placement="left-start"
		    title="景区信息"
		    width="300"
		    trigger="hover">
			<div>
				<el-descriptions direction="vertical" :column="6" border>
				  <el-descriptions-item label="名称">{{scenicname}}</el-descriptions-item>
				  <el-descriptions-item label="位置">{{sceniclocation}}</el-descriptions-item>
				  <el-descriptions-item label="剩余票数/张" :span="1.5">{{sceniccapacity}}</el-descriptions-item>
				  <el-descriptions-item label="票价/元每人" :span="1.5">{{scenicprice}}</el-descriptions-item>
				  </el-descriptions-item>
				  <el-descriptions-item label="简介">{{scenicprofile}}</el-descriptions-item>
				</el-descriptions>
			</div>
			<div class="class1">
				<h1>当前舒适度</h1>
				<div class="comforstyle">
					<el-progress :text-inside="true" :stroke-width="22" :percentage="sceniccomfor" :status="sceniccomforstatue"></el-progress>
				</div>
			</div>
			<el-button>点击购票</el-button>
			
			
		    <el-image slot="reference"
		      :src="ciqikou"
		      ></el-image>
		  </el-popover>
	</div>

</template>

<script>
	import { } from '../utils/request.js';
	import { setStorage, getStorage} from "../utils/localStorage.js";
	export default {
		data() {
			return {
				scenicname:'磁器口',
				sceniclocation: '重庆市沙坪坝区磁南街1号',
				sceniccapacity:20,
				sceniccurrnum:10,
				scenicprice:10,
				scenicprofile:'磁器口古镇，原名龙隐镇，国家AAAA级景区，中国历史文化名街，重庆市重点保护传统街，重庆‘新巴渝十二景’，巴渝民俗文化旅游圈。磁器口古镇位于重庆市沙坪坝区嘉陵江畔，始建于宋代，拥有‘一江两溪三山四街’的独特地貌，形成天然良港，是嘉陵江边重要的水陆码头。磁器口古镇，曾经“白日里千人拱手，入夜后万盏明灯”繁盛一时。巴渝文化、宗教文化、沙磁文化、红岩文化和民间文化，各具特色。一条石板路，千年磁器口，是重庆古城的缩影和象征，被赞誉为“小重庆”，磁器口古镇开发有榨油、抽丝、制糖、捏面人、川戏等传统表演项目和各种传统小吃、茶馆等，每年春节举办的磁器口庙会是最具特色的传统活动，吸引数万市民前往参与',
				sceniccomforstatue:'',//景区statue
				sceniccomfor:0,
			}
		},
		methods: {
		
		},
		mounted() {
			
		}
	}
</script>

<style>

</style>