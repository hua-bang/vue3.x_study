import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Category = () => import("../views/category/Category");
const Detail = () => import("../views/detail/Detail");
const profile = () => import("../views/profile/Profile");
const shopCart = () => import("../views/shopCart/ShopCart");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: shopCart
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
