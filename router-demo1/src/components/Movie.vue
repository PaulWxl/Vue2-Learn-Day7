<template>
  <div class="movie-container">
    <!-- this.$route 是路由的“参数对象” -->
    <!-- this.$router 是路由的“导航对象” -->
    <h3>Movie 组件 --- {{ id }}----{{ name }}</h3>
    <!-- <button @click="showThis">打印 this</button> -->
    <!-- <button @click="goback">后退</button> -->
    <!-- 在行内使用编程式导航跳转的时候，this 必须要省略，否则会报错！ -->
    <!-- <button @click="$router.back()">back 后退</button> -->
    <!-- <button @click="$router.forward()">forward 前进</button> -->
  </div>
</template>

<script>
export default {
  name: 'Movie',
  // 路由中定义了使用 props 传参，那么在组件中必须声明 props 属性。
  // 注意 props 是一个数组，且每个元素要打引号
  props: ['id', 'name']
  // 接收 props 数据
  // props: ['mid'],
  // methods: {
  //   showThis() {
  //     console.log(this)
  //   },
  //   goback() {
  //     // go(-1) 表示后退一层
  //     // 如果后退的层数超过上限，则原地不动
  //     this.$router.go(-1)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
