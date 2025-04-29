import { Router } from "express";
import requestController from "../../controllers/request/requestApiController.js";
import {isLoggedInAPI} from "../../middleware.js"
const router = Router();

//read
router.get("/",isLoggedInAPI, requestController.getAll);

router.post("/create",requestController.create);

//update
router.get("/:id", isLoggedInAPI,requestController.getByID);


router.put("/:id/edit",isLoggedInAPI,requestController.edit);

//delete
router.delete("/:id/delete", isLoggedInAPI,requestController.remove);

export default router;