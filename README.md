<a href="https://portugol.dev/"><img src="./packages/ide/src/assets/lightbulb.svg" width="123px" alt="Portugol Webstudio" align="right"></a>

# Portugol Webstudio (fork)

_IDE online para o Portugol_

Fork mantido por [Gabriel Gianesini Ventura](https://github.com/gabrielgv13).

[![Licença](https://img.shields.io/badge/licen%C3%A7a-GPL-blue.svg)](https://github.com/gabrielgv13/Portugol-Webstudio/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/gabrielgv13/Portugol-Webstudio)](https://github.com/gabrielgv13/Portugol-Webstudio/stargazers)

Baseado no Portugol Studio, o **Portugol Webstudio** tenta trazer todo ambiente de desenvolvimento que é possível se encontrar no desktop, para a internet. Ele constitui-se de um ambiente de desenvolvimento construído para permitir a criação e a execução dos programas escritos em Portugol, trazendo assim uma experiência o mais próxima do que você pode encontrar da IDE do Portugol Studio. Portugol, também conhecido como Português estruturado, é um pseudocódigo escrito em português.

[![Captura de Tela](.github/screenshot.png)](https://portugol.dev/)

## Características

- Suporta abertura e escrita de arquivos `.por`
- Permite editar e executar múltiplos códigos ao mesmo tempo
- Executado no console original do Portugol com interação em tempo real
- Interface simples e idêntica ao Portugol Studio
- Código executado diretamente no navegador através de Web Workers

## Estrutura do projeto

O Portugol Webstudio é um projeto que utiliza o framework [Angular](https://angular.io/), [RxJS](https://rxjs.dev/) e [antlr4ng](https://github.com/mike-lischke/antlr4ng). Ele é dividido em 7 pacotes (disponíveis na pasta `packages`):

- `@portugol-webstudio/antlr`: Pacote que contém a gramática do Portugol e a geração do parser, lexer e visitor
- `@portugol-webstudio/ide`: Pacote que contém a interface do usuário
- `@portugol-webstudio/parser`: Pacote que contém o novo parser do Portugol, que recebe uma árvore pré-processada pelo ANTLR e a transforma em uma árvore semântica
- `@portugol-webstudio/resources`: Pacote que contém os recursos do Portugol, como os exemplos e a seção de ajuda
- `@portugol-webstudio/runner`: Pacote que executa o código gerado pelo transpilador em Web Workers, tratando entrada, saída, erros e eventos.
- `@portugol-webstudio/runtime`: Pacote que contém o transpilador de Portugol para JavaScript e o código de execução em _runtime_ necessário: variáveis, bibliotecas, etc.
- `@portugol-webstudio/worker`: Pacote que contém o código que será executado em Web Workers, que é responsável por receber o código do Portugol, e executar a verificação de erros e transpilação do código em uma _thread_ separada.

## Executando o código localmente

1. Certifique-se de possuir instalado o [Node.js LTS](https://nodejs.org/pt-br/download/)

2. Instale as dependências do projeto

```sh
npm ci
```

3. Compile os pacotes:

```sh
npm run build
```

4. Inicie o servidor de desenvolvimento:

```sh
npm start
```

## Criando uma Versão Portátil (Windows)

Se você quer gerar uma versão portátil do Portugol Webstudio (um executável
Windows "portable"), siga estes passos. As instruções abaixo assumem que você
está usando o PowerShell no Windows.

- Requisitos:
    - Windows 10/11
    - Node.js LTS (recomenda-se Node 18+)
    - `npm` (vem com o Node.js)
    - Git

- Passos para gerar a versão portátil (gera um `.exe` portátil):

```powershell
# 1) Clonar o repositório (se ainda não fez):
git clone https://github.com/gabrielgv13/Portugol-Webstudio.git
cd Portugol-Webstudio

# 2) Instalar dependências (usa workspace com Lerna):
npm ci

# 3) Gerar os builds e empacotar a versão portátil:
npm run package:portable

# OBS: se preferir um diretório com os arquivos em vez de um executável único:
npm run package:portable:dir
```

- Resultado:
    - O artefato será criado em `packages/desktop/dist` com nome similar a
        `Portugol-Webstudio-<versao>-portable.exe` (ou uma pasta com os arquivos,
        caso tenha usado `package:portable:dir`).

- Como colocar o artefato em um Release no GitHub:

    - Opção manual (recomendado se você preferir a interface web):
        1. Acesse a página do repositório no GitHub (sua fork).
        2. Clique em "Releases" → "Draft a new release".
        3. Escolha uma tag (ou crie uma nova), preencha o título/descrição e anexe
             o arquivo `Portugol-Webstudio-<versao>-portable.exe` em "Attach binaries".

    - Opção via `gh` (GitHub CLI):

        ```powershell
        # criar uma tag local assinada/annotated e enviá-la ao origin
        git tag -a v<versao>-portable -m "Versão portátil do Portugol Webstudio"
        git push origin v<versao>-portable

        # criar o release e anexar o artefato (substitua o caminho e a tag)
        gh release create v<versao>-portable \
            packages/desktop/dist/Portugol-Webstudio-<versao>-portable.exe \
            --title "Portugol Webstudio v<versao> (portable)" \
            --notes "Versão portátil para Windows"
        ```

        - Observação: para usar `gh` você precisa ter o GitHub CLI instalado e
            autenticado (`gh auth login`).

- Notas úteis:
    - O executável gerado não será assinado digitalmente; alguns antivírus podem
        avisar na primeira execução. Para publicação oficial, considere assinar o
        binário.
    - O processo de build pode demorar alguns minutos (dependendo da conexão e
        do desempenho da máquina).
Após isto, você poderá acessar a IDE em: [http://localhost:4200](http://localhost:4200)

## Manutenção deste fork

Este repositório é um fork do projeto original mantido por Douglas e Danilo Gadêlha. Eu mantenho esta cópia com ajustes e releases portáteis.

**Mantido por:**

- [Gabriel Gianesini Ventura](https://github.com/gabrielgv13)

**Contribuidores originais:**

- [Douglas Gadêlha](https://github.com/dgadelha)
- [Danilo Gadêlha](https://github.com/dngadelha)
- [Laboratório de Inovação Tecnológica na Educação (LITE) da Universidade do Vale do Itajaí (UNIVALI)](https://github.com/UNIVALI-LITE)

## Sobre o Projeto

Este repositório é uma cópia/fork do projeto original. Os autores originais são os listados abaixo; consulte a licença para termos de uso.

**Autores originais:** [Douglas Gadêlha](mailto:dgadelha@live.com) e [Danilo Gadêlha](mailto:dngadelha@outlook.com)

## Licença

    Portugol Webstudio - IDE online para o Portugol
    Copyright (C) 2026  Douglas Gadêlha, Danilo Gadêlha e contribuidores

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
