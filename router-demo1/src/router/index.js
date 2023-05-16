// src/router/index.js 就是当前项目的路由模块
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Myinfo from '@/components/Myinfo.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'
// import Tab1 from '@/components/tabs/Tab1.vue'
// import Tab2 from '@/components/tabs/Tab2.vue'

// import Login from '@/components/Login.vue'
// import Main from '@/components/Main.vue'



// 2. 调用 Vue.use() 函数， 把 VueRouter 安装为 Vue 的插件
// 把 VueRouter 安装为 Vue 项目的插件
// Vue.use() 函数 就是用来 给 所有 Vue实例 安装 插件的
Vue.use(VueRouter)



// 3. 创建路由的实例对象， router 就是 路由实例
const router = new VueRouter({
  // routes(路线) 是数组，用来定义映射关系。
  routes: [
    // 注意，path 中不要写#。 component 不要写 .vue 后缀, component 不是 字符串，且 component 没有 s
    // 使用redirect重定向#/
    {path: '/', redirect: '/myinfo'},
    // {path: '/movie/1', component: Movie},
    // {path: '/movie/2', component: Movie},
    // {path: '/movie/3', component: Movie},
    {path: '/login', component: Login},
    {path: '/main', component: Main},

    {path: '/home', component: Home},
    {path: '/movie/:id/:name', component: Movie, props: true},

    // 如果想要嵌套组件，必须用 children 属性--- children 是一个 数组--- 里面还是{path: , component: }
    {path: '/about', component: About, children: [
      // 注意， path 不能加 #
      // children 中 path 置为空， 就是 默认 子路由。
      {path: '', component: Tab1},
      {path: 'tab2', component: Tab2}
    ]},
    {path: '/myinfo', component: Myinfo, children: [
      {path: '', component: Tab1},
      {path: 'tab2', component: Tab2}
    ]}
  ]



  // routes 是一个数组，作用：定义 “hash 地址” 与 “组件” 之间的对应关系
  // routes: [
  //   // 重定向的路由规则
  //   { path: '/', redirect: '/home' },
  //   // 路由规则
  //   { path: '/home', component: Home },
  //   // 需求：在 Movie 组件中，希望根据 id 的值，展示对应电影的详情信息
  //   // 可以为路由规则开启 props 传参，从而方便的拿到动态参数的值
  //   { path: '/movie/:mid', component: Movie, props: true },
  //   {
  //     path: '/about',
  //     component: About,
  //     // redirect: '/about/tab1',
  //     children: [
  //       // 子路由规则
  //       // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做“默认子路由”
  //       { path: '', component: Tab1 },
  //       { path: 'tab2', component: Tab2 }
  //     ]
  //   },
  //   { path: '/login', component: Login },
  //   { path: '/main', component: Main }
  // ]
})

// 声明[全局前置守卫]
router.beforeEach((to, from, next) => {
  // console.log(to) // to： 跳转到的这个路由
  // console.log(from) // from：此时离开的这个路由
  
  // 在 next() 中写判断逻辑
  // 先获取用户的地址
  // 如果访问的是 /main , 则需要读取 localStorage 中的 token 值
  // 核心： 通过 to.path 获取到跳转到的那个页面的路径（注意path只包含路径参数）
  // 开始判断业务
  if (to.path === '/main') {
    // 先拿 LocalStorage 中的 token 
    const token = localStorage.getItem('token')
    if (token) {
      next() // if(token) 表示 token 有值，放行
    }else {
      next('/login') // 如果 token 没值，去登录页面
    }
  }else {
    next() // 不是访问 /main 后台，直接放行
  }
})















































// 为 router 实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
// router.beforeEach(function(to, from, next) {
//   // to 表示将要访问的路由的信息对象
//   // from 表示将要离开的路由的信息对象
//   // next() 函数表示放行的意思
//   // 分析：
//   // 1. 要拿到用户将要访问的 hash 地址
//   // 2. 判断 hash 地址是否等于 /main。
//   // 2.1 如果等于 /main，证明需要登录之后，才能访问成功
//   // 2.2 如果不等于 /main，则不需要登录，直接放行  next()
//   // 3. 如果访问的地址是 /main。则需要读取 localStorage 中的 token 值
//   // 3.1 如果有 token，则放行
//   // 3.2 如果没有 token，则强制跳转到 /login 登录页
//   if (to.path === '/main') {
//     // 要访问后台主页，需要判断是否有 token
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       // 没有登录，强制跳转到登录页
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

// 4. 向外共享(暴露)路由实例对象 router 
export default router
