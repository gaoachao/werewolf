import {computed,ref} from "vue";

/* 剩余的时间 */
export const dialogTimeLeft = ref<number>(0);
/* 显示的文字放入一个数组里 */
export const toShowContents = ref<{
  content:string,
  timeout:number,
}[]>([]);
/* 内容,需要用计算属性判断一下数组长度 */
export const content = computed(()=>
  toShowContents.value.length ? toShowContents.value[0] : null
);

/**
 * 展示一个出现 showTime 秒数(默认5s) 的弹窗
 * @param toShowContent 显示的文字(支持 html)
 * @param showTime 显示的秒数(可选)
 */
export function showDialog(
  toShowContent: string,
  showTime?: number
) {
  toShowContents.value.push({
    content: toShowContent,
    timeout: showTime || 5,
  });
}
