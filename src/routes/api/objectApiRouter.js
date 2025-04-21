import { Router } from "express";
import objController from "../../controllers/object/objectApiController.js";

const router = Router();

//read
router.get("/", objController.getAll);

router.get("/create",objController.create);

//update
router.get("/:id", objController.getByID);


router.get("/:id/edit",objController.edit);

//delete
router.get("/:id/delete", objController.remove);

export default router;