import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";

const router = Router();
router.get("/",(req,res)=>{
    res.send("Hello User Api Router");
});
/*
//read
router.get("/", userApiController.getAll);

//update
router.get("/:id", userApiController.getByID);

//delete
router.get("/:id/delete", userApiController.remove);*/

export default router;
