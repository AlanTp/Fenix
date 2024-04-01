const Linhas1500a10000 = () =>{
    let lista = [];
    let index = 18;
        for (index; index > 0; index--) {
            lista.push(index);
            
        }
    let listaOrdenada = lista.slice(0).reverse();
    return (listaOrdenada);
}

export default Linhas1500a10000;
