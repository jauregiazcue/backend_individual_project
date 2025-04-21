import { Router } from "express";
import userRouter from "./userApiRouter.js";
import docRouter from "./documentationApiRouter.js";
const router = Router();

router.use("/user", userRouter);
router.use("/doc", docRouter);

export default router;
