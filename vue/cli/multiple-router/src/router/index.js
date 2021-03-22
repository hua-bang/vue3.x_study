import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
const About = () => import("../views/About");

const routerHistory = createWebHistory();

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "",
                component: () => import("../views/Home/Home-1")
            },
            {
                path: "Home-1",
                component: () => import("../views/Home/Home-1")
            },
            {
                path: "Home-2",
                component: () => import("../views/Home/Home-2")
            }
        ]
    },
    {
        path: "/about",
        component: About,
        children: [
            {
                path: "",
                component: () => import("../views/About/About-1"),
            },
            {
                path: "about-1",
                component: () => import("../views/About/About-1"),
                children: [
                    {
                        path: "",
                        component: () => import("../views/About/About-1/About-1-1"),
                    },
                    {
                        path: "about-1-1",
                        component: () => import("../views/About/About-1/About-1-1"),
                    },
                    {
                        path: "about-1-2",
                        component: () => import("../views/About/About-1/About-1-2"),
                    }
                ]
            },
            {
                path: "about-2",
                component: () => import("../views/About/About-2")
            }
        ]
    }
];

const router = createRouter({
    history: routerHistory,
    routes
});

export default router;
