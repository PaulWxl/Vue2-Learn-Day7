<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <router-link to="/home">主页</router-link>
    <!-- <router-link to="/movie">电影</router-link> -->
    <router-link to="/movie/1/雷神">雷神</router-link>
    <router-link to="/movie/2/洛基">洛基</router-link>
    <router-link to="/movie/3/三体">三体</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/myinfo">我的</router-link>

    <hr />

    <!-- router-link 替代 a 链接--- 不要加 #  -->

    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <a href="#/myinfo">我的</a> -->

    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- 当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的 a 链接了 -->
    <!-- <a href="#/home">首页</a> -->
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- 注意1：在 hash 地址中， / 后面的参数项，叫做“路径参数” -->
    <!-- 在路由“参数对象”中，需要使用 this.$route.params 来访问路径参数 -->

    <!-- 注意2：在 hash 地址中，? 后面的参数项，叫做“查询参数” -->
    <!-- 在路由“参数对象”中，需要使用 this.$route.query 来访问查询参数 -->

    <!-- 注意3：在 this.$route 中，path 只是路径部分；fullPath 是完整的地址 -->
    <!-- 例如： -->
    <!-- /movie/2?name=zs&age=20 是 fullPath 的值 -->
    <!-- /movie/2 是 path 的值 -->
    <!-- <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs&age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr /> -->

    <!-- 只要在项目中安装和配置了 vue-router，就可以使用 router-view 这个组件了 -->
    <!-- 它的作用很单纯：占位符 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import VueRouter from 'vue-router'
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  min-height: 200px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
