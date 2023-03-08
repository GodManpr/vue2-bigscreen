<template>
  <!--  一行两等分-->
  <div class="conicalChart">
    <span>{{ title }}</span>
    <dv-conical-column-chart :config="config" style="width:100%;height:140px;"/>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '锥形柱图'
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
          value: 71
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
          value: 35
        },
        {
          name: '漯河',
          value: 15
        }
      ]
    },
    imgs: {
      type: Array,
      default: () => [
        require('../assets/img/1st.png'),
        require('../assets/img/2st.png'),
        require('../assets/img/3st.png'),
        require('../assets/img/4st.png'),
        require('../assets/img/5st.png'),
        require('../assets/img/6st.png'),
        require('../assets/img/7st.png')
      ]
    },
    showValue: {
      type: Boolean,
      default: () => false
    }

  },
  name: 'conicalChart',
  data() {
    return {
      config: {
        data: this.dataChart,
        img: this.imgs,
        showValue: this.showValue
      },
    }
  }
}
</script>
