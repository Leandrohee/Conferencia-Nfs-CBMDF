//-----------------------------------PEDIDO------------------------------------

var texto = document.body.innerHTML
var regexPedido = /(PED[\w]{0,3}[\s:-]{0,3})([\d]{1,4})/gi
var matchesPed = texto.match(regexPedido);
var primeiroPedido, segundoPedido
var arrayNumber = [0,1,2,3,4,5,6,7,8,9]
var resultadoPedido


async function conferePedido(){                                            //Conferir pedido
    try{
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
            resultadoPedido = 'PEDIDO: OK'
        }
        else {
            resultadoPedido = 'PEDIDO: ERRADO!!!'
        }
    }
    catch{
        resultadoPedido = 'PEDIDO: ERRADO!!!'
    }
    }
conferePedido()

//--------------------------------------------OS--------------------------------
var texto = document.body.innerHTML
var RegexOs = /[\s>:-][\d]{4}[/]20[\d]{2}/gi
var primeiraOs, segundaOs
var matchesOs = texto.match(RegexOs);
var resultadoOs


async function confereOs(){                                                //Conferir Os
    try{
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
        resultadoOs = '    OS: OK'}
    else {
        resultadoOs = '    OS: ERRADA!!!'
    }
    }
    catch{
        resultadoOs = '    OS: ERRADA!!!'     
    }
}
confereOs()

//----------------------------------NOTA DE EMPENHO-----------------------------
var texto = document.body.innerHTML
var fornecedor
var resultadoNe
var regexNeAlberto = /2023NE[0]{0,5}67/gi            //2023NE000067
var regexNeErenice = /2023NE[0]{0,5}06/gi 
var regexNeGilson = /2023NE[0]{0,5}12/gi  
var regexNeParts = /2023NE[0]{0,5}04/gi 
var regexNeRobson = /2023NE[0]{0,5}03/gi
var matchesNeAlberto
var matchesNeErenice
var matchesNeGilson
var matchesNeParts
var matchesNeRobson


