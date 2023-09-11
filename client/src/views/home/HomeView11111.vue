<template>
  <!-- 頂部區域佈局 -->
  <div class="header">
    <div class="item">總銷售額
      <div class="num">{{}}</div>
      <div class="bottom">今日銷售額：{{}}</div>
    </div>
    <div class="item">總訪問量
      <div class="num">{{}}</div>
      <div class="bottom">今日訪問量：{{}}</div>
    </div>
    <div class="item">總收藏量
      <div class="num">{{}}</div>
      <div class="bottom">今日銷售額：{{}}</div>
    </div>
    <div class="item">總支付量
      <div class="num">{{}}</div>
      <div class="bottom">今日支付量：{{}}</div>
    </div>   
  </div>

  <div class="content">
    <div class="time-info" id="box13">
      <div class="title">月銷售額</div>
      <div id="charts" style="width: 100%; height: 300px;"></div>
    </div>
    <div class="area" id="box1">
      <div class="title">產品銷售比例</div>
      <div id="pie" style="width: 100%; height: 300px;"></div>
    </div>   
  </div>

  <div class="home-footter">
    <el-card class="box-card">
      <div slot="header" class="clearfix"><span>今日訂單</span></div>
      <div class="text item">
        <el-row>
          <el-col :span="8">
            <div class="title">今日訂單數</div>
            <div>{{}}</div>
          </el-col>
          <el-col :span="8">
            <div class="title">匯總確認訂單</div>
            <div>{{}}</div>
          </el-col>
          <el-col :span="8">
            <div class="title">今日金額</div>
            <div>{{}}</div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix"><span>今日訂單</span></div>
      <div class="text item">
        <el-row>
          <el-col :span="8">
            <div class="title">今日訂單數</div>
            <div>{{}}</div>
          </el-col>
          <el-col :span="8">
            <div class="title">匯總確認訂單</div>
            <div>{{}}</div>
          </el-col>
          <el-col :span="8">
            <div class="title">今日金額</div>
            <div>{{}}</div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>快速入口</span>
      </div>
      <div class="text item">
        <el-button type="primary">產品管理</el-button>
        <el-button>消息管理</el-button>
        <el-button>內容管理</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default{
    // 一進首頁要訪問api

    // 數據往視圖上渲染，裝容器的內容
    data(){
      return {};
    },

    // 生命週期函數，方法一進來就被生命週期調用
    created() {
      // this.totalInfo();
      this.orderInfo();
    }


  }    
</script>

<!-- scoped限制在單一檔案元件裡 -->
<style lang="less" scoped>
.header {
  display: flex;
  padding-right: 30px;
  .item {
    flex: 1;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    color: #fff;
    position: relative;

    .num {
      font-size: 22px;
      margin: 10px;
      color: #fff;
    }
    .bottom {
      position: absolute;
      border-top: 1px solid rgb(246, 245, 245);
      padding: 10px 20px;
      bottom: 0;
      right: 0;
      left: 0;
      color: #fff;
      font-weight: normal;
    }

  }
}

</style>