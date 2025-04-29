import { Router } from "express";
import documentationApiController from "../../controllers/documentation/documentationApiController.js";

const router = Router();

//read
router.get("/", documentationApiController.getAll);

router.post("/create",documentationApiController.create);

//update
router.get("/:id", documentationApiController.getByID);


router.put("/:id/edit",documentationApiController.edit);

//delete
router.delete("/:id/delete", documentationApiController.remove);

export default router;