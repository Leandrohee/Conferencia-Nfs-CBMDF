var texto = document.body.innerHTML;
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var regexValorAud = /TROCAR<[\w\s\Á\É\Í\Ó\Ú\Ã\Õ\Ç\?<>.,;ç:="'%*()\-\/]{0,2000}>[\d]{1,2}.?[\d]{1,3},[\d]{1,2}</gi
var regexValorNfBruto =/TOTAL DOS PRODUTOS<[\w\s<>.,;:="'%*()\-\/]{0,300}>[\d]{1,2}.?[\d]{1,3},[\d]{1,2}</i
var regexValorNfDesconto = /TOTAL\sDA\sNOTA<[\w\s<>.,;:="'%*()\-\/]{0,300}>[\d]{1,2}.?[\d]{1,3},[\d]{1,2}</i
var matchesValorAud = texto.match(regexValorAud);
var matchesValorNfBruto = texto.match(regexValorNfBruto);
var matchesValorNfDesconto = texto.match(regexValorNfDesconto);
var matchesAudNaNF = []
var nfBruto, nfDesconto, nfTeste, valorAud = []
var resultadoValorNf

//MATCHES E REGEX
var regexRenault = /RENAULT/i
var regexFord = /FORD/i
var regexPartsLub = /parts\slub/i
var regexGilson = /rabelo\sco/i
var regexRobson = /robson/i
var regexErenice = /MR\sPECAS/i
var regexAlberto = /ALBERTO/i
var regexYamaha = /Yamaha/i
var regexBmw = /bmw/i
var regexAgrale = /Agrale/i
var regexIveco = /Iveco/i
var regexFiat = /fiat/i
var regexMitsubishi = /mitsubishi/i
var regexCruze = /cruze\s/i                      
var regexS10 = /s10\s/i                        
var regexVw =/vw/i
var regexSprinter =/sprinter/i
var regexMbPesado = /atego|axor|accelo/i
var regexCitroen =/citroen/i
var regexHonda =/honda/i
var regexJeep =/jeep/i
var regexToyota =/toyota/i
var regexScania =/scania/i
var matchesPartslub = texto.match(regexPartsLub);
var matchesGilson = texto.match(regexGilson);
var matchesRobson = texto.match(regexRobson);
var matchesErenice = texto.match(regexErenice);
var matchesAlberto = texto.match(regexAlberto);
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



async function confereValorNf(){
    try{
        if(matchesValorAud){
            //Reervando o valor da Nf Bruta
                    for(let i=0; i>-10; i--){
                        nfBruto= matchesValorNfBruto[0].slice(i)
                        if(matchesValorNfBruto[0].slice(i-1,i) == "\""){
                            break
                        }
                    }

                    for(let i=0; i>-10; i--){
                        nfDesconto= matchesValorNfDesconto[0].slice(i)
                        if(matchesValorNfDesconto[0].slice(i-1,i) == "\""){
                            break
                        }
                    }

                    //Array para as peças audatex
                    for(let a=0; a < matchesValorAud.length;a++){
                        for(let i=0; i>-10; i--){
                            valorAud[a]= matchesValorAud[a].slice(i)
                            if(matchesValorAud[a].slice(i-1,i) == "\""){
                            break
                            }
                        }

                        valorAud[a] = valorAud[a].replaceAll(/<|>/g,"")
                        primeiraPagina.match(valorAud[a]) ? matchesAudNaNF.push(true) : ''
                        
                        valorAud[a] = valorAud[a].replaceAll(/\./g,"")
                        valorAud[a] = valorAud[a].replaceAll(",",".")
                        valorAud[a] = Number(valorAud[a])
                    
                    }

                    nfBruto = nfBruto.replaceAll(/<|>|\./g,"")
                    nfBruto = nfBruto.replaceAll(",",".")
                    nfBruto = Number(nfBruto)

                    nfDesconto = nfDesconto.replaceAll(/<|>|\./g,"")
                    nfDesconto = nfDesconto.replaceAll(",",".")
                    nfDesconto = Number(nfDesconto)

                    if(matchesAudNaNF.length == matchesValorAud.length){
                        matchesAgrale ? resultadoValorNf: "---VALOR: AGRALE NAO CALCULA"
                        if(matchesIveco){
                            nfTeste = nfBruto * (1-0.52)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesBmw){
                            nfTeste = nfBruto * (1-0.07)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesRenault){
                            nfTeste = nfBruto * (1-0.58)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesFord && matchesPartslub){
                            nfTeste = nfBruto * (1-0.59)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesYamaha){
                            nfTeste = nfBruto * (1-0.55)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesHonda){
                            nfTeste = nfBruto * (1-0.45)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesFiat){
                            nfTeste = nfBruto * (1-0.692)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesMitsubishi){
                            nfTeste = nfBruto * (1-0.61)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                        else if(matchesCruze && matchesRobson){
                            nfTeste = nfBruto * (1-0.65)
                            nfTeste.toFixed(2) == nfDesconto.toFixed(2) ? resultadoValorNf= '---VALOR: OK': resultadoValorNf= `----VALOR: ERRADO!! VALOR ESPERADO: ${nfTeste.toFixed(2)} VALOR DA NF: ${nfDesconto.toFixed(2)}`
                        }
                    }
                    else{
                        resultadoValorNf = `----VALOR: NAO FOI ENCONTRADO UM VALOR NA NF`
                    }
        }
        else{
            resultadoValorNf = `----VALOR: NAO FOI ENCONTRADO AUDATEX`
        }
        
    }
    catch{
        resultadoValorNf = `----VALOR: NAO FOI ENCONTRADO UM VALOR NA NF`
    }

}
confereValorNf()


console.log(resultadoValorNf)


