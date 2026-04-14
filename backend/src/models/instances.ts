import { Stack } from "./Stack";
import { Queue } from "./Queue";
import { List } from "./List";

export const stack = new Stack<unknown>("Pilha Principal");
export const queue = new Queue<unknown>("Fila Principal");
export const list = new List<unknown>("Lista Principal");
