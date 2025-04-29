import { Router } from "express";
import objController from "../../controllers/object/objectApiController.js";

const router = Router();

//read
router.get("/", objController.getAll);

router.post("/create",objController.create);

//update
router.get("/:id", objController.getByID);


router.put("/:id/edit",objController.edit);

//delete
router.delete("/:id/delete", objController.remove);

export default router;