# Exercício 5 — Avaliação de filmes

Projeto em Node.js usando JavaScript ES Modules, Mocha e `assert` para calcular a quantidade de votos, a média das notas e a recomendação de cada filme.

## Regras de negócio

- Média maior ou igual a 4: **Filme recomendado**
- Média maior ou igual a 3 e menor que 4: **Filme razoável**
- Média menor que 3: **Filme ruim**

A faixa intermediária foi interpretada como `3 <= média < 4`, pois a média 4 já pertence à categoria recomendada.

## Tecnologias

- Node.js
- JavaScript ES Modules (`import` / `export`)
- Mocha
- `node:assert/strict`

## Pré-requisitos

Instale Node.js 18 ou superior e npm.

## Instalar dependências

```bash
npm install
```

## Executar a aplicação

```bash
npm start
```

## Executar os testes

```bash
npm test
```

## Estrutura do projeto

```text
exercicio5-avaliacao-filmes/
├── src/
│   ├── avaliadorFilmes.js
│   └── index.js
├── test/
│   └── avaliadorFilmes.test.js
├── .gitignore
├── package.json
└── README.md
```

## O que os testes cobrem

1. Quantidade de votos, média e recomendação de Minha mãe é uma peça.
2. Classificação de Saneamento Básico como razoável.
3. Classificação de Se eu fosse você como ruim.
4. Média exatamente igual a 4.
5. Vetor de avaliações vazio.
6. Nota fora do intervalo permitido.
7. Avaliação de vários filmes.
8. Entrada inválida para a função que recebe a lista.

## Publicar no GitHub

1. Crie um repositório vazio no GitHub chamado `exercicio5-avaliacao-filmes`.
2. Extraia o ZIP e abra a pasta do projeto no VS Code.
3. Abra o terminal e execute:

```bash
git init
git add .
git commit -m "Adiciona exercício de avaliação de filmes com Mocha e assert"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/exercicio5-avaliacao-filmes.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuário do GitHub.

Se a pasta já tiver um repositório Git, use `git remote -v` para verificar o remote existente antes de adicionar outro.
