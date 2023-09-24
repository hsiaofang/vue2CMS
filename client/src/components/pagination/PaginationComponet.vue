<template>
  <div>
    <!-- 
    el-pagination 分頁組件
        small 是否使用小型分頁樣式 boolean
        background 是否為分頁按鈕添加背景色 boolean
        page-size 每頁顯示項目個數，支持sync修飾符 number =10
        total 總數目    number
        current-page    當前頁碼數
        layout  組件布局，子組件名用逗號分隔 string
        page-size 每頁顯示個數選擇器的選項設置 number[] -[10,20,30,40,50,100]
    event:
        size-change: page-size改變時會觸發 每頁條數
        current-chamge: current-page改變時會觸發 當前頁
 -->

    <!-- <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div> -->

    <!-- 分頁組件 -->
    <div class="pagination">
      <span class="total">共{{ total }}條</span>
      <span class="page-size" 每頁顯示>
        <select @change="handleSizeChange($event)" v-model="pageSize">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option ㄋ="40">40</option></select
        >條
      </span>

      <span class="pager">
        <!-- 渲染頁碼按鈕 -->
        <button @click="changePage('prev')">&lt;</button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button @click="changePage('next')">&gt;</button>
      </span>

      <span class="jumper"
        >前往
        <input type="number" v-model="currentPage" />頁
        <!-- <input type="number" v-model="currentPage" @input="handleInputPage" />頁 -->
        <!-- <button @click="jumpToPage"></button> -->
      </span>
    </div>
  </div>
</template>

<script>
// import { Model } from 'echarts';

export default {
  // 使用者選擇讓 每頁顯示分頁不一樣
  // props: {
  //   total: {
  //     type: Number,
  //     default: 100,
  //   },
  //   pagesize: {
  //     type: Number,
  //     default: 10,
  //   },
  // },
  // // 下拉選單選擇：？頁/條
  // methods: {
  //   handleSizeChange(val) {
  //     console.log(`每頁 ${val} 條`);
  //   },
  //   handleCurrentChange(val) {
  //     console.log(`當前頁: ${val}`);
  //   },
  // },
  // data() {
  //   return {
  //     // 使用者選擇頁面
  //     currentPage: 1,
  //   };
  // },

  // 數據屬性
  data() {
    return {
      total: 40,
      pageSize: 10, //每頁顯示的數量，默認為10
      currentPage: 1, //當前頁數，默認為1
    };
  },
  computed: {
    // 計算總頁數
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    // 當用戶在下拉框中選擇每頁顯示數量時，觸發此方法
    // 此方法將選中的數量更新到pageSize屬性，並將currentPage設置為1，以確保切換每頁數量時回到第一頁
    handleSizeChange(event) {
      this.pageSize = parseInt(event.target.value); //將字串解析為整數
      this.currentPage = 1;
    },

    changePage(page) {
      this.currentPage = page;
      console.log("跳轉到第 ${page} 頁");
    },
  },
};
</script>

<style lang="less" scoped>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    border:  #ccc;
  }

  .total,
  .page-size,
  .pager,
  .jumper {
    display: flex;
    align-items: center;
  }

  select,
  input[type="number"] {
    width: 50px;
  }

  button {
    margin: 0 5px;
    padding: 3px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>