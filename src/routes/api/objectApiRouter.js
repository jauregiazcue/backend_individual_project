import { Router } from "express";
import objController from "../../controllers/object/objectApiController.js";
import {isLoggedInAPI} from "../../middleware.js"
const router = Router();

//read
router.get("/", objController.getAll);

router.post("/create",isLoggedInAPI,objController.create);

//update
router.get("/:id", objController.getByID);


router.put("/:id/edit",isLoggedInAPI,objController.edit);

//delete
router.delete("/:id/delete", isLoggedInAPI,objController.remove);

export default router;