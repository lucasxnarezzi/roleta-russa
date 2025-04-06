const input = document.getElementById("escolha");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const aviso = document.getElementById("aviso");

let rodada = 1; // Inicializa a rodada

aviso.innerHTML = `Seja mal-vindo ao jogo da morte! Você tem 6 rodadas para sobreviver!`;

botao.addEventListener("click", () => {
  const escolhaJogador = parseInt(input.value);

  const opcoes = [1, 2, 3, 4, 5, 6, 7];
  if (!opcoes.includes(escolhaJogador)) {
    mensagem.innerHTML = "Escolha um número entre 1 e 6!";
    return;
  }
  
  const tiro = Math.floor(Math.random() * 6) + 1;

  if (escolhaJogador !== tiro) {
    mensagem.innerHTML = `Rodada ${rodada} passou, o pc escolheu ${tiro}.`;
    rodada++; // Incrementa a rodada
    if (rodada >= 7) {
      mensagem.innerHTML = "Você sobreviveu a todas as rodadas! 🎉";
      rodada = 1; // Reinicia o jogo
    }
  } else {
    mensagem.innerHTML = `Você morreu na rodada ${rodada}! 💀`;
    rodada = 1; // Reinicia o jogo
  }

  if (rodada >= 2) {
    aviso.innerHTML = `Você está na rodada ${rodada}.`;     
}  
});
