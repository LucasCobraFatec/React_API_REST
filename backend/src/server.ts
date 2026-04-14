import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
