// 對axios進行第二次封裝
// 先導入需要的axios模塊
import axios from 'axios';
import qs from 'query-string';

// 自定義配置新建一個axios實例 axios.create([config])
const instance = axios.create({
    baseURL: 'http://localhost:7788',
    timeout: 5000,
});
// 添加請求攔截器
instance.interceptors.request.use(function (config) {
    if (config.method == 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});



// 添加響應攔截器 //404接口錯誤，500 505服務器錯誤，300重定向，200成功
// instance.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     console.log('error', error);
//     const { response } = error;
//     console.log(1)
    
//     console.log(2)
//     errorHandle(response.status, response.info);
//     // return Promise.reject(error);
// });


// function errorHandle(status, info) {
//     switch (status) {
//         case 400:
//             console.log("400-錯誤請求");
//             break;
//         case 401:
//             console.log("401-伺服器收到未經身份驗證的請求");
//             break;
//         case 403:
//             console.log("403-服務器理解請求，但是拒絕執行它");
//             break;
//         case 404:
//             console.log("404-請求失敗，接口錯誤");
//             break;
//         case 500:
//             console.log("500-伺服器出了問題");
//             break;
//         case 503:
//             console.log("503-伺服器不可用");
//             break;
//         case 504: 
//             console.log("504-伺服器花費時間太長");
//             break;
//         default:
//             console.log(info);
//             break;
//     }
// }

export default instance;
