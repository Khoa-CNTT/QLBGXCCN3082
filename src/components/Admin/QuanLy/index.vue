<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
    <div class="col">
      <div class="card radius-10 bg-gradient-cosmic">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="me-auto">
              <p class="mb-0 text-white">Tổng Số Xe</p>
              <h4 class="my-1 text-white">200</h4>
            </div>
            <div id="chart1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card radius-10 bg-gradient-ibiza">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="me-auto">
              <p class="mb-0 text-white">Chỗ Trống</p>
              <h4 class="my-1 text-white">50</h4>
            </div>
            <div id="chart2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card radius-10 bg-gradient-ohhappiness">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="me-auto">
              <p class="mb-0 text-white">Xe Đang Gửi</p>
              <h4 class="my-1 text-white">100</h4>
            </div>
            <div id="chart3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card radius-10 bg-gradient-kyoto">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="me-auto">
              <p class="mb-0 text-dark">Tổng Số Báo Cáo</p>
              <h4 class="my-1 text-dark">500</h4>
            </div>
            <div id="chart4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h4>Biểu Đồ lượt gửi xe trong ngày</h4>
  <div class="col">

    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Xe Oto", "Xe Máy", "Các Loại xe khác"],
        datasets: [
          { data: [40, 20, 12], backgroundColor: ["red", "blue", "yellow"] },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
<style></style>