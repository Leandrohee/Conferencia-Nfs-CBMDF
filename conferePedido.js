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

console.log(resultadoPedido)




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

