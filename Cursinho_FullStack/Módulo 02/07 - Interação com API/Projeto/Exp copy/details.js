async function bd(){
    let verla = await fetch("pro.json")
    let achou = await verla.json()    
    
    let adId = new URLSearchParams(window.location.search)    // Criou um objeto URLseachParams e passou a coleta de parametros da URL nele.
    let id = adId.get("x-id")    // Obiteve o parametro "protudo-id"  e seu valor

    let idc    // Criou um avariavel vazia

    for(let _ in achou){     // Usou o "for" para percorrer toda a lista de produto JSON
        console.log(`O valor de _ é : ${_}`);  
        console.log(`achou[_].id é: ${achou[_].id}`);
        console.log(`O id é: ${id}`);
        console.log(`${achou[_].id}==${id} ?`);
            if(achou[_].id == id){    // Verifica se o ID de cada produto é igual ao ID coletado na URL da pagina do navegador

                idc = _     // Atribui à variavel vazia,  o valor de "_", que contem o indice do protudo que corresponde ao ID da URL

                console.log("sim");
            
            }else{
                console.log("não")
        }           
    }

    document.body.innerHTML = // Adiciona na Tag Body do HTML, um código HTML concatenado com valores do objeto produto encontrado
    `   
    <div class = "lcD">   
            <div class= "cdD">
                <img class="imgD" src=${achou[idc].img}>
                <div class="lftD"> 
                    <h1>${achou[idc].nome}</h1>
                    <h4>${achou[idc].descricao}</h4>
                    <div class="vlD">
                        <h4 class="vcdD">${achou[idc].vcd.toFixed(2).replace(".",",")}</h4>
                        <h4 class="vsdD">${achou[idc].vsd.toFixed(2).replace(".",",")}</h4>
                    </div>
                </div>
            </div>
    </div>
`
}    
bd()