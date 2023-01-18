import { reactive, ref } from "vue";
import { SetableCharacters } from "../../shared/GameDefs";

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
 * 创建房间 函数
 * @return {void}
 */

export async function create(){

}