var texto = document.body.innerHTML;
var regexKm = /hodômetro<\/span>[\w\s<>.,;:="'%*()\-\/]{0,200}\/span>/gi
var matchesKm = texto.match(regexKm);
var matchesPossivelKm1, matchesPossivelKm2, matchesPossivelKm3
var matchesKmTotal=0
var possivelKm1, possivelKm2, possivelKm3 
var resultadoKm
var kmPadrao, kmOs

kmOs = matchesKm[0]
kmOs = possivelKm1.replaceAll(/[a-zôçã\s<>.,;="'%*()\-\/]/gi,"")

console.log(kmOs)
for(let i=0; i>-8; i--){
    kmPadrao = kmOs.slice(i)
    if(kmOs.slice(i-1,i) == ":"){
        console.log(kmPadrao);
        break
    }
}





//metodo antigo
async function confereKm(){
    try{
        if(matchesKm.length == 2){
            resultadoKm = '------KM: OK'
        }
        else if(matchesKm.length > 2){
            resultadoKm = '------KM: Encontrado mais de 2 Km`s'
        }
        else{                                                //Se Km = 1
            possivelKm1 = matchesKm[0]                      //12345
            possivelKm1 = possivelKm1.replaceAll(".","")
            possivelKm1 = possivelKm1.replaceAll(" ","")
            possivelKm1 = possivelKm1.replace(/km/i,"")
            possivelKm1 = possivelKm1.replace(/ltr">:/i,"")
            possivelKm1 = possivelKm1.replace(/</i,"")

            possivelKm2 = matchesKm[0]                     //12.345
            possivelKm2 = possivelKm2.replaceAll(" ","")
            possivelKm2 = possivelKm2.replace(/km/i,"")
            possivelKm2 = possivelKm2.replace(/ltr">:/i,"")
            possivelKm2 = possivelKm2.replace(/</i,"")

            possivelKm3 = matchesKm[0]                     //12 345
            possivelKm3 = possivelKm3.replaceAll("."," ")
            possivelKm3 = possivelKm3.replace(/km/i,"")
            possivelKm3 = possivelKm3.replace(/ltr">:/i,"")
            possivelKm3 = possivelKm3.replace(/</i,"")

            matchesPossivelKm1 ? matchesKmTotal += Number(matchesPossivelKm1.length) : ""
            matchesPossivelKm2 ? matchesKmTotal += Number(matchesPossivelKm2.length) : ""
            matchesPossivelKm3 ? matchesKmTotal += Number(matchesPossivelKm3.length) : ""

            resultadoKm = '------KM: OK'
        }
    }
    catch{
        resultadoKm= "------kM ERRADO"
    }
}
confereKm()