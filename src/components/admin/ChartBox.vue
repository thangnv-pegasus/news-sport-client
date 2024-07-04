<template>
  <Line :data="data" :options="options" :labels="'helo'" />
</template>

<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale)

const data = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Nov', 'Oct', 'Dec'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
      hoverBorderColor: 'rgba(75, 192, 192, 1)',
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 550, 320, 420],
      tension: 0.5 // Điều chỉnh độ cong của đường
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false // Hide the legend
    },
    tooltip: {
      callbacks: {
        label: function () {
          return '' // Hide the tooltip label
        }
      }
    },
    blurPlugin: {} // Enable the custom blur plugin
  },
  scales: {
    x: {
      // display: false // Hide X-axis labels
    },
    y: {
      beginAtZero: true
      // display: false // Hide Y-axis labels
    }
  }
})
</script>
