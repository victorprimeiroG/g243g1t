const Fila = (_saidaFila) => {
    let dados = [];
    let saidaFila = _saidaFila;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const tamanhoFila = () => dados.length;
    const filaVazia = () => dados.length < 1;
    const desenfileirar = () => {
        let retirado = null;
        if(!filaVazia()){
            retirado = dados[0];
            dados.splice(0,1);
            imprimir();
        }
        return retirado;
    }
    const imprimir = () => {
        let dadosSaida = "";
        for(let i=0; i < tamanhoFila(); i++){
            dadosSaida += "["+dados[i].id + "("+dados[i].itens+")] ";
        }
        document.getElementById(saidaFila).innerHTML = dadosSaida;
    }
    return {enfileirar,desenfileirar}
}
const f1 = Fila("saidaFila1");
const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const Cliente = (_id,_itens) =>{
    return {
        id:_id,
        itens:_itens
    }
}
const caixa1ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C1").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 100;
        setTimeout(function(){
            caixa1ChamaProximo();
        },tempo);
    }else{
        document.getElementById("C1").innerHTML = "Aguardando!"
        if(clientesParaAtender > 0){
            setTimeout(function(){
                caixa1ChamaProximo();
            },gerarItens()*10);
        }else{
            document.getElementById.innerHTML = "Fechado!"
        }
    }
}
const caixa2ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C2").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 100;
        setTimeout(function(){
            caixa2ChamaProximo();
        },tempo);
    }else{
        document.getElementById("C2").innerHTML = "Aguardando!"
        if(clientesParaAtender > 0){
            setTimeout(function(){
                caixa2ChamaProximo();
            },gerarItens()*10);
        }else{
            document.getElementById("C2").innerHTML = "Fechado!"
        }
    }
}
const caixa3ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C3").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 100;
        setTimeout(function(){
            caixa3ChamaProximo();
        },tempo);
    }else{
        document.getElementById("C3").innerHTML = "Aguardando!"
        if(clientesParaAtender > 0){
            setTimeout(function(){
                caixa3ChamaProximo();
            },gerarItens()*10);
        }else{
            document.getElementById("C3").innerHTML = "Fechado!"
        }
    }
}
const caixa4ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C4").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 100;
        setTimeout(function(){
            caixa4ChamaProximo();
        },tempo);
    }else{
        document.getElementById("C4").innerHTML = "Aguardando!"
        if(clientesParaAtender > 0){
            setTimeout(function(){
                caixa4ChamaProximo();
            },gerarItens()*10);
        }else{
            document.getElementById("C4").innerHTML = "Fechado!"
        }
    }
}
const caixa5ChamaProximo = () =>{
    let cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        document.getElementById("C5").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
        tempo = cliente.itens * 100;
        setTimeout(function(){
            caixa5ChamaProximo();
        },tempo);
    }else{
        document.getElementById("C5").innerHTML = "Aguardando!"
        if(clientesParaAtender > 0){
            setTimeout(function(){
                caixa5ChamaProximo();
            },gerarItens()*10);
        }else{
            document.getElementById("C5").innerHTML = "Fechado!"
        }
    }
}
const maxClientes = 50;
const filaInicial = 10;
let clientesParaAtender = maxClientes - filaInicial;
let idCliente = filaInicial + 1;
const entrarNaFila = () =>{
    if(clientesParaAtender > 0){
        f1.enfileirar(Cliente("C"+idCliente,gerarItens()));
        clientesParaAtender--;
        idCliente++;
        setTimeout(entrarNaFila,gerarItens()*500);
    }
}

(function(){
    for(let i=1; i <= filaInicial; i++){
        f1.enfileirar(Cliente("C"+i,gerarItens()));
    }
    caixa1ChamaProximo();
    caixa2ChamaProximo();
    caixa3ChamaProximo();
    caixa4ChamaProximo();
    caixa5ChamaProximo();
    entrarNaFila();
})();