import { Router } from "express";
import controllers from "./user.controller";
import { createUserValidation } from "./validation/user.create.validation";
import { updateUserValidation } from "./validation/user.update.validation";

const router = Router();

router
  .route("/")
  .get(controllers.getMany)
  .post(createUserValidation(), controllers.createOne);

router
  .route("/:id")
  .get(controllers.getOne)
  .put(updateUserValidation(), controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
