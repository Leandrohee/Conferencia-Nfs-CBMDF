//-----------------------------------PEDIDO------------------------------------
var texto = document.body.innerHTML
var regexPedido = /(PED[\w]{0,3}[\s:-]{0,3})([\d]{1,4})/gi
var matchesPed = texto.match(regexPedido);
var primeiroPedido, segundoPedido
var resultadoPedido


async function conferePedido(){                                            //Conferir pedido
    try{
        if(matchesPed.length == 2){
            primeiroPedido = matchesPed[0]
            primeiroPedido = primeiroPedido.replaceAll(/\s/g,"")
            primeiroPedido = primeiroPedido.replaceAll(/[a-z]/gi,"")
            primeiroPedido = primeiroPedido.replaceAll(":","")
            primeiroPedido = primeiroPedido.replaceAll("-","")

            segundoPedido = matchesPed[1]
            segundoPedido = segundoPedido.replaceAll(/\s/g,"")
            segundoPedido = segundoPedido.replaceAll(/[a-z]/gi,"")
            segundoPedido = segundoPedido.replaceAll(":","")
            segundoPedido = segundoPedido.replaceAll("-","") 

            if(primeiroPedido == segundoPedido){
                resultadoPedido = '--PEDIDO: OK'
            }
            else{
                resultadoPedido = '--PEDIDO: ERRADO'
            }
        }
        else if(matchesPed.length > 2){
            resultadoPedido = '--PEDIDO: ENCONTRADO 3 PEDIDOS'
        }
        else{
            resultadoPedido = '--PEDIDO: NAO ENCONTRADO'
        }
    }
    catch{
        resultadoPedido = '--PEDIDO: ERRADO'
    }
}    
conferePedido()


//--------------------------------------------OS--------------------------------
var texto = document.body.innerHTML
var RegexOs = /[.\s>:-][\d]{4}[/]20[\d]{2}/gi
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
        resultadoOs = '------OS: OK'}
    else {
        resultadoOs = '------OS: ERRADA!!!'
    }
    }
    catch{
        resultadoOs = '------OS: ERRADA!!!'     
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
                resultadoNe = '-EMPENHO: OK'
            }
            else{
                resultadoNe = '-EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/mr[\s]pecas/gi) > 0) {
            matchesNeErenice = texto.match(regexNeErenice)
            if(matchesNeErenice.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = '-EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/rabelo/gi) > 0) {
            matchesNeGilson = texto.match(regexNeGilson)
            if(matchesNeGilson.length >= 1){
                resultadoNe = 'EMPENHO: OK'
            }
            else{
                resultadoNe = '-EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/parts/gi) > 0) {
            matchesNeParts = texto.match(regexNeParts)
            if(matchesNeParts.length >= 1){
                resultadoNe = '-EMPENHO: OK'
            }
            else{
                resultadoNe = '-EMPENHO: ERRADO!!!'
            }  
        }
        if(texto.search(/alberto/gi) > 0) {
            matchesNeAlberto = texto.match(regexNeAlberto)
            if(matchesNeAlberto.length >= 1){
                resultadoNe = '-EMPENHO: OK'
            }
            else{
                resultadoNe = '-EMPENHO: ERRADO!!!'
            }              
        }
    } //fim try
    catch{
        resultadoNe = '-EMPENHO: ERRADO!!!'
    }
}
confereNe()

//------------------------------------PREFIXO------------------------------------
var texto = document.body.innerHTML
var regexPrefixo = /pref[:.a-z\s]{0,9}[-]?[a-z-\s]{0,5}([\d]{1,3})/gi
var matchesPrefixo = texto.match(regexPrefixo);
var primeiroPrefixo, segundoPrefixo
var resultadoPrefixo

async function conferePrefixo(){
    try{
        matchesPrefixo = texto.match(regexPrefixo);
        primeiroPrefixo = matchesPrefixo[0].slice(-9);
        primeiroPrefixo = primeiroPrefixo.replace(/PREFI/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/PREF/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/PRE/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/PRE/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/PR/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/IXO/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/XO/i,"");
        primeiroPrefixo = primeiroPrefixo.replace(/O:/,"");
        primeiroPrefixo = primeiroPrefixo.replaceAll(".","");
        primeiroPrefixo = primeiroPrefixo.replaceAll("-","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(":","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(" ","");
        primeiroPrefixo = primeiroPrefixo.replaceAll(/\s\s/g,"");

        segundoPrefixo = matchesPrefixo[1].slice(-9);
        segundoPrefixo = segundoPrefixo.replace(/PREFI/i,"");
        segundoPrefixo = segundoPrefixo.replace(/REF/i,"");
        segundoPrefixo = segundoPrefixo.replace(/EF/i,"");
        segundoPrefixo = segundoPrefixo.replace(/XO/i,"");
        segundoPrefixo = segundoPrefixo.replace(/O:/,"");
        segundoPrefixo = segundoPrefixo.replaceAll(".","");
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

console.log(matchesPrefixo)
console.log(resultadoPrefixo)

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
            resultadoPlaca = '---PLACA: OK'
        }
        else{
            resultadoPlaca = '---PLACA: ERRADA!!!'
        }
    }
    catch{
        resultadoPlaca = '---PLACA: ERRADA!!!'
    }
}
conferePlaca()


