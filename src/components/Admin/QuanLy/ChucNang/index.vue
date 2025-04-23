<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Chức Năng</h5>
                </div>
                <div class="card-body">
                    <label class="mb-2">Tên Chức Năng</label>
                    <input type="text" class="form-control mb-2" />
                    <label class="mb-2">Tình Trạng</label>
                    <select class="form-control mb-2">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Ngưng</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Chức Năng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Chức Năng</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr class="text-nowrap">
                                        <th class="align-middle"></th>
                                        <td class="align-middle text-center">
                                            <img alt="" class="img-fluid" style="width: 80px;">
                                        </td>
                                            
                                        <td class="align-middle">
                                            <button class="btn btn-success w-100">Hoạt Động</button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập
                                                Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">Xóa</button>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal cập nhật-->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Chức Năng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                    <label class="mb-2">Tên Chức Năng</label>
                    <input type="text" class="form-control mb-2" />
                    <label class="mb-2">Tình Trạng</label>
                    <select class="form-control mb-2">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Ngưng</option>
                    </select>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xoá-->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Chức Năng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-1">
                                <h6 class="mb-1 text-white">Bạn chắc chắc xóa chức năng <b></b> này chứ
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
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>

export default {
   
};
</script>
<style></style>
