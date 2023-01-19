
// 玩家的id
export type ID = string;
// 玩家编号，从1开始
export type index = number;


// 第0夜: 0, 第 n 天白天: 2n-1, 第 n 天晚上: 2n
export type day = number;



// Token的接口
export interface TokenDef {
  ID:ID,
  datetime:number,
  roomNumber:string,
}