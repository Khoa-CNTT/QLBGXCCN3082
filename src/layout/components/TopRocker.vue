<template>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand">
            <div class="topbar-logo-header">
                <div class="">
                </div>
                <div class="">
                    <h4 class="logo-text">QUẢN LÝ BÃI GIỮ XE</h4>
                </div>
            </div>
            <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
            <div class="search-bar flex-grow-1">
                <div class="position-relative search-bar-box">
                    <input type="text" class="form-control search-control" placeholder="Type to search..."> <span
                        class="position-absolute top-50 search-show translate-middle-y"><i
                            class="bx bx-search"></i></span>
                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                            class="bx bx-x"></i></span>
                </div>
            </div>
            <div class="top-menu ms-auto">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item mobile-search-icon">
                        <a class="nav-link" href="#"> <i class="bx bx-search"></i>
                        </a>
                    </li>

                    <li class="nav-item dropdown dropdown-large">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                class="alert-count">99</span>
                            <i class="bx bx-bell"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <router-link to="/cu-dan/thong-bao">
                                <a>
                                    <div class="msg-header">
                                        <p class="msg-header-title">Thông Báo</p>
                                    </div>
                                </a>
                                <div class="header-notifications-list">
                                    <a class="dropdown-item" href="javascript:;">
                                        <div class="d-flex align-items-center">
                                            <div class="notify bg-light-primary text-primary"><i
                                                    class="bx bx-group"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="msg-name">Admin<span class="msg-time float-end">14 Sec
                                                        ago</span></h6>
                                                <p class="msg-info">bãi giữ xe</p>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="javascript:;">
                                    <div class="text-center msg-footer">View All Notifications</div>
                                </a>
                            </router-link>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="user-box dropdown">
                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                    <div class="user-info ps-3">
                        <p class="user-name mb-0">DAT BUI</p>
                        <p class="designattion mb-0">Cư Dân</p>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <router-link to="/cu-dan/profile">
                        <li><a class="dropdown-item" ><i
                                    class="bx bx-user"></i><span>Profile</span></a>
                        </li>
                    </router-link>
                    <li><a class="dropdown-item" href="javascript:;"><i
                                class="bx bx-log-out-circle"></i><span>Logout</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
