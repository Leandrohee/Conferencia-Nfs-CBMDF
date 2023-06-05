var texto = document.body.innerHTML
var primeiraPagina= document.getElementById("viewer").querySelector("[data-page-number]").innerHTML
var todasAsPaginas = document.querySelectorAll(".page")
var paginasMenosPrimeira = ""
var regexPedidoNaNf = /(PED[\w]{0,3}[\s:-]{0,3})([\d]{1,4})/i
var regexPedidoNoPed = /PEDIDO:[\w\s<>.,;:="'%*()\-\/]{0,500}">\d{1,4}\/?\d{0,4}<|PEDIDO:\s?(\d{1,4})</g
var matchesPedNoPed
var matchesPedNaNf
var pedPadrao, pedNf
var resultadoPedido


async function conferePedidos(){
    try{
        // Excluindo a primeira pagina para procurar somente nas demais
        todasAsPaginas.forEach(element =>{
            if(element.dataset.pageNumber > 1){
                paginasMenosPrimeira += " " + element.innerHTML
            }
        })

        // Procurando o pedido padrao nas demais p[aginas]
        matchesPedNoPed = paginasMenosPrimeira.match(regexPedidoNoPed)

        if(matchesPedNoPed){
            for(let i=0; i>-10; i--){
                pedPadrao= matchesPedNoPed[0].slice(i)
                if(matchesPedNoPed[0].slice(i-1,i) == ":"){
                    break
                }
                else if(matchesPedNoPed[0].slice(i-1,i) == ">"){
                    break
                }
            }

            // Formatando o pedido padrao
            pedPadrao = pedPadrao.replaceAll("2023","")
            pedPadrao = pedPadrao.replaceAll(/[<\s\/]/g,"")
            pedPadrao[0] == 0 ? pedPadrao = pedPadrao.slice(1) : ""


            // Procurando o pedido da nota fiscal somente na primeira pagina
            matchesPedNaNf = primeiraPagina.match(regexPedidoNaNf)
            pedNf = matchesPedNaNf[2]

            // Formatando o pedido da NF
            pedNf[0] == 0 ? pedNf = pedNf.slice(1) : ""

            if(pedPadrao == pedNf) {
            resultadoPedido = `--PEDIDO: OK                    (${pedPadrao} = ${pedNf})`  
            }
            else{
                resultadoPedido = `--PEDIDO: ERRADO!!! ESPERAVA ${pedPadrao} VEIO ${pedNf}`
            } 
        }
        else{
            resultadoPedido = `--PEDIDO: NAO ENCONTRADO O PED NO PEDIDO DE MATERIAL`
        }
    }
    catch{
        resultadoPedido = `--PEDIDO: ERRO DESCONHECIDO`
    }
}
conferePedidos()

console.log(resultadoPedido)






//METODO ANTIGO 2
// async function conferePedido(){                                            //Conferir pedido
//     try{
//         if(matchesPed.length == 2){
//             primeiroPedido = matchesPed[0]
//             primeiroPedido = primeiroPedido.replaceAll(/\s/g,"")
//             primeiroPedido = primeiroPedido.replaceAll(/[a-z]/gi,"")
//             primeiroPedido = primeiroPedido.replaceAll(":","")
//             primeiroPedido = primeiroPedido.replaceAll("-","")

//             segundoPedido = matchesPed[1]
//             segundoPedido = segundoPedido.replaceAll(/\s/g,"")
//             segundoPedido = segundoPedido.replaceAll(/[a-z]/gi,"")
//             segundoPedido = segundoPedido.replaceAll(":","")
//             segundoPedido = segundoPedido.replaceAll("-","") 

//             if(primeiroPedido == segundoPedido){
//                 resultadoPedido = '--PEDIDO: OK'
//             }
//             else{
//                 resultadoPedido = '--PEDIDO: ERRADO'
//             }
//         }
//         else if(matchesPed.length > 2){
//             resultadoPedido = '--PEDIDO: ENCONTRADO 3 PEDIDOS'
//         }
//         else{
//             resultadoPedido = '--PEDIDO: NAO ENCONTRADO'
//         }
//     }
//     catch{
//         resultadoPedido = '--PEDIDO: ERRADO'
//     }
// }    
// conferePedido()





// //METODO ANTIGO
// async function conferePedido(){                                            //Conferir pedido
//     try{
//         //Descobrindo o primeiro numero do pedido
//         if(arrayNumber.includes(Number(matchesPed[0].slice(-2,-1))) == false){
//             primeiroPedido = matchesPed[0].slice(-1);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[0].slice(-3,-2))) == false){
//             primeiroPedido = matchesPed[0].slice(-2);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[0].slice(-4,-3))) == false){
//             primeiroPedido = matchesPed[0].slice(-3);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[0].slice(-5,-4))) == false){
//             primeiroPedido = matchesPed[0].slice(-4);
//         }

//         console.log(primeiroPedido)

//         //Descobrindo o segundo numero do pedido
//         if(arrayNumber.includes(Number(matchesPed[1].slice(-2,-1))) == false){
//             segundoPedido = matchesPed[1].slice(-1);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[1].slice(-3,-2))) == false){
//             segundoPedido = matchesPed[1].slice(-2);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[1].slice(-4,-3))) == false){
//             segundoPedido = matchesPed[1].slice(-3);
//         }
//         else if(arrayNumber.includes(Number(matchesPed[1].slice(-5,-4))) == false){
//             segundoPedido = matchesPed[1].slice(-4);
//         }

//         if(primeiroPedido == segundoPedido){
//             resultadoPedido = '--PEDIDO: OK'
//         }
//         else {
//             resultadoPedido = '--PEDIDO: ERRADO!!!'
//         }
//         console.log(segundoPedido)
//     }
//     catch{
//         resultadoPedido = '--PEDIDO: ERRADO!!!'
//     }
//     }
// conferePedido()

