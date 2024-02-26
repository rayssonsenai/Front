async function nsei() {
    let tbmnsei = await fetch("exp-03.json")
    let nseidnv = await tbmnsei.json()
    let tmjunto=document.getElementById("eunsei")
    for(let z of nseidnv){
        tmjunto.innerHTML+=`<div class="card">
            <h1 id="eunsei">${z.modelo}</h1>
            <h2 id="eunsei">${z.marca}</h2>
            <h2 id="eunsei">${z.cor}</h2>
            <h2 id="eunsei">${z.ano}</h2>
            </div>`
    }
}
nsei()