<template>
  <div>
    <span class="digitalTitle">{{ title }}</span>
    <dv-digital-flop :config="config" style="width:200px;height:50px;"/>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: '数字翻牌器'
    }
  },
  data() {
    return {
      config: {
        number: [100],
        content: '{nt}%'
      }
    }
  }
}
</script>

<style scoped>
.digitalTitle{
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
</style>