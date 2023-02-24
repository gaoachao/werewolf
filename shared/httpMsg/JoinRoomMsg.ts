import { Character } from "../GameDefs";
import { ID,index } from "../ModelDefs";
import { HttpRes } from "./httpResTemplate";


export interface JoinRoomRequest {
  name: string; 
  password?: string; 
  roomNumber: string; 
}

export type JoinRoomResponse = HttpRes<{
  ID: ID; 
  index: index;
  needingCharacters: Character[]; // 设置的人物
}>;