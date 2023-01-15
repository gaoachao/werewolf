<template>
  <div class="main-page">
    <img :src="`/assets/werewolf${theme}.svg`" alt="logo" class="logo" />
    <div class="title">狼人杀</div>
    <Btn content="加入房间"></Btn>
    <Btn content="创建房间"></Btn>
    <Btn content="游戏记录"></Btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { theme } from "../reactivity/theme";
import Btn from "../components/Btn/Btn.vue";

export default defineComponent({
  components: { Btn },
  setup(props) {
    return { theme };
  }
})
// export default Home;
</script>

<style lang="scss" scoped>
@font-face {
  font-family: gete;
  src: url("../../public/assets/gete.ttf");
}

.main-page {
  .logo {
    padding-top: 10vh;
    width: 18vh;
    margin: auto;
    display: block;
  }

  .title {
    margin: 7vh;
    text-align: center;
    font-size: 3rem;
    font-weight: bolder;
    font-family: gete;
  }

  .btn {
    display: block;
    margin: 5vh auto;
    text-align: center;
  }
}
</style>