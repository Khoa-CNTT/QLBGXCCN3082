import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [


    {
        path : '/admin',
        component: ()=>import('../components/Admin/QuanLy/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/xe',
        component: ()=>import('../components/Admin/QuanLy/Xe/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/camera',
        component: ()=>import('../components/Admin/QuanLy/Camera/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/lich-su-ra-vao',
        component: ()=>import('../components/Admin/QuanLy/LichSuRaVao/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/can-ho',
        component: ()=>import('../components/Admin/QuanLy/CanHo/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/bao-cao-su-co',
        component: ()=>import('../components/Admin/QuanLy/BaoCaoSuCo/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/bao-cao-khach-vang-lai',
        component: ()=>import('../components/Admin/QuanLy/BaoCaoKhachVangLai/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/cu-dan',
        component: ()=>import('../components/Admin/QuanLy/CuDan/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/chuc-nang',
        component: ()=>import('../components/Admin/QuanLy/ChucNang/ChucNang.vue'),
        meta    :   {layout : 'default'}
    },

    {
        path : '/admin/chuc-vu',
        component: ()=>import('../components/Admin/QuanLy/ChucVu/chucvu.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/quan-ly-tai-khoan',
        component: ()=>import('../components/Admin/QuanLy/QuanLyAdmin/quanlyadmin.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/chi-tiet-chuc-vu',
        component: ()=>import('../components/Admin/QuanLy/ChiTietChucVu/chitietchucvu.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/',
        component: ()=>import('../components/CuDan/TrangChu/index.vue'),
        meta    :   {layout : 'client'}
    },

    {
        path : '/cu-dan/vi',
        component: ()=>import('../components/CuDan/Vi/index.vue'),
        meta    :   {layout : 'client'}
    },

    {
        path : '/cu-dan/giao-dich',
        component: ()=>import('../components/CuDan/GiaoDich/index.vue'),
        meta    :   {layout : 'client'}
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router