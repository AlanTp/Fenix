const CalculoSemPromotor = (qCor, qEmb) => {
    var silk = 0;
    var silkFormatado = 0;
    switch (qCor) {
        case 1:
            silk = ((150 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        case 2:
            silk = ((300 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        case 3:
            silk = ((450 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        case 4:
            silk = ((600 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        case 5:
            silk = ((750 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        case 6:
            silk = ((900 * qEmb/1000 + 70)/0.6)
            silkFormatado = silk.toFixed(2);
            break;
        default:
            break;
    }
    return silkFormatado;
}

export default CalculoSemPromotor;