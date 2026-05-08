export default /* javascript */ `{
  acrescentar(vetor, valor) {
    self.runtime.expectType("acrescentar", "vetor", vetor, "vetor");

    if (!Array.isArray(vetor.value)) {
      throw new Error("O primeiro argumento de 'acrescentar' deve ser um vetor");
    }

    vetor.value.push(valor);

    return new PortugolVar("vazio");
  },

  // Stack (Pilha) - LIFO operations
  empilhar(pilha, valor) {
    self.runtime.expectType("empilhar", "pilha", pilha, "vetor");

    if (!Array.isArray(pilha.value)) {
      throw new Error("O primeiro argumento de 'empilhar' deve ser uma pilha (vetor)");
    }

    pilha.value.push(valor);

    return new PortugolVar("vazio");
  },

  desempilhar(pilha) {
    self.runtime.expectType("desempilhar", "pilha", pilha, "vetor");

    if (!Array.isArray(pilha.value)) {
      throw new Error("O argumento de 'desempilhar' deve ser uma pilha (vetor)");
    }

    if (pilha.value.length === 0) {
      throw new Error("Erro ao desempilhar: a pilha está vazia");
    }

    return pilha.value.pop();
  },

  topo(pilha) {
    self.runtime.expectType("topo", "pilha", pilha, "vetor");

    if (!Array.isArray(pilha.value)) {
      throw new Error("O argumento de 'topo' deve ser uma pilha (vetor)");
    }

    if (pilha.value.length === 0) {
      throw new Error("Erro ao obter topo: a pilha está vazia");
    }

    return pilha.value[pilha.value.length - 1];
  },

  pilha_vazia(pilha) {
    self.runtime.expectType("pilha_vazia", "pilha", pilha, "vetor");

    if (!Array.isArray(pilha.value)) {
      throw new Error("O argumento de 'pilha_vazia' deve ser uma pilha (vetor)");
    }

    return new PortugolVar("logico", pilha.value.length === 0);
  },

  // Queue (Fila) - FIFO operations
  enfileirar(fila, valor) {
    self.runtime.expectType("enfileirar", "fila", fila, "vetor");

    if (!Array.isArray(fila.value)) {
      throw new Error("O primeiro argumento de 'enfileirar' deve ser uma fila (vetor)");
    }

    fila.value.push(valor);

    return new PortugolVar("vazio");
  },

  desenfileirar(fila) {
    self.runtime.expectType("desenfileirar", "fila", fila, "vetor");

    if (!Array.isArray(fila.value)) {
      throw new Error("O argumento de 'desenfileirar' deve ser uma fila (vetor)");
    }

    if (fila.value.length === 0) {
      throw new Error("Erro ao desenfileirar: a fila está vazia");
    }

    return fila.value.shift();
  },

  frente(fila) {
    self.runtime.expectType("frente", "fila", fila, "vetor");

    if (!Array.isArray(fila.value)) {
      throw new Error("O argumento de 'frente' deve ser uma fila (vetor)");
    }

    if (fila.value.length === 0) {
      throw new Error("Erro ao obter frente: a fila está vazia");
    }

    return fila.value[0];
  },

  fila_vazia(fila) {
    self.runtime.expectType("fila_vazia", "fila", fila, "vetor");

    if (!Array.isArray(fila.value)) {
      throw new Error("O argumento de 'fila_vazia' deve ser uma fila (vetor)");
    }

    return new PortugolVar("logico", fila.value.length === 0);
  },

  tamanho_fila(fila) {
    self.runtime.expectType("tamanho_fila", "fila", fila, "vetor");

    if (!Array.isArray(fila.value)) {
      throw new Error("O argumento de 'tamanho_fila' deve ser uma fila (vetor)");
    }

    return new PortugolVar("inteiro", fila.value.length);
  },

  tamanho_pilha(pilha) {
    self.runtime.expectType("tamanho_pilha", "pilha", pilha, "vetor");

    if (!Array.isArray(pilha.value)) {
      throw new Error("O argumento de 'tamanho_pilha' deve ser uma pilha (vetor)");
    }

    return new PortugolVar("inteiro", pilha.value.length);
  },
}`;
