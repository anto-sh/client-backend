import { RequestHandler, Router } from "express";
import {
  getAllServices,
  getServiceById,
} from "../controllers/service.controller";

const router = Router();

router.get("/", getAllServices as RequestHandler);
router.get("/:id", getServiceById as RequestHandler);

export const serviceRoutes = router;
