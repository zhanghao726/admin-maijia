import Vue from 'vue'
import Router from 'vue-router'
// 选择测试或生产环境
const _import = require('./_import_' + process.env.NODE_ENV);
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
 * alwaysShow: true               当设置 true 的时候永远会显示根菜单，不设置的情况下只有当子路由个数大于一个时才会显示根菜单
 *                                当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式。只有一个时会将那个子路由当做根路由
 * redirect: noredirect           当设置 noredirect 的时候该路由不会在面包屑导航中出现
 * name:'router-name'             设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
 * meta : {
    roles: ['admin','editor']    设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }complexTabl
 **/
// constantRouterMap 代表那些不需要动态判断权限的路由，如登录页，404，等通用页面。
export const constantRouterMap = [
    {path: '/login', component: _import('login/index'), hidden: true},
    {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
    {path: '/404', component: _import('errorPage/404'), hidden: true},
    {path: '/401', component: _import('errorPage/401'), hidden: true},
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: _import('dashboard/index'),
            name: 'dashboard',
            meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
        }]
    },

];

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

// asyncRouterMap 代表那些需求动态判断权限并通过 addRouters 动态添加的页面
export const asyncRouterMap = [
    // todo 解决router里面inactive而没有重新载入的问题

    // 内部测试
    // {
    //     path: '/testManage',
    //     component: Layout,
    //     redirect: '/testManage/index',
    //     alwaysShow: true,
    //     meta: {
    //         title: 'testManageTitle',
    //         icon: 'test',
    //         roles: ['admin', 'editor']
    //     },
    //     children: [
    //         { // 获取和设置数据
    //             path: 'testValueList',
    //             component: _import('testManage/testValueList'),
    //             name: 'testValueList',
    //             meta: {
    //                 title: 'testValueListTitle',
    //                 roles: ['admin', 'editor']
    //             }
    //         },
    //     ]
    // },


    // 404页面需要最后加载
    {path: '*', redirect: '/404', hidden: true}
];
