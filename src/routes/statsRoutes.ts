import { Router } from "express";
import { StatsController } from "../controllers/StatsController";

const statsRoutes = Router();
const controller = new StatsController();

statsRoutes.get("/", (req, res) => controller.getStats(req, res));

export { statsRoutes };
