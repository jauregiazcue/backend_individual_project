import { Router } from "express";
import objCategoryController from "../../controllers/objCategory/objCategoryApiController.js";

const router = Router();

//read
router.get("/", objCategoryController.getAll);

router.get("/create",objCategoryController.create);

//update
router.get("/:id", objCategoryController.getByID);


router.get("/:id/edit",objCategoryController.edit);

//delete
router.get("/:id/delete", objCategoryController.remove);

export default router;