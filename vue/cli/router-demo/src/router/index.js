import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
const User = () => import("../views/User");
const MyOrder = () => import("../views/MyOrder");
const MySetting = () => import("../views/MySetting");

const routerHistory = createWebHistory()
const routes = [
    {
        path: "/",
        component: Home,
        meta: {title:"home"},
        beforeEnter(to) {
            console.log(`home---${to.fullPath}`)
        }
    },
    {
        path: "/about",
        // alias: "/a",
        alias: ["/a","/ab","/abo"],
        component: () => import("../views/About"),   //懒加载
        meta: {title:"about"}
    },
    {
        path: "/user",
        component: User,
        meta: {title:"user"},
        children: [
            {
                path: "",
                component: MyOrder
            },
            {
                path: "order",
                component: MyOrder,
            },
            {
                path: "setting",
                component: MySetting,
            }
        ]
    },
    {
        path: "/lesson/:id",
        component: () => import("../views/Lesson"),
        meta: {title:"lesson"},
        beforeEnter(to) {
            console.log(`lesson---${to.fullPath}`)
        }
    },
    {
        name: "page",
        path: "/page",
        component: () => import("../views/Page"),
        meta: {title:"page"}
    },
    {
        path: "/userHome",
        redirect: "/",
        meta: {title:"userHome"}
    },
    {
        path: "/userLesson/:id",
        redirect: to => `/lesson/${to.params.id}`
    },
    {
        path: "/userPage",
        redirect: {name:"page"}
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});

router.beforeEach((to) => {
    document.title = to.meta.title;
    return true;
})

router.afterEach((to) => {
    console.log(to);
})

export default router;