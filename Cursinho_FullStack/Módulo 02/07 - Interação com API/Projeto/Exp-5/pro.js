async function ns(){

    let verla = await fetch("pro.json")
    let acho = await verla.json()
    let z = document.getElementById("x")
    for( let x in acho){
        z.innerHTML+=
        `
        <div class = "cd" data-id="${acho[x].id}">
            <img src="${acho[x].img[0]}">
            <h1>${acho[x].nome}</h1>
            <p>${acho[x].descricao}</p>
            <div class= "vl">
            <span class="vcd">R$ ${acho[x].vcd.toFixed(2).replace(".",",")}</span>
            <span class="vsd">R$ ${acho[x].vsd.toFixed(2).replace(".",",")}</span>
            
            </div>
        </div>
        `
    }
    let cds = document.getElementsByClassName("cd")
    for (let cd of cds){
        cd.addEventListener("click", vamola)
    }
}
ns()
function vamola(){
    let eid = this.getAttribute("data-id")
    window.location.href=`details.html?x-id=${eid}`
}