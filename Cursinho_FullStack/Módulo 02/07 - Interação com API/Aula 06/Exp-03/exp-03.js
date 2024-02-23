async function nsei() {
    let tbmnsei = await fetch("exp-03.json")
    let nseidnv = await tbmnsei.json()

    tmjunto=document.getElementById("eunsei").innerHTML
    alert(nseidnv)
    for(let z of nseidnv){
        tmjunto+=`${nseidnv}`
    }
}