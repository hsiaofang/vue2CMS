const express = require('express')
const app = express()

// post請求表單數據
// app.use(express.urlencoded({extend: true}))
// app.use(bodyParser.urlencoded({ extended: false }));


// 街口
app.get('/',(req,res)=>{
    res.send('hello node.js ')
})


// 路由--產品
const router = require('./router')

app.use('/',router)


// 監聽
app.listen(7788,()=>{
    console.log('7788')
})
