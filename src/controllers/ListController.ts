import { Request, Response } from "express";
import { list } from "../models/instances";

export class ListController {
  public add(req: Request, res: Response): void {
    const {item} = req.body;

    if (item === undefined) {
      res.status(400).json({ erro: "Informe o campo 'item' no corpo da requisição." });
      return;
    }

    list.add(item);
    res.status(201).json({ mensagem: "Item adicionado na lista." });
  }

  public removeAt(req: Request, res: Response): void {
  const idx = Number(req.params.index);
  if (!Number.isInteger(idx)) {
    res.status(400).json({ erro: "Índice inválido. Informe um número inteiro." });
    return;
  }
  if (list.getSize() === 0) {
    res.status(404).json({ erro: "A lista está vazia." });
    return;
  }
  const removed = list.removeAt(idx);
  if (removed === undefined) {
    res.status(404).json({ erro: "Índice fora do intervalo." });
    return;
  }
  res.json({ removido: removed });
}

public getAt(req: Request, res: Response): void {
  const idx = Number(req.params.index);
  if (!Number.isInteger(idx)) {
    res.status(400).json({ erro: "Índice inválido. Informe um número inteiro." });
    return;
  }
  if (list.getSize() === 0) {
    res.status(404).json({ erro: "A lista está vazia." });
    return;
  }
  const item = list.getAt(idx);
  if (item === undefined) {
    res.status(404).json({ erro: "Índice fora do intervalo." });
    return;
  }
  res.json({ item });
}

  public getAll(_req: Request, res: Response): void {
    res.json({
      estrutura: {
        id: list.getId(),
        name: list.name,
      },
      tamanho: list.getSize(),
      itens: list.getItems(),
    });
  }

  public clear(_req: Request, res: Response): void {
    list.clear();
    res.json({ mensagem: "Lista limpa com sucesso." });
  }
}
