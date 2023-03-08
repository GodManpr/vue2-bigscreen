<template>
  <div class="percentChart">
    <span>{{ title }}</span>
    <dv-percent-pond :config="config" style="width:100%;height:140px;"/>
  </div>

</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: () => '进度池'
    },
    dataChart: {
      type: Number,
      default: () => 66
    }
  },
  name: 'percentChart',
  data() {
    return {
      config: {
        value: this.dataChart,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5
      }
    }
  }
}
</script>
