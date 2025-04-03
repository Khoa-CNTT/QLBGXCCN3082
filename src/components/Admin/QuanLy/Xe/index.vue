<template>
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header mt-3">
                <h6><b>DANH SÁCH XE</b></h6>
            </div>
            <div class="card-body">
                <div class="input-group mt-3 w-100">
                    <input type="text" class="form-control search-control border border-1 border-secondary"
                        placeholder="Search...">
                    <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                            class="bx bx-search"></i></span>
                    <button class="btn btn-outline-secondary" type="button">Tìm
                        Kiếm</button>
                </div>
                <table class="table table-bordered mb-0">
                    <thead>
                        <tr class="text-center">
                            <th>#</th>
                            <th>ID Cư Dân</th>
                            <th>Biển Số Xe</th>
                            <th>Loại Xe</th>
                            <th>Trạng Thái Phê Duyệt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="align-middle">
                            <th class="text-center">1</th>
                            <td class="text-center">A01</td>
                            <td class="text-center">123.45</td>
                            <td class="text-center">vision</td>
                            <td class="align-middle text-center">
                                <button class="btn btn-success">Đã Kích Hoạt</button>
                                <button class="btn btn-danger">Chưa Kích Hoạt</button>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-primary me-1" data-bs-toggle="modal"
                                    data-bs-target="#capNhatModal">Cập
                                    Nhật</button>
                                <button class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#xoaModal">Xóa</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>