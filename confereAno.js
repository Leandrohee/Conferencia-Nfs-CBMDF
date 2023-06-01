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

console.log(`O ano eh ${anoPadrao}`)
console.log(resultadoAno)


//metodo antigo