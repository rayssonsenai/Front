async function nseidnvnome(){
    let algumacoisa = await fetch("api/exp.json")
    let novacoisa = await algumacoisa.json()
    console.log(novacoisa);
    for(let c in novacoisa){
        alert(novacoisa)
    }
}
nseidnvnome()