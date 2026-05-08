export default /* javascript */ `{
  acrescentar(vetor, valor) {
    self.runtime.expectType("acrescentar", "vetor", vetor, "vetor");

    if (!Array.isArray(vetor.value)) {
      throw new Error("O primeiro argumento de 'acrescentar' deve ser um vetor");
    }

    vetor.value.push(valor);

    return new PortugolVar("vazio");
  },
}`;
