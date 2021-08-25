import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    redirect:'/home',
    component: () => import( '../views/Home.vue'),
    children:[
      {
        path: '/home',
        name: 'Home',
        meta:{
          title:"卡萨帝-国际高端家电品牌，卡萨帝人生，为爱不凡",
        },
        component: () => import( '../views/neirongluyou/shouye.vue'),
      },
      {
        path: '/liaojiepinpai',
        name: 'Ljpp',
        meta:{
          title:"了解品牌-卡萨帝官网",
        },
        component: () => import( '../views/liaojiepinpai/jieshaopinpai.vue'),
      },
      {
        path: '/shejilinian',
        name: 'Sjln',
        meta:{
          title:"设计理念-卡萨帝官网",
        },
        component: () => import( '../views/tansuokasadi/shejilinian/shejilinian.vue'),
      },
      {
        path: '/xinwenzixun',
        name: 'Xwzx',
        meta:{
          title:"新闻资讯-卡萨帝官网",
        },
        component: () => import( '../views/tansuokasadi/xinwenzixun/xinwenzixun.vue'),
      },
      {
        path: '/yonghuwenjuan',
        name: 'Yhwj',
        meta:{
          title:"卡萨帝用户反馈问卷-卡萨帝官网",
        },
        component: () => import( '../views/ybdaohangmulu/yonghuwenjuan.vue'),
      },
      {
        path: '/zhinengjiadian',
        name: 'Znjd',
        meta:{
          title:"【卡萨帝智慧家电】",
        },
        component: () => import( '../views/chanpin/zhinengjiadian.vue'),
      },
      {
        path: '/tiyandian',
        name: 'Tyd',
        meta:{
          title:"体验店-卡萨帝官网",
        },
        component: () => import( '../views/goumai/tiyandian.vue'),
      },
    ]
  },
 {
   path:'/',
   name:'',
   redirect:'/login',
   component: () => import('../views/dlzc/denglu/denglu.vue'),
   children:[
    {
      path:'/login',
      name:'denglu',
      meta:{
        title:"卡萨帝-欢迎您登录",
      },
      component: () => import('../views/dlzc/denglu/zhong.vue'),
    },
    {
      path:'/zhuce',
      name:'zhuce',
      meta:{
        title:"免费注册-卡萨帝官网",
      },
      component: () => import('../views/dlzc/zuce/zhong.vue')
    }
  ]
 },
//  {
//   path:'/',
//   name:'',
//   redirect:'/tiyan',
//   component: () => import('../views/goumai/tiyandian.vue'),
//   children:[
//    {
//      path:'/tiyan',
//      name:'tiyan',
//      meta:{
//        title:"卡萨帝-欢迎您登录",
//      },
//      component: () => import('../views/goumai/tiyandian.vue'),
//    },
//  ]
// },
 {
  path:'*',
  component:Error,
  name:'error',
  component: () => import( '../views/error.vue'),
  meta:{
    title:'页面找不到'
  }
}
]

const router = new VueRouter({
  routes
})

export default router
