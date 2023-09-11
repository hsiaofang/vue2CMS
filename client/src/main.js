import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'normalize.css'
import './plugins/element.js';
import '@/assets/css/base.css';
// import api from './api'; //api掛到全局來
// Vue.prototype.$api = api; //掛到vue的原型上
Vue.config.productionTip = false;
// 創建 應用實例
new Vue({
    router,
    store,
    render: h => h(App) //渲染根組件
}).$mount('#app');
//# sourceMappingURL=main.js.map
