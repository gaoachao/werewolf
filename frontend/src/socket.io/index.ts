import  {io, Socket} from "socket.io-client";
import { Events } from "../../../shared/WSEvents";
import { SERVER_DOMAIN, WS_PATH } from "../../../shared/config";

import roomJoin from "./roomJoin";

let socket:Socket;

// 房主创建好房间之后通知后端把该房间添加到io中去
function joinRoom(roomNumber: string) {
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
  }
  socket = io(SERVER_DOMAIN, {
    path: WS_PATH,
  });

  socket.on("connect", () => {
    console.log("#ws connected");
  });


  socket.emit(Events.ROOM_JOIN, roomNumber);

}

export { joinRoom };
