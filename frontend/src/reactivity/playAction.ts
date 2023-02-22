import { ref } from "vue";
// index是种类型，玩家编号为number
import { index } from "../../../shared/ModelDefs";




export const isActing = ref(false);
export const noTarget = ref(false);
export const target = ref<index>(0);
export function setTarget(index: index) {
  if (!isActing.value) return;
  target.value = index;
}