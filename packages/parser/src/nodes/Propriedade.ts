import { PropriedadeContext } from "@portugol-webstudio/antlr";

import { Expressão } from "./Expressão.js";
import { Node } from "./Node.js";

export class Propriedade extends Node<PropriedadeContext> {
  chave: string;
  valor?: Expressão;

  constructor(ctx: PropriedadeContext) {
    super(ctx);
    // prefer ID; if grammar extended to accept STRING later, handle it then
    const id = ctx.ID();
    const str = (ctx as any).STRING ? (ctx as any).STRING() : null;
    const chr = (ctx as any).CARACTER ? (ctx as any).CARACTER() : null;

    if (id) {
      this.chave = id.getText();
    } else if (str) {
      // STRING includes the surrounding quotes; remove them
      const txt = str.getText();
      this.chave = txt.substring(1, txt.length - 1);
    } else if (chr) {
      // CARACTER has single quotes around a char; strip them
      const txt = chr.getText();
      this.chave = txt.substring(1, txt.length - 1);
    } else {
      this.chave = "";
    }
  }

  addChild(child: Node) {
    if (child instanceof Expressão) {
      this.valor = child;
    } else {
      this.unexpectedChild(child);
    }

    this.children.push(child);
  }
}
