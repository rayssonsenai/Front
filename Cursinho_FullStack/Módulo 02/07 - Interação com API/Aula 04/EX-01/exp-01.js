async function qualquercoisa() {
    let qqcoisa = await fetch("exp-01.txt")
    let qcoisa = await qqcoisa.text() 

// for(let a=1; a<=4;a++){alert(a)

//     document.body.innerHTML+=
//     `<h1>
//         ${qcoisa}
//     </h1>
//     <p>
//         QualquerCoisaPequeno
//     </p>` 
//     }   
let lt=[5,7,9]
for(let a in lt){
    document.body.innerHTML+=
    `<h1>
        ${qcoisa}
        
    </h1>
    <span>${[lt]}</span>
    <h4> ${lt[a]}</h4>
    <p> 
        Qualquer Coisa Pequeno
    </p>` 
    }  
}
qualquercoisa()