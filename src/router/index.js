import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/login',component:() => import('@/views/login/LoginPage.vue')}, //异步加载，登录页
    {
      path: '/',
      component:() =>import('@/views/layout/LayoutContainer.vue'),
      redirect:'article/manage',
      children:[
        {
          path:'/article/manage',
          component:() => import('@/views/article/ArticleManage.vue')
        },
        {
          path:'/article/channel',
          component:() => import('@/views/article/ArticleChannel.vue')
        },
        {
          path:'/user/profile',
          component:() => import('@/views/user/UserProfile.vue')
        },
        {
          path:'/user/avatar',
          component:() => import('@/views/user/UserAvatar.vue')
        },
        {
          path:'/user/password',
          component:() => import('@/views/user/UserPassword.vue')
        },
      ]
    }
  ],
})

router.beforeEach((to)=>{
  //判断有没有token，是不是访问的登录页，不是就不放行
  const useStore = useUserStore()
  if(!useStore.token&&to.path !== '/login') return 'login'
})

export default router
