import { Middleware } from "koa";

import {
  InitRoomRequest,
  InitRoomResponse,
} from "../../../shared/httpMsg/InitRoomMsg";
import { RoomNumberHeaderName } from "../../../shared/config";
import { Room } from "../models/RoomModel";

const roomInit:Middleware = async (ctx) =>{
  // 从request的header
  const roomNumber = ctx.get(RoomNumberHeaderName);
  const room = Room.getRoom(roomNumber);
  const res:InitRoomResponse = {
    status:200,
    msg:'ok',
    data:{
      players:room.choosePublicInfo(),
      needingCharacters: room.needingCharacters,
    }
  }
  ctx.body = res;
};

export default roomInit;