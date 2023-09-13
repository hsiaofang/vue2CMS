// 公共的請求方法
import base from './base'
import axios from '@/utlis/request'

const api ={
    // 首頁數據統計的接口
    totalInfo(){
        return axios.get(base.totalInfo)
    },

    // 首頁訂單數據
    orderInfo() {
        return axios.get(base.orderInfo)
    },

    // 圖表數據
    format(){
        return axios.get(base.format)
    },
}

export default api