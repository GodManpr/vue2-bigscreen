<template>
  <div class="chart" style="padding: 20px">
    <span>{{ title }}</span>
    <div ref="myChart" style="width: 100%;height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import chinaMap from '@/assets/json/china.json'

export default {
  props: {
    title: {
      type: String,
      default: '柱状图'
    }
  },
  data() {
    return {
      option: {
        geo: {
          show: true,
          type: 'map',
          map: 'china',
          label: {// 文字标签显示
            show: false,
            color: '#fff',
            fontSize: 12
          },
          itemStyle: {// 图形样式
            areaColor: '#3352c7', // 背景色
            borderColor: '#fff', // 边框颜色
            borderWidth: 1 // 边框宽度
          },
          zoom: 1.2,
          emphasis: { // 高亮状态
            label: {// 文字标签显示
              show: true,
              color: '#fff',
              fontSize: 16
            },
            itemStyle: {// 图形样式
              areaColor: '#f60', // 背景色
              borderColor: '#ccc', // 边框颜色
              borderWidth: 1 // 边框宽度
            },
          }
        },
        series: [
          {
            type: 'effectScatter',// 涟漪特效!!!!!
            coordinateSystem: 'geo',// 该系列使用的坐标系
            rippleEffect: { // 特效配置
              period: 2,
              brushType: 'stroke',
              scale: 5 // 波纹缩放比例
            },
            label: {// 标签
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}' // 标签名为数据名
              },
            },
            itemStyle: {
              color: '#f00'
            },
            symbol: 'circle', // 标记的图形 圆形
            symbolSize: function (val) {
              return val[2]
            },
            data: [// ------------------------------最重要的数据
              {
                name: '鄂尔多斯',
                value: [109.781327, 39.608266, 20]
              },
              {
                name: '张家口',
                value: [114.87, 40.82, 15]
              },
              {
                name: '珠海',
                value: [113.52, 22.3, 10]
              },
              {
                name: '武汉',
                value: [114.31, 30.52, 30]
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const myChat = echarts.init(this.$refs.myChart)
      echarts.registerMap('china', chinaMap)

      myChat.setOption(this.option)
    },
  }
}
</script>

<style scoped>
</style>