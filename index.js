rodada = 1
alert("Seja mal-vindo a Roleta Russa!")
while (rodada <= 6) {
    escolhaJogador = prompt("Rodada " + rodada +" - Escolha entre 1-6")
    tiro = Math.floor(Math.random() * 6) + 1
    if (escolhaJogador == tiro) {
        alert("Você morreu!🤯🩸🔫")
        break;
    } else {
        alert("Você sobreviveu, a bala estava no " + tiro)
    }
    rodada ++
}