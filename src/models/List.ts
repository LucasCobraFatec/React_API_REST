import { LinearStructure } from "./LinearStructure";

export class List<T> extends LinearStructure<T> {
  public constructor(name = "Lista") {
    super(name);
  }

public remove(): T | undefined {
         return this.items.pop() ;
    }

  public peek(): T | undefined {     
          return this.items[this.items.length - 1] || undefined;      
    }


  public getAt(index: number): T | undefined {
    if (!Number.isInteger(index) || index < 0 || index >= this.items.length)
      return undefined;
    return this.items[index];
  }

  public removeAt(index: number): T | undefined {
    if (!Number.isInteger(index) || index < 0 || index >= this.items.length)
      return undefined;
    return this.items.splice(index, 1)[0];
  }
}