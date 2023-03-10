import { Character } from "../GameDefs";
import { PublicPlayerDef } from "../ModelDefs";
import { HttpRes } from "./httpResTemplate";

export interface InitRoomRequest {}

export type InitRoomResponse = HttpRes<{
  players: PublicPlayerDef[]; //已有的角色
  needingCharacters: Character[]; //创建房间时的配置
}>;