<template>
      <!--  两行两等分-->
      <div class="module-box">
        <div style="flex:0 1 50%">
          <dv-border-box-1 style="width: 100%;height: 200px;">dv-border-box-1</dv-border-box-1>
        </div>

        <div style="flex:0 1 25%">
          <dv-border-box-13 style="width: 100%;height: 200px;">
            油量图
            <dv-charts :option="option" />
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

        title: {
          offset: [0, -20],
          text: '剩余油量表',
          style: {
            fill: '#fff',
            textAlign:'right',
          }
        },
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55 } ],
            center: ['50%', '55%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff'
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
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
