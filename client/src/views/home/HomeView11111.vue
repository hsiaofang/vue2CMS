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





<!-- <div class="column gradient-green">
  <div class="item">
    <div class="title">訪問量</div>
    <div class="num">78,000</div>
    <div class="num">7{{ totalData.viewsTotal | num }}</div>
    <div class="bottom">今日訪問量: {{ totalData.views | num }}</div>
  </div>
</div> -->

<!-- <div class="column gradient-red">
  <div class="item">
    <div class="title">總銷售額</div>
    <div class="num">78,000</div>
    <div class="bottom">今日銷售額</div>
  </div>
</div>
<div class="space"></div>
<div class="column gradient-purple">
  <div class="item">
    <div class="title">訪問量</div>
    <div class="num">78,000</div>
    <div class="bottom">今日訪問量</div>
  </div>
</div> -->




 <!-- 訪問數據統計 -->
    <!-- <div class="content">
      <div class="time-info" id="box13">
        <div class="title">月銷售額</div>
        <div id="charts" style="width: 100%; height: 300px;"></div>
    </div>
    <div class="area" id="box1">比例分配</div>
    </div> -->

    <!-- 最新內容 -->
    <!-- <div class="home-fotter">





<!-- 自己寫的 -->
<!-- <style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.item-wrapper {
  display: flex; /* Flexbox 布局 */
  justify-content: space-between; /* 平均分配列 */
  width: 100%; /* 佔滿父容器的寬度 */
}

.column {
  flex: 1;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5));
}
.space {
  width: 50px; /* 每個欄位間距寬 */
}

.gradient-blue {
  background: linear-gradient(to bottom, #2c92eb, #001f3f);
}

.gradient-green {
  background: linear-gradient(to bottom, #64e773, #001f3f);
}

 
  background: linear-gradient(to bottom, #dd7974, #001f3f);
}

.gradient-purple {
  background: linear-gradient(to bottom, #d869e9, #001f3f);
}

.item {
}

.title {
  font-weight: bold;
  margin-bottom: 6px;
}

.num {
  font-size: 24px;
}

.bottom {
  color: #888;
}

.content {
  display: flex;
  justify-content: space-between;
  height: 300px;
  margin-top: 20px;
}

.time-info {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc; /* 添加邊框樣式，可根據需要自訂 */
  height: 300px;
  margin: 20px;
}

.sales-title {
  font-weight: bold;
  margin-bottom: 12px;
  //   text-align: center;
}

.sales-content {
}

.sales-space {
  width: 20px;
}
</style> -->