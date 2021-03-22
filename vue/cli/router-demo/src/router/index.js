import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
const User = () => import("../views/User");
const MyOrder = () => import("../views/MyOrder");
const MySetting = () => import("../views/MySetting");

const routerHistory = createWebHistory()
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: () => import("../views/About")   //懒加载
    },
    {
        path: "/user",
        component: User,
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
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});

export default router;