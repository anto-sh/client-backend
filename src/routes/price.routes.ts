import { Router, RequestHandler } from "express";
import { getAllPrices, getPriceById } from "../controllers/price.controller";

const router = Router();

router.get("/", getAllPrices as RequestHandler);
router.get("/:id", getPriceById as RequestHandler);

export const priceRoutes = router;
