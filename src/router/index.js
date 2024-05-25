import {createRouter,createWebHashHistory} from 'vue-router'
import { Toast } from 'vant'
const router = createRouter({
    history:createWebHashHistory(),
    linkActiveClass: 'nav-color',
    routes:[
        {
            path:'/',
            component:()=>import('../views/home/index.vue')
        },
        {
            path:'/home',
            component:()=>import('../views/home/index.vue')
        },
        {
            path:'/cart',
            component:()=>import('../views/cart/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/mine',
            component:()=>import('../views/mine/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/order',
            component:()=>import('../views/order/index.vue'),
            meta:{
              isAuth:true
            }
        },
        {
            path:'/store',
            component:()=>import('../views/store/index.vue')
        },
        {
            path:'/createorder',
            component:()=>import('../views/createorder/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/address',
            component:()=>import('../views/address/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/addressedit',
            component:()=>import('../views/addressEdit/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/userinfoedit',
            component:()=>import('../views/userinfoedit/index.vue'),
            meta:{
                isAuth:true
              }
        },
        {
            path:'/login',
            component:()=>import('../views/login/index.vue')
        },
        {
            path:'/register',
            component:()=>import('../views/register/index.vue')
        }
    ]
})
// router.beforeEach((to,from,next)=>{
// if(to.meta.isAuth){
//     if(localStorage.isLogin === 'login'){
//         next()
//     }else{
//         next('/login')
//         Toast("请先去登陆")
//     }
// }else{
//     next()
// }

// })
export default router
