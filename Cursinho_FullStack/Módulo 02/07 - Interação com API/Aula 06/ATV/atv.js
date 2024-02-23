async function machine() {
    let lookmachines = await fetch("atv.json") 
    let la_machine = await lookmachines.json()        
    document.body.innerHTML+=`<h1>Computadores</h1>`
    for(let c in la_machine){
        document.body.innerHTML+=`<p>Tipo de computador: ${la_machine[c].plataforma}</p>`
        document.body.innerHTML+=`<p>CPU: ${la_machine[c].cpu}</p>`
        document.body.innerHTML+=`<p>Memoria RAM: ${la_machine[c].ram}</p>`
        document.body.innerHTML+=`<p>Valor estimado de : ${la_machine[c].valor}</p>`
        document.body.innerHTML+=`<p style="background: black; height: 2px;"></p>`
    }
}
machine()