export function ValorBatidas(normais) {
    let total = 0;

    if (normais <= 20000) {
        total = normais * 0.01;
    }
    else if (normais > 20000 && normais < 25000) {
        total = normais * 0.015;
    }
    else if (normais >= 25000 && normais < 30000) {
        total = normais * 0.018;
    }
    else if (normais >= 30000) {
        total = normais * 0.020;
    }

    return total;
}

// Calcula valor das batidas extras
export function ValorBatidasExtras(extras) {
    return extras * 0.10;
}