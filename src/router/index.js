import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import home_page from '@/page/home_page'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: index,
         redirect:'/home_page',
        children:[
          {//服务商管理
            path: '/home_page',
            name: 'home_page',
            component: home_page,
            beforeEnter: (to, from, next) => {
              document.title = '首页'
              next()
            }
          },
        ]
      }
  ],
  mode:'history'
})
