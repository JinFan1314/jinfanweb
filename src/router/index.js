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
const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-content")


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
export const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: '/index',
                hidden:false,
                name: '首页',
                icon: 'el-icon-s-home',
                component: index
            },
            {
                path: '/content',
                name:'内容',
                icon: 'el-icon-s-order',
                hidden:false,
                component: rightView,
                children:[
                    {
                        path:'post-article',
                        name:'发表文章',
                        hidden:false,
                        icon: 'el-icon-document',
                        component: postArticle,
                    },
                    {
                        path:'manage-article',
                        name:'文章管理',
                        hidden:false,
                        icon: 'el-icon-s-order',
                        component: articleManage,
                    },
                    {
                        path:'manage-image',
                        hidden:false,
                        name:'图片管理',
                        icon: 'el-icon-picture',
                        component: imageManage,
                    },
                    {
                        path:'manage-comment',
                        name:'评论管理',
                        hidden:false,
                        icon: 'el-icon-s-comment',
                        component: commentManage,
                    }

                ]
            },
            {
                path: '/user',
                name:'用户',
                hidden:false,
                icon: 'el-icon-s-custom',
                component: rightView,
                children:[
                    {
                        path:'list',
                        name:'用户列表',
                        hidden:false,
                        icon: 'el-icon-more',
                        component: list,
                    },
                    {
                        path:'reset-password',
                        hidden:false,
                        name:'密码重置',
                        icon: 'el-icon-refresh-left',
                        component: resetPassword,
                    },
                    {
                        path:'email',
                        name:'邮箱管理',
                        hidden:false,
                        icon: 'el-icon-s-finance',
                        component: email,
                    },
                    {
                        path:'info',
                        name:'用户信息',
                        hidden:false,
                        icon: 'el-icon-info',
                        component: info,
                    },


                ]
            },
            {
                path: '/operation',
                name:'运营',
                hidden:false,
                icon: 'el-icon-s-operation',
                component: rightView,
                children:[
                    {
                        path:'category',
                        name:'分类管理',
                        hidden:false,
                        icon:'el-icon-s-tools',
                        component: categoryManage,
                    },
                    {
                        path:'loop',
                        name:'轮播图管理',
                        hidden:false,
                        icon:'el-icon-picture-outline',
                        component: loopManage,
                    }
                ]
            },
            {
                path: '/settings',
                name:'设置',
                hidden:false,
                icon:'el-icon-setting',
                component: rightView,
                children:[
                    {
                        path:'web-size-info',
                        name:'网站信息',
                        icon:'el-icon-info',
                        hidden:false,
                        component: webSizeInfo,
                    },
                    {
                        path:'friend-link',
                        name:'友情链接',
                        icon:'el-icon-link',
                        hidden:false,
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