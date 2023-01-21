import * as Koa from "koa";
import * as KoaBody from "koa-body";
import * as cors from "@koa/cors";

import { Server } from "socket.io";

const app = new Koa();

app
  // 使用koa-cors实现跨域
  .use(cors());

