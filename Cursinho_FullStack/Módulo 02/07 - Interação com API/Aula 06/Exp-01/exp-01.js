async function olx(){
    let achei = await fetch("exp-crs.json")
    let carro = await achei.json()
    // alert(`${carro[1].modelo}`)
    for(let c in carro){
        document.body.innerHTML+=`<h1>${carro[c].modelo}</h1>`
        document.body.innerHTML+=`<h1>${carro[c].marca}</h1>`
        document.body.innerHTML+=`<h1>${carro[c].cor}</h1>`
        document.body.innerHTML+=`<h1>${carro[c].ano}</h1>`
        document.body.innerHTML+=`<h1>--------------------------------------------------------------------------------------------------------------</h1>`
    }

} 
olx()