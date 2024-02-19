async function apareça(){
    let ache = await fetch("exemplo-02.json")
    let missao = await ache.json()
    for (let x in missao){
        document.body.innerHTML+=`
            <h1>${missao[x]}</h1> ${x}`
    }
}
apareça()