export function ValorBatidas(batidas, colaborador, totalGeral) {
    if (colaborador === "Dyogo") {
        return (Number(totalGeral) || 0) * 0.025;
    }

    return (Number(batidas) || 0) * 0.03;
}

