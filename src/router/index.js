import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//解决路由重复点击的错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [{
		path: '/',
		name: 'try',
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next("/login")
			} else if (token == 0) {
				next("/control_mng/control_leader")
			} else if ((token == 1)) {
				next("/staff_mng/staff_leader")
			} else if (token == 2) {
				next("/visiter_mng/visiter_leader")
			}
		},
		component: () => import('../views/try.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue'),
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next()
			} else if (token == 0) {
				next("/control_mng/control_leader")
			} else if ((token == 1)) {
				next("/staff_mng/staff_leader")
			} else if (token == 2) {
				next("/visiter_mng/visiter_leader")
			}
		},
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/register.vue'),
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next()
			} else if (token == 0) {
				next("/control_mng/control_leader")
			} else if ((token == 1)) {
				next("/staff_mng/staff_leader")
			} else if (token == 2) {
				next("/visiter_mng/visiter_leader")
			}
		},
	},
	{
		path: '/visiter_mng',
		name: 'visiter_mng',
		component: () => import('../views/visiter/visiter_mng.vue'),
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next("/login")
			} else if (token == 0) {
				next("/control_mng/control_leader")
			} else if ((token == 1)) {
				next("/staff_mng/staff_leader")
			} else if (token == 2) {
				next()
			}
		},
		children: [{
				path: 'visiter_leader',
				name: 'visiter_leader',
				component: () => import('../views/visiter/visiter_leader.vue'),
			},
			{
				path: 'travel_msg',
				name: 'travel_msg',
				component: () => import('../views/visiter/travel_msg.vue'),
				children: [{
						path: 'scenic_area',
						name: 'scenic_area',
						component: () => import('../views/visiter/travel_msg/scenic_area.vue'),
					},
					{
						path: 'hotel_msg',
						name: 'hotel_msg',
						component: () => import('../views/visiter/travel_msg/hotel_msg.vue'),
					},
					{
						path: 'car_msg',
						name: 'car_msg',
						component: () => import('../views/visiter/travel_msg/car_msg.vue'),
					}
				]
			},
			{
				path: 'msg_receive',
				name: 'msg_receive',
				component: () => import('../views/visiter/msg_receive.vue'),
				children: [{
						path: 'pre_emergency',
						name: 'pre_emergency',
						component: () => import('../views/visiter/msg_receive/pre_emergency.vue'),
					},
					{
						path: 'tourism_push',
						name: 'tourism_push',
						component: () => import('../views/visiter/msg_receive/tourism_push.vue'),
					}
				]
			},
			{
				path: 'my_msg',
				name: 'my_msg',
				component: () => import('../views/visiter/my_msg.vue'),
				children: [{
						path: 'basemsg',
						name: 'basemsg',
						component: () => import('../views/visiter/my_msg/basemsg.vue'),
					},
					{
						path: 'my_orders',
						name: 'my_orders',
						component: () => import('../views/visiter/my_msg/my_orders.vue'),
					},
					{
						path: 'my_complain',
						name: 'my_complain',
						component: () => import('../views/visiter/my_msg/my_complain.vue'),
					},
					{
						path: 'my_case',
						name: 'my_case',
						component: () => import('../views/visiter/my_msg/my_case.vue'),
					},
					{
						path: 'new_complain',
						name: 'new_complain',
						component: () => import('../views/visiter/my_msg/new_complain.vue'),
					},
					{
						path: 'new_case',
						name: 'new_case',
						component: () => import('../views/visiter/my_msg/new_case.vue'),
					},
					{
						path: 'check_complain',
						name: 'check_complain',
						component: () => import('../views/visiter/my_msg/check_complain.vue'),
					},
					{
						path: 'check_case',
						name: 'check_case',
						component: () => import('../views/visiter/my_msg/check_case.vue'),
					}
				]
			}
		]
	},
	{
		path: '/staff_mng',
		name: 'staff_mng',
		component: () => import('../views/staff/staff_mng.vue'),
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next("/login")
			} else if (token == 0) {
				next("/control_mng/control_leader")
			} else if ((token == 1)) {
				next()
			} else if (token == 2) {
				next("/visiter_mng/visiter_leader")
			}
		},
		children: [{
				path: 'staff_leader',
				name: 'staff_leader',
				component: () => import('../views/staff/staff_leader.vue'),
			},
			{
				path: 'sTravel_msg',
				name: 'sTravel_msg',
				component: () => import('../views/staff/sTravel_msg.vue'),
				children: [{
						path: 'sScenic_area',
						name: 'sScenic_area',
						component: () => import('../views/staff/sTravel_msg/sScenic_area.vue'),
					},
					{
						path: 'shotel_msg',
						name: 'shotel_msg',
						component: () => import('../views/staff/sTravel_msg/sHotel_msg.vue'),
					},
					{
						path: 'scar_msg',
						name: 'scar_msg',
						component: () => import('../views/staff/sTravel_msg/sCar_msg.vue'),
					},
					{
						path: 'sVisiters',
						name: 'sVisiters',
						component: () => import('../views/staff/sTravel_msg/sVisiters.vue'),
					}
				]
			},
			{
				path: 'sMy_msg',
				name: 'sMy_msg',
				component: () => import('../views/staff/sMy_msg.vue'),
				children: [{
					path: 'sBasemsg',
					name: 'sBasemsg',
					component: () => import('../views/staff/sMy_msg/sBasemsg.vue'),
				}]
			},
			{
				path: 'events_solve',
				name: 'events_solve',
				component: () => import('../views/staff/events_solve.vue'),
				children: [{
						path: 'complain_solve',
						name: 'complain_solve',
						component: () => import('../views/staff/events_solve/complain_solve.vue'),
					},
					{
						path: 'case_solve',
						name: 'case_solve',
						component: () => import('../views/staff/events_solve/case_solve.vue'),
					},
					{
						path: 'check_complain',
						name: 'check_complain',
						component: () => import('../views/staff/events_solve/check_complain.vue'),
					},
					{
						path: 'check_case',
						name: 'check_case',
						component: () => import('../views/staff/events_solve/check_case.vue'),
					},
					{
						path: 'submit_case_method',
						name: 'submit_case_method',
						component: () => import('../views/staff/events_solve/submit_case_method.vue'),
					},
					{
						path: 'submit_complain_method',
						name: 'submit_complain_method',
						component: () => import('../views/staff/events_solve/submit_complain_method.vue'),
					}
				]
			},
			{
				path: 'info_manage',
				name: 'info_manage',
				component: () => import('../views/staff/info_manage.vue'),
				children: [{
						path: 'scenic_info',
						name: 'scenic_info',
						component: () => import('../views/staff/info_manage/scenic_info.vue'),
					},
					{
						path: 'police_info',
						name: 'police_info',
						component: () => import('../views/staff/info_manage/police_info.vue'),
					}
				]
			},
			{
				path: 'msg_deliver',
				name: 'msg_deliver',
				component: () => import('../views/staff/msg_deliver.vue'),
				children: [{
						path: 'sCase_manage',
						name: 'sCase_manage',
						component: () => import('../views/staff/msg_deliver/sCase_manage.vue'),
					},
					{
						path: 'sEmergency_msg',
						name: 'sEmergency_msg',
						component: () => import('../views/staff/msg_deliver/sEmergency_msg.vue'),
					},
					{
						path: 'sTourism_push',
						name: 'sTourism_push',
						component: () => import('../views/staff/msg_deliver/sTourism_push.vue'),
					},
					{
						path: 'newsCase',
						name: 'newsCase',
						component: () => import('../views/staff/msg_deliver/newsCase.vue'),
					}, {
						path: 'checksCase',
						name: 'checksCase',
						component: () => import('../views/staff/msg_deliver/checksCase.vue'),
					},
					{
						path: 'newsTourism',
						name: 'newsTourism',
						component: () => import('../views/staff/msg_deliver/newsTourism.vue'),
					},
					{
						path: 'chsTourism',
						name: 'chsTourism',
						component: () => import('../views/staff/msg_deliver/chsTourism.vue'),
					}
				]
			}
		]
	},
	{
		path: '/control_mng',
		name: 'control_mng',
		component: () => import('../views/control/control_mng.vue'),
		beforeEnter: (to, from, next) => {
			var token = window.localStorage.getItem('userLevel')
			if (!token) {
				next("/login")
			} else if (token == 0) {
				next()
			} else if ((token == 1)) {
				next("/staff_mng/staff_leader")
			} else if (token == 2) {
				next("/visiter_mng/visiter_leader")
			}
		},
		children: [{
				path: 'control_leader',
				name: 'control_leader',
				component: () => import('../views/staff/staff_leader.vue'),
			},
			{
					path: 'staff_manage',
					name: 'staff_manage',
					component: () => import('../views/control/cStaffInfoMan.vue'),
					
			
			},
			{
				path: 'staff_manage1',
				name: 'staff_manage1',
				component: () => import('../views/control/staff_manage.vue'),
			},
			{
				path: 'cTravel_msg',
				name: 'cTravel_msg',
				component: () => import('../views/control/cTravel_msg.vue'),
				children: [{
						path: 'cScenic_area',
						name: 'cScenic_area',
						component: () => import('../views/control/cScenic_area.vue'),
					},
					{

						path: 'cScenic_area2',
						name: 'cScenic_area2',
						component: () => import('../views/control/cScenic_area2.vue'),
					},
					{
						path: 'chotel_msg',
						name: 'chotel_msg',
						component: () => import('../views/control/cHotel_msg.vue'),
					},
					{
						path: 'ccar_msg',
						name: 'ccar_msg',
						component: () => import('../views/control/cCar_msg.vue'),
					},
					{
						path: 'cVisiters',
						name: 'cVisiters',
						component: () => import('../views/control/cVisiters.vue'),
					}
				]
			},
			{
				path: 'cMy_msg',
				name: 'cMy_msg',
				component: () => import('../views/control/cMy_msg.vue'),
				children: [{
					path: 'cBasemsg',
					name: 'cBasemsg',
					component: () => import('../views/staff/sMy_msg/sBasemsg.vue'),
				}]
			},
			
			{
				path: 'staffRegister',
				name: 'staffRegister',
				component: () => import('../views/staffRegister.vue'),

			},
			{
				path: 'cInfo_manage',
				name: 'cInfo_manage',
				component: () => import('../views/control/cInfo_manage.vue'),
				children: [{
						path: 'cScenic_info',
						name: 'cScenic_info',
						component: () => import('../views/control/Cscenic_info.vue'),
					},
					{
						path: 'cPolice_info',
						name: 'cPolice_info',
						component: () => import('../views/staff/info_manage/police_info.vue'),
					}
				]
			},
			{
				path: 'cMsg_deliver',
				name: 'cMsg_deliver',
				component: () => import('../views/control/cMsg_deliver.vue'),
				children: [{
						path: 'cInstruct',
						name: 'cInstruct',
						component: () => import('../views/control/cMsg_deliver/cInstruct.vue'),
					},
					{
						path: 'cInstructOld',
						name: 'cInstructOld',
						component: () => import('../views/control/cMsg_deliver/cInstructOld.vue'),
					},
					{
						path: 'dealEvent',
						name: 'dealEvent',
						component: () => import('../views/control/cMsg_deliver/dealEvent.vue'),
					},
					{
						path: 'cEmergency_dict',
						name: 'cEmergency_dict',
						component: () => import('../views/control/cMsg_deliver/cEmergency_dict.vue'),
					},
					{
						path: 'cEmergency_msg',
						name: 'cEmergency_msg',
						component: () => import('../views/control/cMsg_deliver/cEmergency_msg.vue'),
					}
				]
			}
		]
	},
]

//设置路由模式为history
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
