import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register') //路由懒加载
  }
]

const router = new Router({
  //路由模式，默认值 'hash' 使用井号（ # ）作路由，值 'history' 可利用 History API 来完成页面跳转且无须重新加载
  mode: 'history',
  routes
})

export default router