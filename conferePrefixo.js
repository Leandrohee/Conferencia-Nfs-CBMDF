var texto = document.body.innerHTML
var regexPrefixo = /Prefixo<\/span>[\w\s<>.,;:="'%*()\-\/]{0,210}:\s[\w]{2,4}\s-\s[\d]{1,4}</gi
var matchesPrefixo = texto.match(regexPrefixo);
var prefixoPadrao, prefixoOs, prefixoTotal=0
var primeiroPrefixo, segundoPrefixo, terceiroPrefixo,quartoPrefixo,quintoPrefixo,sextoPrefixo,setimoPrefixo
var matches1Prefixo, matches2Prefixo, matches3Prefixo, matches4Prefixo,matches5Prefixo,matches6Prefixo,matches7Prefixo
var prefixo1, prefixo2, prefixo3, prefixo4, prefixo5, prefixo6,prefixo7
var resultadoPrefixo

async function conferePrefixo(){
    try{
        if(matchesPrefixo){
            //Transforma a regex da Os em um prefixo padrao
            prefixoOs = matchesPrefixo[0]
            prefixoOs = prefixoOs.replace(/[\s<>.,;="'%*()\/]/gi,"")

            for(let i=0; i>-8; i--){
                prefixoPadrao = prefixoOs.slice(i)
                if(prefixoOs.slice(i-1,i) == ":"){
                    break
                }
            }

            //transformando o padrao em 7 diferentes variantes
            primeiroPrefixo = prefixoPadrao                     //AO-56
            segundoPrefixo = prefixoPadrao.replace("-","\\.")     //AO.56
            terceiroPrefixo = prefixoPadrao.replace("-"," ")    //AO 56
            quartoPrefixo = prefixoPadrao.replace("-","")       //AO56
            quintoPrefixo = prefixoPadrao.replace("-"," - ")    //AO - 56
            sextoPrefixo = prefixoPadrao.replace("-","- ")     //AO- 56
            setimoPrefixo = prefixoPadrao.replace("-"," -")      //AO -56

            //transformando as varianes em regEx para ler tb maiusculo e minusculo
            prefixo1 = new RegExp(primeiroPrefixo, "gi");
            prefixo2 = new RegExp(segundoPrefixo, "gi");
            prefixo3 = new RegExp(terceiroPrefixo, "gi");
            prefixo4 = new RegExp(quartoPrefixo, "gi");
            prefixo5 = new RegExp(quintoPrefixo, "gi");
            prefixo6 = new RegExp(sextoPrefixo, "gi");
            prefixo7 = new RegExp(setimoPrefixo, "gi");

            //Procurando as regex no pdf
            matches1Prefixo = texto.match(prefixo1)
            matches2Prefixo = texto.match(prefixo2)
            matches3Prefixo = texto.match(prefixo3)
            matches4Prefixo = texto.match(prefixo4)
            matches5Prefixo = texto.match(prefixo5)
            matches6Prefixo = texto.match(prefixo6)
            matches7Prefixo = texto.match(prefixo7)

            //contando quantas vezes o prefixo foi encontrado em todas as suas variações
            matches1Prefixo ? prefixoTotal += matches1Prefixo.length : ""
            matches2Prefixo ? prefixoTotal += matches2Prefixo.length : ""
            matches3Prefixo ? prefixoTotal += matches3Prefixo.length : ""
            matches4Prefixo ? prefixoTotal += matches4Prefixo.length : ""
            matches5Prefixo ? prefixoTotal += matches5Prefixo.length : ""
            matches6Prefixo ? prefixoTotal += matches6Prefixo.length : ""
            matches7Prefixo ? prefixoTotal += matches7Prefixo.length : ""

            // matches1Prefixo ? prefixoTotal.push(matches1Prefixo) : ""
            // matches2Prefixo ? prefixoTotal.push(matches2Prefixo) : ""
            // matches3Prefixo ? prefixoTotal.push(matches3Prefixo) : ""
            // matches4Prefixo ? prefixoTotal.push(matches4Prefixo) : ""
            // matches5Prefixo ? prefixoTotal.push(matches5Prefixo) : ""
            // matches6Prefixo ? prefixoTotal.push(matches6Prefixo) : ""
            // matches7Prefixo ? prefixoTotal.push(matches7Prefixo) : ""


            if(prefixoTotal >= 3){
                resultadoPrefixo = "-PREFIXO: OK"
            }
            else{
                resultadoPrefixo = "-PREFIXO: ERRADO!!!"
            }
        }
        else{
            resultadoPrefixo = "-PREFIXO: NÃO ENCONTRADO NA OS"
        }
    }
    catch{
        resultadoPrefixo = "-PREFIXO: NÃO ENCONTRADO NA OS"
    }
}
conferePrefixo()

console.log(prefixoTotal)
console.log(resultadoPrefixo)


console.log(matches1Prefixo)
console.log(matches2Prefixo)
console.log(matches3Prefixo)
console.log(matches4Prefixo)
console.log(matches5Prefixo)
console.log(matches6Prefixo)
console.log(matches7Prefixo)
console.log(prefixoTotal)




//CODIGO ANTIGO

// async function conferePrefixo(){
//     try{
//         matchesPrefixo = texto.match(regexPrefixo);
//         primeiroPrefixo = matchesPrefixo[0].slice(-9);
//         primeiroPrefixo = primeiroPrefixo.replace(/PREFI/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/PREF/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/PRE/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/PRE/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/PR/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/IXO/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/XO/i,"");
//         primeiroPrefixo = primeiroPrefixo.replace(/O:/,"");
//         primeiroPrefixo = primeiroPrefixo.replaceAll(".","");
//         primeiroPrefixo = primeiroPrefixo.replaceAll("-","");
//         primeiroPrefixo = primeiroPrefixo.replaceAll(":","");
//         primeiroPrefixo = primeiroPrefixo.replaceAll(" ","");
//         primeiroPrefixo = primeiroPrefixo.replaceAll(/\s\s/g,"");

//         segundoPrefixo = matchesPrefixo[1].slice(-9);
//         segundoPrefixo = segundoPrefixo.replace(/PREFI/i,"");
//         segundoPrefixo = segundoPrefixo.replace(/REF/i,"");
//         segundoPrefixo = segundoPrefixo.replace(/EF/i,"");
//         segundoPrefixo = segundoPrefixo.replace(/XO/i,"");
//         segundoPrefixo = segundoPrefixo.replace(/O:/,"");
//         segundoPrefixo = segundoPrefixo.replaceAll(".","");
//         segundoPrefixo = segundoPrefixo.replaceAll("-","");
//         segundoPrefixo = segundoPrefixo.replaceAll(":","");
//         segundoPrefixo = segundoPrefixo.replaceAll(" ","");
//         segundoPrefixo = segundoPrefixo.replaceAll(/\s\s/g,"");


//         if (primeiroPrefixo == segundoPrefixo){
//             resultadoPrefixo = 'PREFIXO: OK'
//         }
//         else{
//             resultadoPrefixo = 'PREFIXO: ERRADO!!!'
//         }  
//     }
//     catch{
//         resultadoPrefixo = 'PREFIXO: ERRADO!!!'
//     }

// }
// conferePrefixo()

// console.log(matchesPrefixo)
// console.log(resultadoPrefixo)