<template>
    <sidebar-menu :menu="menu" />
    <div style="padding-left: 290px">
        <div class="admin-content" style="padding: 50px">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/plugins/simplebar/js/simplebar.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
export default {
    name: "app",
    components: {

    },
    data() {
        return {
            menu: [
                {
                    header: "Quản Lý",
                    hiddenOnCollapse: true,
                },
                {
                    href: "/admin",
                    title: "Trang Chủ",
                    icon: "fa fa-user",
                },
                {
                    title: "Quản Lý Cư Dân",
                    icon: "fa fa-chart-area",
                    child: [
                        {
                            title: "Cư Dân",
                            href: "/admin/cu-dan",
                        },
                        {
                            title: "Chức Năng",
                            href: "/admin/chuc-nang",
                        },
                        {
                            title: "Chức Vụ",
                            href: "/admin/chuc-vu",
                        },
                        {
                            title: "Quản Lý Admin",
                            href: "/admin/quan-ly-tai-khoan",
                        },
                        {
                            title: "Chi Tiết Chức Vụ",
                            href: "/admin/chi-tiet-chuc-vu",
                        },
                        {
                            title: "Xe",
                            href: "/admin/xe",
                        },
                        {
                            title: "Căn Hộ",
                            href: "/admin/can-ho",
                        },
                        {
                            title: "Báo Cáo Sự Cố",
                            href: "/admin/bao-cao-su-co",
                        },
                        {
                            title: "Báo Cáo Khách Vãng Lai",
                            href: "/admin/bao-cao-khach-vang-lai",
                        },
                        {
                            title: "Camera",
                            href: "/admin/camera",
                        },
                        {
                            title: "Lịch Sử Ra Vào",
                            href: "/admin/lich-su-ra-vao",
                        },

                    ],
                },
            ],
        };
    }
}
</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
</style>
