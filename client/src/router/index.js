import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout/LayoutView.vue';
import Login from '@/views/login/LoginView.vue';
import Home from '@/views/home/HomeView.vue';
// JS中的動態導入語法，import異步加載模塊
// 將模塊按需求導入可以提高性能，還允許將代碼拆分成多個小塊，可根據路由或用戶進行的操作進行加載，提高可維護性。
const Product = () => import('@/views/product/ProductView.vue');
const List = () => import('@/views/product/list/ListView.vue');
const Category = () => import('@/views/product/category/CategoryView.vue');
// 訂單管理
const Order = () => import('@/views/order/OrderView.vue');
const Orderlist = () => import('@/views/order/list/OrderlistView.vue');
const Collect = () => import('@/views/order/collect/CollectView.vue');
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/product',
                name: 'product',
                // 採用異步加載形式
                component: Product,
                // 三級路由
                children: [
                    {
                        path: '/list',
                        name: 'list',
                        component: List,
                    },
                    {
                        path: '/category',
                        name: 'category',
                        component: Category,
                    },
                ]
            },
            {
                path: '/order',
                name: 'order',
                component: Order,
                // 三級路由
                children: [
                    {
                        path: '/order-list',
                        name: 'order-list',
                        component: Orderlist,
                    },
                    {
                        path: '/order-collect',
                        name: 'collect',
                        component: Collect,
                    },
                ]
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map