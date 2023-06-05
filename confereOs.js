var texto = document.body.innerHTML
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var RegexOs = /Nº\sOS:[\w\s<>.,;:="'%*()\-\/]{0,500}\d{2,4}\/202\d/gi
var primeiraOs, segundaOs
var matchesOs = texto.match(RegexOs);
var matchOsNaNf
var osPadrao
var resultadoOs


async function confereOs(){
    try{
        if(matchesOs){
            for(let i=0; i>-10; i--){
                osPadrao= matchesOs[0].slice(i)
                if(matchesOs[0].slice(i-1,i) == ">"){
                    break
                }
            }

            osPadrao[0] == 0 ? osPadrao = osPadrao.slice(1) : ""
            osPadrao[0] == 0 && osPadrao[1] == 0  ? osPadrao = osPadrao.slice(2) : ""

            matchOsNaNf = primeiraPagina.match(osPadrao)

            if(matchOsNaNf){
                resultadoOs = `------OS: OK ${matchOsNaNf}`
            }
            else{
                resultadoOs = `------OS: ERRADA, NAO ENCONTRADA A OS ${matchOsNaNf} NA NF`
            }
        }
        else{
            resultadoOs = `------OS: NAO ENCONTRADA O DOC ORDEM SE SERVI;O`
        }
    }
    catch{
        resultadoOs = `------OS: NAO ENCONTRADA O DOC ORDEM SE SERVI;O`
    }
}
confereOs()

console.log(resultadoOs)



// var RegexOs = /[.\s>:-][\d]{4}[/]20[\d]{2}/gi

//------------------------------METODO ANTIGO
// async function confereOs(){                                                //Conferir Os
//     try{
//     //logica
//     for(let i=0; i<=5; i++){
//         primeiraOs = matchesOs[0].slice(i)
//         if(matchesOs[0].slice(i,(i+1)) > 0){break}

//     }
//     for(let i=0; i<=5; i++){
//         segundaOs = matchesOs[1].slice(i)
//         if(matchesOs[1].slice(i,(i+1)) > 0){break}

//     }

//     if(primeiraOs == segundaOs){
//         resultadoOs = '------OS: OK'}
//     else {
//         resultadoOs = '------OS: ERRADA!!!'
//     }
//     }
//     catch{
//         resultadoOs = '------OS: ERRADA!!!'     
//     }
// }
// confereOs()

// console.log(primeiraOs)
// console.log(segundaOs)
// console.log(resultadoOs)