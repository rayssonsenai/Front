async function bd(){
    let verla = await fetch("pro.json")
    let achou = await verla.json()
// Criou um objeto URLseachParams e passou a coleta de parametros da URL nele.
    let adId = new URLSearchParams(window.location.search)
// Obiteve o parametro "protudo-id"  e seu valor
    let id = adId.get("x-id")
// Criou um avariavel vazia
    let idc
// Usou o "for" para percorrer toda a lista de produto JSON
    for(let _ in achou){
// Varifica se o ID de cada produto é igual ao ID coletado na URL da pagina do navegador
        console.log(`O valor de _ é : ${_}`);
        console.log(`achou[_].id é: ${achou[_].id}`);
        console.log(`O id é: ${id}`);
        console.log(`${achou[_].id}==${id} ?`);
            if(achou[_].id == id){
// Atribui à variavel vazia,  o valor de "_", que contem o indice do protudo que corresponde ao ID da URL
                idc = _

                console.log("sim");
            
            }else{
                console.log("não")
        }           
    }
// Adiciona na Tag Body do HTML, um código HTML concatenado com valores do objeto produto encontrado
    document.body.innerHTML = `
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