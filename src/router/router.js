export default {
    mode: 'history',
    routes: [{
            path: '/home',
            component: () => import("@/views/home"),
            name: '首页'
        },
        {
            path: '/news',
            component: () => import("@/views/news")
        },
        {
            path: '/userlist',
            component: () => import("@/views/userList")
        },
        {
            path: '/userAdd',
            component: () => import("@/views/userAdd")
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
}