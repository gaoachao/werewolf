<template>
  <div class="waitroom">
    <RoomPlayerList :playerList="playerList"></RoomPlayerList>
    <div class="room-number">房间号：{{ number }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  onMounted,
  computed
} from "vue";
import Btn from "../components/Btn/Btn.vue";
import { showDialog } from "../reactivity/dialog";
import RoomPlayerList from "../components/RoomPlayerList.vue";
import { initRoom } from "../http/room";
import {
  needingCharacters,
  players,
} from "../reactivity/game";

export default defineComponent({
  components: {
    Btn,
    RoomPlayerList
  },
  props: {
    pw: { type: String, required: false },
    number: { type: String, required: true },
  },
  setup(props) {
    const { pw, number } = toRefs(props);
    onMounted(async () => {
      const res = await initRoom({ roomNumber: number.value });
      console.log(res);

    })
      // const res = await initRoom({ roomNumber: number.value });
      // console.log(res);
    
    const playerList = computed(() => {
      return new Array(needingCharacters.value.length)
        .fill(0)
        .map((_,mapIndex)=>
          // players的index是从1开始的 Array.prototype.map的index是从0开始的
          players.value.find((player) => player.index === mapIndex + 1)
          // 倘若没找到 find函数会返回false 则在new Array里是一个对象 
          || { index: mapIndex+1 }
        )
    });

    const canBeginFlag = computed(
      () =>
        needingCharacters.value.length === players.value.length
    );
    return { showDialog, playerList, canBeginFlag };
  }
})
</script>

<style lang="scss" scoped>
.waitroom {
  #qr-code {
    margin: 5vh auto;
    width: min-content;
  }

  .room-number {
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
  }

  .btn {
    display: block;
    text-align: center;
    margin: 1rem;
  }
}
</style>