//MARCA e DESCONO
var texto = document.body.innerHTML
var tent1, tent2, tent3, tent4,tent5, tentSoma
var regexDesconto = /[\d]{1,2}[.,]?[\d]{0,2}%/g
var regexRenault = /RENAULT/i
var regexFord = /FORD/i
var regexPartsLub = /parts\slub/i
var regexGilson = /rabelo\sco/i
var regexRobson = /robson/i
var regexYamaha = /Yamaha/i
var regexBmw = /bmw/i
var regexAgrale = /Agrale/i
var regexIveco = /Iveco/i
var regexFiat = /fiat/i
var regexMitsubishi = /mitsubishi/i
var regexCruze = /cruze\s/i                        //Verificar esses 2
var regexS10 = /s10\s/i                         //Verificar esses 2
var regexVw =/vw/i
var regexSprinter =/sprinter/i
var regexMbPesado = /atego|axor|accelo/i
var regexCitroen =/citroen/i
var regexHonda =/honda/i
var regexJeep =/jeep/i
var regexToyota =/toyota/i
var regexScania =/scania/i
var resultadoDesconto
var resultadoMarca

var matchesDesconto = texto.match(regexDesconto);
var matchesPartslub = texto.match(regexPartsLub);
var matchesGilson = texto.match(regexGilson);
var matchesRobson = texto.match(regexRobson);
var matchesRenault =  texto.match(regexRenault);
var matchesFord =  texto.match(regexFord);
var matchesYamaha =  texto.match(regexYamaha);
var matchesBmw =  texto.match(regexBmw);
var matchesAgrale =  texto.match(regexAgrale);
var matchesIveco =  texto.match(regexIveco);
var matchesFiat =  texto.match(regexFiat);
var matchesMitsubishi =  texto.match(regexMitsubishi);
var matchesHonda =  texto.match(regexHonda);
var matchesCruze =  texto.match(regexCruze);
var matchesS10 =  texto.match(regexS10); //
var matchesVw =  texto.match(regexVw);
var matchesSprinter =  texto.match(regexSprinter);
var matchesMbPesado =  texto.match(regexMbPesado);
var matchesCitroen =  texto.match(regexCitroen);
var matchesJeep =  texto.match(regexJeep);
var matchesToyota =  texto.match(regexToyota);
var matchesScania =  texto.match(regexScania);

