async function eunsei(){
    let peguela = await fetch ("fim.json")
    let eutbmnsei = await peguela.json()
    
    let x=document.getElementById("esse")

    for(let z of eutbmnsei){
        x.innerHTML+=
        `
        <div class="cc">
        <img src="${z.img}" width=400 height=200>
        <h2>${z.modelo}</h2>
        <p>${z.marca}</p>
        <p>${z.cor}</p>
        <p>${z.ano}</p>        
        <p>R$ ${z.valor.toFixed(2).replace(".",",")}</p>
        </div>
        `
    }
}
eunsei()