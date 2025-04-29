import { Router } from "express";
import requestController from "../../controllers/request/requestApiController.js";

const router = Router();

//read
router.get("/", requestController.getAll);

router.post("/create",requestController.create);

//update
router.get("/:id", requestController.getByID);


router.put("/:id/edit",requestController.edit);

//delete
router.delete("/:id/delete", requestController.remove);

export default router;