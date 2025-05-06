import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginAdmin from "./checkLoginAdmin.js";
const routes = [
    {
        path: "/",
        component: () => import("../layouts/wrapper/index.vue"),
        redirect: "/admin",
        children: [
            {
                path: "admin",
                component: () => import("../view/Admin/Dashboard.vue"),
                beforeEnter: checkLoginAdmin,
            },

            {
                path: "admin/quan-li-bao-cao-su-co",
                name: "IncidentReports",
                component: () => import("../view/Admin/IncidentReports.vue"),
                beforeEnter: checkLoginAdmin,
            },

            {
                path: "admin/quan-ly-lich-su",
                name: "History",
                component: () => import("../view/Admin/History.vue"),
                beforeEnter: checkLoginAdmin,
            },

            {
                path: "admin/quan-ly-camera",
                name: "Cameras",
                component: () => import("../view/Admin/Cameras.vue"),
                beforeEnter: checkLoginAdmin,
            },
        ]
    },

    {
        path: "/dang-nhap",
        component: () => import("../view/Admin/Login.vue"),
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router