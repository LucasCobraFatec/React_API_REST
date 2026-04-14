import { Request, Response } from "express";
import { queue } from "../models/instances";

export class QueueController {
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      res
        .status(400)
        .json({ erro: "Informe o campo 'item' no corpo da requisição." });
      return;
    }

    queue.add(item);
    res.status(201).json({ mensagem: "Item adicionado na fila." });
  }

  public remove(_req: Request, res: Response): void {
    const removed = queue.remove();

    if (removed === undefined) {
      res.status(404).json({ erro: "A fila está vazia." });
      return;
    }

    res.json({ removido: removed });
  }

  public peek(_req: Request, res: Response): void {
    const first = queue.peek(); // Em filas, o peek olha o primeiro a chegar

    if (first === undefined) {
      res.status(404).json({ erro: "A fila está vazia." });
      return;
    }

    res.json({ primeiro: first });
  }

  // AQUI ESTÁ A MUDANÇA PRINCIPAL:
  public getAll(_req: Request, res: Response): void {
    // Retornamos apenas o array de itens para o .map() do React não quebrar
    res.json(queue.getItems());
  }

  public clear(_req: Request, res: Response): void {
    queue.clear();
    res.json({ mensagem: "Fila limpa com sucesso." });
  }
}