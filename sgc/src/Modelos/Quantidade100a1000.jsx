const Quantidade100a1000 = () => {
    let lista = [100];
    let valorInicial = 100;
    let contador = 0;
    for (contador; contador < 10; contador++) {

        lista.push(valorInicial)

        valorInicial = valorInicial + 100;
    }

    return (lista);
}
export default Quantidade100a1000;