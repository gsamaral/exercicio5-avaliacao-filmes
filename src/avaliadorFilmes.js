/**
 * Avalia um filme calculando quantidade de votos, média e classificação.
 *
 * Regras:
 * - média >= 4: Filme recomendado
 * - 3 <= média < 4: Filme razoável
 * - média < 3: Filme ruim
 */
export function avaliarFilme(filme) {
  if (
    !filme ||
    typeof filme.nome !== "string" ||
    filme.nome.trim() === ""
  ) {
    throw new TypeError("O filme precisa ter um nome válido.");
  }

  if (!Array.isArray(filme.avaliações)) {
    throw new TypeError("O campo avaliações precisa ser um vetor.");
  }

  if (filme.avaliações.length === 0) {
    throw new RangeError("O filme precisa ter pelo menos uma avaliação.");
  }

  const possuiNotaInvalida = filme.avaliações.some(
    (nota) =>
      typeof nota !== "number" ||
      !Number.isFinite(nota) ||
      nota < 0 ||
      nota > 5
  );

  if (possuiNotaInvalida) {
    throw new RangeError("As avaliações devem ser números entre 0 e 5.");
  }

  const quantidadeVotos = filme.avaliações.length;
  const somaNotas = filme.avaliações.reduce(
    (soma, nota) => soma + nota,
    0
  );
  const media = somaNotas / quantidadeVotos;

  let avaliacao;

  if (media >= 4) {
    avaliacao = "Filme recomendado";
  } else if (media >= 3) {
    avaliacao = "Filme razoável";
  } else {
    avaliacao = "Filme ruim";
  }

  return {
    nome: filme.nome,
    quantidadeVotos,
    media: Number(media.toFixed(2)),
    avaliacao
  };
}

/**
 * Avalia uma lista de filmes.
 */
export function avaliarFilmes(filmes) {
  if (!Array.isArray(filmes)) {
    throw new TypeError("A entrada precisa ser um vetor de filmes.");
  }

  return filmes.map(avaliarFilme);
}
