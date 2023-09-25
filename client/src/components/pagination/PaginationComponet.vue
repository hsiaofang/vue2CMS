<template>
  <div>
    <!-- 分頁組件 -->
    <div class="pagination">
      <span class="total">共{{ total }}條</span>
      <span class="page-size" 每頁顯示>
        <select @change="handlePageChange($event)" v-model="pageSize">
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
      </span>
    </div>
  </div>
</template>

<script>

export default {

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
    // handlePageChange(event) {
    //   this.pageSize = parseInt(event.target.value); //將字串解析為整數
    //   this.currentPage = 1;
    //   this.$emit("PageChange", event.target.value)
    // },


    changePage(page) {
    if (page === 'prev') {
      // 上一頁
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    } else if (page === 'next') {
      // 下一頁
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    } else {
      // 具體點擊頁碼
      this.currentPage = page;
    }
    console.log(`跳轉到第 ${this.currentPage} 頁`);
    this.$emit("changePage", page)
  }

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