import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

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

// PRODUCTS ROUTES
router.post(
    "/registerProduct",
    isAuthenticated,
    upload.single("file"),
    new CreateProductController().handle
);

router.get(
    "/category/products",
    isAuthenticated,
    new ListByCategoryController().handle
);

export { router };
