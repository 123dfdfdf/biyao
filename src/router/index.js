import { createRouter, createWebHashHistory } from 'vue-router'

const Index = ()=>import("../views/index.vue")
const Dailynew = ()=>import("../views/dailyNew.vue")
const Searchresult = ()=>import("../views/searchResult.vue")
const Category = ()=>import("../views/category.vue")
const Detail = ()=>import("../views/detail.vue")
const Supplier = ()=>import("../views/supplier.vue")
const Login = ()=>import("../views/login.vue")
const Shopcar = ()=>import("../views/shopcar.vue")


const routes = [
    { path: '/', redirect: "/index" },
    { path: '/index', component: Index },
    { path: '/dailynew', component: Dailynew },
    { path: '/searchresult', component: Searchresult },
    { path: '/category', component: Category },
    { path: '/detail', component: Detail },
    { path: '/supplier', component: Supplier },
    { path: '/login', component: Login },
    { 
      path: '/shopcar', 
      component: Shopcar,
      meta: { 
        needLogin:true
      }
    },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  if (to.meta.needLogin) {//需要登录
    if (sessionStorage.getItem("isLogin")) {
      next()
    }else{
      alert("还没登录")
    }
  }else{
    next()
  }
})
export default router
