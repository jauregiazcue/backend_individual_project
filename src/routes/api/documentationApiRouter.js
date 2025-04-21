import { Router } from "express";
import documentationApiController from "../../controllers/documentation/documentationApiController.js";

const router = Router();

//read
router.get("/", documentationApiController.getAll);

router.get("/create",documentationApiController.create);

//update
router.get("/:id", documentationApiController.getByID);


router.get("/:id/edit",documentationApiController.edit);

//delete
router.get("/:id/delete", documentationApiController.remove);

export default router;