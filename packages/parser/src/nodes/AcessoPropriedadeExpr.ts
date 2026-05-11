import { Expressão } from "./Expressão.js";
import { Node } from "./Node.js";

export class AcessoPropriedadeExpr extends Expressão<any> {
  objeto: Expressão<any>;
  propriedade: string;

  constructor(ctx: any) {
    super(ctx);
    this.objeto = null!;
    this.propriedade = this.ctx.ID().getText();
  }

  addChild(child: Node) {
    if (child instanceof Expressão && !this.objeto) {
      this.objeto = child;
    } else {
      this.unexpectedChild(child);
    }

    this.children.push(child);
  }
}
