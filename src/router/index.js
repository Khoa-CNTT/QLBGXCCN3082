import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginAdmin from "./checkLoginAdmin.js";
import checkLoginUser from "./checkLoginUser.js";
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
            {
                path: "admin/quan-ly-khach-vang-lai",
                component: () => import("../view/User/KhachVangLai.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-ly-xe/them-xe",
                name: "AddVehicle",
                component: () => import("../view/Admin/AddVehicle.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-ly-xe",
                name: "Vehicles",
                component: () => import("../view/Admin/Vehicles.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-ly-giao-dich",
                name: "Transactions",
                component: () => import("../view/Admin/Transactions.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-li-bai-giu-xe",
                name: "ParkingManagement",
                component: () => import("../view/Admin/ParkingManagement.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-ly-khach-hang",
                name: "Residents",
                component: () => import("../view/Admin/Residents.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/quan-ly-bao-cao",
                name: "Reports",
                component: () => import("../view/Admin/Reports.vue"),
                beforeEnter: checkLoginAdmin,
            },
            {
                path: "admin/phan-quyen",
                component: () => import("../view/Admin/PhanQuyen.vue"),
                beforeEnter: checkLoginAdmin,
            },
        ]
    },

    {
        path: "/user",
        component: () => import("../layouts/wrapper/clientLayout.vue"),
        redirect: "/user/profile",
        children: [
          {
            path: "profile",
            component: () => import("../view/User/Profile.vue"),
            beforeEnter: checkLoginUser,
          },
        //   {
        //     path: "bao-cao",
        //     component: () => import("../views/User/Reports.vue"),
        //     beforeEnter: checkLoginUser,
        //   },
        //   {
        //     path: "lich-su",
        //     component: () => import("../views/User/History.vue"),
        //     beforeEnter: checkLoginUser,
        //   },
        //   {
        //     path: "thanh-toan",
        //     component: () => import("../views/User/Transaction.vue"),
        //     beforeEnter: checkLoginUser,
        //   },
        //   {
        //     path: "quan-ly-xe",
        //     component: () => import("../views/User/MyVehicles.vue"),
        //     beforeEnter: checkLoginUser,
        //   },
        //   {
        //     path: "quan-ly-cho-xe",
        //     component: () => import("../views/User/ParkingManger.vue"),
        //     beforeEnter: checkLoginUser,
        //   },
        //   {
        //     path: "thanh-toan-online",
        //     component: () => import("../views/User/ThanhToanOnl.vue"),
        //     // beforeEnter: checkLoginUser,
        //   },
          
        ],
      },

    {
        path: "/dang-nhap",
        component: () => import("../view/Admin/Login.vue"),
    },

    {
        path: "/user/login",
        component: () => import("../view/User/Login.vue"),
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router