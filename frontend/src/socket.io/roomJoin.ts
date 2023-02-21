import { RoomJoinMsg } from "../../shared/WSMsg/RoomJoin";

import { players } from "../reactivity/game";

export default function roomJoin(msg: RoomJoinMsg) {
  console.log("#ws on room join");
  console.log(111);
  players.value = msg;
}