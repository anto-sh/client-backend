import { RequestHandler, Router } from "express";
import {
  getAllExerciseCategories,
  getAllExerciseCategoriesWithExercises,
} from "../controllers/exercise-category.controller";

const router = Router();

router.get("/", getAllExerciseCategories as RequestHandler);
router.get(
  "/with-exercises",
  getAllExerciseCategoriesWithExercises as RequestHandler
);

export const exerciseCategoryRoutes = router;
