<template>
  <div width="900">
    <div width="900">
      <h2 style="text-align: left;">直播</h2>
    </div>
    <div width="900">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        style="width: 800px;background-color: #f7f7f7;"
      >
        <el-menu-item index="1" @click="cur=1" :class="{active:cur==1}">直播间管理</el-menu-item>
        <el-menu-item index="2" @click="cur=2" :class="{active:cur==2}">商品库</el-menu-item>
        <el-menu-item index="3" @click="cur=3" :class="{active:cur==3}">接入指南</el-menu-item>
      </el-menu>
    </div>
    <div v-show="cur==1" style="background-color: #ffffff;width: 800px;margin-top: 10px;">
        <br/>
        <button  @click="this.$router.push('/room')" style="float: right;text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">创建直播间</button>
        <br/>
        <br/>
    <el-table :data="tableData" style="width: 800px;">
      <el-table-column prop="date" label="直播间信息" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column prop="name" label="直播状态" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column label="操作">
      <template #default="scope">
        <a href="" @click="handleDelete(scope.$index, scope.row)">控制台</a>&emsp;
        <a href="" @click="handleDelete(scope.$index, scope.row)">运营</a>&emsp;
        <a @click="handleDelete(scope.$index, scope.row)">开播码</a>&emsp;
        <a href="" @click="handleDelete(scope.$index, scope.row)">更多</a>&emsp;
      </template>
    </el-table-column>
    </el-table>
    </div>
    <div v-show="cur==2" style="background-color: #ffffff;width: 900px;margin-top: 10px;">
        <br/>
        <button  @click="this.$router.push('/Add_Merchandise')" style="float: right;text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">添加商品</button>
        <br/>
        <br/>
    <el-table :data="tableData" style="width: 900px;">
      <el-table-column prop="name" label="基本信息" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column prop="date" label="价格" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column prop="address" label="链接" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column prop="" label="状态" style="background-color: #f7f7f7;"> </el-table-column>
      <el-table-column label="操作" width="300">
      <template #default="scope">
        <a href="" @click="handleDelete(scope.$index, scope.row)">提交审核</a>&emsp;
        <a href="" @click="handleDelete(scope.$index, scope.row)">编辑</a>&emsp;
        <a href="" @click="handleDelete(scope.$index, scope.row)">删除</a>&emsp;
      </template>
    </el-table-column>
    </el-table>
    </div>
    <div v-show="cur==3" style="background-color: #ffffff;width: 800px;margin-top: 10px;">
        <h3>李四</h3>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          cur:2,
          tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted(){
    },
    methods:{
        

    }
  }
</script>
<style scoped>
.tab-content .active{
 background-color: #194e84 !important;
 color: #fff; 
}
.tab-content1{
 text-align: center;
 cursor: pointer;
 width: 150px;
 height: 30px;
 border: 1px solid #ccc;
}
.tab-content2{
 margin-top:-30px;
 text-align: center;
 cursor: pointer;
 margin-left:200px;
 width: 150px;
 height: 30px;
 border: 1px solid #ccc;
}
</style>