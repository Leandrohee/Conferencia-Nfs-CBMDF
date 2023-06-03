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

console.log(primeiraOs)
console.log(segundaOs)
console.log(resultadoOs)