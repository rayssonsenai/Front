async function apareça(){
    let ache = await fetch("exemplo-02.json")
    let missao = await ache.json()

    let achednv = await fetch("exemplo-02_C.json")
    let cor = await achednv.json()
    // for (let x in missao){
    //     document.body.innerHTML+=`
    //         <h1>${missao[x]}</h1> ${x}`
    // }
    for (let x of missao){
        let qualquercor=parseInt(Math.random()*5 )
        document.body.innerHTML+=`
            <h1 style="color:${cor[qualquercor]}"${x}</h1>`
    }
}
apareça()