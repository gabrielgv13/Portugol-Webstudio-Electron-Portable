# Implementação de Objetos no Portugol

## Visão Geral

Este documento descreve a implementação completa da estrutura de objetos para a linguagem Portugol. Os objetos foram adicionados como um novo tipo primitivo que aceita qualquer valor, funcionando de forma semelhante aos vetores em termos de compatibilidade de tipos.

## Objetivos Alcançados

1. ✅ Adicionar `objeto` como um novo tipo primitivo
2. ✅ Implementar suporte para literais de objeto: `{ chave: valor, ... }`
3. ✅ Implementar acesso a propriedades: `objeto.propriedade`
4. ✅ Adicionar `objeto` a todas as 10 tabelas de compatibilidade de tipos
5. ✅ Permitir atribuição de qualquer tipo primitivo a variáveis de tipo `objeto`
6. ✅ Suportar armazenamento de objetos em vetores

## Arquitetura da Solução

### 1. Tipo Primitivo (`TipoPrimitivo.OBJETO`)

**Arquivo:** `packages/parser/src/helpers/Tipo.ts`

Adicionado o enum:
```typescript
OBJETO = "objeto"
```

E a função de parse:
```typescript
case "objeto":
  return TipoPrimitivo.OBJETO;
```

**Impacto:** Permite declarações de variáveis como `objeto p = ...`

### 2. Lexer (`PortugolLexico.g4`)

**Arquivo:** `packages/antlr/src/PortugolLexico.g4`

Adicionado a palavra-chave ao token `TIPO`:
```
TIPO: 'inteiro' | 'real' | 'cadeia' | 'caracter' | 'lógico' | 'objeto';
```

**Impacto:** O lexer reconhece `objeto` como um token válido de tipo.

### 3. Gramática (`Portugol.g4`)

**Arquivo:** `packages/antlr/src/Portugol.g4`

#### 3.1 Acesso a Propriedades

Adicionada regra à produção `expressao`:
```
expressao PONTO ID #acessoPropriedade
```

**Sintaxe:** `objeto.propriedade`

#### 3.2 Literais de Objeto

Adicionadas regras à produção `expressao`:
```
ABRE_CHAVES listaPropriedades? FECHA_CHAVES #literalObjeto
```

Novas produções:
```
listaPropriedades: propriedade (VIRGULA propriedade)*;
propriedade: (ID | STRING | CARACTER) DOISPONTOS expressao;
```

**Sintaxe:**
- `{ nome: "Gabriel", idade: 30 }`
- `{ "chave": valor }`
- `{ 'c': "valor" }`

### 4. Nós da AST (Abstract Syntax Tree)

#### 4.1 AcessoPropriedadeExpr

**Arquivo:** `packages/parser/src/nodes/AcessoPropriedadeExpr.ts`

```typescript
export class AcessoPropriedadeExpr extends Expressão {
  objeto: Expressão;
  propriedade: string;
}
```

**Responsabilidade:** Representa `objeto.propriedade` na AST

#### 4.2 LiteralObjetoExpr

**Arquivo:** `packages/parser/src/nodes/LiteralObjetoExpr.ts`

```typescript
export class LiteralObjetoExpr extends Expressão {
  chaves: string[];
  valores: Expressão[];
}
```

**Responsabilidade:** Representa `{ chave: valor, ... }` na AST

#### 4.3 Propriedade

**Arquivo:** `packages/parser/src/nodes/Propriedade.ts`

```typescript
export class Propriedade extends Node {
  chave: string;
  valor: Expressão;
}
```

**Responsabilidade:** Representa um par chave-valor individual dentro de um objeto literal

**Detalhes de Implementação:**
- Aceita chaves como `ID`, `STRING`, ou `CARACTER`
- Remove automaticamente aspas de chaves STRING e CARACTER
- Converte a chave para string válida

### 5. Mapeamento de Nós

**Arquivo:** `packages/parser/src/nodes/index.ts`

Registrados os contextos ANTLR para os nós:

```typescript
import { AcessoPropriedadeExpr } from "./AcessoPropriedadeExpr.js";
import { LiteralObjetoExpr } from "./LiteralObjetoExpr.js";
import { Propriedade } from "./Propriedade.js";

// ContextNodeMap (por classe)
AcessoPropriedadeContext: AcessoPropriedadeExpr,
LiteralObjetoContext: LiteralObjetoExpr,
PropriedadeContext: Propriedade,

// CRÍTICO: Contexto wrapper que passa filhos diretamente
ListaPropriedadesContext: Bypass,

// ContextNodeObj (por nome string)
"AcessoPropriedadeContext": AcessoPropriedadeExpr,
"LiteralObjetoContext": LiteralObjetoExpr,
"PropriedadeContext": Propriedade,
"ListaPropriedadesContext": Bypass,
```

