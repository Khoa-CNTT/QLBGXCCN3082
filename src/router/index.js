import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [


    {
        path : '/admin',
        component: ()=>import('../components/Admin/QuanLy/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta    :   {layout : 'auth'}
    },
    {
        path : '/admin/dang-ky',
        component: ()=>import('../components/Admin/DangKy/index.vue'),
        meta    :   {layout : 'auth'}
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
        path : '/admin/chi-tiet-bai-xe',
        component: ()=>import('../components/Admin/QuanLy/ChiTietBaiXe/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/bai-xe',
        component: ()=>import('../components/Admin/QuanLy/BaiXe/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/vi-tri-cam',
        component: ()=>import('../components/Admin/QuanLy/ViTriDatCam/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/loai-xe',
        component: ()=>import('../components/Admin/QuanLy/LoaiXe/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/giao-dich',
        component: ()=>import('../components/Admin/QuanLy/GiaoDich/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/thong-bao',
        component: ()=>import('../components/Admin/QuanLy/ThongBao/index.vue'),
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
        component: ()=>import('../components/Admin/QuanLy/ChucNang/index.vue'),
        meta    :   {layout : 'default'}
    },

    {
        path : '/admin/chuc-vu',
        component: ()=>import('../components/Admin/QuanLy/ChucVu/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/quan-ly-tai-khoan',
        component: ()=>import('../components/Admin/QuanLy/QuanLyAdmin/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/admin/chi-tiet-chuc-vu',
        component: ()=>import('../components/Admin/QuanLy/ChiTietChucVu/index.vue'),
        meta    :   {layout : 'default'}
    },
    {
        path : '/',
        component: ()=>import('../components/CuDan/TrangChu/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/giao-dich',
        component: ()=>import('../components/CuDan/GiaoDich/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/dang-ky',
        component: ()=>import('../components/CuDan/DangKy/index.vue'),
        meta    :   {layout : 'auth'}
    },
    {
        path : '/cu-dan/dang-nhap',
        component: ()=>import('../components/CuDan/DangNhap/index.vue'),
        meta    :   {layout : 'auth'}
    },
    {
        path : '/cu-dan/quan-ly-xe',
        component: ()=>import('../components/CuDan/Xe/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/dang-ky-xe',
        component: ()=>import('../components/CuDan/DangKyXe/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/thong-bao',
        component: ()=>import('../components/CuDan/ChiTietThongBao/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/bao-cao-su-co',
        component: ()=>import('../components/CuDan/BaoCaoSuCo/index.vue'),
        meta    :   {layout : 'client'}
    },
    {
        path : '/cu-dan/profile',
        component: ()=>import('../components/CuDan/QuanLyTaiKhoan/index.vue'),
        meta    :   {layout : 'client'}
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router