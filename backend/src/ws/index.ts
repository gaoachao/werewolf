import { Server } from "socket.io";
import { Events } from "../../../frontend/shared/WSEvents";

export function setup(io:Server){
  console.log(111);
  io.on("connection",(socket)=>{
    console.log("ws connected");

    socket.on(Events.ROOM_JOIN,(roomNumber) => {
      console.log("# join room: " + roomNumber, socket.id);
      // socket.join(roomNumber);
    })
  });

}