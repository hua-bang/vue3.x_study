import {createRouter, createWebHashHistory} from "vue-router";
import SetUp from "../components/SetUp";

const routerHistory = createWebHashHistory();

const routes = [
    {
        path: "/home",
        component: () => import("../components/Home")
    },
    {
        path: "/SetUpUse",
        component: SetUp
    },
    {
        path: "/SetUp",
        component: () => import("../views/Demo"),
        children: [
            {
                path: "prop",
                component: () => import("../views/setUp/Component")
            }
        ]
    },
    {
        path: "/Composition",
        component: () => import("../views/Composition")
    },
    {
        path: "/Computed",
        component: () => import("../views/Computed")
    },
    {
        path: "/Watch",
        component: () => import("../views/Watch")
    },
    {
        path: "/lifeHook",
        component: () => import("../views/LifeHook")
    },
    {
        path: "/provide_inject",
        component: () => import("../views/Provide_Inject")
    }
];

const router = createRouter({
    history: routerHistory,
    routes
});

export default router;