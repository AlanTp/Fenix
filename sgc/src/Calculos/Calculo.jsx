

const Calculo =(qCor, qEmb, custoMilhero, margem,val) => {
    var total = 0;
    var totalFormatado = 0;
    switch (qCor) {
        case 1:
            total = ((300 * qEmb / 1000)+70 + custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        case 2:
            total = ((600 * qEmb / 1000)+70 + custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        case 3:
            total = ((750 * qEmb / 1000)+70 + custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        case 4:
            total = ((900 * qEmb / 1000)+70 + custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        case 5:
            total = ((1050 * qEmb / 1000)+70+ custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        case 6:
            total = ((1200 * qEmb / 1000)+70 + custoMilhero)/margem +(qEmb * val)
            totalFormatado = total.toFixed(2)
            break;
        default:
            break;
    }
    
    return totalFormatado;

}
export default Calculo;