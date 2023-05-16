<template>
  <div class="home-container">
    <!-- 上面头部区域 -->
    <MyHeader />
    <!-- 下面主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside />
      <!-- 右侧内容主体区域  -->
      <div class="home-main-body">
        <!-- 在这里展示对应的组件，放占位符  -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from './subcomponents/MyHeader.vue'
// 左侧边栏组件
import MyAside from './subcomponents/MyAside.vue'

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column; // 修改主轴方向为垂直方向

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
