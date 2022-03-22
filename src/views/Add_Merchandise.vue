<template>
    <br/>
    <div style="width:800px;margin-left: 30px;">
        <span style="font-size: 20px;">添加商品</span>
        <span style="margin-left: 150px;font-size: 15px;color: #b8b8b8;">商品封面</span>
           <br/>
           <el-upload
  class="upload-demo" style="margin-left: 150px;"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">重新上传</el-button>
</el-upload><br/>
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