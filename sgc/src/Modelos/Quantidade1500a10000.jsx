
const Quantidade1500a10000 = () =>{
    let lista = [1500];
    let valorInicial = 1500;
    let contador = 0;
    for (contador; contador < 20; contador++) {

        lista.push(valorInicial)

        valorInicial = valorInicial + 500;
    }
    
    return (lista);
}
export default Quantidade1500a10000;