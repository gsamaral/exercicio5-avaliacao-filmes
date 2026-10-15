import assert from "node:assert/strict";
import { avaliarFilme, avaliarFilmes } from "../src/avaliadorFilmes.js";

describe("Avaliador de filmes", function () {
  it("calcula votos, média e recomendação para Minha mãe é uma peça", function () {
    const resultado = avaliarFilme({
      nome: "Minha mãe é uma peça",
      avaliações: [5, 4, 4, 4, 5]
    });

    assert.strictEqual(resultado.quantidadeVotos, 5);
    assert.strictEqual(resultado.media, 4.4);
    assert.strictEqual(resultado.avaliacao, "Filme recomendado");
  });

  it("classifica Saneamento Básico como razoável", function () {
    const resultado = avaliarFilme({
      nome: "Saneamento Básico",
      avaliações: [3, 4, 2, 3, 4]
    });

    assert.strictEqual(resultado.quantidadeVotos, 5);
    assert.strictEqual(resultado.media, 3.2);
    assert.strictEqual(resultado.avaliacao, "Filme razoável");
  });

  it("classifica Se eu fosse você como ruim", function () {
    const resultado = avaliarFilme({
      nome: "Se eu fosse você",
      avaliações: [1, 2, 3]
    });

    assert.strictEqual(resultado.quantidadeVotos, 3);
    assert.strictEqual(resultado.media, 2);
    assert.strictEqual(resultado.avaliacao, "Filme ruim");
  });

  it("classifica média exatamente igual a 4 como recomendado", function () {
    const resultado = avaliarFilme({
      nome: "Filme no limite",
      avaliações: [4, 4, 4]
    });

    assert.strictEqual(resultado.media, 4);
    assert.strictEqual(resultado.avaliacao, "Filme recomendado");
  });

  it("lança erro quando o vetor de avaliações está vazio", function () {
    assert.throws(
      () => avaliarFilme({
        nome: "Filme sem votos",
        avaliações: []
      }),
      {
        name: "RangeError",
        message: "O filme precisa ter pelo menos uma avaliação."
      }
    );
  });

  it("rejeita nota fora do intervalo de 0 a 5", function () {
    assert.throws(
      () => avaliarFilme({
        nome: "Filme inválido",
        avaliações: [5, 6]
      }),
      {
        name: "RangeError",
        message: "As avaliações devem ser números entre 0 e 5."
      }
    );
  });

  it("avalia uma lista com múltiplos filmes", function () {
    const resultados = avaliarFilmes([
      { nome: "Filme A", avaliações: [4, 5] },
      { nome: "Filme B", avaliações: [1, 2] }
    ]);

    assert.strictEqual(resultados.length, 2);
    assert.strictEqual(resultados[0].avaliacao, "Filme recomendado");
    assert.strictEqual(resultados[1].avaliacao, "Filme ruim");
  });

  it("rejeita uma entrada que não seja um vetor de filmes", function () {
    assert.throws(
      () => avaliarFilmes(null),
      {
        name: "TypeError",
        message: "A entrada precisa ser um vetor de filmes."
      }
    );
  });
});
