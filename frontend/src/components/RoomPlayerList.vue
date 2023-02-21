<template>
  <div class="room-player-list">
    
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    computed,
  } from "vue";
  import { theme } from "../reactivity/theme";
  export default defineComponent({
    props:{
      playerLIst:{
        type:Object,
        required:true,
      }
    },
    setup(props){
      return { theme, }
    }
  })

</script>

<style lang="scss" scoped>

</style>