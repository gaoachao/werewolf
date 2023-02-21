<template>
  <div class="waitroom">

  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    toRefs,
  } from "vue";
  import Btn from "../components/Btn/Btn.vue";
  import { showDialog } from "../reactivity/dialog";

  export default defineComponent({
    components: { 
      Btn 
    },
    props:{
      password: { type: String, required: false },
      number: { type: String, required: true },
    },
    setup(props){
      const { password , number } = toRefs(props);
      
      return {};
    }
  })
</script>

<style lang="scss" scoped>

</style>