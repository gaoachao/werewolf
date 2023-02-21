import {
  Character,
  GameStatus,
} from "../../../frontend/shared/GameDefs";
import {
  day,
  ID,
  index,
  PlayerDef,
  PublicPlayerDef,
  RoomDef,
} from "../../../frontend/shared/ModelDefs";
import { Player } from "./PlayerModel";
import { createError } from "../middleware/handleError";

// 后端房间模型定义
// implements需要重新定义属性和方法
export class Room implements RoomDef{
  roomNumber:string;
  creatorID:ID;
  players: Player[];
  password?: string;
  // 在狼人杀人时+1
  currentDay: day = -1;
  needingCharacters: Character[];
  remainingIndexes: index[];
  isFinished = false;
  // 先将第一个状态放入
  gameStatus: GameStatus[] = [GameStatus.WOLF_KILL];
  toFinishPlayers = new Set<index>();
  timer: NodeJS.Timeout;
  // 自动清除的定时器
  clearSelfTimer: NodeJS.Timeout;
  // 死亡结算后的下一个状态
  nextStateOfDieCheck: GameStatus;
  // 当前正在进行死亡结算的玩家序号 
  curDyingPlayer: Player;
  // 创建时间
  createdAt = new Date();

  // 私有静态属性 roomMap  roomNumber -> Room类的实例对象
  private static roomMap: Record<string, Room> = {};
  // 获取当前房间的状态，相当于一个栈
  get curStatus(): GameStatus {
    return this.gameStatus[this.gameStatus.length - 1];
  }

  constructor({
    creator,
    needingCharacters,
    password,
  }: {
    creator: Player;
    needingCharacters: Character[];
    password?: string;
  }){
    if (!checkNeedingCharacters(needingCharacters)){
      createError({ msg: "人数配比不合法", status: 401 });
    }

    //设置一个尝试次数，超过这个次数会报错
    let tryTime = 20;
    while(tryTime){
      // 随机生成一个6位数字的房间号
      const roomNumber = Math.random().toString().slice(2,8);
      const prevRoom = Room.roomMap[roomNumber];
      if(prevRoom && Date.now() - prevRoom.createdAt.getTime() < 1000 * 3600 * 24){
        continue;
      } else {
        this.roomNumber = roomNumber;
        Room.roomMap[this,roomNumber] = this;
        break;
      }
    }
    if(tryTime <= 0){
      createError({
        msg:"创建错误，请重新尝试",
        status:500
      })
    }
    // 初始化房间信息
    this.creatorID = creator._id;
    this.players = [creator];
    this.needingCharacters = needingCharacters; 
    this.password = password;
    this.clearSelfTimer = setTimeout(
      ()=> Room.clearRoom(this.roomNumber),
      1000 * 3600 * 12
    );
  }

  // playerJoin(name:string,password?:string):Player {
    
  // }

  // 静态方法，清除特定的房间
  static clearRoom(number: string): void {
    delete this.roomMap[number];
  }
  // 静态方法，根据房间号获取房间
  static getRoom(number: string): Room | undefined{
    const room = Room.roomMap[number];
    if (!room){
      return createError({ status: 400, msg: "未找到房间号" });
    }
    return room;
  }
}


// 工具函数 用来检查需要角色的人数配比是否合法
function checkNeedingCharacters(
  needingCharacters: Character[]
): boolean {
  if (!needingCharacters.length) return false;
  /*形成一个有关角色和数目的映射
    Partial<Record<Character,number>> 意思是在map中key和value的类型分别是Character和number
    由于Character有多个值，可能不完全含有，因此用Partial
  */
  const characterMap: Partial<Record<
    Character,
    number
  >> = needingCharacters.reduce((map, character) => {
    //关于reduce：previousValue是map，currentValue是character
    //每一轮进行的逻辑是箭头函数内部的内容，return的map是下一轮的previousValue
    map[character] = map[character] || 0;
    map[character]++;
    return map;
  }, {});

  // 如果没有狼人
  if (!characterMap.WEREWOLF) return false;
  // 如果狼人数目超过玩家的一半
  if (characterMap.WEREWOLF > needingCharacters.length / 2)  return false;

  return true;
}