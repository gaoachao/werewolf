/*可设置的角色 */
export type SetableCharacters =
  | "HUNTER"
  | "WITCH"
  | "SEER"
  | "GUARD"
  | "VILLAGER"
  | "WEREWOLF";

export type Character = SetableCharacters | "SHERIFF";
// | "HOST"
// | "";

const ChineseNames: Record<Character, string> = {
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

console.log(Date.now());

console.log(Math.random().toString(36).substring(2));



