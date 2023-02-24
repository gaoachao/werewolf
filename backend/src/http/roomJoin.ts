import { Middleware } from "koa";
import io from "../../src/index";
import { Player } from "../models/PlayerModel";
import { Room } from "../models/RoomModel";
import {
  JoinRoomRequest,
  JoinRoomResponse,
} from "../../../shared/httpMsg/JoinRoomMsg";

const roomJoin: Middleware = async (ctx) => {
  const req = ctx.request.body;
  const { name, password, roomNumber } = req;
  const room = Room.getRoom(roomNumber);
};
