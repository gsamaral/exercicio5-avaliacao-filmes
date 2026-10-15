import { avaliarFilmes } from "./avaliadorFilmes.js";

const filmes = [
  {
    nome: "Minha mãe é uma peça",
    avaliações: [5, 4, 4, 4, 5]
  },
  {
    nome: "Saneamento Básico",
    avaliações: [3, 4, 2, 3, 4]
  },
  {
    nome: "Se eu fosse você",
    avaliações: [1, 2, 3]
  }
];

const resultados = avaliarFilmes(filmes);

console.log("\nResultado das avaliações dos filmes\n");

for (const filme of resultados) {
  console.log(`Filme: ${filme.nome}`);
  console.log(`Pessoas que votaram: ${filme.quantidadeVotos}`);
  console.log(`Média das notas: ${filme.media.toFixed(2)}`);
  console.log(`Avaliação: ${filme.avaliacao}`);
  console.log("--------------------------------------");
}