async function confereDesconto(){
    try{ 
        function verificaDesconto(marca,desc1,desc2,desc3,desc4,desc5){
                tent1 = matchesDesconto.filter(element => element == desc1)
                tent2 = matchesDesconto.filter(element => element == desc2)
                tent3 = matchesDesconto.filter(element => element == desc3)
                tent4 = matchesDesconto.filter(element => element == desc4)
                tent5 = matchesDesconto.filter(element => element == desc5)
                tentSoma = Number(tent1.length +tent2.length + tent3.length + tent4.length + tent5.length);

                if (tentSoma == 2){
                    resultadoMarca = `---MARCA: ${marca}`
                    resultadoDesconto = `DESCONTO: Ok`
                } 
                else if(tentSoma > 2){
                    resultadoMarca = `---MARCA: ${marca}`
                    resultadoDesconto= `DESCONTOS: MAIS DE 2 ENCONTRADOS`
                }
                else{
                    resultadoMarca = `---MARCA: ${marca}`
                    resultadoDesconto = 'DESCONTO: ERRADOS!!!'
                }
            }

            //ALBERTO
            if(matchesAgrale){                                    //Agrale N tem desconto
                resultadoMarca= "---MARCA: AGRALE"                                                  
                resultadoDesconto = "DESCONTO: SEM DESCONTO"
            }
            if(matchesIveco){                                                  
                verificaDesconto("IVECO","52.00%","52,00%","52%","58.0%","58,0%")
            }
            //MARIA ERENICE
            if(matchesBmw){
                verificaDesconto("BMW","7.00%","7,00%","7%","7,0%","7.0%")
            }
            //PARTS
            if(matchesRenault){
                verificaDesconto("RENAULT","58.00%","58,00%","58%","58,0%","58.0%")
            }
            if(matchesFord && matchesPartslub){
                verificaDesconto("FORD PESADO","59.00%","59,00%","59%","59,0%","59.0%")
            }
            if(matchesYamaha){
                verificaDesconto("YAMAHA","55.00","55,00%","55%","55,0%","55.0%")
            }
            if(matchesHonda){
                verificaDesconto("HONDA","45.00%","45,00%","45%","45,0%","45.0%")
            }
            //ROBSON
            if(matchesFiat){
                verificaDesconto("FIAT","69.20%","69,20%","69,2%","69.2%")
            }
            if(matchesMitsubishi){
                verificaDesconto("MITSUBISHI","61.00%","61,00%","61%","61,0%","61.0%")
            }
            if(matchesCruze && matchesRobson){
                verificaDesconto("GM","65.00%","65,00%","65%","65,0%","65.0%")
            }
            //GILSON
            if(matchesS10 && matchesGilson){                                                                     //verificar esse       
                verificaDesconto("GM Utilitario","65.00%","65,00%","65%","65.0%","65,0%")
            }
            if(matchesVw && matchesGilson){                                                                  
                verificaDesconto("VW","49.10%","49,10%","49,1%","41.1%")
            }
            if(matchesCitroen && matchesGilson){                                                                    
                verificaDesconto("CITROEN","43.10%","43,10%","43,1%","43.1%")
            }
            if(matchesFord && matchesGilson){                                                                
                verificaDesconto("FORD UTILITARIO","43.10%","43,10%","43,1%","43.1%")
            }
            if(matchesJeep && matchesGilson){
                verificaDesconto("JEEP","49.10%","49,10%","49,1%","41.1%")
            }
            if(matchesMbPesado && matchesGilson){
                verificaDesconto("MB PESADO","39.91%","39,91%")
            }
            if(matchesSprinter && matchesGilson){                                                      
                verificaDesconto("MB UTILITARIO","47.51%","47,51%")
            }
            if(matchesToyota && matchesGilson){
                verificaDesconto("TOYOTA","36.10%","36,10%","36,1%","36.1%")
            }
            if(matchesScania && matchesGilson){
                verificaDesconto("SCANIA","36.10%","36,10%","36,1%","36.1%")
            }
    }
    catch{
        resultadoMarca= "---MARCA: INDEFINIDA"
        resultadoDesconto = "DESCONTO: ERRADO"
    } 
}
confereDesconto()

