// 接口統一地址，讓整個應用程序可以重用，方便修改調整
const base = {
    totalInfo:'/home/dataCount', //首頁統計數據
    orderInfo: "/home/orderInfo", //訂單數據
    format: "api/home/format", //折線數據
}

// 單一導出
export const host=''
export default base 