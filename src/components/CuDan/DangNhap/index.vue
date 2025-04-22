<template>
    <div id="app" data-v-app="">
        <div class="wrapper d-flex justify-content-center align-items-center min-vh-100"
            style="background-image: url('https://img.lovepik.com/photo/60171/7752.jpg_wh860.jpg'); background-size: cover; background-position: center;">

            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3>Đăng Nhập</h3>
                        </div>
                        <div class="login-separater text-center mb-4">
                            <hr />
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Nhập vào Email" />
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input type="password" class="form-control" placeholder="Nhập vào Mật Khẩu" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="button" class="btn btn-primary mb-2">
                                            <i class="bx bx-user"></i>Đăng Nhập
                                        </button>
                                        <p>
                                            Bạn chưa có tài khoản?
                                            <router-link to="/cu-dan/dang-ky">
                                                <a href="">Đăng Ký</a>
                                            </router-link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {};
</script>

<style></style>