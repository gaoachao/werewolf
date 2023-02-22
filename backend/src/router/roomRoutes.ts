import Router from "koa-router";

import roomCreate from "../http/roomCreate";
import roomInit from "../http/roomInit";

const roomRouter = new Router();

roomRouter.post("/create",roomCreate);

roomRouter.post("/init", roomInit);

export default roomRouter;