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

function verificaDesconto(marca,desc1,desc2,desc3,desc4,desc5){
    tent1 = matchesDesconto.filter(element => element == desc1)
    tent2 = matchesDesconto.filter(element => element == desc2)
    tent3 = matchesDesconto.filter(element => element == desc3)
    tent4 = matchesDesconto.filter(element => element == desc4)
    tent5 = matchesDesconto.filter(element => element == desc5)
    tentSoma = Number(tent1.length +tent2.length + tent3.length + tent4.length + tent5.length);

    if (tentSoma == 2){
        resultadoDesconto = `MARCA ${marca} E DESCONTO: Ok`
    } 
    else if(tentSoma > 2){
        resultadoDesconto= `MAIS DE 2 DESCONTOS ENCONTRADOS`
    }
    else{
    resultadoDesconto = 'Marca e desconto: ERRADOS!!!'
    }
}

//ALBERTO
if(matchesAgrale){                                                  //Agrale N tem desconto
    resultadoDesconto = "MARCA AGRALE SEM DESCONTO"
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
    verificaDesconto("CRUZE","65.00%","65,00%","65%","65,0%","65.0%")
}
//GILSON
if(matchesS10){                                                                     //verificar esse       
    verificaDesconto("GM Utilitario","65.00%","65,00%","65%","65.0%","65,0%")
}
if(matchesVw){                                                                  
    verificaDesconto("VW","49.10%","49,10%","49,1%","41.1%")
}
if(matchesCitroen){                                                                    
    verificaDesconto("CITROEN","43.10%","43,10%","43,1%","43.1%")
}
if(matchesFord && matchesGilson){                                                                
    verificaDesconto("FORD UTILITARIO","43.10%","43,10%","43,1%","43.1%")
}
if(matchesJeep){
    verificaDesconto("JEEP","49.10%","49,10%","49,1%","41.1%")
}
if(matchesMbPesado && matchesGilson){
    verificaDesconto("MB PESADO","39.91%","39,91%")
}
if(matchesSprinter){                                                      
    verificaDesconto("MB UTILITARIO","47.51%","47,51%")
}
if(matchesToyota){
    verificaDesconto("TOYOTA","36.10%","36,10%","36,1%","36.1%")
}
if(matchesScania){
    verificaDesconto("SCANIA","36.10%","36,10%","36,1%","36.1%")
}

console.log(resultadoDesconto)