**Impacto Crítico:** O mapeamento de `ListaPropriedadesContext` como `Bypass` é essencial. Este contexto é um wrapper gerado pela gramática para listar propriedades. Sem este mapeamento, a árvore de parse cria um nó `UnhandledNode` que rejeita seus filhos `Propriedade`.

### 6. Resolvedor de Tipos

**Arquivo:** `packages/parser/src/helpers/expressões.ts`

Adicionados casos ao `resolverResultadoExpressão`:

```typescript
case LiteralObjetoExpr:
  return TipoPrimitivo.OBJETO;

case AcessoPropriedadeExpr:
  // Valida que a base é do tipo OBJETO
  const tipoBase = resolverResultadoExpressão(expr.objeto);
  if (tipoBase !== TipoPrimitivo.OBJETO) {
    throw new Error(`Esperado tipo 'objeto', mas recebeu '${tipoBase}'`);
  }
  return TipoPrimitivo.OBJETO;
```

**Impacto:** Garante que apenas `objeto` pode acessar propriedades.

### 7. Tabelas de Compatibilidade

**Arquivo:** `packages/parser/src/helpers/compatibilidade.ts`

Atualadas todas as 10 tabelas de compatibilidade para permitir que `objeto` aceite todos os tipos primitivos com conversão implícita:

#### 7.1 Tabelas Atualizadas

1. **TabelaCompatibilidadeChamadaFunção**
   - `objeto` ← `cadeia`: COMPATÍVEL_COM_CONVERSÃO_IMPLÍCITA
   - `objeto` ← `caracter`: COMPATÍVEL_COM_CONVERSÃO_IMPLÍCITA
   - `objeto` ← `inteiro`: COMPATÍVEL_COM_CONVERSÃO_IMPLÍCITA
   - `objeto` ← `lógico`: COMPATÍVEL_COM_CONVERSÃO_IMPLÍCITA
   - `objeto` ← `real`: COMPATÍVEL_COM_CONVERSÃO_IMPLÍCITA
   - `objeto` ← `objeto`: COMPATÍVEL

2. **TabelaCompatibilidadeRetornoFunção** - Mesma compatibilidade

3. **TabelaCompatibilidadeAtribuição** - Mesma compatibilidade

4. **TabelaCompatibilidadeDiferençaIgualdade**
   - `objeto` == qualquer tipo: COMPATÍVEL_COM_CONVERSÃO_DE_OPERAÇÃO → LÓGICO

5. **TabelaCompatibilidadeEOu**
   - `objeto` && qualquer tipo: COMPATÍVEL

6. **TabelaCompatibilidadeMaiorMaiorIgualMenorMenorIgual**
   - `objeto` > qualquer tipo: COMPATÍVEL_COM_CONVERSÃO_DE_OPERAÇÃO → LÓGICO

7. **TabelaCompatibilidadeSoma**
   - `objeto` + qualquer tipo: COMPATÍVEL_COM_CONVERSÃO_DE_OPERAÇÃO → CADEIA

8. **TabelaCompatibilidadeModulo** - Permanece INCOMPATÍVEL
9. **TabelaCompatibilidadeDivisãoMultiplicaçãoSubtração** - Permanece INCOMPATÍVEL
10. **TabelaCompatibilidadeBitwise** - Permanece INCOMPATÍVEL

**Comportamento:** Objeto funciona como um tipo genérico que aceita qualquer valor, similar aos vetores.

## Fluxo de Processamento

```
Código Portugol
    ↓
Lexer (PortugolLexico.g4)
    ↓
Parser (Portugol.g4) → Árvore de Parse ANTLR
    ↓
PortugolNode (visitFromParent) → Mapeamento via index.ts
    ↓
AST (Nós: LiteralObjetoExpr, AcessoPropriedadeExpr, Propriedade)
    ↓
Resolvedor de Tipos (expressões.ts)
    ↓
Tabelas de Compatibilidade (compatibilidade.ts)
    ↓
Checador Semântico (checarUsoEscopo)
    ↓
Diagnósticos
```

## Exemplos de Código Suportado

### Exemplo 1: Variável Objeto com Literal

```portugol
programa {
  funcao inicio() {
    objeto p = { nome: "Gabriel", idade: 30 }
    escreva(p)
  }
}
```

### Exemplo 2: Atribuição de Qualquer Tipo

```portugol
programa {
  funcao inicio() {
    objeto a = "texto"
    objeto b = 42
    objeto c = 3.14
    objeto d = verdadeiro
    objeto e = 'X'
    objeto f = { chave: "valor" }
  }
}
```

### Exemplo 3: Acesso a Propriedades

```portugol
programa {
  funcao inicio() {
    objeto pessoa = { nome: "Ana", idade: 25 }
    escreva(pessoa.nome)
    escreva(pessoa.idade)
  }
}
```

### Exemplo 4: Objetos em Vetores

