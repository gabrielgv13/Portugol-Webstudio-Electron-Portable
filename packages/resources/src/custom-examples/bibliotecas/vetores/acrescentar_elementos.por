/*
  Exemplo da biblioteca Vetores.

  Este programa mostra como usar a função acrescentar() para criar um vetor
  dinâmico em Portugol e ir adicionando valores ao final dele.
*/
programa {
  inclua biblioteca Vetores

  funcao inicio() {
    inteiro numeros[]

    acrescentar(numeros, 10)
    acrescentar(numeros, 20)
    acrescentar(numeros, 30)
    acrescentar(numeros, 40)
    acrescentar(numeros, 50)

    escreva("Vetor após usar acrescentar():\n")
    escreva("numeros[0] = " + numeros[0] + "\n")
    escreva("numeros[1] = " + numeros[1] + "\n")
    escreva("numeros[2] = " + numeros[2] + "\n")
    escreva("numeros[3] = " + numeros[3] + "\n")
    escreva("numeros[4] = " + numeros[4] + "\n")
  }
}
