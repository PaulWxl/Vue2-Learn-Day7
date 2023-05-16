<template>
  <div class="myinfo-container">
    <h3>我的 组件</h3>

    <router-link to="/myinfo">tab1</router-link>
    <router-link to="/myinfo/tab2">tab2</router-link>
    <!-- 一定要记得要加占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.myinfo-container {
  min-height: 250px;
  background-color: #e9c718;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
