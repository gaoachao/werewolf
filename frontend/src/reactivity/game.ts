import { ref,Ref} from "vue";
import { day, PublicPlayerDef} from "../../../shared/ModelDefs"
import { Character } from "../../../shared/GameDefs";

// 当前的天数
export const date = ref<day>(-1);

// 玩家的公开信息的数组
export const players: Ref<PublicPlayerDef[]> = ref([]);

// 角色配置
export const needingCharacters = ref<Character[]>([]);