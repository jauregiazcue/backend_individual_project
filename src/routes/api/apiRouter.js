import { Router } from "express";
import userRouter from "./userApiRouter.js";
import objectRouter from "./objectApiRouter.js";
import docRouter from "./documentationApiRouter.js";
import objCatRouter from "./objectCategoryApiRouter.js";
const router = Router();

router.use("/user", userRouter);
router.use("/doc", docRouter);
router.use("/objCat",objCatRouter);
router.use("/object",objectRouter);

export default router;
