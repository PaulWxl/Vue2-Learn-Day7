<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <!-- 注意，Hash地址 要以#开头，所以一定要有#  -->
    <!-- 路由连接-- 即a链接  -->
    <!-- a 链接 改变了 hash地址  -->
    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />

    <!-- 动态组件 component ， is 属性 绑定 组件 名称， 必须 为  -->
    <component :is="comName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    Movie,
    About
  },
  data() {
    return {
      // 在动态组件(component标签)的位置，要展示的组件的名字，值必须是字符串
      comName: 'Home'
    }
  },
  created() {
    // 只要当前的 App 组件一被创建，就立即监听 window 对象的 onhashchange 事件
    // window.onhashchange 是 JavaScript 中的一个事件处理器，它会在 URL 中 # 符号后面的部分（也就是 hash）发生变化时触发。当用户在网页内点击了一个 hash 链接或通过浏览器的前进或后退功能修改了 hash 时，该事件将被触发。

    // 可以通过将 window 对象的 onhashchange 属性设置为回调函数来观察 window.onhashchange 事件。每当 hash 发生变化时，回调函数会自动被调用。

    // 当 URL 的 hash 改变时，该事件处理程序将被调用并执行提供的函数，该函数将消息记录到控制台中。

    // window.onhashchange 的一个常见用例是在单页应用程序（SPA）中实现客户端路由。SPA 是一种 Web 应用程序，它会加载单个 HTML 页面，并随着用户与应用程序交互而动态更新其内容。使用 URL 的 hash 部分是在 SPA 中实现客户端路由的常见策略。当用户在应用程序的不同部分中导航时，URL 的 hash 部分发生变化，并使用 onhashchange 事件来相应地更新页面内容，而无需重新加载整个页面。

    // 前端路由的 底层原理 就是 用了 window.onhashchange 这个 函数， 监听页面的hash地址的变化，location.hash 接收 当前 的 hash 地址， a链接负责改变hash地址
    window.onhashchange = () => {
      // location.hash 是 JavaScript 中的一个属性，它返回 URL 中 # 符号后面的部分，也就是当前页面的 hash 值。 location.hash 属性在实现客户端路由的过程中非常有用。通过监听 window.onhashchange 事件和读取 location.hash 属性，我们可以在单页应用程序中创建有状态的 URL，并在用户导航到应用程序的不同部分时相应地更新内容。

      // 需要注意的是，location.hash 返回的 hash 值包 含 # 符号。如果需要去除 # 符号，可以使用以下代码:
      // var hash = location.hash.substring(1);

      console.log('监听到了 hash 地址的变化', location.hash)
      // switch (location.hash) {
      //   case '#/home':
      //     this.comName = 'Home'
      //     break
      //   case '#/movie':
      //     this.comName = 'Movie'
      //     break
      //   case '#/about':
      //     this.comName = 'About'
      //     break
      // }
      if (location.hash == '#/home') {
        this.comName = 'Home'
      } else if (location.hash == '#/about') {
        this.comName = 'About'
      } else if (location.hash == '#/movie') {
        this.comName = 'Movie'
      }
    }
  }
  // 注册组件
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
