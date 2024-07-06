
const VendaDireta =(Qcor,Qemb,tela,promotor,valvula) => {
    var total = 0;
    var totalFormatado = 0;
    

    switch (Qcor) {
        case 1:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb)  + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2);
            break;
        case 2:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb) + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2);
            break;
        case 3:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb) + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2);
            break;
        case 4:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb) + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2);
            break;
        case 5:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb) + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2)
            break;
        case 6:
            total = ((Qcor * 0.25) * Qemb) + (promotor * Qemb) + (Qemb * valvula) + (tela * 1);
            totalFormatado = total.toFixed(2);
            break;
        default:
            break;
    }
    totalFormatado = total.toFixed(2);
    return totalFormatado;

}
export default VendaDireta;