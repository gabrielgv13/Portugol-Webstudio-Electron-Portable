import { LiteralObjetoContext } from "@portugol-webstudio/antlr";

import { Expressão } from "./Expressão.js";
import { Node } from "./Node.js";
import { Propriedade } from "./Propriedade.js";

export class LiteralObjetoExpr extends Expressão<LiteralObjetoContext> {
  chaves: string[] = [];
  valores: Expressão[] = [];

  addChild(child: Node) {
    // If child is a property node, capture key and value
    const ctorName = child?.ctx?.constructor?.name;
    if (ctorName === "PropriedadeContext") {
      if (child instanceof Propriedade) {
        this.chaves.push(child.chave);

        if (child.valor) {
          this.valores.push(child.valor);
        }
      }
    } else if (child instanceof Expressão) {
      this.valores.push(child);
    }

    this.children.push(child);
  }

  propriedades(): Record<string, Expressão> {
    const obj: Record<string, Expressão> = {};

    for (let i = 0; i < this.chaves.length; i++) {
      const key = this.chaves[i];
      const val = this.valores[i];

      if (key && val) {
        obj[key] = val;
      }
    }

    return obj;
  }
}
