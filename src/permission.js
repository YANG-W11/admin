import router from '@/router' // 引入路由实例
import store from '@/store' // 引入vuex store实例
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

const whitelist = ['/login', '/404']
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') { // 判断是不是去登录页
      next('/')
    } else {
      next()
    }
  } else {
    if (whitelist.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
})

router.afterEach(function() {
  NProgress.done() // 关闭进度条
})
