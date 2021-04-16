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
    component: Home,
    meta: {
      title: "图书首页"
    }
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
    component: Category,
    meta: {
      title: "图书分类"
    }
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    meta: {
      title: "图书详情"
    }
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: shopCart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    meta: {
      title: "个人中心"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta.title
})

export default router
