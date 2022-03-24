<template>
    <br/>
    <div style="width:800px;margin-left: 30px;">
        <span style="font-size: 20px;">添加商品</span><br/><br/>
        <span style="font-size: 15px;margin-left: 10px;">商品封面</span>
        <span style="font-size: 13px;color: #b8b8b8;margin-left: 52px;">只能上传jpg/png文件，且不超过500kb</span>
           <br/>
           <el-upload
  class="upload-demo" style="margin-left: 123px;width: 100px;"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">重新上传</el-button>
</el-upload><br/>
<span style="margin-left: 10px;">商品名称</span>
        <input type="text" maxlength="14" style="margin-left: 48px;width: 325px;"/><br/><br/>
        <span style="margin-left: 10px;">价格形式</span>
        <input type="radio" name="yi" id="yi" style="margin-left: 47px;" checked/>一口价
        <span style="margin-left: 70px;">价格</span>&nbsp;
        <input type="text" style="width: 70px;" />元
        <br/><br/>
        <input type="radio" name="yi" id="er" style="margin-left: 121px;"/>价格区间
        <span style="margin-left: 53px;">价格</span>&nbsp;
        <input type="text" style="width: 70px;" />元&nbsp;-&nbsp;
        <input type="text" style="width: 70px;" />元<br/><br/>
        <input type="radio" name="yi" id="er" style="margin-left: 121px;"/>登录折扣价
        <span style="margin-left: 37px;">原价</span>&nbsp;
        <input type="text" style="width: 70px;" />元&emsp;
        现价
        <input type="text" style="width: 70px;" />元
        <br/>
        
        <button style="text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">保存</button>&emsp;
    <button style="background-color: #f8f8f8;margin-left: 330px;;text-align: center;border: none;height: 37px;width: 100px;">保存并结账</button>
    
    
      </div>
</template>
<script>
  export default {
    data() {
      return {
          
      }
    },
    mounted(){
        
    },
    methods:{
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
    }
  }
</script>