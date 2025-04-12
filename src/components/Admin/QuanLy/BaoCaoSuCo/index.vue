<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h3>Báo Cáo Sự Cố</h3>
                </div>
                <div class="card-body">
                    <label class="mt-2">Nội Dung Báo Cáo</label>
                    <input class="form-control mt-2" type="text" />

                    <label class="mt-2">Trạng Thái Xử Lý</label>
                    <select class="form-select mt-2">
                        <option value="">-- Chọn trạng thái --</option>
                        <option value="dang_xu_ly">Đang xử lý</option>
                        <option value="da_xu_ly">Đã xử lý</option>
                    </select>

                    <label class="mt-2">Ngày Tạo</label>
                    <input class="form-control mt-2" type="date" />
                </div>

                <div class="card-footer text-end mt-3">
                    <button class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h3>Danh Sách Báo Cáo Sự Cố</h3>
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
                                    <th class="align-middle text-center">Tên Cư Dân</th>
                                    <th class="align-middle text-center">Nội Dung Báo Cáo</th>
                                    <th class="align-middle text-center">Trạng Thái Xử Lý</th>
                                    <th class="align-middle text-center">Ngày Tạo</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="align-middle text-center">1</th>
                                    <th class="align-middle text-center">hehe</th>
                                    <th class="align-middle text-center">Nước Thấm Sàn</th>
                                    <th class="align-middle text-center">
                                        <button class="btn btn-warning">Đã Xử Lý</button>
                                    </th>
                                    <th class="align-middle text-center">12/02/2025</th>
                                
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Báo Cáo Sự Cố</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <label class="mb-2 mt-2">Nội Dung Báo Cáo</label>
                        <input class="form-control" type="text">
                        <label class="mb-2 mt-2">Trạng Thái Xử Lý</label>
                        <select class="form-control">
                            <option value="1">Đang Xử Lý</option>
                            <option value="0">Đã Xử Lý</option>
                        </select>
                        <label class="mb-2 mt-2">Ngày Tạo</label>
                        <input class="form-control" type="date">
                        
                    </div>
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
                                <h6 class="mb-1 text-white">Bạn chắc chắc xóa Báo Cáo Sự Cố
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
