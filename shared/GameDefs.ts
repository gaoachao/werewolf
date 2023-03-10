/*可设置的角色 */
export type SetableCharacters =
  | "HUNTER"
  | "WITCH"
  | "SEER"
  | "GUARD"
  | "VILLAGER"
  | "WEREWOLF";

// Character是在固定的玩家的基础上加上警长
export type Character = SetableCharacters | "SHERIFF";
// | "HOST" 主持人
// | "";

export const ChineseNames: Record<Character, string> = {
  HUNTER: "猎人",
  GUARD: "守卫",
  SEER: "预言家",
  SHERIFF: "警长",
  VILLAGER: "村民",
  WEREWOLF: "狼人",
  WITCH: "女巫",
  // HOST: "主持人",
  // "": "",
};


// 定义一种type Potion 记录的是女巫药的类型
export type Potion = "POISON" | "MEDICINE";

// 记录当前是什么游戏阶段
export enum GameStatus {
  WOLF_KILL = "狼人请杀人",
  WOLF_KILL_CHECK = "狼人查看投票结果",
  SEER_CHECK = "预言家验人",
  WITCH_ACT = "女巫用药",
  GUARD_PROTECT = "守卫保人",
  SHERIFF_ELECT = "上警",
  SHERIFF_VOTE = "投票选警长",
  SHERIFF_SPEECH = "警长竞选发言",
  SHERIFF_VOTE_CHECK = "查看警长投票结果",
  SHERIFF_ASSIGN = "指派下一任警长",
  SHERIFF_ASSIGN_CHECK = "检查指派警长的结果",
  BEFORE_DAY_DISCUSS = "夜晚结算",
  DAY_DISCUSS = "自由发言",
  EXILE_VOTE = "票选狼人",
  EXILE_VOTE_CHECK = "票选狼人结果",
  HUNTER_SHOOT = "若你是猎人, 请选择是否开枪",
  HUNTER_CHECK = "查看猎人开枪结果",
  LEAVE_MSG = "留遗言",
}