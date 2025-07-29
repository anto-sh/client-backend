import { RequestHandler, Router } from "express";
import {
  getAllServiceCategories,
  getAllServiceCategoriesWithServices,
} from "../controllers/service-category.controller";

const router = Router();

router.get("/", getAllServiceCategories as RequestHandler);
router.get(
  "/with-services",
  getAllServiceCategoriesWithServices as RequestHandler
);

export const serviceCategoryRoutes = router;
