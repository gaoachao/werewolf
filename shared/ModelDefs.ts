import { Character, Potion, GameStatus } from "./GameDefs";

// 玩家的id
export type ID = string;
// 玩家编号，从1开始
export type index = number;

// 第0夜: 0, 第 n 天白天: 2n-1, 第 n 天晚上: 2n
export type day = number;

// Token的接口
export interface TokenDef {
  ID: ID;
  datetime: number;
  roomNumber: string;
}

// 一局游戏中神职的技能状态和狼人票选击杀目标
// 猎人的开枪状态
export interface HunterStatus {
  shootAt: {
    day: day;
    player: index;
  };
}
// 守卫守护的人
export interface GuardStatus {
  protects: index[];
}
// 预言家晚上查验的人和结果
export interface SeerStatus {
  checks: {
    index: index;
    isWerewolf: boolean;
  }[];
}
// 狼人的“状态”
export interface WerewolfStatus {
  wantToKills: index[];
}
// 药的状态
interface PotionStatus {
  usedDay: day;
  usedAt: index;
}
// 女巫的状态，由于女巫有两种药，所以需要用一个Record，将一种类型映射到另一种类型
// eg: WitchStatus.POTION = {useDay:day;usedAt:index;}
export type WitchStatus = Record<Potion, PotionStatus>;

// 角色的状态
// Partial返回一个表示给定类型的所有子集的类型
export type CharacterStatus = Partial<
  HunterStatus & GuardStatus & SeerStatus & WerewolfStatus & WitchStatus
>;

// 角色事件
export interface CharacterEvent {
  character: Character;
  events: {
    at: day;
    deed: string;
  }[];
}

// 游戏事件
export interface GameEvent {
  character: Character;
  at: day;
  deed: string;
}

// 公开的玩家信息
export interface PublicPlayerDef {
  // 玩家编号，游戏结束重置
  index: index;
  // 昵称
  name: string;
  // 是否存活，游戏结束重置
  // 此状态不代表实际存活状态, 仅代表公开的存活信息，如：晚上有角色被杀了
  isAlive: boolean;
  // 是否为警长，游戏结束重置
  isSheriff: boolean;
  // 是否正在进行死亡结算
  isDying: boolean;
  // 下标是天数, value 是投给了谁
  hasVotedAt: index[];
  // 下标是天数, 包括上警(index=0)和白天传警徽
  sheriffVotes: index[];
}

export interface PlayerDef extends PublicPlayerDef {
  // 游戏角色，游戏结束重置
  character: Character;
  // 允许自定义，游戏结束重置
  characterStatus?: CharacterStatus;
  // string + 时间戳 的 token
  _id: ID;
  // 是否能在当前阶段被投票
  canBeVoted: boolean;
  // 具体死亡信息，游戏结束重置
  die?: {
    // 第几天死的
    at: day;
    // 被哪些人杀死的(名字)
    fromIndex: index[];
    // 被哪个角色杀死的
    fromCharacter: Character;
  };
}

export interface RoomDef {
  // 房间号码, 6位数字
  roomNumber: string; 
  // 房主ID
  creatorID: ID;
  // 玩家数组
  players: PlayerDef[];
  // 是否设置密码, 存放哈希过的密码
  password?: string;
  // 当前天数，游戏结束重置
  currentDay: day;
  // 设置的角色
  needingCharacters: Character[];
  // 空缺的玩家号码
  remainingIndexes: index[];
  // 是否已结束，游戏结束重置
  isFinished: boolean; 
  // 存放所有的游戏状态，游戏结束重置
  gameStatus: GameStatus[];
  // 选择结束当前阶段的玩家(每次改变状态需重置)
  toFinishPlayers: Set<index>;
  // 事件定时器 id, undefined 则为结束
  timer: NodeJS.Timeout;
}
