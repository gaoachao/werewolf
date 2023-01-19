<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import Dialog from './components/Dialog/Dialog.vue';

export default defineComponent({
  components:{
    Dialog
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    .main {
      max-width: 30rem;
      margin: auto;
      min-height: 100vh;
      padding-bottom: 30px;
      box-sizing: border-box;
    }
  }
</style>
