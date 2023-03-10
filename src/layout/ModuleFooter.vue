<template>
      <!--  两行两等分-->
      <div class="module-box">
        <div style="flex:0 1 50%">
          <dv-border-box-1 style="width: 100%;height: 200px;">
            <Chart :options="option" :title="'折线图'"/>
          </dv-border-box-1>
        </div>

        <div style="flex:0 1 25%">
          <dv-border-box-13 style="width: 100%;height: 200px;">
            <Chart />
          </dv-border-box-13>
        </div>

        <div style="flex:0 1 25%">
          <dv-border-box-12 style="width: 100%;height: 200px;">
            <capsuleChart />
          </dv-border-box-12>
        </div>
      </div>
</template>

<script>
import capsuleChart from "../components/capsuleChart.vue";

export default {
  name: 'ModuleFooter',
  data() {
    return {
      option:{
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '25%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  components:{
    capsuleChart
  }
}
</script>
