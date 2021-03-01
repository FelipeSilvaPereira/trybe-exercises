let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao peça alvo
let posicaoPecaLinha = 1;
let posicaoPecaColuna = 7;


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

for (let supEsq = 1; supEsq < 8; supDir ++) {
    let linhaRainha = posicaoRainhaLinha + supEsq;
    let colunaRainha = posicaoRainhaColuna - supEsq;

    if (linhaRainha > 8 || colunaRainha < 8) {
        break;
    }

    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
  }
}

for (let infeEsq = 1; infeEsq < 8; infeEsq ++) {
    let linhaRainha = posicaoRainhaLinha - infeEsq;
    let colunaRainha = posicaoRainhaColuna - infeEsq;

    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    }

    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
  }
}

for (let infDir = 1; infDir < 8; infDir ++) {
    let linhaRainha = posicaoRainhaLinha - infDir;
    let colunaRainha = posicaoRainhaColuna + infDir;

    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }

    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
  }
}

console.log(ataqueBemSucedido)