<template>
  <div class="home">
    <!-- 頂部區域 -->
    <div class="header">
      <div class="item-wrapper">
        <div class="column gradient-blue">
          <div class="item">
            <div class="title">總銷售額</div>
            <div class="num">78,000</div>
            <div class="bottom">今日銷售額</div>
          </div>
        </div>
        <div class="space"></div>
        <div class="column gradient-green">
          <div class="item">
            <div class="title">訪問量</div>
            <div class="num">78,000</div>
            <div class="bottom">今日訪問量</div>
          </div>
        </div>
        <!-- <div class="space"></div>
        <div class="column gradient-red">
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
      </div>
  </div>

    <div class="sales-info">
      <div class="sales-column">
        <div class="sales-title">月銷售額</div>
        <div class="sales-content"></div>
      </div>

      <div class="sales-space"></div>

      <div class="sales-column">
        <div class="sales-title">比例分配</div>
        <div class="sales-content"></div>
      </div>
    </div>


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



    </div>> -->




  </div>

  

</template>

<script>
export default {
  // 一進首頁要訪問api

  // 數據往視圖上渲染，裝容器的內容
  data() {
    return {};
  },


  // 生命週期函數，方法一進來就被生命週期調用
  created() {
    // this.totalInfo(); //首頁數據統計
    this.orderInfo(); //首頁訂單訊息
    // console.log('id',document.getElementById('charts'));
  },


  // 最早能獲取dom元素的生命週期元素
  mounted(){
    console.log('id',document.getElementById('charts'));
    
    // var myChart = echart.init(document.getElementById('charts'));

      // myChart.setOption({
      // title: {
      //   text:''
      // },
      // tooltip: {},
      // xAxis: {
      //   data: ['襯衫', '羊毛衫']
      // },
      // yAxis: {},
      // series: [
      //   {
      //     name: '銷量',
      //     type: 'bae',
      //     data: [5, 20, ]
      //   }
      // ]
      // });


  },

  // 方法
  methods: {
    // async totalInfo() {
    //   let res = await this.$api.totalInfo();
    //   console.log("首頁數據", res.data);
    // },
  },
};
</script>

<style lang="less" scoped>
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

.gradient-red {
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
</style>