//KM
var texto = document.body.innerHTML;
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var regexKm = /hodômetro<\/span>[\w\s<>.,;:="'%*()\-\/]{0,200}\/span>/gi
var matchesKm = texto.match(regexKm);
var matchesKm1, matchesKm2, matchesKm3
var matchesKmTotal=0
var possivelKm1, possivelKm2, possivelKm3 
var resultadoKm
var kmPadrao, kmOs


async function confereKm(){
    try{
        if(matchesKm){
            kmOs = matchesKm[0]
            kmOs = kmOs.replaceAll(/[a-zôçã\s<>,;="'%*()\-\/]/gi,"")

            for(let i=0; i>-8; i--){
                kmPadrao = kmOs.slice(i)
                if(kmOs.slice(i-1,i) == ":"){
                    break
                }
            }

            possivelKm1 = kmPadrao.replace(".","")
            possivelKm2 = kmPadrao.replace("."," ")
            possivelKm3 = kmPadrao

            matchesKm1 = primeiraPagina.match(possivelKm1)
            matchesKm2 = primeiraPagina.match(possivelKm2)
            matchesKm3 = primeiraPagina.match(possivelKm3)

            matchesKm1 ? matchesKmTotal += matchesKm1.length : ""
            matchesKm2 ? matchesKmTotal += matchesKm2length : ""
            matchesKm3 ? matchesKmTotal += matchesKm3.length : ""

            if(matchesKmTotal >= 1){
                resultadoKm = '------KM: OK'
            }
            else{
                resultadoKm = '------KM: ERRADO!!!'
            }
        }
        else{
            resultadoKm = '------KM: NÃO ENCONTRADO NA OS'
        }   
    }
    catch{
        resultadoKm = '------KM: NÃO ENCONTRADO NA OS'
    }
}
confereKm()


//ANO
var texto = document.body.innerHTML;
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var regexAno = /Ano\/Fabricação<\/span>[\w\s<>.,;:="'%*()\-\/]{0,210}\/span>/gi
var matchesAno= texto.match(regexAno)
var matchesAnoPag1
var anoPadrao
var possivelAno1, possivelAno2, possivelAno3, possivelAno4, possivelAno5
var resultadoAno


async function confereAno(){
    try{
        if(matchesAno){
            anoPadrao = matchesAno[0]
            anoPadrao = anoPadrao.replaceAll(/[a-zçã\s<>.,;:="'%*()\-\/]/gi,"")
            anoPadrao = anoPadrao.slice(-4)

            matchesAnoPag1= primeiraPagina.match(anoPadrao);

            if(matchesAnoPag1.length == 1 && (anoPadrao == matchesAnoPag1[0])){
                resultadoAno = "-----ANO: OK"
            }
            else if(matchesAnoPag1.length > 1){
                resultadoAno = "-----ANO: MAIS DE 2 ANOS ENCONTRADOS"   
            }
            else{
                resultadoAno = '-----ANO: ERRADO!!!'
            }
        }
        else{
            resultadoAno = "-----ANO: NAO ENCONTRADO NA OS"
        }
    }
    catch{
        resultadoAno = '-----ANO: ERRADO!!!'
    }
}
confereAno()


//CODIGO
var texto = document.body.innerHTML;
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var regexCodigo = /TROCAR<\/span><span style="left:\s\d\d\.\d\d%;\stop:\s\d\d\.\d\d%;\sfont-size:\scalc\(var\(--scale-factor\)\*\d\.\d\dpx\);\sfont-family:\sserif;"\srole="presentation"\sdir="ltr">\s<\/span><span\sstyle="left:\s\d\d\.\d\d%;\stop:\s\d\d\.\d\d%;\sfont-size:\scalc\(var\(--scale-factor\)\*\d\.\d\dpx\);\sfont-family:\sserif;\stransform:\sscaleX\(\d\.\d\d\d\d\d\);"\srole="presentation"\sdir="ltr">\w{1,15}/gi
var matchCodigo = texto.match(regexCodigo)
var arrayResposta =[]
var nCodigos
var resultadoCodigos
var codigoEmRegex

function confereCodigos(){
    try{
        if(matchCodigo){                                             //Se achar codigo na audatex faca isso
            nCodigos= matchCodigo.length
            for(let i=0; i<nCodigos; i++){              
                matchCodigo[i] = matchCodigo[i].replace(/TROCAR<\/span><span style="left:\s\d\d\.\d\d%;\stop:\s\d\d\.\d\d%;\sfont-size:\scalc\(var\(--scale-factor\)\*\d\.\d\dpx\);\sfont-family:\sserif;"\srole="presentation"\sdir="ltr">\s<\/span><span\sstyle="left:\s\d\d\.\d\d%;\stop:\s\d\d\.\d\d%;\sfont-size:\scalc\(var\(--scale-factor\)\*\d\.\d\dpx\);\sfont-family:\sserif;\stransform:\sscaleX\(\d\.\d\d\d\d\d\);"\srole="presentation"\sdir="ltr">/i,"")
                
                codigoEmRegex= new RegExp(matchCodigo[i],"i")
                if(primeiraPagina.match(codigoEmRegex) == null){           // Se o array tiver vazio quer dizer que n achou o codigo na primeira pagina
                    arrayResposta.push(`Codigo ${matchCodigo[i]} ERRADO`)
                    console.log(primeiraPagina.match(matchCodigo[i]))
                }
            }
            if (arrayResposta.length == 0){
                resultadoCodigos = '-CODIGOS: OK'
            }
            else{
                    resultadoCodigos = `-CODIGOS: ${arrayResposta}`
            }
        }
        else{
            resultadoCodigos = '-CODIGOS: NAO ENCONTRADOS NA AUDATEX'  
        }
    }
    catch{
            resultadoCodigos = '-CODIGOS: NAO ENCONTRADOS NA AUDATEX'
    }
}
confereCodigos()







//MOSTRA RESULTADOS
console.log("----------------RESULTADOS----------------")
console.log(resultadoPedido);
console.log(resultadoOs);
console.log(resultadoNe);
console.log(resultadoPrefixo)
console.log(resultadoPlaca)
console.log(resultadoMarca)
console.log(resultadoDesconto)
console.log(resultadoKm)
console.log(resultadoAno)
console.log(resultadoCodigos);
console.log("-------------------------------------------")
//FIM



/*

*PEDIDO: Não pode ter quebra de linha e prefixa ter o prefixo "ped" pra funcioanr
*OS: Não pode ter quebra de linha e prefixa ter o prefixo "os" pra funcioanr
*PREFIXO: Não pode ter quebra de linha e prefixa ter o prefixo"pref" pra funcioanr
NE: Tem que ter o prefixo "NE" e no máximo 5 zeros entre o "NE" e o numero
*PREFIXO: Não pode ter quebra de linha e prefixa ter o prefixo"pref" pra funcioanr
PLACA: Pegado da Os
MARCA: Tabela feito a mão 
DESCONTO: tabela feito a mão 
KM: Pegado da Os
Ano: Pegado da Os, verifica somente a primeira página. Se tiver 2 anos da primeira página vai dar erro
CODIGOS: A audatex tem que ser digital

* São os ítens menos confiáveis

*/
