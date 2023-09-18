// 連接數據庫，安裝mysql，創建連接
const mysql = require('mysql')

// 創建數據庫連接
const client = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ego',
})



// 封裝數據庫操作語句 sql語句，參數數組arr，callback成功函數結果
function sqlFn(sql, arr, callback){
    // 使用 MySQL 客戶端對象 client 執行 SQL 查詢
    client.query(sql, arr, function(err, result){
        if(err) { // 如果發生錯誤，err 將包含錯誤信息
            console.log('數據庫語句錯誤'); // 在控制台輸出錯誤信息
            return; // 結束函數的執行
        }
        callback(result); // 如果沒有錯誤，調用回調函數，並將查詢結果傳遞給回調函數
    });
}

// 導出模組
module.exports = sqlFn