# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###
1. vue create client
如果vue版本是2vuex就要3
2. 按需求安裝Element
npm install babel-plugin-component -D
3. vue add element
npm i axios -S
npm i query-string
npm i normalize.css

Less樣式文件
npm install less-loader --save-dev



### 後端Node.js

1. npm i express mysql -S
    index.js導入模塊，並監聽port
    啟動：node.index.js 或者 nodemon
2. xampp軟件
3. 下載後台依賴 
    npm i multer -S
    npm i mockjs -S

## echarts
1. 安裝 npm install echarts --save
2. 導入echarts模塊
    ```js
        import * as echarts from 'echarts';
        <div id="main" style='設置大小=儲存圖表'></div>
    ```
3. 準備dom元素容器
4. 實例化配置圖表
    ```js
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
            name: '销量', 
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
            }
        ]
        });
    ```

### 產品管理-產品列表
1. 佈局
2. 數據獲取
3. 到componets裡寫分頁