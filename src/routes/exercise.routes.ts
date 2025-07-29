import { RequestHandler, Router } from "express";
import {
  getAllExercises,
  getExerciseById,
} from "../controllers/exercise.controller";

const router = Router();
router.get("/", getAllExercises as RequestHandler);
router.get("/:id", getExerciseById as RequestHandler);

export const exerciseRoutes = router;
