//输出通用axios实例
import axios from 'axios';
const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});
//文件类型
// const instupload = axios.create({
//   timeout: 10000,
//   headers: {
//     'Content-Type': "multipart/form-data"
//   }
// });

export default {
	getDocById(data) {
		return instance.post('/api/emergency/showEmergesByType', data);
	},


	//修改个人基本信息
	editInfo(data) {
		return instance.post('/api/user/editInfo',data);
	},
	//修改密码
	editPwd(data) {
		return instance.post('/api/user/editPwd',data);
	},
	//游客查看订单
	showTickets(data) {
		return instance.post('/api/ticket/showTickets', data);
	},
	//游客点击使用票
	useTicket(data){
		return instance.post('/api/ticket/useTicket',data);
	},

	//查看未处理旅游事件列表
	getUnTEs() {
		return instance.post('/api/tripEvent/getUnTEs');
	},
	//查看历史旅游事件列表
	getChTEs(data) {
		return instance.post('/api/tripEvent/getChTEs');
	},
	//查看历史旅游事件详情
	getDetailChecked(data) {
		return instance.post('/api/tripEvent/getDetailChecked', data);
	},
	//预警消息列表
	getEmergency(data) {
		return instance.post('/api/tripEvent/getEmergency');
	},
	//自动发送预警信息并保存
	saveEmergency(data) {
		return instance.post('/api/tripEvent/saveEmergency', data);
	},
	//删除历史旅游事件
	deleteTripEvent(data) {
		return instance.post('/api/tripEvent/deleteTripEvent', data);
	},
	//显示对应预案类别的预案信息列表
	showEmergesByType(data) {
		return instance.post('/api/emergency/showEmergesByType', data);
	},
	//显示所有应急预案
	showEmerges() {
		return instance.get('/api/emergency/showEmerges');
	},
	//查看单条预案信息详情
	emergeDetail(data) {
		return instance.post('/api/emergency/emergeDetail', data);
	},
	//新增应急预案
	addEmerge(data) {
		return instance.post('/api/emergency/addEmerge', data);
	},
	//删除应急预案
	deleteEmerge(data) {
		return instance.post('/api/emergency/deleteEmerge', data);
	},
	//修改应急预案
	editEmerge(data) {
		return instance.post('/api/emergency/editEmerge', data);
	}


}


//游客查看景区基本信息
export function tGetScenicInfo(){
	return instance.get('/api/scenic/tGetScenicInfo');
	
}

//值班人员查看景区基本信息
export function sGetScenicInfo(data){
	return instance.post('/api/scenic/queryByName',data);
}

//查看停车场基本信息
export function tGetParkingInfo(){
	return instance.get('/api/parking/getParkingBasicInfo');
}

//根据地址字段查看停车场基本信息
export function sGetChoseParkingInfo(data){
	return instance.post('/api/parking/queryByLocation',data);
}

//查看酒店基本信息
export function tGetHotelInfo(){
	return instance.get('/api/hotel/getHotelBasicInfo');
}

//根据地址字段查看酒店基本信息
export function sGetChoseHotelInfo(data){
	return instance.post('/api/hotel/HqueryByLocation',data);
}

//游客购票：选定日期，返回该日期已出售票数
export function countTicketNum(data){
	return instance.post('/api/ticket/CountTicketNumByDay',data);
}

//游客购票:购票数据插入数据库
export function visiterBuyTicket(data){
	return instance.post('/api/ticket/BuyTicket',data);
}

//工作人员查看景区该月每天的票务情况
export function getAllTicketMoney(data){
	return instance.post('/api/ticket/GetAllTicketInfoByDay',data);
}

//工作人员查看景区该年每月的票务情况
export function getTicketMoneyByMonth(data){
	return instance.post('/api/ticket/GetTicketInfoByMonth',data);
}

//工作人员查看景区近五年的票务情况
export function getLatestFiveYearTicketMoney(data){
	return instance.post('/api/ticket/GetTicketInfoFiveYear',data);
}

//用户登录
export function loginSystem(data){
	return instance.post('/api/user/loginSystem',data);
	
}

//用户注册
export function registerSystem(data){
	return instance.post('/api/user/register',data);
	
}

//查看所有游客信息
export function searchForAllVisitors(data){
	return instance.get('/api/user/searchForAllVisitors',data);
	
}

//工作人员查看所有游客信息
export function staffsearchForAllVisitors(data){
	return instance.post('/api/user/staffsearchForAllVisitors',data);
	
}

//游客姓名查看买票游客
export function searchByName(data){
	return instance.post('/api/ticket/searchByName',data);
	
}

//工作人员游客姓名查看买票游客
export function staffsearchByName(data){
	return instance.post('/api/ticket/staffsearchByName',data);
	
}

