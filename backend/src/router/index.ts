import Router from "koa-router";
import roomRouter from "./roomRoutes";

const router = new Router({prefix:"/api"});


// router.allowedMethods()中间件
// router.use中的 "/room"相当于是 roomRoutes里的{prefix:"room"}
router.use("/room",roomRouter.routes(), roomRouter.allowedMethods());


export default router;
