async function machine() {
    let lookmachines = await fetch("atv.json") 
    let la_machine = await lookmachines.json()
    document.body.innerHTML+=`<h1>Computadores</h1>`
    for(let c in la_machine){
        document.body.innerHTML+=
        `<p>Tipo de computador: ${la_machine[c].plataforma}</p>`
        `<p>CPU: ${la_machine[c].cpu}</p>`
        `<p>Memoria RAM: ${la_machine[c].ram}</p>`
        `<p>Valor estimado de : ${la_machine[c].valor}</p>`
        `<p style: "background: black; heigth: 2px; wigth:auto"></p>`
    }
}