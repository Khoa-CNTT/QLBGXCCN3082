<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">

                <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link" href="/">
                            <div class="parent-icon"><i class='bx bx-cookie'></i>
                            </div>
                            <div class="menu-title">Trang Chủ</div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/cu-dan/dang-ky-xe">
                        <a class="nav-link" href="/cu-dan/dang-ky-xe">
                            <div class="parent-icon"><i class='bx bx-cookie'></i>
                            </div>
                            <div class="menu-title">Đăng Ký Xe</div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/cu-dan/giao-dich">
                        <a class="nav-link" href="/cu-dan/giao-dich">
                            <div class="parent-icon"><i class='bx bx-cookie'></i>
                            </div>
                            <div class="menu-title">Giao Dịch</div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/cu-dan/quan-ly-xe">
                        <a class="nav-link" href="/cu-dan/quan-ly-xe">
                            <div class="parent-icon"><i class='bx bx-cookie'></i>
                            </div>
                            <div class="menu-title">Xe</div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/cu-dan/bao-cao-su-co">
                        <a class="nav-link" href="/cu-dan/bao-cao-su-co">
                            <div class="parent-icon"><i class='bx bx-cookie'></i>
                            </div>
                            <div class="menu-title">Báo Cáo Sự Cố</div>
                        </a>
                    </router-link>
                </li>

            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>