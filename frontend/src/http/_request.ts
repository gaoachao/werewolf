import axios,{AxiosHeaders, AxiosRequestConfig} from "axios";
import { IDHeaderName, RoomNumberHeaderName, SERVER_BASE_URL} from "../../shared/constants";
import { getToken } from "../utils/token";
import { showDialog } from "../reactivity/dialog";
import { HttpRes } from "../../shared/httpMsg/httpResTemplate";

export default function request(
  config:AxiosRequestConfig
){
  // 用axios.create()实例化
  const instance = axios.create({
    // 对服务端3011端口发起请求
    baseURL:SERVER_BASE_URL,
    timeout:60000,
    // 跨域情况下，需要携带请求域下的cookie那么就需要配置xhr对象的withCredentials为true。
    withCredentials:true,
  });

  // 实例配置请求拦截器
  instance.interceptors.request.use(
    (config)=>{
      const token = getToken();
      if(config.headers){
        if(token){
          (config.headers as AxiosHeaders).set(IDHeaderName,token!.ID);
          (config.headers as AxiosHeaders).set(RoomNumberHeaderName,token!.roomNumber);
        } else {
          (config.headers as AxiosHeaders).set(IDHeaderName,token);
          (config.headers as AxiosHeaders).set(RoomNumberHeaderName,token);
        }
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
  
  // 实例配置响应拦截器
  instance.interceptors.response.use(
    (response)=>{
      const data = response.data || {};
      if (data.status === 200) {
        return data;
      } else {
        if (data.msg) {
          showDialog(data.msg);
        } else {
          console.error("#error:", { response });
          showDialog("发生未知错误");
        }
        return null;
      }
    },
    (error)=> Promise.reject(error),
  );

  // 返回一个 Promise对象
  return new Promise<HttpRes>(async (resolve) =>{
    const res:HttpRes = await instance(config);
    resolve(res);
  });
}