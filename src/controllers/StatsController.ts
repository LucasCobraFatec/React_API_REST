import { Request, Response } from "express";
import { stack, queue, list } from "../models/instances";
import { LinearStructure } from "../models/LinearStructure";

export class StatsController {
  public getStats(_req: Request, res: Response): void {
    res.json({
      estruturasCriadas: LinearStructure.getCreatedStructures(),
      estruturas: [
        {
          id: stack.getId(),
          name: stack.name,
          tamanho: stack.getSize(),
          itens: stack.getItems(),
        },
        {
          id: queue.getId(),
          name: queue.name,
          tamanho: queue.getSize(),
          itens: queue.getItems(),
        },
        {
          id: list.getId(),
          name: list.name,
          tamanho: list.getSize(),
          itens: list.getItems(),
        },
      ],
    });
  }
}
