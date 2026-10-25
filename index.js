// Função que calcula o saldo de rankeadas e determina o nível do jogador
function calcularRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

// Lista de jogadores para demonstrar o laço de repetição
const jogadores = [
  { vitorias: 8, derrotas: 2 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 65, derrotas: 20 },
  { vitorias: 85, derrotas: 15 },
  { vitorias: 95, derrotas: 10 },
  { vitorias: 120, derrotas: 25 }
];

// Laço de repetição percorrendo cada jogador
for (let i = 0; i < jogadores.length; i++) {
  const jogador = jogadores[i];
  const resultado = calcularRankeadas(jogador.vitorias, jogador.derrotas);

  console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}
