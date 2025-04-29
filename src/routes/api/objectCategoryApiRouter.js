import { Router } from "express";
import objCategoryController from "../../controllers/objCategory/objCategoryApiController.js";
import {isLoggedInAPI} from "../../middleware.js"
const router = Router();

//read
router.get("/", objCategoryController.getAll);

router.post("/create",isLoggedInAPI,objCategoryController.create);

//update
router.get("/:id", objCategoryController.getByID);


router.put("/:id/edit",isLoggedInAPI,objCategoryController.edit);

//delete
router.delete("/:id/delete", isLoggedInAPI,objCategoryController.remove);

export default router;