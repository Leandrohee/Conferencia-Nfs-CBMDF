//PEDIDO
var texto = document.body.innerHTML
const regexPedido = /(PED[\w]{0,3}[\s:-]{0,3})([\d]{1,4})/gi
const matchesPed = texto.match(regexPedido);
var primeiroPedido, segundoPedido
const arrayNumber = [0,1,2,3,4,5,6,7,8,9]


function pedidoOk(){                                            //Conferir pedido
    //Error 
    if(matchesPed.length<2){
        console.log("    OS: ERRADA")
    }


    //Descobrindo o primeiro numero do pedido
    if(arrayNumber.includes(Number(matchesPed[0].slice(-2,-1))) == false){
        primeiroPedido = matchesPed[0].slice(-1);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-3,-2))) == false){
        primeiroPedido = matchesPed[0].slice(-2);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-4,-3))) == false){
        primeiroPedido = matchesPed[0].slice(-3);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-5,-4))) == false){
        primeiroPedido = matchesPed[0].slice(-4);
    }

    //Descobrindo o segundo numero do pedido
    if(arrayNumber.includes(Number(matchesPed[0].slice(-2,-1))) == false){
        segundoPedido = matchesPed[1].slice(-1);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-3,-2))) == false){
        segundoPedido = matchesPed[1].slice(-2);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-4,-3))) == false){
        segundoPedido = matchesPed[1].slice(-3);
    }
    else if(arrayNumber.includes(Number(matchesPed[0].slice(-5,-4))) == false){
        segundoPedido = matchesPed[1].slice(-4);
    }

    if(primeiroPedido == segundoPedido){
        return ('PEDIDO: OK')}
    else {
        return ('PEDIDO: ERRADO!!!')
    }
    }
pedidoOk()
console.log(pedidoOk());

//OS
var texto = document.body.innerHTML
const RegexOs = /[\s>:-][\d]{4}[/]20[\d]{2}/gi
var primeiraOs, segundaOs
const matchesOs = texto.match(RegexOs);


function OsOk(){                                                //Conferir Os
    
    //Error 
    if(matchesOs.length<2){
        console.log("    OS: ERRADA")
    }

    //logica
    for(let i=0; i<=5; i++){
        primeiraOs = matchesOs[0].slice(i)
        if(matchesOs[0].slice(i,(i+1)) > 0){break}

    }
    for(let i=0; i<=5; i++){
        segundaOs = matchesOs[1].slice(i)
        if(matchesOs[1].slice(i,(i+1)) > 0){break}

    }

    if(primeiraOs == segundaOs){
        return ('    OS: OK')}
    else {
        return ('OS: ERRADA!!!')
    }
}
OsOk()
console.log(OsOk())

//NOTA DE EMPENHO
var texto = document.body.innerHTML
var fornecedor
if(texto.search(/robson/gi) > 0) {
    fornecedor = 'robson';
}
if(texto.search(/mr[\s]pecas/gi) > 0) {
    fornecedor = 'erenice';
}
if(texto.search(/rabelo/gi) > 0) {
    fornecedor = 'gilson';
}
if(texto.search(/parts/gi) > 0) {
    fornecedor = 'parts';
}
if(texto.search(/alberto/gi) > 0) {
    fornecedor = 'alberto';
}

console.log(fornecedor);





//PREFIXO

//PLACA

//MARCA

//KM

//ANO

//DESCONTO

//CODIGO

//MOSTRA RESULTADOS
console.log(matchesPed);
console.log(matchesOs)
//FIM











