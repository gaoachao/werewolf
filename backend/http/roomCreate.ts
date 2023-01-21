import { Middleware } from "koa";

import {
  CreateRoomRequest,CreateRoomResponse
} from "../../frontend/shared/httpMsg/CreateRoomMsg";


// 房间创建中间件
const roomCreate:Middleware = async(ctx,next) =>{
  const req = ctx.request.body as CreateRoomRequest;
  const { characters,name,password } = req;
  
}