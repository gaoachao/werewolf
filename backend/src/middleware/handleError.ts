import { Middleware } from "koa";


// 一个创建错误的中间件
export function createError({
  status,
  msg,
}: {
  status: number;
  msg: string;
}): undefined {
  throw new Error(
    JSON.stringify({
      status,
      msg,
    })
  );
}
