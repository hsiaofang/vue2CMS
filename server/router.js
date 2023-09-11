const express = require("express");
const router = express.Router();

// 導入數據庫
const sqlFn = require("./mysql");

// 導入mock.js，用於生成模擬數據，npm i mockjs -S
const Mock = require("mockjs");

// 數據
const data = require("./data/format.json");

const adminLogin = require("./login/data/admin_login.json");
const adminPermission = require("./login/data/admin_permission.json");
const vipPermission = require("./login/data/vip_permission.json");

// 登入（管理員，vip帳號）
router.post("/login", (req, res)=>{
    const username = req.body.user;
    const pwd = req.body.pwd;
    if (username === "admin") {
        // 管理員
        res.send(adminLogin)
    } else{
        res.send(vipLogin)
    }
})

// 用戶權限
router.get("/permission", (req,res)=>{
    const token = req.query.token;
    if (toekn === 'admin') {
        res.send(adminPermission)
    } else {
        res.send(vipPermission)
    }
})

// 首頁
// router.get("/home/dataCount", (req, res)=>{
//     res.send(
//         Mock.mock({
//             info: "數據統計",
//             success: true,
//             data: {
//                 list:{
//                     id: 1,
//                     "viewsTotal|10000-100000":1,
//                     "views|1-3000": 1,
//                     viewsFun: function () {
                        
//                     }
//                 }
//             }
//         })
//     );
// });



module.exports = router 