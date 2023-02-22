import { Server } from "socket.io";
import { Events } from "../../../shared/WSEvents";

export function setup(io:Server){
  io.on("connection",(socket)=>{
    console.log("ws connected");

    socket.on(Events.ROOM_JOIN,(roomNumber) => {
      console.log("# join room: " + roomNumber, socket.id);
      // socket.join(roomNumber);
    })
  });

}