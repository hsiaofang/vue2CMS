<template>
  <!-- 頂部區域佈局 -->
  <div class="home">
    <div class="header">
      <div class="item">總銷售額
        <div class="num">{{ totalData.saleTotal }}</div>
        <div class="bottom">今日销售额：{{ totalData.sale }}</div>
      </div>
      <div class="item">總訪問量
        <div class="num">{{ totalData.viewsTotal }}</div>
        <div class="bottom">今日訪問量：{{ totalData.views }}</div>
      </div>
      <div class="item">總收藏量
        <div class="num">{{ totalData.collectTotal }}</div>
        <div class="bottom">今日銷售額：{{ totalData.collectTotal }}</div>
      </div>
      <div class="item">總支付量
        <div class="num">{{ totalData.payTotal }}</div>
        <div class="bottom">今日支付量：{{ totalData.pay }}</div>
      </div>
    </div>

    <!-- 訪問數據統計 -->
    <div class="content">
      <div class="time-info" id="box13">
        <div class="title">月銷售額</div>
        <div id="charts" style="width: 100%; height: 300px;"> <!-- 第二步準備dom元素 -->
        </div>
      </div>
      <div class="area" id="box1">比例分配
        <div class="title">產品銷售額</div>
        <div id="pie" style="width: 100%; height: 300px;"></div>
      </div>
    </div>

    <!-- 最新內容 -->
    <div class="home-fotter">
      <el-card class="box-card">
        <div slot="header" class="clearfix"><span>今日訂單</span></div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <!-- <div class="title">今日訂單數</div>
              <div>{{ orderData.curOrderCount }}</div> -->
            </el-col>
            <el-col :span="8">
              <!-- <div class="title">匯總確認訂單</div>
              <div>{{ orderData.curCollect }}</div> -->
            </el-col>
            <el-col :span="8">
              <!-- <div class="title">今日金額</div>
              <div>{{ orderData.curMoney }}</div> -->
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix"><span>今日訂單</span></div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <!-- <div class="title">今日訂單數</div>
              <div>{{ orderData.orderCount }}</div> -->
            </el-col>
            <el-col :span="8">
              <!-- <div class="title">匯總確認訂單</div>
              <div>{{ orderData.collect }}</div> -->
            </el-col>
            <el-col :span="8">
              <!-- <div class="title">今日金額</div>
              <div>{{ orderData.money }}</div> -->
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
  </div>
</template>

<script>
import * as echart from 'echarts' //第一步，引入echarts
export default {
  // 一進首頁要訪問api

  // 數據往視圖上渲染，裝容器的內容
  data() {
    return {
      totalData: {}, //首頁數據統計
      orderData: {},
    };
  },


  // 生命週期函數，方法一進來就被生命週期調用
  created() {
    this.totalInfo(); //首頁數據統計
    this.orderInfo(); //首頁訂單訊息
    // this.format();
    // console.log('id',document.getElementById('charts'));
  },


  // 最早可以獲取dom元素的生命週期元素 掛載完畢執行
  mounted() {
    console.log('mounted-id', document.getElementById('charts'));
    this.line()
    this.pie()
  },

  // 方法
  methods: {
    // 獲取數據統計
    async totalInfo() {
      let res = await this.$api.totalInfo()
      console.log('首頁統計訊息---', res.data.data.list);
      this.totalData = res.data.data.list;
    },

    // 獲取今日訂單統計訊息
    async orderInfo() {
      let res = await this.$api.orderInfo()
      console.log('獲取今日訂單統計訊息---', res.data)
      this.orderData = res.data.list;
    },

    // 獲取圖表動態數據
    // async format(){
    //   let res = await this.$api.format()
    //   console.log('獲取圖表動態數據---', res.data);
    //   console.log(res.data.result.data.sale_money); //[{},{},{}]
    //   // 折線圖 柱狀圖數據格式: [xx,xx,xx]
    //   // 獲取x軸的數據名稱
    //   // let arr =res.data.result.data.sale+money;
    //   // let arrx=[], year1=[], year2=[];
    //   // arr.forEach(ele => {
    //   //     arrx.push(ele.name)
    //   //     yarr1.push(ele.num)
    //   //     yarr2.push(ele.total_amount)
    //   // });
    //   // console.log(arrx);
    //   // console.log(yarr1);
    //   // console.log(yarr2);
    // },



    // 繪製圖表折線，原本寫在mounted裡後把他寫到方法裡
    line() {
      // 基於準備好的demo，初始化echarts實體
      var myChart = echart.init(document.getElementById('charts'));

      myChart.setOption({
        // title: {
        //   text:''
        // },
        tooltip: { //提示框組件
          trigger: 'axis',
          // 提示框浮層內容格式器，支持字符串模板和回調函數兩種形式
          formatter: '{a}-{b}-{c}'
        },
        legend: {}, // 系列文字，默認表示會自己看有甚麼series
        toolbox: {
          feature: {
            // 可儲存圖片的功能
            saveAsImage: {}
          }
        },
        xAxis: {
          data: ['襯衫', '羊毛衫', '褲子', '雪紡衫', '高跟鞋']
        },
        yAxis: {},
        series: [ //圖表內容
          {
            name: '銷量額',
            type: 'line',
            data: [10, 25, 55, 40, 20],
            smooth: true, //是否平滑曲線顯示
          },
          {
            name: '銷量量',
            type: 'bar',
            data: [5, 20, 50, 30, 10]
          }

        ]

      });
    },
    // 繪製餅圖
    pie() {
      var myChart = echart.init(document.getElementById('pie'));
      var option;

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '產品銷售比例',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '肉類' },
              { value: 735, name: '水產' },
              { value: 580, name: '蔬果' },
              { value: 484, name: '冷凍食品' },
              { value: 300, name: '水果' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    line2() {
      // 原本寫在mounted裡後把他寫到方法裡
      var myChart = echart.init(document.getElementById('charts'));

      myChart.setOption({
        // title: {
        //   text:''
        // },
        tooltip: { //提示框組件
          trigger: 'axis',
          // 提示框浮層內容格式器，支持字符串模板和回調函數兩種形式
          formatter: '{a}-{b}-{c}'
        },
        xAxis: {
          data: ['襯衫', '羊毛衫', '褲子', '雪紡衫']
        },
        yAxis: {},
        series: [
          {
            name: '銷量',
            type: 'bar',
            data: [5, 20, 10, 30]
          }
        ]
      });
    },

    // 過濾器--處理數據格式，value值就是你要對誰使用這個過濾器的源數據
    // filiters:{
    //   num:(value){
    //     if(!value) return; //如果value值不存在
    //     return value.toLocateString()
    //   },
    // }

  }
};

</script>

<!-- scoped限制在單一檔案元件裡 -->
<style lang="less" scoped>
// .home {
//   margin: 0px; 
// }

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

  .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
  }

  .item:nth-child(2) {
    background-image: linear-gradient(#409eff, #2e556e);
  }

  .item:nth-child(3) {
    background-image: linear-gradient(#b54fa8, #713c7a);
  }

  .item:nth-child(4) {
    background-image: linear-gradient(#1cd2f1, #39717a);
  }
}


.content {
  margin: 20px;
  display: flex;
  height: 320px;

  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }

  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }

}

// 內容
.home-fotter {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;

  .box-card {
    flex: 1;
    margin-right: 30px;

    span {
      font-weight: 600;
    }
  }

  .item {
    text-align: center;
    font-size: 24px;
    color: #333;

    .el-col {
      border-right: 1px solid #eee;
    }

    .el-col:last-child {
      border-right: none;
    }

    .title {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
}
</style>
