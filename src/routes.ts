import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// USER ROUTES

router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/user", isAuthenticated, new DetailUserController().handle);

export { router };
