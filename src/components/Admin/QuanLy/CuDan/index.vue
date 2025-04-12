<template>
    <div class="card">
        <div class="card-body p-4">
            <h5 class="card-title text-center">QUẢN LÝ CƯ DÂN</h5>
            <hr>
            <div class="form-body mt-4">
                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="border border-3 p-4 rounded shadow-sm">
                            <h6 class="text-center mb-3">THÊM MỚI CƯ DÂN</h6>
                            <div class="row g-3">
                                <div class="col-12">
                                    <label for="inputName" class="form-label">Họ và Tên</label>
                                    <input type="text" class="form-control" >
                                </div>
                                <div class="col-12">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail">
                                </div>
                                <div class="col-12">
                                    <label for="inputPassword" class="form-label">Mật Khẩu</label>
                                    <input type="password" class="form-control" id="inputPassword">
                                </div>
                                <div class="col-12">
                                    <label for="inputPhone" class="form-label">Số Điện Thoại</label>
                                    <input type="text" class="form-control" id="inputPhone">
                                </div>
                                <div class="col-12">
                                    <label for="inputCCCD" class="form-label">Số CCCD</label>
                                    <input type="text" class="form-control" id="inputCCCD">
                                </div>
                                <div class="col-12">
                                    <label for="inputApartment" class="form-label">Căn Hộ Đang Ở</label>
                                    <input type="text" class="form-control" id="inputApartment">
                                </div>
                                <div class="col-12">
                                    <label for="inputBalance" class="form-label">Số Dư</label>
                                    <input type="text" class="form-control" id="inputBalance">
                                </div>
                                <div class="col-12">
                                    <label for="inputStatus" class="form-label">Trạng Thái</label>
                                    <select class="form-select" id="inputStatus">
                                        <option value="">Chọn trạng thái</option>
                                        <option value="1">Hoạt Động</option>
                                        <option value="2">Tạm Ngưng</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card border border-3 p-4 rounded shadow-sm">
                            <h6 class="text-center mb-3">DANH SÁCH CƯ DÂN</h6>
                            <div class="card-body">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Nguyen Van A"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    <span class="input-group-text" id="basic-addon2">Tìm Kiếm</span>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered align-middle text-center table-striped">
                                        <thead class="table-dark text-nowrap">
                                            <tr>
                                                <th>#</th>
                                                <th>Họ và Tên</th>
                                                <th>Email</th>
                                                <th>Mật Khẩu</th>
                                                <th>Số Điện Thoại</th>
                                                <th>Số CCCD</th>
                                                <th>Căn Hộ Đang Ở</th>
                                                <th>Số Dư</th>
                                                <th>Phê Duyệt</th>
                                                <th>Trạng Thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>nguyenvana@gmail.com</td>
                                                <td>******</td>
                                                <td>0123456789</td>
                                                <td>123456789</td>
                                                <td>B201</td>
                                                <td>500.000</td>
                                                <td><button class="btn btn-success btn-sm">Duyệt</button></td>
                                                <td><span class="badge bg-success">Hoạt Động</span></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>nguyenvana@gmail.com</td>
                                                <td>******</td>
                                                <td>0123456789</td>
                                                <td>123456789</td>
                                                <td>B201</td>
                                                <td>500.000</td>
                                                <td><button class="btn btn-success btn-sm">Duyệt</button></td>
                                                <td><span class="badge bg-success">Hoạt Động</span></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>nguyenvana@gmail.com</td>
                                                <td>******</td>
                                                <td>0123456789</td>
                                                <td>123456789</td>
                                                <td>B201</td>
                                                <td>500.000</td>
                                                <td><button class="btn btn-success btn-sm">Duyệt</button></td>
                                                <td><span class="badge bg-success">Hoạt Động</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

<style scoped>
/* Tăng độ rộng cho bảng để tránh co cột */
.table {
    table-layout: auto;
}

.table th,
.table td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
}

/* Căn chỉnh lề hợp lý hơn */
.border {
    background-color: #f8f9fa;
}

.shadow-sm {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>