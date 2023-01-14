<template>
  <div
    class="btn"

  >
    
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import UseBorder from "./UseBorder.vue";
  const Btn = defineComponent({
    name:"Btn",
    components:{UseBorder},
    props:{
      content:String,

    }
  })
  export default Btn;
</script>