import { Router } from "express";
import documentationApiController from "../../controllers/documentation/documentationApiController.js";
import {isLoggedInAPI} from "../../middleware.js"

const router = Router();

//read
router.get("/",isLoggedInAPI, documentationApiController.getAll);

router.post("/create",isLoggedInAPI,documentationApiController.create);

//update
router.get("/:id",isLoggedInAPI, documentationApiController.getByID);


router.put("/:id/edit",isLoggedInAPI,documentationApiController.edit);

//delete
router.delete("/:id/delete", isLoggedInAPI,documentationApiController.remove);

export default router;