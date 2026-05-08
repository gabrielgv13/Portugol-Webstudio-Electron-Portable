/*
  Exemplo da biblioteca Vetores.

  Este programa demonstra as funções de fila (FIFO): enfileirar(),
  desenfileirar(), frente(), fila_vazia() e tamanho_fila().
*/
programa {
  inclua biblioteca Vetores --> vt

  funcao inicio() {
    escreva("========== TESTE DE FILA (FIFO - Queue) ==========" + "\n\n")

    inteiro fila_numeros[]

    escreva("Enfileirando valores: 100, 200, 300, 400\n")
    vt.enfileirar(fila_numeros, 100)
    vt.enfileirar(fila_numeros, 200)
    vt.enfileirar(fila_numeros, 300)
    vt.enfileirar(fila_numeros, 400)

    escreva("Tamanho da fila: " + vt.tamanho_fila(fila_numeros) + "\n")
    escreva("Frente da fila: " + vt.frente(fila_numeros) + "\n\n")

    escreva("Desenfileirando valores:\n")
    enquanto (nao vt.fila_vazia(fila_numeros)) {
      inteiro valor = vt.desenfileirar(fila_numeros)
      escreva("Desenfileirou: " + valor + "\n")
    }

    escreva("Fila vazia? " + vt.fila_vazia(fila_numeros) + "\n")
  }
}
