import request from "./_request";
import {
  CreateRoomRequest,
  CreateRoomResponse,
} from "../../../shared/httpMsg/CreateRoomMsg";
import {
  InitRoomRequest,
  InitRoomResponse,
} from "../../../shared/httpMsg/InitRoomMsg";
import {
  JoinRoomRequest,
  JoinRoomResponse,
} from "../../../shared/httpMsg/JoinRoomMsg";

// 创建房间的函数
// Promise<T> T表示resolve的值的类型
export async function createRoom(
  data: CreateRoomRequest
): Promise<CreateRoomResponse> {
  const res = await request({
    url: "/room/create",
    method: "POST",
    data,
  });
  // console.log(res);
  return res as CreateRoomResponse;
}

// 房间初始化的函数
export async function initRoom(
  data: InitRoomRequest
): Promise<InitRoomResponse | null> {
  const res = (await request({
    url: "/room/init",
    method: "POST",
    data,
  })) as unknown;

  return res as InitRoomResponse;
}

// 加入房间的函数
export async function joinRoom(
  data: JoinRoomRequest
): Promise<JoinRoomResponse | null> {
  const res = (await request({
    url: "/room/join",
    method: "POST",
    data,
  })) as unknown;

  return res as JoinRoomResponse;
}
