<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <!-- 在行内使用编程式导航跳转的时候，this 必须省略  -->
    <button @click="$router.push('/movie/2')">跳转到洛基组件</button>
    <button @click="$router.back()">后退</button>
    <button @click="$router.forward()">前进</button>
    <router-link to="/login">访问登录页面</router-link>
    <router-link to="/main">访问后台首页</router-link>
    <hr />

    <!-- <button @click="gotoLk">通过 push 跳转到“洛基”页面</button>
    <button @click="gotoLk2">通过 replace 跳转到“洛基”页面</button>
    <router-link to="/main">访问后台主页</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    // gotoLk() {
    //   // 通过编程式导航 API，导航跳转到指定的页面
    //   this.$router.push('/movie/1')
    // },
    // gotoLk2() {
    //   this.$router.replace('/movie/1')
    // },
    move() {
      // 使用 $router.push 方法跳转到洛基页面
      // this.$router.push('/movie/2')
      // this.$router.replace('/movie/2')
    },
    back() {
      // this.$router.go(-1)
      // 简化用法
      // this.$router.back()
    },
    forward() {
      // this.$router.go(1)
      // 简化写法：
      // this.$router.forward()
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
