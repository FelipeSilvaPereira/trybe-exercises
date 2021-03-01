let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao peça alvo
let posicaoPecaLinha = 7;
let posicaoPecaColuna = 6;


//identifica se o ataque foi bem sucedido
let ataqueBemSucedido = false;

if ((posicaoRainhaLinha === posicaoPecaLinha) || (posicaoRainhaColuna === posicaoPecaColuna)) {
    ataqueBemSucedido = true;
}

//diagonal superior direita
for (let supDir = 1; supDir < 8; supDir ++) {
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
  }
}

console.log(ataqueBemSucedido)