//手机号码查看买票
export function searchByPhone(data){
	return instance.post('/api/user/searchByPhone',data);
	
}

//工作人员通过手机号码查看买票
export function staffsearchByPhone(data){
	return instance.post('/api/user/staffsearchByPhone',data);
	
}

//景区名称查看买票
export function searchByScenic(data){
	return instance.post('/api/user/searchByScenic',data);
	
}

//工作人员通过景区名称查看买票
export function staffsearchByScenic(data){
	return instance.post('/api/user/staffsearchByScenic',data);
	
}

//使用时间查看买票
export function searchByUseTime(data){
	return instance.post('/api/user/searchByUseTime',data);
	
}

//工作人员通过使用时间查看买票
export function staffsearchByUseTime(data){
	return instance.post('/api/user/staffsearchByUseTime',data);
	
}

//获取监控信息
export function getAllMonitor(data){
	return instance.post('/api/monitor/getAllMonitorByScenic',data);
	
}

//根据日期获取监控信息
export function getAllMontorByDate(data){
	return instance.post('/api/monitor/getMonitorByDate',data);
	
}

//控制中心获取监控信息
export function ControlgetAllMonitor(){
	return instance.get('/api/monitor/getAllMonitor');
	
}

//控制中心根据日期获取监控信息
export function ControlgetAllMontorByDate(data){
	return instance.post('/api/monitor/getAllMonitorByDate',data);
	
}

//控制中心根据景区id查询获取监控信息
export function ControlgetMonitorByName(data){
	return instance.post('/api/monitor/getMonitorByName',data);
	
}

//查询景区入区人数
export function staffCountScenicIn(data){
	return instance.post('/api/ticket/countScenicIn',data);
	
}

//查询景区离区人数
export function staffCountScenicOut(data){
	return instance.post('/api/ticket/countScenicOut',data);
}

export function getAllComEvents(){
	return instance.get('/api/complaintEvent/showAllComEvent');
}
export function getAllCaseEvents(){
	return instance.get('/api/caseEvent/showAllCaseEvent');
}
//游客新建报案
export function createCaEvent(data){
	return instance.post('/api/caseEvent/createCaEvent',data);
}
//查看案件详情
export function checkCaEvent(data){
	return instance.post('/api/caseEvent/checkCaEvent',data);
}
//提交案件处理方案，填入案件处理结果
export function solveCaEvent(data){
	return instance.post('/api/caseEvent/solveCaEvent',data);
}
//将游客报案转换为旅游事件
export function changeCaEvent(data){
	return instance.post('/api/tripEvent/changeCaEvent',data);
}
//获取游客案件列表
export function showVisCaseEvent(data){
	return instance.post('/api/caseEvent/showVisCaseEvent',data);
}
//游客新建投诉
export function createComEvent(data){
	return instance.post('/api/complaintEvent/createComEvent',data);
}
//查看投诉详情
export function checkComEvent(data){
	return instance.post('/api/complaintEvent/checkComEvent',data);
}
//提交投诉处理方案，填入投诉结果
export function solveComEvent(data){
	return instance.post('/api/complaintEvent/solveComEvent',data);
}
//获取游客投诉列表
export function showVisComEvent(data){
	return instance.post('/api/complaintEvent/showVisComEvent',data);
}

//获取工作人员的预警消息列表
export function showEmergency(data){
	return instance.post('/api/tripEvent/showEmergency',data);
}
//新建旅游信息
export function createTripInfo(data){
	return instance.post('/api/tripInfo/createTripInfo',data);	
}
//显示旅游信息列表
export function showTripInfos(){
	return instance.get('/api/tripInfo/showTripInfos');
}
//查看单个旅游信息
export function checkTripInfo(data){
	return instance.post('/api/tripInfo/checkTripInfo',data);
}
//删除旅游信息
export function deleteTripInfo(data){
	return instance.post('/api/tripInfo/deleteTripInfo',data);
}
//上传旅游事件
export function createTripEvent(data){
	return instance.post('/api/tripEvent/createTripEvent',data);
}
//显示旅游事件列表
export function showTripEvent(){
	return instance.get('/api/tripEvent/showTripEvent');
}
//查看旅游事件
export function checkTripEvent(data){
	return instance.post('/api/tripEvent/checkTripEvent',data);
}

//控制中心查看员工信息
export function getStaffList(){
	return instance.get('/api/user/getStaffList');
	
}

//删除员工信息
export function cStaffDelete(data){
	return instance.post('/api/user/deleteStaff', data);
}

//根据景区名称查找景区id
export function FindscenicIdByName(data){
	return instance.post('/api/scenic/FindscenicIdByName', data);
}

//修改员工所属景区
export function editStaffInfo(data){
	return instance.post('/api/user/editStaffInfo', data);
}