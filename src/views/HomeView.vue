<template>
  <div class="content bg">
    <dv-full-screen-container>
      <ModuleTitle/>
      <ModuleMain/>
      <ModuleFooter/>
    </dv-full-screen-container>
  </div>
</template>

<script>
import ModuleTitle from "@/layout/ModuleTitle.vue";
import ModuleMain from "@/layout/ModuleMain.vue";
import ModuleFooter from "@/layout/ModuleFooter.vue";

export default {
  name: 'HomeView',
  components: {
    ModuleTitle,
    ModuleMain,
    ModuleFooter
  }
}
</script>
