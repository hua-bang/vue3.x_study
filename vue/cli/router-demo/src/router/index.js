import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routerHistory = createWebHistory()
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: () => import("../views/About")   //懒加载
    }
];
const router = createRouter({
    history: routerHistory,
    routes,
});

export default router;