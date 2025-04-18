import { Router } from "express";
import apiRouter from "./api/apiRouter.js";
//import viewRouter from "../routes/views/viewRouter.js";

const router = Router();

router.use("/api", apiRouter);
//router.use("/", viewRouter);

export default router;
