import { Router } from "express";
import userRouter from "./userApiRouter.js";
import docRouter from "./documentationApiRouter.js";
import objCatRouter from "./objectCategoryApiRouter.js"
const router = Router();

router.use("/user", userRouter);
router.use("/doc", docRouter);
router.use("/objCat",objCatRouter);

export default router;
