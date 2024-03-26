async function ns(){

    let verla = await fetch("fim.json")
    let acho = await verla.json()

    tids=new URLSearchParams(window.location.search) 
    ids=tids.get("x-id")
    
    let _
    for(let O in acho){
        if(acho[O].id==ids){
            _=O
        }

    }
    document.body.innerHTML=`
    <img src="${acho[O].img}">
    </h1>${acho[O].nome}<h1>
    `
}
ns()