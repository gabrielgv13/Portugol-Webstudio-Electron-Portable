/*
  Exemplo da biblioteca Vetores.

  Este programa demonstra as funções de pilha (LIFO): empilhar(),
  desempilhar(), topo(), pilha_vazia() e tamanho_pilha().
*/
programa {
  inclua biblioteca Vetores --> vt

  funcao inicio() {
    escreva("========== TESTE DE PILHA (LIFO - Stack) ==========" + "\n\n")

    inteiro pilha_numeros[]

    escreva("Empilhando valores: 10, 20, 30, 40\n")
    vt.empilhar(pilha_numeros, 10)
    vt.empilhar(pilha_numeros, 20)
    vt.empilhar(pilha_numeros, 30)
    vt.empilhar(pilha_numeros, 40)

    escreva("Tamanho da pilha: " + vt.tamanho_pilha(pilha_numeros) + "\n")
    escreva("Topo da pilha: " + vt.topo(pilha_numeros) + "\n\n")

    escreva("Desempilhando valores:\n")
    enquanto (nao vt.pilha_vazia(pilha_numeros)) {
      inteiro valor = vt.desempilhar(pilha_numeros)
      escreva("Desempilhou: " + valor + "\n")
    }

    escreva("Pilha vazia? " + vt.pilha_vazia(pilha_numeros) + "\n")
  }
}
