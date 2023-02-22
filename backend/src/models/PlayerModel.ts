import { Character } from "../../../shared/GameDefs";
import {  
  CharacterStatus,index,day,ID,PlayerDef,PublicPlayerDef
} from "../../../shared/ModelDefs";
import { Room } from "./RoomModel";

type playerInput = { name: string; index: number }

// 后端 玩家模型
export class Player implements PlayerDef{
  index: index;
  name: string;
  _id: ID;
  character:Character;
  isAlive = true;
  isSheriff = false;
  // 投票结果
  hasVotedAt:index[] = [];
  // 竞选警长投票
  sheriffVotes:index[] = [];
  // 死亡信息
  die?:{
    at: day;
    fromIndex: index[];
    fromCharacter: Character;
    saved?: boolean;
  }
  // 角色的状态
  characterStatus?: CharacterStatus = {};
  isDying: boolean = false; 
  canBeVoted: boolean = false;


  constructor( player:playerInput ) {
    const { name,index } = player;
    this.name = name;
    this.index = index;
    this._id =
      Math.random().toString(36).substring(2) + "." + Date.now(); 
      // e.g. `5fs6yt6htlu.1621430145541`
      // MDN 查 Number.prototype.toString([radix]) radix = 36 其实是0-9和a-z的组合
      // sustring(2)意味着从第三位也就是0.后面的数字
  }

  // 公开的玩家信息
  getPublic(room: Room): PublicPlayerDef {
    return {
      index: this.index,
      isAlive: this.isAlive,
      isSheriff: this.isSheriff,
      name: this.name,
      isDying: this === room.curDyingPlayer,
      hasVotedAt: this.hasVotedAt,
      sheriffVotes: this.sheriffVotes,
    };
  }
}