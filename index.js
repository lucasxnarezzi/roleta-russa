rodada = 1
alert("Seja mal-vindo a Roleta Russa!")

while (rodada <= 6) {
    escolhaJogador = prompt("Rodada " + rodada +" - Escolha entre 1-6")
    opcoes = ["1", "2", "3", "4", "5", "6"]
    
    if (!opcoes.includes(escolhaJogador)){
        alert("buraco errado!")
        continue;
    }
    
    if (rodada === 6){
        tiro = escolhaJogador
        alert("Morreu otário! A bala estava no " + escolhaJogador)
        break;
    }

    tiro = Math.floor(Math.random() * 6) + 1
    
    if (escolhaJogador == tiro) {
        alert("Você morreu!🤯🩸🔫")
        break;
    } else {
        alert("Você sobreviveu, a bala estava no " + tiro)
    }
    rodada++
}