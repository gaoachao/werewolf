import { TokenDef } from "../../shared/ModelDefs";

// 设置Token的KEY
const KEY = "_werewolf_token";

// 设置Token的函数
// Date.now()返回一个 Number，表示自 UNIX 纪元开始（1970 年 1 月 1 日 00:00:00 (UTC)）到当前时间的毫秒数。
export function setToken(ID:string,roomNumber:string){
  const token:TokenDef = {
    ID,
    datetime:Date.now(),
    roomNumber,
  };
  window.localStorage.setItem(KEY,JSON.stringify(token));
}

// 获取Token的函数
export function getToken():TokenDef | null{
  /* 
  *  这里用 try{}catch{} 来避免第一次创建房间发起POST请求
  *  在请求拦截器中获取token但localStorage里没有token的错误
  */
  try{
    const str:string = window.localStorage.getItem(KEY) || '@';
    const token:TokenDef = JSON.parse(str);
    if(
      typeof token.ID === "string" &&
      typeof token.datetime === "number" &&
      typeof token.roomNumber === "string"
    ) {
      const dtDiff = Date.now() - token.datetime;
      // 这里设置Token过期的时间
      if(dtDiff / 1000 / 3600 / 24 < 1){
        return token;
      } else {
        // remove token
        // window.localStorage.removeItem(KEY);
      }
    }
  } catch(error){
    // console.log(error);
  }
  return null;
}