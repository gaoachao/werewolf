import request from "./_request";
import {CreateRoomRequest,CreateRoomResponse} from "../../shared/httpMsg/CreateRoomMsg";


// 创建房间的函数
// Promise<T> T表示resolve的值的类型
export async function createRoom(
  data:CreateRoomRequest
):Promise<CreateRoomResponse>{
  const res = await request({
    url:"/room/create",
    method:"POST",
    data,
  });
  return res as CreateRoomResponse;
}