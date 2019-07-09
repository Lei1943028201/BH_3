import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../layout/TheHome"; // 页面整体布局
Vue.use(Router)

/**
 * 1、roles:后台返回的权限结构;
 *
 */
//手动跳转的页面白名单
const whiteList = [
    '/'
];

//默认不需要权限的页面
export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/index/index',
        hidden: true
    },
    {path: '/login', name: 'login', component: () => import('@/page/login'), hidden: true},
    {path: '/404', component: () => import('@/page/errorPage/404'), hidden: true},
    {path: '/401', component: () => import('@/page/errorPage/401'), hidden: true},
    {
        path: '/index',
        name: 'index',
        component: Layout,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'index',
                meta: {
                    title: '首页',
                },
                component: () => import('@/page'),
            }
        ]
    }
]

//注册路由
export default new Router({
    // mode: 'history', //后端支持可开
    routes: constantRouterMap
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [
    {
        path: '/permission',
        name: 'permission',
        meta: {
            title: '权限设置',
            icon: 'fa-cogs',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
    },
    {
        path: '/error',
        component: Layout,
        name: 'errorPages',
        meta: {
            title: '错误页面',
            icon: 'fa-exclamation-triangle'
        },
        children: [
            {
                path: '401',
                name: 'page401',
                component: () => import('@/page/errorPage/401'),
                meta: {
                    title: '401',
                    noCache: true
                }
            },
            {
                path: '404',
                name: 'page404',
                component: () => import('@/page/errorPage/404'),
                meta: {
                    title: '404',
                    noCache: true
                }
            }
        ]
    },
    {path: '*', redirect: '/404', hidden: true}
];

/**
 *  路由设置要求：
 * 1、该路由有子菜单,可以设置多层嵌套路由children;如果没有子菜单,不需要设置children;通过item.children.length来判断路由的级数;
 * 2、登录成功后,定位到系统首页时,需要加载页面整体布局组件Layout并进行子路由定向加载;
 *
 * 按需加载路由组件的2种方法：
 * 1、component: () => import('@/page/login')
 * 2、component:resolve => require(['@/page/fundPosition'], resolve)
 *
 *
 *
 * 什么情况下，路由会定位到404页面?
 * 路由中redirect:'',不起作用？
 * 三级子菜单要在顶部展示？
 *
 *
 *
 */