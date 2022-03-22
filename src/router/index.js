import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Sinatv from '../views/Sinatv.vue'
import room from '../views/room.vue'
import Add_Merchandise from '../views/Add_Merchandise.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sinatv',
    name: 'Sinatv',
    component: Sinatv,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  //创建直播间
  {
    path: '/room',
    name: 'room',
    component: room
  },
  //添加商品
  {
    path: '/Add_Merchandise',
    name: 'Add_Merchandise',
    component: Add_Merchandise
  },
  //左侧菜单
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
    children: [
      {
        path: '/Sinatv',
        name: 'Sinatv',
        component: Sinatv,
      },
      
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
