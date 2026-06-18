const Linhas = () => {
    let lista = [];
    let index = 10;
    for (index; index > 0; index--) {
        lista.push(index);

    }
    let listaOrdenada = lista.slice(0).reverse();
    return (listaOrdenada);
}

export default Linhas;
