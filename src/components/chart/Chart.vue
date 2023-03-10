<template>
  <div class="chart" style="padding: 20px">
    <span>{{ title }}</span>
    <div ref="myChart" style="width: 100%;height: 200px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    title: {
      type: String,
      default: '柱状图'
    },
    options: {
      type: Object,
      default: () => ({
        color: '#f60',// 系列柱
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '25%',
          containLabel: true
        }
      })
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const myChat = echarts.init(this.$refs.myChart)
      myChat.setOption(this.options)
    }
  }
}
</script>

<style scoped>
</style>