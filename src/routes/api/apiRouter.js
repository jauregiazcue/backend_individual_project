import { Router } from "express";
import userRouter from "./userApiRouter.js";
import objectRouter from "./objectApiRouter.js";
import docRouter from "./documentationApiRouter.js";
import objCatRouter from "./objectCategoryApiRouter.js";
import requestRouter from "./requestRouter.js"
const router = Router();

router.use("/user", userRouter);
router.use("/doc", docRouter);
router.use("/objCat",objCatRouter);
router.use("/object",objectRouter);
router.use("/request",requestRouter);

export default router;
