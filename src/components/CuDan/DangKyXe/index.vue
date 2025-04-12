<template>
    <div class="container mt-5 d-flex justify-content-center">
      <div class="card w-100 col-md-8 col-lg-6">
        <div class="card-header bg-primary text-center">
          <h4 class="mb-0 text-white">ĐĂNG KÝ XE</h4>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="inputName" class="form-label">Họ và Tên</label>
              <input type="text" class="form-control" id="inputName" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">Căn Hộ</label>
              <input type="text" class="form-control" id="inputEmail" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword" class="form-label">Biển Số Xe</label>
              <input type="text" class="form-control" id="inputPassword" />
            </div>
            <div class="col-md-6">
              <label for="vehicleType" class="form-label">Loại Xe</label>
              <select id="vehicleType" class="form-select">
                <option value="">-- Chọn loại xe --</option>
                <option value="oto">Ô tô</option>
                <option value="xemay">Xe máy</option>
                <option value="khac">Khác</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-primary">Đăng Ký</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  