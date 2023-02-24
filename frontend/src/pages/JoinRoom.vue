<template>
  <div class="joinroom">
    <div class="title">加入房间</div>
    <div class="number">
      <span class="hint">房号：</span>
      <UseBorder>
        <input maxlength="6" type="text" v-model="roomNumber" />
      </UseBorder>
    </div>
    <div class="pw">
      <span class="hint">密码：</span>
      <UseBorder>
        <input maxlength="20" type="text" placeholder="(可选)" v-model="password" />
      </UseBorder>
    </div>
    <div class="name">
      <span class="hint">昵称：</span>
      <UseBorder>
        <input :maxlength="8" type="text" placeholder="" v-model="nickname" />
      </UseBorder>
    </div>
    <div class="spacer"></div>
    <Btn content="确认加入"></Btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import UseBorder from "../components/Btn/UseBorder.vue";
import Btn from "../components/Btn/Btn.vue";
import {
  password,
  roomNumber,
  nickname,
} from "../reactivity/joinRoom";
export default defineComponent({
  components: {
    UseBorder,
    Btn,
  },
  props:{
    pw:String,
    number:String,
  },
  setup(props) {
    const { pw, number } = toRefs(props);
    
    return { password, roomNumber, nickname }
  }
})
</script>

<style lang="scss" scoped>
.joinroom {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;

  .title {
    font-weight: bold;
    font-size: 2rem;
    padding: 2rem;
  }

  .pw,
  .name,
  .number {
    .hint {
      position: relative;
      bottom: 0.08em;
      word-break: keep-all;
      margin-right: 0.5rem;
      font-weight: bold;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    input {
      max-width: calc(100% - 1rem);
      padding: 0 0.5rem;
      line-height: 2.4rem;
      overflow: visible;
    }

    .useborder {
      max-width: 50%;
    }
  }

  .spacer {
    flex: 1;
  }
}
</style>