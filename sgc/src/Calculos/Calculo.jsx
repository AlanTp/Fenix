const Calculo = ( qEmb,silk, margem,val,PrcEmb,arte,margemSilk,valorMilheiro) => {
    // Garantir que todos são números válidos
    silk = Number(silk) || 0;
    val = Number(val) || 0;
    margem = Number(margem) || 1; // evita divisão por 0
    PrcEmb = Number(PrcEmb) || 0;
    arte = Number(arte) || 0;
    margemSilk = Number(margemSilk) || 0;
    valorMilheiro = Number(valorMilheiro) || 0;


    const total = (silk /margemSilk) + ((PrcEmb / 1000 * qEmb) / margem) + (val * qEmb) + arte ;

    return total.toFixed(2); // retorna string formatada
};

export default Calculo;