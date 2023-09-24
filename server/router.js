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
// router.post("/login", (req, res) => {
//   const username = req.body.user;
//   const pwd = req.body.pwd;
//   if (username === "admin") {
//     // 管理員
//     res.send(adminLogin)
//   } else {
//     res.send(vipLogin)
//   }
// })

// 用戶權限
// router.get("/permission", (req, res) => {
//   const token = req.query.token;
//   if (toekn === 'admin') {
//     res.send(adminPermission)
//   } else {
//     res.send(vipPermission)
//   }
// })


// 首頁
router.get("/home/dataCount", (req, res) => {
  res.send(
    Mock.mock({
      info: "數據統計",
      success: true,
      status: 200,
      data: {
        list: {
          id: 1,
          "viewsTotal|10000-100000": 1,
          "views|1-30000": 1,
          viewsFun: function () {
            if (this.viewsTotal < this.views) {
              [this.viewsTotal, this.views] = [this.views, this.viewsTotal];
            }
          },
          "saleTotal|1000-100000": 1,
          "sale|1-100000": 1,
          viewsFun2: function () {
            if (this.saleTotal < this.sale) {
              [this.saleTotal, this.sale] = [this.sale, this.saleTotal];
            }
          },
          "payTotal|1000-999999": 1,
          "pay|1-9999": 1,
          viewsFun3: function () {
            if (this.payTotal < this.pay) {
              [this.payTotal, this.pay] = [this.pay, this.payTotal];
            }
          },
          "collectTotal|99-99999": 1,
          "collect|0-9999": 1,
          viewsFun4: function () {
            if (this.collectTotal < this.collect) {
              [this.collectTotal, this.collect] = [
                this.collect,
                this.collectTotal,
              ];
            }
          },
        },
      },
    })
  );
});


// 首頁折線圖數據統計
// router.get("/home/format", (req, res) => {
//   res.send(data);
// });


// 首頁 -今日的統計
router.get("/home/orderInfo", (req, res) => {
  res.send(
    Mock.mock({
      info: "訂單統計訊息",
      success: true,
      list: {
        "orderCount|1-100000": 1,
        "curOrderCount|1-1000": 1,
        count: function () {
          if (this.curOrderCount > this.orderCount) {
            [this.orderCount, this.curOrderCount] = [
              this.curOrderCount,
              this.orderCount,
            ];
          }
        },
        "money|1-200000": 1,
        "curMoney|1-1000": 1,
        moneyfun: function () {
          if (this.curMoney > this.money) {
            [this.money, this.curMoney] = [this.curMoney, this.money];
          }
        },
        "collect|1-99999": 1,
        "curCollect|1-999": 1,
        collectfun: function () {
          if (this.curCollect > this.collect) {
            [this.collect, this.curCollect] = [this.curCollect, this.collect];
          }
        },
        department: "",
        branchSchool: "",
      },
    })
  );
});

// 商品列表，參數: page頁碼
router.get("/goods/projectList", (req, res) => {
  // const page = req.query.page || 1; //如果請求中沒有參數或為空，則默認為1
  const sqlLen = "select * from project where id";
  sqlFn(sqlLen, null, (data) => { 
    let len = data.length;
    console.log(len)
    const sql = 
    // "select * from project order by id desc limit 8 offset" + (page - 1) * 8;
    "select * from project order by id desc limit 8 offset 0";
    sqlFn(sql, null, (result) => {
      if (result.length > 0 ) {
        res.send({
          status: 200,
          data: result,
          pageSize: 8,
          total: len,
        });
      } else {
        res.send({
          status: 500,
          msg: "無",
        });
      }
    });
  });
});

// 搜尋功能，參數：search
router.get("/goods/projectList", (req, res) => {
var search = req.query.search;
// title，sellPoint的欄位若包含我搜尋的字，做模糊查詢
const sql = "select * from project where concat(`title`, `selPoint`, `descs`) like'%' "+ search + "%";
sqlFn(sql, null, (result) => {
  if(result.length > 0){
    res.send({
      status: 200,
      result,
    });
  } else {
    res.send({
      status: 500,
      msg: "暫無數據",
    });
  }
});
});


module.exports = router 