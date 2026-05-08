/*
  Exemplo da biblioteca Vetores.

  Este programa demonstra as funções de pilha (LIFO): empilhar(),
  desempilhar(), topo(), pilha_vazia() e tamanho_pilha().
*/
programa {
  inclua biblioteca Vetores

  funcao inicio() {
    escreva("========== TESTE DE PILHA (LIFO - Stack) ==========" + "\n\n")

    inteiro pilha_numeros[]

    escreva("Empilhando valores: 10, 20, 30, 40\n")
    empilhar(pilha_numeros, 10)
    empilhar(pilha_numeros, 20)
    empilhar(pilha_numeros, 30)
    empilhar(pilha_numeros, 40)

    escreva("Tamanho da pilha: " + tamanho_pilha(pilha_numeros) + "\n")
    escreva("Topo da pilha: " + topo(pilha_numeros) + "\n\n")

    escreva("Desempilhando valores:\n")
    enquanto (nao pilha_vazia(pilha_numeros)) {
      inteiro valor = desempilhar(pilha_numeros)
      escreva("Desempilhou: " + valor + "\n")
    }

    escreva("Pilha vazia? " + pilha_vazia(pilha_numeros) + "\n")
  }
}
