import { Router } from "express";
import userRouter from "./userApiRouter.js";

const router = Router();

router.use("/user", userRouter);

export default router;
