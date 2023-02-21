import { Middleware } from "koa";

import {
  CreateRoomRequest,CreateRoomResponse
} from "../../../frontend/shared/httpMsg/CreateRoomMsg";
import { Player } from "../models/PlayerModel";
import { Room } from "../models/RoomModel";

// 房间创建中间件
const roomCreate:Middleware = async(ctx,next) =>{
  const req = ctx.request.body as CreateRoomRequest;
  const { characters,name,password } = req;
  // 创建者的信息
  const creator = new Player({
    index:1,
    name,
  });

  // 房间信息
  const room = new Room({
    creator: creator,
    needingCharacters: characters,
    password,
  });

  // 响应体
  const res: CreateRoomResponse = {
    status: 200,
    msg: "ok",
    data: {
      roomNumber: room.roomNumber,
      ID: creator._id,
    },
  };

  ctx.body = res;
};

export default roomCreate;