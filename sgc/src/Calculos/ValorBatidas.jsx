export function ValorBatidas(normais) {
    let totalNormais = 0;

    if (normais <= 20000) {
        totalNormais = normais * 0.10;
    }
    else if (normais > 20000 && normais < 25000) {
        totalNormais = normais * 0.15;
    }
    else if (normais >= 25000 && normais < 30000) {
        totalNormais = normais * 0.18;
    }
    else if (normais >= 30000) {
        totalNormais = normais * 0.20;
    }

    return totalNormais;
}

// Calcula valor das batidas extras
export function ValorBatidasExtras(extras) {
    return extras * 0.10;
}