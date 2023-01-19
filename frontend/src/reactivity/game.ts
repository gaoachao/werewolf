import { ref } from "vue";
import { day } from "../../shared/ModelDefs"
import { Character } from "../../shared/GameDefs";

//当前的天数
export const date = ref<day>(-1);

//玩家的公开信息
export const players= ref([]);

//角色配置
export const needingCharacters = ref<Character[]>([]);