async function confereNe(){
    try{
        if(texto.search(/robson/gi) > 0) {
            matchesNeRobson = texto.match(regexNeRobson)
            if(matchesNeRobson.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = 'EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/mr[\s]pecas/gi) > 0) {
            matchesNeErenice = texto.match(regexNeErenice)
            if(matchesNeErenice.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = 'EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/rabelo/gi) > 0) {
            matchesNeGilson = texto.match(regexNeGilson)
            if(matchesNeGilson.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = 'EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/parts/gi) > 0) {
            matchesNeParts = texto.match(regexNeParts)
            if(matchesNeParts.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = 'EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/alberto/gi) > 0) {
            matchesNeAlberto = texto.match(regexNeAlberto)
            if(matchesNeAlberto.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = 'EMPENHO: ERRADO!!!'
            }              
        }
    } //fim try
    catch{
        resultadoNe = 'EMPENHO: ERRADO!!!'
    }
}
confereNe()

//------------------------------------PREFIXO------------------------------------
var texto = document.body.innerHTML
var regexPrefixo = /pref[:a-z\s]{0,9}[-]?[a-z-\s]{0,5}([\d]{1,3})/gi
var matchesPrefixo = texto.match(regexPrefixo);
var primeiroPrefixo, segundoPrefixo
var resultadoPrefixo

async function conferePrefixo(){
    try{
        matchesPrefixo = texto.match(regexPrefixo);
        primeiroPrefixo = matchesPrefixo[0].slice(-9);
        primeiroPrefixo = primeiroPrefixo.replace(/PREF/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/REF/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/XO/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/O:/,"");
        primeiroPrefixo = primeiroPrefixo.replaceAll("-","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(":","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(" ","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(/\s\s/g,"");

        segundoPrefixo = matchesPrefixo[1].slice(-9);
        segundoPrefixo = segundoPrefixo.replace(/PREF/i,"");
        segundoPrefixo = segundoPrefixo.replace(/REF/i,"");
        segundoPrefixo = segundoPrefixo.replace(/XO/i,"");
        segundoPrefixo = segundoPrefixo.replace(/O:/,"");
        segundoPrefixo = segundoPrefixo.replaceAll("-","");
        segundoPrefixo = segundoPrefixo.replaceAll(":","");
        segundoPrefixo = segundoPrefixo.replaceAll(" ","");
        segundoPrefixo = segundoPrefixo.replaceAll(/\s\s/g,"");


        if (primeiroPrefixo == segundoPrefixo){
            resultadoPrefixo = 'PREFIXO: OK'
        }
        else{
            resultadoPrefixo = 'PREFIXO: ERRADO!!!'
        }  
    }
    catch{
        resultadoPrefixo = 'PREFIXO: ERRADO!!!'
    }

}
conferePrefixo()

//PLACA
var texto = document.body.innerHTML
var regexPlacaSis = /:\s[A-Z]{3}\s[\d]{4}/g
var matchesPlacaSis = texto.match(regexPlacaSis)
var modeloPlaca1, modeloPlaca2,modeloPlaca3,modeloPlaca4,modeloPlaca5, modeloPlaca6
var matchesPlaca1, matchesPlaca2, matchesPlaca3, matchesPlaca4, matchesPlaca5, matchesPlaca6
var contPlaca = 0
var resultadoPlaca

async function conferePlaca(){
    try{
        modeloPlaca1 = matchesPlacaSis[0].slice(2);     // XXX 0000
        modeloPlaca2 = modeloPlaca1.replace(" ","");    // XXX0000
        modeloPlaca3 = modeloPlaca1.replace(" ","-")    // XXX-0000  
        modeloPlaca4 = modeloPlaca1.replace(" "," - ")  // XXX - 0000
        modeloPlaca5 = modeloPlaca1.replace(" ","- ")   // XXX- 0000
        modeloPlaca6 = modeloPlaca1.replace(" "," -")   // XXX -0000

        var regexPlaca1 = new RegExp(modeloPlaca1, "g")
        var regexPlaca2 = new RegExp(modeloPlaca2, "g")
        var regexPlaca3 = new RegExp(modeloPlaca3, "g")
        var regexPlaca4 = new RegExp(modeloPlaca4, "g")
        var regexPlaca5 = new RegExp(modeloPlaca5, "g")
        var regexPlaca6 = new RegExp(modeloPlaca6, "g")

        matchesPlaca1 = texto.match(regexPlaca1)
        matchesPlaca2 = texto.match(regexPlaca2)
        matchesPlaca3 = texto.match(regexPlaca3)
        matchesPlaca4 = texto.match(regexPlaca4)
        matchesPlaca5 = texto.match(regexPlaca5)
        matchesPlaca6 = texto.match(regexPlaca6)


        if(matchesPlaca1){
            contPlaca +=  matchesPlaca1.length
        }
        if(matchesPlaca2){
            contPlaca += matchesPlaca2.length
        }
        if(matchesPlaca3){
            contPlaca += matchesPlaca3.length
        }
        if(matchesPlaca4){
            contPlaca += matchesPlaca4.length
        }
        if(matchesPlaca5){
            contPlaca += matchesPlaca5.length
        }
        if(matchesPlaca6){
            contPlaca += matchesPlaca6.length
        }

        if(contPlaca >= 2){
            resultadoPlaca = ' PLACA: OK'
        }
        else{
            resultadoPlaca = ' PLACA: ERRADA!!!'
        }
    }
    catch{
        resultadoPlaca = ' PLACA: ERRADA!!!'
    }
}
conferePlaca()


//MARCA e DESCONO
var texto = document.body.innerHTML
var tent1, tent2, tent3, tent4
var regexDesconto = /[\d]{2}[.,]?[\d]{0,2}%/g
var regexRenault = /RENAULT/i
var regexFord = /FORD/i
var regexYamaha = /Yamaha/i
var regexBmw = /bmw/i
var regexAgrale = /Agrale/i
var regexIveco = /Iveco/i
var regexFiat = /fiat/i
var regexMitsubishi = /mitsubishi/i
var regexGm = /gm\s/i
var regexVw =/vw/i
var resultadoDesconto

var matchesDesconto = texto.match(regexDesconto);
var matchesRenault =  texto.match(regexRenault);
var matchesFord =  texto.match(regexFord);
var matchesYamaha =  texto.match(regexYamaha);
var matchesBmw =  texto.match(regexBmw);
var matchesAgrale =  texto.match(regexAgrale);
var matchesIveco =  texto.match(regexIveco);
var matchesFiat =  texto.match(regexFiat);
var matchesMitsubishi =  texto.match(regexMitsubishi);
var matchesGm =  texto.match(regexGm);
var matchesVw =  texto.match(regexVw);

function verificaDesconto(desc1,desc2,desc3,desc4){
    tent1 = matchesDesconto.filter(element => (element == desc1))
    tent2 = matchesDesconto.filter(element => element == desc2)
    tent3 = matchesDesconto.filter(element => element == desc3)
    tent4 = matchesDesconto.filter(element => element == desc4)

    if ((tent1.length +tent2.length + tent3.length) >= 2){
        resultadoDesconto = 'MARCA E DESCONTO: Ok'
    }
    else{
       resultadoDesconto = 'Marca e desconto: ERRADOS!!!'
    }
}

if(matchesBmw){
    console.log(matchesBmw);
}
if(matchesRenault){
    console.log(matchesRenault)
}
if(matchesGm){
    verificaDesconto("65.00%","65,00%","65%")
}
if(matchesVw){
    verificaDesconto("49.10%","49,10%","49,1%","41.1%")
}


console.log(matchesRenault);
console.log(matchesDesconto);

//KM

//ANO

//DESCONTO

//CODIGO

//MOSTRA RESULTADOS
// console.log(matchesPed);
// console.log(matchesOs)
console.log("----------------RESULTADOS----------------")
console.log(resultadoPedido);
console.log(resultadoOs);
console.log(resultadoNe);
console.log(resultadoPrefixo)
console.log(resultadoPlaca)
console.log(resultadoDesconto)
console.log("-------------------------------------------")
//FIM











