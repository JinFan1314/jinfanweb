import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

/*导入内容*/
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
/*const Home = () =>import("@/components/home")
const Article = () =>import("@/components/article")*/

/*登录页面*/
const Login = () => import("@/page/login/login")

/*内容部分*/
const postArticle = () => import("@/page/content/post-article")
const articleManage = () => import("@/page/content/manage-article")
const imageManage = () => import("@/page/content/manage-image")
const commentManage = () => import("@/page/content/manage-comment")

/*首页*/
const index = () => import("@/page/dashboard/index")

// 运营
const categoryManage = () => import("@/page/operation/manage-category")
const loopManage = () => import("@/page/operation/manage-loop")

// 设置
const friendLink = () => import("@/page/settings/friend-link")
const webSizeInfo = () => import("@/page/settings/sebsize-info")

// 用户
const email = () => import("@/page/user/email")
const info = () =>import("@/page/user/info")
const list = () =>import("@/page/user/list")
const resetPassword = () =>import("@/page/user/reset-password")
/*布局*/
const baseView = () => import("@/page/layout/base-view")
const rightView = () => import("@/page/layout/right-content")


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: '/index',
                component: index
            },
            {
                path: '/content',
                component: rightView,
                children:[
                    {
                        path:'post-article',
                        component: postArticle,
                    },
                    {
                        path:'manage-article',
                        component: articleManage,
                    },
                    {
                        path:'email',
                        component: email,
                    },
                    {
                        path:'info',
                        component: info,
                    },


                ]
            },
            {
                path: '/user',
                component: rightView,
                children:[
                    {
                        path:'list',
                        component: list,
                    },
                    {
                        path:'reset-password',
                        component: resetPassword,
                    },
                    {
                        path:'manage-image',
                        component: imageManage,
                    },
                    {
                        path:'manage-comment',
                        component: commentManage,
                    },


                ]
            },
            {
                path: '/operation',
                component: rightView,
                children:[
                    {
                        path:'category',
                        component: categoryManage,
                    },
                    {
                        path:'loop',
                        component: loopManage,
                    }
                ]
            },
            {
                path: '/settings',
                component: rightView,
                children:[
                    {
                        path:'web-size-info',
                        component: webSizeInfo,
                    },
                    {
                        path:'friend-link',
                        component: friendLink,
                    }
                ]
            }
        ]
    },
    //登录
    {
        path: '/login',
        component: Login
    }

]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;