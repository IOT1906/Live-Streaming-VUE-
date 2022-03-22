<template>
  <div style="width:600px;margin-left: 30px;">
      <div><h2 style="text-align:left">创建直播间</h2></div><br/>
      <div>
<el-steps :active="1" style="float:right;width:350px;" finish-status="success">
  <el-step title="直播形式" index="1" @click="cur=1" :class="{active:cur==1}"></el-step>
  <el-step title="基本信息" index="2" @click="cur=2" :class="{active:cur==2}"></el-step>
  <el-step title="样式配置" index="3" @click="cur=3" :class="{active:cur==3}"></el-step>
</el-steps>
      </div>
      <div>
        <br/>
        <br/>
        <br/>
        <hr style="color: #f4f4f4;"/>
      </div>
      <div v-show="cur==1">
           <br/>
           <span style="margin-left: 10px;color: #d1d1d1;">直播形式在直播间创建后不可修改</span><br/><br/>
           <span style="margin-left: 10px;">直播类型</span>
           <input type="radio" name="yi" id="yi" style="margin-left: 100px;" checked/>手机直播
           <br/>
           <span style="margin-left: 190px;color: #b8b8b8;font-size: 3px;">通过"小程序直播主题端小程序"发起直播</span><br/><br/>
           <input type="radio" name="yi" id="er" style="margin-left: 174px;"/>推流设备直播<br/>
           <span style="margin-left: 190px;color: #b8b8b8;font-size: 3px;">通过第三方推流设备发起直播(仅当小程序直播组件版本在1.0.3或以上有效果)</span><br/><br/>
           <button  @click="xia()" style="float: right;text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">下一步</button>
          </div>
      <div v-show="cur==2"><br/>
        <span style="margin-left: 10px;">直播标题</span>
        <input type="text" maxlength="17" style="margin-left: 80px;width: 325px;"/>
        <br/><br/>
        <span style="margin-left: 10px;">开播时间</span>
        <input type="date" style="margin-left: 80px;width: 150px;"/>至
        <input type="date" style="width: 150px;"/><br/>
        <span style="margin-left: 150px;color: #b8b8b8;font-size: 3px;">开播时间段仅供参考,不是实际直播间可以开播的时间</span>
        <br/>
        <span style="margin-left: 150px;color: #b8b8b8;font-size: 3px;">直播间在开始时间前也可以开播,并且到结束时间后不会强制结束.</span><br/>
        <span style="margin-left: 150px;color: #b8b8b8;font-size: 3px;">若到结束时间仍未开播,则直播间无法再开播.</span><br/><br/>
        <span style="margin-left: 10px;">主播昵称</span>
        <input type="text" maxlength="15" style="margin-left: 80px;width: 325px;"/>
        <br/><br/>
        <span style="margin-left: 10px;">主播微信账号</span>
        <input type="text" maxlength="15" style="margin-left: 48px;width: 325px;"/><br/>
        <span style="margin-left: 150px;color: #b8b8b8;font-size: 3px;">每个直播间需要绑定一个用作核实主播身份,不会展示给观众.</span><br/><br/>
        
        <button  @click="shang()" style="background-color: #f8f8f8;margin-left: 330px;;text-align: center;border: none;height: 37px;width: 100px;">上一步</button>&emsp;
        <button  @click="xias()" style="text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">下一步</button>
      </div>
      <div v-show="cur==3">
        <br/>
           <span style="margin-left: 10px;font-size: 21px;">分享卡片样式配置</span><br/><br/>
           <span style="margin-left: 10px;font-size: 15px;">分享卡片封面</span>
           <span style="margin-left: 50px;font-size: 15px;color: #b8b8b8;">观众在微信对话框内分享的直播间将以分享卡片的形式呈现.</span>
           <br/>
           <span style="margin-left: 150px;font-size: 15px;color: #b8b8b8;">建议尺寸 : 800像素 * 640像素</span>
           <br/>
           <span style="margin-left: 150px;font-size: 15px;color: #b8b8b8;">图片大小不得超过1M</span>
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
<button  @click="chuangjian()" style="margin-left: 200px;text-align: center;background-color: #2aaf5c;color:#fff;border: none;height: 37px;width: 100px;">创建</button>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          cur:1,
          fileList:[],
      }
    },
    mounted(){
    },
    methods:{
        xia(cur=2){
            this.cur=2;        
        },
        xias(cur=3){
            this.cur=3;        
        },
        shang(cur=1){
            this.cur=1;        
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      chuangjian(){
        this.$router.push("/Sinatv");
      }

    }
  }
</script>