var texto = document.body.innerHTML;
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var regexCodigo = /TROCAR<[\w\s<>.,;:="'%*()\-\/]{0,500}>[\w-]{1,20}/gi
var matchCodigo = texto.match(regexCodigo)
var arrayResposta =[]
var codigoPadrao=[]
var nCodigos
var resultadoCodigos
var codigoEmRegex

function confereCodigos(){
    try{
        if(matchCodigo){                                             //Se achar codigo na audatex faca isso
            nCodigos= matchCodigo.length
            for(let i=0; i<nCodigos; i++){
                for(let a=0; a>-20; a--){
                    codigoPadrao[i] = matchCodigo[i].slice(a)
                    if(matchCodigo[i].slice(a-1,a) == ">"){
                        break
                    }
                }
                codigoPadrao[i] = codigoPadrao[i].replaceAll(/[-]/gi,"")
                               
                codigoEmRegex= new RegExp(codigoPadrao[i],"i")
                if(primeiraPagina.match(codigoEmRegex) == null){           // Se o array tiver vazio quer dizer que n achou o codigo na primeira pagina
                    arrayResposta.push(`Codigo ${codigoPadrao[i]} ERRADO`)
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

console.log(codigoPadrao)
console.log(resultadoCodigos)