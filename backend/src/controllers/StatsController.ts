import { Request, Response } from "express";
import { stack, queue, list } from "../models/instances";
import { LinearStructure } from "../models/LinearStructure";

export class StatsController {
  public getStats(_req: Request, res: Response): void {
    // 1. Fazemos a soma de tudo
    const totalItens = stack.getSize() + queue.getSize() + list.getSize();

    // 2. Enviamos no formato que o App.tsx entende
    res.json({
      total: totalItens, // O Front-end vai ler isso aqui!
      resumo: `Itens: ${totalItens} | Estruturas: ${LinearStructure.getCreatedStructures()}`,
      // Se você quiser manter os detalhes para usar depois, pode deixar abaixo:
      estruturas: [
        { name: stack.name, tamanho: stack.getSize() },
        { name: queue.name, tamanho: queue.getSize() },
        { name: list.name, tamanho: list.getSize() },
      ]
    });
  }
}
