import { RequestHandler, Router } from "express";
import { getAllExperts, getExpertById } from "../controllers/expert.controller";

const router = Router();

router.get("/", getAllExperts as RequestHandler);
router.get("/:id", getExpertById as RequestHandler);

export const expertRoutes = router;
