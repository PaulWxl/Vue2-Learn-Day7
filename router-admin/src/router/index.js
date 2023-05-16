import Vue from "vue";
import VueRouter from "vue-router";
import MyLogin from "@/components/MyLogin.vue";
import MyHome from "@/components/MyHome.vue";
import MyUsers from "@/components/menus/MyUsers.vue";
import MyGoods from "@/components/menus/MyGoods.vue";
import MyOrders from "@/components/menus/MyOrders.vue";
import MyRights from "@/components/menus/MyRights.vue";
import MySettings from "@/components/menus/MySettings.vue";
import MyUserDetail from "@/components/user/MyUserDetail.vue";
// 导入 pathArr.js
import pathArr from "@/router/pathArr.js";
// 装插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},

    {path: '/login', component: MyLogin},
    // 注意都是 home 的子组件， 使用 children 属性 
    {path: '/home', redirect: '/home/users',component: MyHome, children: [
      // 注意，children 中的组件的 path  不要加 / 
      {path: 'users', component: MyUsers},
      {path: 'goods', component: MyGoods},
      {path: 'orders', component: MyOrders},
      {path: 'settings', component: MySettings},
      {path: 'rights', component: MyRights},
      {path: 'userdetail/:id/:name', component: MyUserDetail, props: true}
    ]}
  ]
})

// 全局前置守卫 - 有 token 才能访问登录页面
router.beforeEach((to, from, next) => {
  if (pathArr.includes(to.path) === true) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login') // 强制跳转到登录页      
    }
  } else {
    next() // 放行
  }
})

export default router