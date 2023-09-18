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
        <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination> 
    </div>
</template>

<script>
export default {
    // 使用者選擇讓 每頁顯示分頁不一樣
    props:{
        total: {
            type: Number,
            default: 100
        },
        pagesize: {
            type: Number,
            default: 10
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每頁 ${val} 條`);
      },
      handleCurrentChange(val) {
        console.log(`當前頁: ${val}`);
      }
    },
    data() {
        return {
            currentPage: 1
        }
    }

}
</script>

<style lang="less" scoped></style>
