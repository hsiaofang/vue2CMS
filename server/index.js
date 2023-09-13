// const express = require('express')
// const app = express()
const express = require('express');
const app = express();

const cors = require('cors');
// 使用 CORS 中間件
app.use(cors());

// post請求表單數據
// app.use(express.urlencoded({extend: true}))
// app.use(bodyParser.urlencoded({ extended: false }));



// 接口
app.get('/',(req,res)=>{
    res.send('hello node.js ')
})


// 路由--產品
const router = require('./router')
// 訂單
const order = require('./order')
// 廣告
const advert = require('./advert')

app.use('/',router)
app.use('/order',order)
app.use('/advert',advert)


// 監聽
app.listen(7788,()=>{
    console.log('7788')
})
