<template>
  <use-menu
    :onCancel="()=>{ dialogTimeLeft = 0 }"
    v-show="dialogTimeLeft > 0"
  >
    <!--支持content为html-->
    <div class="dialog-content">
      <span
        class="content"
        v-html="content && content.content"
      ></span>
      <div @click="dialogTimeLeft = 0" class="confirm">
        确认({{ dialogTimeLeft }}s)
      </div>
    </div>
  </use-menu>
</template>

<script lang="ts">
import { defineComponent,watch} from 'vue'

import {
  dialogTimeLeft,
  content,
  toShowContents,
} from "../../reactivity/dialog";

import UseMenu from "./UseMenu.vue";

export default defineComponent({
  components:{
    UseMenu
  },
  setup () {
    var timer: number;
    watch(content, () => {
      if (content.value === null) {
        clearInterval(timer);
        dialogTimeLeft.value = -1;
      } else {
        dialogTimeLeft.value = content.value.timeout;
        timer = window.setInterval(() => {
          dialogTimeLeft.value--;
          if (dialogTimeLeft.value <= 0) {
            clearInterval(timer);
            dialogTimeLeft.value = -1;
            toShowContents.value.shift();
          }
        }, 1000);
      }
    });
    return {dialogTimeLeft,content}
  }
})
</script>

<style lang="scss" scoped>
 .dialog-content {
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    word-break: break-word;
    padding: 1.5rem 0 0rem;
    .confirm {
      margin-top: 1rem;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
</style>