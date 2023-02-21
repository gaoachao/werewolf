## API接口文档

### 端口

```javascript
export const CLIENT_BASE_URL = "http://localhost:5173";
export const SERVER_BASE_URL = "http://localhost:3011";
```

## cor使用说明



## 有关socket.io





## Koa中router.allowedMethods()中间件的作用

在加了`router.allowedMethods()`中间件情况下，如果接口是get请求，而前端使用post请求，会返回405 Method Not Allowed ，提示方法不被允许 ，并在响应头有添加允许的请求方式；而在不加这个中间件这种情况下，则会返回 404 Not Found找不到请求地址，并且响应头没有添加允许的请求方式 。
