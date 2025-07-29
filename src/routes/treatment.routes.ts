import { RequestHandler, Router } from "express";
import { getAllTreatments } from "../controllers/treatment.controller";

const router = Router();

router.get("/", getAllTreatments as RequestHandler);

export const treatmentRoutes = router;
