import CapsuleChart from '@/components/capsuleChart.vue'
import WaterChart from '@/components/waterChart.vue'
import ConicalChart from '@/components/conicalChart.vue'
import ScrollChart from '@/components/scrollChart.vue'
import PercentChart from '@/components/percentChart.vue'

export function setComponents(app) {
  app.component('CapsuleChart',CapsuleChart)
  app.component('WaterChart',WaterChart)
  app.component('ConicalChart',ConicalChart)
  app.component('ScrollChart',ScrollChart)
  app.component('PercentChart',PercentChart)
}