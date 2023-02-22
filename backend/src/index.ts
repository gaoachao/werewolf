import Koa from "koa";
import KoaBody from "koa-body";
import cors from "@koa/cors";
import { createServer } from "http";
import router from "./router";

import { WS_PATH } from "../../shared/config";

import { Server } from "socket.io";
import { setup } from "./websocket";

const app = new Koa<
  { isKnownError: Boolean },
  { error: (status: number, msg: string) => void }
>();

// app.callback()，通过搜索查找发现是koa中封装好的一个函数
const httpServer = createServer(app.callback());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
  path: WS_PATH,
});

setup(io);

app
  // 使用koa-cors实现跨域 5173是客户端端口
  .use(cors({ credentials: true, origin: "http://localhost:5173" }))
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods());

httpServer.listen(3011);


export default io;

