import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import {isLoggedInAPI} from "../../middleware.js"
const router = Router();

//read
router.get("/",userApiController.getAll);

router.post("/create",userApiController.create);

router.get("/login",userApiController.login);

//update
router.get("/:id",isLoggedInAPI, userApiController.getByID);


router.put("/:id/edit",isLoggedInAPI,userApiController.edit);

//delete
router.delete("/:id/delete", isLoggedInAPI,userApiController.remove);

export default router;