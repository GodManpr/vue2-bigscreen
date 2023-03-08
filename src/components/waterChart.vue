<template>
  <div class="waterChart">
    <span>{{ title }}</span>
    <dv-water-level-pond :config="config" style="height:140px"/>
  </div>
</template>

<script>

export default {
  props:{
    title:{
      type: String,
      default:()=> '水位图'
    },
    dataChart:{
      type: Array,
      default: ()=> [66, 45]
    },
    waterShape:{
      type: String,
      default:()=> 'roundRect'
    }
  },
  name: 'waterChart',
  data() {
    return {
      config: {
        data: this.dataChart,
        shape: this.waterShape
      }
    }
  }
}
</script>
