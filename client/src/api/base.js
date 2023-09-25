// 接口統一地址，讓整個應用程序可以重用，方便修改調整
const base = {
    // 首頁
    totalInfo:'/home/dataCount', //首頁統計數據
    orderInfo: "/home/orderInfo", //訂單數據
    format: "api/home/format", //折線數據
    // 產品管理
    projectList: "/goods/projectList", //產品列表
    search:"/goods/search", //搜尋
    deleteItemById:"/goods/deleteItemById", // 

}

// 單一導出
export const host=''
export default base 