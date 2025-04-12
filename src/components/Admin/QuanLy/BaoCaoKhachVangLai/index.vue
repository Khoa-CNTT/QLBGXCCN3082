<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h3>Nhập Báo Cáo</h3>
                </div>
                <div class="card-body">
                    <label class="mt-2">Họ và Tên</label>
                    <input class="form-control mt-2" type="text" />
                    <label class="mt-2">Số Điện Thoại</label>
                    <input class="form-control mt-2" type="text" />
                    <label  class="form-label mt-2">Loại Xe</label>
                    <select  class="form-select">
                        <option value="">-- Chọn loại xe --</option>
                        <option value="oto">Ô tô</option>
                        <option value="xemay">Xe máy</option>
                        <option value="khac">Khác</option>
                    </select>
                    <label class="mt-2">Tình Trạng Thanh Toán</label>
                    <select class="form-select mt-2">
                        <option value="">-- Chọn trạng thái --</option>
                        <option value="dang_xu_ly">Đã Thanh Toán</option>
                        <option value="da_xu_ly">Chưa Thanh Toán</option>
                    </select>
                </div>
                <div class="card-footer text-end mt-3">
                    <button class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h3>Báo Cáo Khách Vãng Lai</h3>
                </div>
                <div class="card-body">
                    <div class="input-group">
                        <input type="text" class="form-control search-control border border-1 border-secondary"
                            placeholder="Search...">
                        <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                class="bx bx-search"></i></span>
                        <button class="btn btn-outline-secondary" type="button">Tìm
                            Kiếm</button>
                    </div>
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr class="text-center align-middle">
                                <th class="text-center align-middle">#</th>

                                <th class="text-center align-middle">Họ Và Tên</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Thời Gian Vào</th>
                                <th class="text-center align-middle">Thời Gian Ra</th>
                                <th class="text-center align-middle">Loại Xe</th>
                                <th class="text-center align-middle">Tình Trạng Thanh Toán</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="text-center align-middle">1</th>
                                <th class="text-center align-middle">Trương Văn H</th>
                                <th class="text-center align-middle">0874378235</th>
                                <th class="text-center align-middle">17h00 10/2/2025</th>
                                <th class="text-center align-middle">7h00 11/2/2025</th>
                                <th class="text-center align-middle">Xe Máy</th>
                                <th class="align-middle text-center">
                                    <button class="btn btn-warning">Chưa Thanh Toán</button>
                                    <!-- <button class="btn btn-primary">Đã Thanh Tóan</button> -->
                                </th>
                                <th class="text-center align-middle">
                                    <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Sửa
                                    </button>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal1">
                                        Xóa
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal cập nhật-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa Báo Cáo Khách Vãng Lai</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="mb-2 mt-2">Họ Và Tên</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Số Điện Thoại</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Id Cư Dân</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Thời Gian Vào</label>
                    <input class="form-control" type="datetime-local">
                    <label class="mb-2 mt-2">Thời Gian Ra</label>
                    <input class="form-control" type="datetime-local">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xóa-->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Báo Cáo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-1">
                                <h6 class="mb-1 text-white">Bạn chắc chắc xóa Báo Cáo Khách Vãng Lai
                                    này chứ
                                    !!!</h6>
                                <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi
                                    phục
                                    khi ấn xác nhận
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>
