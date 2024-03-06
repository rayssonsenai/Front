async function dnvnsei(){
    let vejala = await fetch("fim.json")
    let achou = await vejala.json()
    
    let vaila = document.getElementById("akioh")
    
    for(let xyz of achou){
        vaila.innerHTML+=
            `<div class="anc">
                <img src=${xyz.img} width=auto height=500px height=auto>
                <h2>${xyz.modelo}</h1>
                <p>${xyz.marca}</p>
                <p>Ano: ${xyz.ano}</p>
                <p>R$ ${xyz.valor.toFixed(2).replace(".",",")}</p>
            </div>`
    }
}
dnvnsei()