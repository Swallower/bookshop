import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import login from '../views/login.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
import mysite from '../views/mysite.vue'
import addsite from '../views/addsite.vue'
import shop from '../views/shop.vue'
import rankList from '../views/rankList.vue'
import  updateSite from '../views/updateSite.vue'

Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  {path:'/',name:'index',component:index},
  {path:'/login',name:'login',component:login},
  {path:'/register',name:'register',component:register},
  {path:'/mysite',name:'mysite',component:mysite},
  {path:'/addsite',name:'addsite',component:addsite},
  {path:'/shop',name:'shop',component:shop},
  {path:'/rankList',name:'rankList',component:rankList},
  {path:'/updateSite',name:'updateSite',component:updateSite},
]

const router = new VueRouter({
  routes  
  // mode:'hash'
})

export default router
