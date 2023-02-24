## API接口文档

### 端口

```javascript
export const CLIENT_BASE_URL = "http://localhost:5173";
export const SERVER_BASE_URL = "http://localhost:3011";
```

## 关于cor解决跨域

## 有关房间密码加密

## 有关socket.io

## 有关token

`createRoom.ts`中房主创建房间之后把房主的ID和房间号放入token中

然后`initRoom`向后端发送post请求时把token中的id和roomNumber放入`request header`中，在用`axios`封装的请求拦截器中。

## 后端RoomModel

- `class Room`会有一个静态私有属性`private static roomMap`存放着各个房间。
- 

## Koa中router.allowedMethods()中间件的作用

在加了`router.allowedMethods()`中间件情况下，如果接口是get请求，而前端使用post请求，会返回405 Method Not Allowed ，提示方法不被允许 ，并在响应头有添加允许的请求方式；而在不加这个中间件这种情况下，则会返回 404 Not Found找不到请求地址，并且响应头没有添加允许的请求方式 。





## shared

### httpMsg

- `httpResTemplate`：用一个泛型T来限定传入`data`的类型。
