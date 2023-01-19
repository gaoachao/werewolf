<template>
  <div class="createroom">
    <span class="title">角色设置</span>
    <div class="tile-wrapper">
      <room-character-tile :key="value" v-for="(_,value) in characters" :character="value" />
    </div>
    <div class="name">
      <span class="hint">你的昵称：</span>
      <use-border>
        <input
          type="text"
          maxlength="10"
          placeholder="请输入昵称"
          v-model="nickname"
        />
      </use-border>
    </div>
    <div class="password">
      <span class="hint">房间密码：</span>
      <use-border>
        <input
          type="text"
          maxlength="10"
          placeholder="(可选)"
          v-model="password"
        />
      </use-border>
    </div>
    <outline-btn
      content="确认创建"
      @click="create"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import OutlineBtn from "../components/Btn/Btn.vue"
import UseBorder from "../components/Btn/UseBorder.vue";
import RoomCharacterTile from '../components/RoomCharacter/RoomCharacterTile.vue';


import {
  characters,
  nickname,
  password,
  create,
} from "../reactivity/createRoom";


export default defineComponent({

  components: {
    OutlineBtn,
    UseBorder,
    RoomCharacterTile,
  },
  setup() {


    return {
      characters,
      nickname,
      password,
      create,
    }
  }
})
</script>

<style lang="scss" scoped>
.createroom {
  padding: 1rem 1rem 0;
  text-align: center;

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .tile-wrapper {
    display: flex;
    flex-wrap: wrap;

    .room-character-tile {
      flex: 1 1 33%;
      padding: 1rem 0;
    }
  }

  .name,
  .password {
    .hint {
      position: relative;
      bottom: 0.04em;
      word-break: keep-all;
      margin-right: 0.5rem;
      font-weight: bold;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

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

  .btn {
    margin: auto;
  }
}
</style>