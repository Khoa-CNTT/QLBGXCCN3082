<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <TopRocker></TopRocker>
            <MenuRocker></MenuRocker>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view> </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import MenuRocker from "../components/MenuRocker.vue";
import TopRocker from "../components/TopRocker.vue";
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
        TopRocker, MenuRocker,
    },
 
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
