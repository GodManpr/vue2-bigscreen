<template>
  <div class="scrollChart">
    <span>{{ title }}</span>
    <dv-scroll-ranking-board :config="config" style="width:100%;height:360px"/>
  </div>

</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: () => '排名轮播表'
    },
    dataChart: {
      type: Array,
      default: () => [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 78
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        },
        {
          name: '信阳',
          value: 45
        },
        {
          name: '漯河',
          value: 29
        }
      ]
    }
  },
  name: 'scrollChart',
  data() {
    return {
      config: {
        data: this.dataChart
      },
    }
  }
}
</script>
