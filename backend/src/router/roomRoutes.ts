import Router from "koa-router";

import roomCreate from "../http/roomCreate";

const roomRouter = new Router();

roomRouter.post("/create",roomCreate);

export default roomRouter;