```portugol
programa {
  funcao inicio() {
    vetor[10] objeto pessoas
    pessoas[0] = { nome: "Gabriel" }
    pessoas[1] = { nome: "Ana" }
  }
}
```

## Problemas Encontrados e Soluções

### Problema 1: ListaPropriedadesContext Rejeitava Filhos

**Sintoma:** Error "Encontrado 'Propriedade' como filho de 'ListaPropriedades', não esperado"

**Causa Raiz:** `ListaPropriedadesContext` não estava registrado no mapa de nós, então era instantiado como `UnhandledNode`, que rejeita filhos inesperados.

**Solução:** Registrar `ListaPropriedadesContext: Bypass` no mapa de nós, fazendo com que o visitante passe seus filhos diretamente ao nó pai.

### Problema 2: Propriedades com Aspas

**Sintoma:** Chaves como `"nome"` e `'idade'` não funcionavam

**Causa Raiz:** A gramática aceitava STRING e CARACTER, mas o `Propriedade` não removia as aspas.

**Solução:** Implementar extração de chave que remove aspas automaticamente:
```typescript
let chave: string;
if (this.ID()) {
  chave = this.ID().text;
} else if (this.STRING()) {
  const str = this.STRING().text;
  chave = str.slice(1, -1); // Remove aspas
} else if (this.CARACTER()) {
  const chr = this.CARACTER().text;
  chave = chr.slice(1, -1); // Remove aspas
}
```

## Testes de Validação

Todos os seguintes testes passaram com sucesso:

- ✅ Atribuição de `cadeia` a `objeto`
- ✅ Atribuição de `inteiro` a `objeto`
- ✅ Atribuição de `real` a `objeto`
- ✅ Atribuição de `lógico` a `objeto`
- ✅ Atribuição de `caracter` a `objeto`
- ✅ Atribuição de literal de objeto a `objeto`
- ✅ Zero erros de parse
- ✅ Zero erros semânticos

## Próximos Passos Opcionais

1. **Tipagem de Campos:** Inferir e validar tipos dentro de propriedades
   - `{ nome: cadeia, idade: inteiro }`

2. **Atribuição de Propriedades:** Permitir `p.nome = "novo"`
   - Requer validação de tipos por campo

3. **Schemas de Objeto:** Definições estruturadas de tipos
   - `tipo Pessoa = { nome: cadeia, idade: inteiro }`

4. **Métodos de Objeto:** Funções associadas a objetos
   - `objeto.metodo()`

5. **Testes Unitários:** Criar suite de testes no `packages/parser/tests/`

6. **Documentação do Usuário:** Atualizar materiais de aprendizagem

## Arquivos Modificados

### Core Implementation
- `packages/parser/src/helpers/Tipo.ts` - Adição do enum OBJETO
- `packages/antlr/src/PortugolLexico.g4` - Palavra-chave 'objeto'
- `packages/antlr/src/Portugol.g4` - Regras de gramática
- `packages/parser/src/helpers/expressões.ts` - Resolvedor de tipos
- `packages/parser/src/helpers/compatibilidade.ts` - Tabelas de compatibilidade

### AST Nodes
- `packages/parser/src/nodes/AcessoPropriedadeExpr.ts` - Novo nó
- `packages/parser/src/nodes/LiteralObjetoExpr.ts` - Novo nó
- `packages/parser/src/nodes/Propriedade.ts` - Novo nó
- `packages/parser/src/nodes/index.ts` - Mapeamento de contextos (CRÍTICO)

### Generated Files (regerados por ANTLR)
- `packages/antlr/src/PortugolLexer.ts`
- `packages/antlr/src/PortugolParser.ts`
- `packages/antlr/src/PortugolListener.ts`
- `packages/antlr/src/PortugolVisitor.ts`

## Instruções para Continuar

Para continuar trabalhando neste feature:

1. **Checkout da branch:**
   ```bash
   git checkout Objetos
   ```

2. **Build dos pacotes:**
   ```bash
   npm run build --workspace=@portugol-webstudio/antlr
   npm run build --workspace=@portugol-webstudio/parser
   ```

3. **Testes (se adicionados):**
   ```bash
   npm test --workspace=@portugol-webstudio/parser
   ```

4. **Próximas mudanças:**
   - Modificar tipos AST conforme necessário
   - Executar `npm run antlr-ng` se alterar `Portugol.g4` ou `PortugolLexico.g4`
   - Recompilar com `npm run build`
   - Testar com scripts de validação

## Referências

- **Padrão de Tipo Flexível:** Baseado em como vetores aceitam qualquer tipo
- **ANTLR 4:** https://www.antlr.org/
- **TypeScript Compiler:** https://www.typescriptlang.org/

---

**Autor:** GitHub Copilot
**Data de Implementação:** 11 de Maio de 2026
**Status:** Completo e Validado ✅
**Branch:** Objetos
