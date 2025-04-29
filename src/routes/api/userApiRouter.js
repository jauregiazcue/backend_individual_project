import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import {isLoggedInAPI} from "../../middleware.js"
const router = Router();

//read
router.get("/", isLoggedInAPI,userApiController.getAll);

router.post("/create",userApiController.create);

router.get("/login",userApiController.login);

//update
router.get("/:id", userApiController.getByID);


router.put("/:id/edit",userApiController.edit);

//delete
router.delete("/:id/delete", userApiController.remove);

export default router;