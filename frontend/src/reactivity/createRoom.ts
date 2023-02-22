import { reactive, ref } from "vue";
import { SetableCharacters } from "../../../shared/GameDefs";
import { showDialog } from "./dialog";
import { needingCharacters , players } from "./game";
import router from "../router";
import { setToken } from "../utils/token";
import { joinRoom } from "../socket.io";
import { createRoom } from "../http/room";

/* 游戏人数配置（reactive） */
export const characters = reactive<Record<SetableCharacters,number>>({
  GUARD:1,     //守卫
  HUNTER:1,    //猎人
  SEER:1,      //预言家
  VILLAGER:2,  //村民
  WEREWOLF:3,  //狼人
  WITCH:1,     //女巫
})

/* 玩家信息 */
export const nickname = ref<string>("");
/* 房间密码 */
export const password = ref<string>("");


/**
 * 设置游戏人数配置
 * @param character 设置的对象
 * @param type 设置增大还是减小
 * @return {boolean} 是否设置成功
 */
export function setCharacter(
  character:SetableCharacters,
  type:1 | -1
):boolean{
  if (characters[character] + type < 0 ) return false;
  if (["SEER", "HUNTER", "GUARD", "WITCH"].includes(character) && (type === 1 && characters[character] === 1)) return false;
  characters[character] += type;
  return true;
}


/**
 * 创建房间函数
 * @return {void}
 */

export async function create(){
  //如果昵称为空
  if(!nickname.value) return showDialog("请填写昵称");
  let characterNames:SetableCharacters[] = [];
  Object.keys(characters).map((_name)=>{
    const name = _name as SetableCharacters;
    characterNames = characterNames.concat(
      new Array(characters[name]).fill(name)
    )
  })
  needingCharacters.value = characterNames;
  
  const res = await createRoom({
    characters:characterNames,
    name:nickname.value,
    password:password.value?password.value : undefined,
  });
  if(res && res.status === 200){
    const data = res.data;
    // 通知后端在io中加入该房间
    console.log(data);
    joinRoom(data.roomNumber);
    
    showDialog("创建成功, 进入等待房间");
    router.push({
      name: "waitRoom",
      query: {
        pw: password.value,
        number: data.roomNumber,
      },
    });
    // 把用户的ID和创建的房间号放入token中
    setToken(data.ID, data.roomNumber);
    players.value = [
      {
        index: 1,
        isAlive: true,
        name: nickname.value,
        isSheriff: false,
        isDying: false,
        hasVotedAt: [],
        sheriffVotes: [],
      },
    ];
  }
}