<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { RouterView } from "vue-router";
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
