async function nsei() {
    let look = await fetch("AT01.json")
    let cont = await look.json()

    let lookagain = await fetch("ATC01.json")
    let cl = await lookagain.json()

    for (let c in cl){
    document.body.innerHTML+=`<h1 style="color: ${cl[c]};">${cont[c]}</h1>`
    
    }
}
nsei()