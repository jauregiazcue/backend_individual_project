import { Router } from "express";
import objCategoryController from "../../controllers/objCategory/objCategoryApiController.js";

const router = Router();

//read
router.get("/", objCategoryController.getAll);

router.post("/create",objCategoryController.create);

//update
router.get("/:id", objCategoryController.getByID);


router.put("/:id/edit",objCategoryController.edit);

//delete
router.delete("/:id/delete", objCategoryController.remove);

export default router;