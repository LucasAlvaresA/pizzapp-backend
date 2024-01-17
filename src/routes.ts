import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

// USER ROUTES

router.post("/register", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/user", isAuthenticated, new DetailUserController().handle);

// CATEGORY ROUTES
router.post(
    "/registerCategory",
    isAuthenticated,
    new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

export { router };
