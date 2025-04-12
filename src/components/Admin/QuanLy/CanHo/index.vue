<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h3>Căn Hộ</h3>
                </div>
                <div class="card-body">
                    <label class="mt-2">Tầng</label>
                    <input class="form-control mt-2" type="text" />

                    <label class="mt-2">Số Căn Hộ</label>
                    <input class="form-control mt-2" type="text" />

                    <label class="mt-2">Chủ Hộ</label>
                    <input class="form-control mt-2" type="text" />

                    <label class="mt-2">Tình Trạng</label>
                    <select class="form-select mt-2">
                        <option value="">-- Chọn tình trạng --</option>
                        <option value="ton_tai">Hoạt Động</option>
                        <option value="khong_ton_tai">Không Hoạt Động</option>
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
                    <h3>Danh Sách Căn Hộ</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group w-100">
                                            <input type="text"
                                                class="form-control search-control border border-1 border-secondary"
                                                placeholder="Search...">
                                            <span class="position-absolute top-50 search-show translate-middle-y"
                                                style="left: 15px;"><i class="bx bx-search"></i></span>
                                            <button class="btn btn-outline-secondary" type="button">Tìm
                                                Kiếm</button>
                                        </div>
                                    </th>
                                </tr>
                                <tr class=" text-center">
                                    <th class="align-middle text-center">#</th>
                                    <th class="align-middle text-center">Tầng</th>
                                    <th class="align-middle text-center">Số Căn Hộ</th>
                                    <th class="align-middle text-center">Chủ Hộ</th>
                                    <th class="align-middle text-center">Tình Trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="align-middle text-center">1</th>
                                    <th class="align-middle text-center">Tầng 2</th>
                                    <th class="align-middle text-center">201</th>
                                    <th class="align-middle text-center">Nguyễn Văn A</th>
                                    <th class="align-middle text-center">
                                        <button class="btn btn-success me-2">Hoạt Động</button>
                                        <!-- <button class="btn btn-warning">Tạm Ngưng</button> -->
                                    </th>
                                    <th class="align-middle text-center">
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
                    <label class="mb-2 mt-2">Id</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Tầng</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Số Căn Hộ</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Chủ Hộ</label>
                    <input class="form-control" type="text">
                    <label class="mb-2 mt-2">Tình Trạng</label>
                    <select class="form-control">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Ngưng</option>
                    </select>
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Căn Hộ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-1">
                                <h6 class="mb-1 text-white">Bạn chắc chắc xóa Căn Hộ
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
