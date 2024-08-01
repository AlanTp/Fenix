

const Calculo =(qCor, qEmb, silk, margem,val,PrcEmb,arte,margemSilk) => {
    qCor = Number(qCor);
    qEmb = Number(qEmb);
    silk = Number(silk);
    margem = Number(margem);
    val = Number(val);
    PrcEmb = Number(PrcEmb);
    arte = Number(arte);
    margemSilk = Number(margemSilk);
    var total = 0;
    var totalFormatado = 0;
    switch (qCor) {
        case 1:
            total =  (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk) + arte;
            totalFormatado = total.toFixed(2)
            break;
        case 2:
            total = (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk) + arte;
            totalFormatado = total.toFixed(2)
            break;
        case 3:
            total = (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk)+ arte;
            totalFormatado = total.toFixed(2)
            break;
        case 4:
            total = (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk)+ arte;
            totalFormatado = total.toFixed(2)
            break;
        case 5:
            total = (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk)+ arte;
            totalFormatado = total.toFixed(2)
            break;
        case 6:
            total = (((PrcEmb /1000) * qEmb)/margem)+(val * qEmb) + (silk / margemSilk)+ arte;
            totalFormatado = total.toFixed(2)
            break;
        default:
            break;
    }
    
    return totalFormatado;

}
export default Calculo;