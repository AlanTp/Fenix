
function CalculaReceitaTintas( QtdAtual,QtdCalcular) {

    let UnidadePadrao = 100;
    let UnidadeAtualizada = 0;

    UnidadeAtualizada = (QtdCalcular * QtdAtual) / UnidadePadrao;

    return UnidadeAtualizada;

}

export default CalculaReceitaTintas;