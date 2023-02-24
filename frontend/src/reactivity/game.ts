import { ref,Ref} from "vue";
import { day, PublicPlayerDef, PlayerDef} from "../../../shared/ModelDefs"
import { Character } from "../../../shared/GameDefs";

// 当前的天数
export const date = ref<day>(-1);

// 玩家的公开信息的数组
export const players: Ref<PublicPlayerDef[]> = ref([]);

// 角色配置
export const needingCharacters = ref<Character[]>([]);

// export const self = ref<PlayerDef>({
//   _id: "",
//   character: "",
//   hasVotedAt: [],
//   index: 0,
//   isAlive: false,
//   isSheriff: false,
//   name: "---",
//   sheriffVotes: [],
//   canBeVoted: false,
//   isDying: false,
// });