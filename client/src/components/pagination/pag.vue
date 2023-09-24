<template>
    <div>
      <!-- 分页组件 -->
      <div class="pagination">
        <span class="total">共 {{ total }} 条记录</span>
        <span class="page-size">每页显示
          <select @change="handleSizeChange($event)" v-model="pageSize">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          条
        </span>
        <span class="pager">
          <button @click="handlePageChange('prev')" :disabled="currentPage === 1">上一页</button>
          <button @click="handlePageChange('next')" :disabled="currentPage === Math.ceil(total / pageSize)">下一页</button>
        </span>
        <span class="jumper">跳至
          <input type="number" v-model="currentPage" @input="handleInputPage" />
          页
          <button @click="jumpToPage">跳转</button>
        </span>
      </div>
      <!-- 其他内容 -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        total: 40,
        pageSize: 10,
        currentPage: 1,
      };
    },
    methods: {
      handleSizeChange(event) {
        this.pageSize = parseInt(event.target.value);
        this.currentPage = 1; // 切换每页显示条数时回到第一页
      },
      handlePageChange(type) {
        if (type === 'prev' && this.currentPage > 1) {
          this.currentPage--;
        } else if (type === 'next' && this.currentPage < Math.ceil(this.total / this.pageSize)) {
          this.currentPage++;
        }
      },
      handleInputPage() {
        // 限制输入页数的范围
        if (this.currentPage < 1) {
          this.currentPage = 1;
        } else if (this.currentPage > Math.ceil(this.total / this.pageSize)) {
          this.currentPage = Math.ceil(this.total / this.pageSize);
        }
      },
      jumpToPage() {
        // 跳转到指定页数
        // 可以在这里发送请求获取对应页的数据
        console.log(`跳转到第 ${this.currentPage} 页`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式已在上面给出 */
  </style>
  