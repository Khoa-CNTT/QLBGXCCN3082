<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card mt-2">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>Lịch Sử Ra Vào</h3>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm Mới
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead class="text-center align-middle">
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mt-3 w-100">
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
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">ID Xe Cư Dân</th>
                                <th class="text-center">ID Camera quét</th>
                                <th class="text-center">Thời Gian</th>
                                <th class="text-center">Xe vào hoặc ra</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle text-center">1</th>
                                <td class="align-middle text-center">a21</td>
                                <td class="align-middle text-center">c1</td>
                                <td class="align-middle text-center">00:00:00</td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-success me-2">xe vào </button>
                                    <button class="btn btn-warning">xe ra</button>
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
</template>
<script>
export default {

}
</script>
<style></style>