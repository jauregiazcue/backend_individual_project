import { Router } from "express";
import requestController from "../../controllers/request/requestApiController.js";

const router = Router();

//read
router.get("/", requestController.getAll);

router.get("/create",requestController.create);

//update
router.get("/:id", requestController.getByID);


router.get("/:id/edit",requestController.edit);

//delete
router.get("/:id/delete", requestController.remove);

export default router;