<template>
  <div style="background-color: #f7f7f7;">
    <el-container>
      <el-aside width="300px">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width: 230px; height: 849px;background-color: #f7f7f7;"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
          >
             <el-menu-item index="1">
          <span>首页</span>
        </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <span>管理</span>
              </template>
              <el-menu-item index="2-1">版本管理</el-menu-item>
              <el-menu-item index="2-2">成员管理</el-menu-item>
              <el-menu-item index="2-3">用户反馈</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
              <template #title>
                <span>统计</span>
              </template>
            </el-menu-item>
            <el-sub-menu index="4">
              <template #title>
                <span>功能</span>
              </template>
              <el-menu-item index="4-1">附近的小程序</el-menu-item>
              <el-menu-item index="4-2">微信搜一搜</el-menu-item>
              <el-menu-item index="4-3">微信支付</el-menu-item>
              <el-menu-item index="4-4">物流助手</el-menu-item>
              <el-menu-item index="4-5">客服</el-menu-item>
              <el-menu-item index="4-6">订阅消息</el-menu-item>
              <el-menu-item index="4-7">模板消息</el-menu-item>
              <el-menu-item index="/Sinatv">直播</el-menu-item>
              <el-menu-item index="4-9">页面内容接入</el-menu-item>
              <el-menu-item index="4-10">流程发起的文件</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  created() {},
};
</script>
<style>
.el-aside {
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}
</style>