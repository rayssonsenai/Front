async function bd(){
    let verla = await fetch("pro.json")
    let achou = await verla.json()
    
    let adId = new URLSearchParams(window.location.search)
    let id = adId.get("x-id")

    let idc
    for(let _ in achou){
        console.log(`O valor de _ é : ${_}`);
        console.log(`achou[_].id é: ${achou[_].id}`);
        console.log(`O id é: ${id}`);
        console.log(`${achou[_].id}==${id} ?`);
            if(achou[_].id == id){
                idc = _

                console.log("sim");
            
            }else{
                console.log("não")
        }           
    }
    document.body.innerHTML = `
    <div class = "lc">
   <img src=${achou[idc].img} width= 255 height= 255 >
    <h1 class="cd">${achou[idc].nome}</h1>
    </div>
`
}    
bd()