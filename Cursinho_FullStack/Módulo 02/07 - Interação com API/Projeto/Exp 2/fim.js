async function ns(){

    let verla = await fetch("fim.json")
    let acho = await verla.json()
    let z=document.getElementById("x")
    for( let x in acho){
        z.innerHTML+=
        `
        <div class = "cd" data-id="${acho[x].id}">
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
    let º=document.getElementByClass("cd")
    for(let ª of º){
        ª=addEventListener("click",º_º)
    }
}
function º_º(){
    let ids = this.getAttribute("data-id")
    window.location.href="Inf.html?x-id"+ids
}
ns()
