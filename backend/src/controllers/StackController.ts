import { Request, Response } from "express";
import { stack } from "../models/instances";

export class StackController {
  // Adiciona um item ao topo da pilha
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      res.status(400).json({
        erro: "Informe o campo 'item' no corpo da requisição.",
      });
      return;
    }

    stack.add(item);
    res.status(201).json({ mensagem: "Item adicionado na pilha." });
  }

  // Remove o item do topo da pilha (LIFO)
  public remove(_req: Request, res: Response): void {
    const removed = stack.remove();

    if (removed === undefined) {
      res.status(404).json({ erro: "A pilha está vazia." });
      return;
    }

    res.json({ removido: removed });
  }

  // Apenas visualiza o item do topo
  public peek(_req: Request, res: Response): void {
    const top = stack.peek();

    if (top === undefined) {
      res.status(404).json({ erro: "A pilha está vazia." });
      return;
    }

    res.json({ topo: top });
  }

  // Retorna todos os itens (Essencial para o .map() no React)
  public getAll(_req: Request, res: Response): void {
    // Retornamos apenas o array de itens para evitar erros no Front-end
    res.json(stack.getItems());
  }

  // Limpa toda a estrutura
  public clear(_req: Request, res: Response): void {
    stack.clear();
    res.json({ mensagem: "Pilha limpa com sucesso." });
  }
}
