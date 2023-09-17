<!-- 複製ElementUI 表單 樣式做出頂部，改成名稱和時間
      header高度太高，改寫樣式
      加入添加和刪除按鈕
      ElementUI表格 樣式 放入content
      tableData放入data裡

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
            <el-input
              v-model="formInline.user"
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
          >匹量刪除</el-button
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


     -->
    <div class="content">
      <el-table :data="tableData" style="width: 100%" border> 
        <el-table-colum type="selection" width="55">
        </el-table-colum>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini" type="primary"
          @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
        <el-button
          size="mini" type="danger"
          @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
      </template>
      </el-table-column> 
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        date: "",
      },
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit", this.formInline);
    },
    handleEdit(index, row) {
        console.log(index, row);
      },
    handleDelete(index, row) {
      console.log(index, row);
    }
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
  background-color: pink;
}
</style>
