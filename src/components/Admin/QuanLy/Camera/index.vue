<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="text">Thêm Mới Cam</h4>
                </div>
                <div class="card-body">
                    <label class="form-label">Tên Cam</label>
                    <input type="text" class="form-control">
                    <label class="form-lable mt-2">Tình Trạng</label>
                    <select class="form-control">
                        <option value="0">Tạm Dừng</option>
                        <option value="1">Hoạt Động</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-info">Thêm Mới</button>
                </div>
            </div>

        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header mt-2">
                    <h4 class="text"> Danh Sách Cam</h4>
                </div>
                <div class="card-body">
                    <div class="card-body table-responsive">

                        <table class="table table-bordered table-hover ">
                            <thead>

                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Cam</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th class="align-middle text-center">1</th>
                                    <td class="align-middle text-center">cam01</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-success w-60">Hoạt Động</button>
                                        <button class="btn btn-warning w-60">Tạm Dừng</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#capnhatDM">Cập nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#delModal">Xóa</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
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