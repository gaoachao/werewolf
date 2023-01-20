import { Character } from "../GameDefs";
import { ID } from "../ModelDefs";
import { HttpRes } from "./httpResTemplate";

export interface CreateRoomRequest {
  characters: Character[];
  password?: string;
  name: string;
}

export type CreateRoomResponse = HttpRes<{
  roomNumber: string;
  ID: ID;
}>;