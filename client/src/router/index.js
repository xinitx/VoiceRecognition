// 路由器对象模块
//需要对项目路由进行拆分
//要知道是同级路由还是嵌套路由（即确定是兄弟关系还是父子关系）
//$router:路由器对象，包含一些操作路由的功能函数，来实现编程式导航（跳转路由）
//$toute:当前路由对象，一些当前路由信息数据的容器，path/meta/query/params

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home';
import Discuss from '../pages/Discuss/Discuss';
import Course from '../pages/Course/Course';
import Message from '../pages/Message/Message';
import Profile from '../pages/Profile/Profile';

import Login from '../pages/Login/Login';

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/home',
      component: Home,//返回路由组件的函数
      meta: {
        showFooter: true
      }
    },
    {
      path: '/discuss',
      component: Discuss,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/course',
      component: Course,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {//登录组件是一级路由
      path: '/login',
      component: Login
    },

  ]
})