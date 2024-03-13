// função async para fazer o uso do  await
async function ns(){
    // await para (stop) a execução do progama
    // o resultado do comando fetch().
    let verla = await fetch("fim.json")
    let acho = await verla.json()
    let z=document.getElementById("x")
    for( let x in acho){
        z.innerHTML+=
        `
        <div class = "cd">
            <img src="${acho[x].img}">
            <h1>${acho[x].nome}</h1>
            <p>${acho[x].descricao}</p>
            <div class= "vl">
            <span class="vcd">R$ ${acho[x].vcd.toFixed(2).replace(".",",")}</span>
            <span class="vsd">R$ ${acho[x].vsd.toFixed(2).replace(".",",")}</span>
            
            </div>
        </div>
        `
    }
}
ns()