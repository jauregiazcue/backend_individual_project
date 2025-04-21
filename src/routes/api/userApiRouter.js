import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";

const router = Router();

//read
router.get("/", userApiController.getAll);

router.get("/create",userApiController.create);

//update
router.get("/:id", userApiController.getByID);


router.get("/:id/edit",userApiController.edit);

//delete
router.get("/:id/delete", userApiController.remove);

export default router;