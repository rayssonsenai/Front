async function olx(){
    let achei = await fetch("exp-crs.json")
    let carro = await achei.json()
    let cls = await fetch('exp-cls.json')
    let colored = await cls.json()
    let rcl = await parseInt(Math.random()*64)
    // alert(`${carro[1].modelo}`)
    for(let c in carro){ 
        document.body.innerHTML+=`<h1 style="background: ${colored[rcl]}; color:white;">${carro[c].modelo}</h1>`
        document.body.innerHTML+=`<h1 style="background: ${colored[rcl]}; color:white;">${carro[c].marca}</h1>`
        document.body.innerHTML+=`<h1 style="background: ${colored[rcl]}; color:white;">${carro[c].cor}</h1>`
        document.body.innerHTML+=`<h1 style="background: ${colored[rcl]}; color:white;">${carro[c].ano}</h1>`
        document.body.innerHTML+=`<h1 style="background: black; width: auto; height: 4px;"></h1>`
    }

} 
olx()