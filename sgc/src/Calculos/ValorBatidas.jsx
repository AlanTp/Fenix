export function ValorBatidas(normais, perdas) {
    let totaltotal = 0;
    let total = normais - perdas;
    if (total <= 20000) {
        totaltotal = total * 0.01;
    }
    else if (total > 20000 && total < 25000) {
        totaltotal = total * 0.015;
    }
    else if (total >= 25000 && total < 30000) {
        totaltotal = total * 0.018;
    }
    else if (total >= 30000) {
        totaltotal = total * 0.020;
    }

    return totaltotal;
}

// Calcula valor das batidas extras
export function ValorBatidasExtras(extras) {
    return extras * 0.10;
}