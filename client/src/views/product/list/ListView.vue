<!-- 複製ElementUI 表單 樣式做出頂部，改成名稱和時間
      header高度太高，改寫樣式
      加入添加和刪除按鈕
      ElementUI表格 樣式 放入content
      tableData放入data裡
      每個頁面都分頁，寫成全
      搜尋框若無輸入數字，會跳轉到第一頁


-->
<template>
  <div>
    <!-- 產品搜索 -->
    <!-- 
      el-form表單
        :in-line = "true" 設置 inline 屬性可以讓表單變為行內的表單域
        :model="formInline" 表單數據對象 數據類型為object
      
      el-form-item 表單控件 每一項內容
        label 標籤文本 string
      
      el-input 表單輸入框

      el-date-picker 日期組件

     -->
    <div class="header">
      <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="產品名稱">
            <!-- 失去焦點，並判斷值為空 -->
            <el-input
              v-model="formInline.user"
              @blur="blur"
              size="small"
              placeholder="產品名稱"
            ></el-input>
          </el-form-item>
          <el-form-item label="添加時間">
            <el-date-picker
              v-model="formInline.date"
              type="date "
              placeholder="選擇日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <!-- 1. 搜尋按鈕點擊時觸發method裡的onSubmit
                2. 讀到data裡的formInline
                3. 接著寫async search接口
                4. 在方法裡的函數調用 this.search(this.formInline.name)
                5. 此資料會傳到asyc接口做為參數 -->
            <el-button type="primary" @click="onSubmit" size="small"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="group">
        <el-button size="small" type="warning" icon="el-icon-plus"
          >添加商品</el-button
        >
        <el-button size="small" type="danger" icon="el-icon-delete"
          >多量刪除</el-button
        >
      </div>
    </div>
    <!-- 產品列表 -->
    <!-- 
      el-table 表單組件
        :data="tableData" 注入data對象數組 [{},{}]
        stripe  屬性可以創建帶斑馬紋的表格
        border 邊框

      el-table-column 表格列
        prop="data" prop屬性來對應對象中的鍵名即可填入數據
        label="日期" label屬性來定義表格的列名
        width 屬性來定義列寬

        show-overflow-tooltip 當內容過長(超出表格欄寬)被隱藏時顯示...
        寫一個分頁的components在el-table下方引入
     -->
    <div class="content">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        header-cell-class-name="active-header"
        cell-class-name="table-center"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="商品編號" width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="商品名稱"
          width="120"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="price" label="商品價格"> </el-table-column>
        <el-table-column prop="category" label="商品類目"> </el-table-column>
        <el-table-column prop="create_time" label="添加時間"> </el-table-column>
        <el-table-column
          prop="sellPoint"
          label="商品賣點"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="desce" label="商品描述"> </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
              >编辑</el-button
            >
            <!-- scope.row當前行 -->
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分頁組件 -->
      <div class="pagination">
        <Pagination :total="total" :pageSize="pageSize" @changePage="changePage"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/pagination/PaginationComponet.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      formInline: {
        user: "",
        date: "",
      },
      tableData: [],
      total: 10,
      pageSize: 1,
      current: 1,
    };
  },
  methods: {
    onSubmit() {
      // this是一個對象，可以讀到data中的name
      console.log("submit", this.formInline.name);
      this.search(this.formInline.name);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log("刪除--------", index, row);
      this.$confirm("確定刪除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 要刪除數據，請求後台接口
          this.deleteItemById(row.id)
          this.$message({
            type: "success",
            message: "刪除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消刪除",
          });
        });
    },

    // 接收pagination組件傳過來的
    changePage(page){
      console.log('---page---頁碼', page);
      // y94
      this.projectList(page);
    },

    // 失去焦點
    blur() {
      if (!this.formInline.name) {
        this.projectList(1);
      }
    },

    // 獲取產品列表數據
    async projectList(page) {
      let res = await this.$api.projectList({ page });
      console.log("產品列表數據---", res.data);
      this.tableData = res.data.data;
      this.total = res.data.total;
      this.pageSize = res.data.pageSize;
    },
    // 搜尋接口
    async search(search) {
      // 原本有輸入關鍵字，若沒關鍵字時，要回到第一頁，失去焦點
      if (!search) {
        return;
      }
      let res = await this.$api.search({ search });
      console.log("搜索的數據--", res.data);
      if (res.data.status === 200) {
        // 如果有數據，要把數據渲染在頁面tableData
        this.tableData = res.data.result;
        // 分頁處理
        this.total = res.data.result.length;
        this.pageSize = res.data.result.length;
      } else {
        // 查無數據
        this.tableData = ["查無資料"];
        this.total = 1;
        this.pageSize = 1;
      }
    },

    // 刪除接口
    async deleteItemById(id){
      let res = await this.$api.deleteItemById({id});
      console.log('刪除---', res.data);
      if(res.data.status===200){
        this.$message({
          type: 'success',
          message: '刪除成功',
        });
        // 重新渲染視圖
        this.projectList(this.current)

      }
    }
  },
  created() {
    this.projectList();
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;

  .el-form-item {
    margin-bottom: 16px;
  }

  .group {
    border: 1px solid #eee;
    padding: 8px;
  }
}

.content {
  background: #fff;

  /deep/ .active-header {
    color: #333;
    text-align: center;
  }

  /deep/ .table-center {
    text-align: center;
  }
  .pagination {
    margin: 10px;
  }
}
</style>
