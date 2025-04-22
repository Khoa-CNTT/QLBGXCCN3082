<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="card w-100" >
      <div class="card-header bg-primary text-center ">
        <h4 class="mb-0 text-white">BÁO CÁO SỰ CỐ</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label">Họ và Tên</label>
          <input class="form-control" type="text">
        </div>

        <div class="mb-3">
          <label class="form-label">Nội Dung Báo Cáo</label>
          <textarea class="form-control" rows="4"></textarea>
        </div>

        <div class="mb-3">
          <label class="form-label">Ngày Tạo</label>
          <input class="form-control" type="date">
        </div>

      </div>
      <div class="card-footer text-end">
        <button class="btn btn-primary">Xác Nhận</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>