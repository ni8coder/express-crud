import { crudController } from "../../utils/crud";
import User from "./user.model";

const controller = crudController(User);
export default controller;
