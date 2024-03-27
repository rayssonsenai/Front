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

    document.body.innerHTML += 
    `   
    <div class = "lcD">   
            <div class= "cdD">
                <img class="imgD" src=${achou[idc].img}>
                        <div class = "minimg" id = "minimg"> </div>
                    <div class="lftD"> 
                    <h1>${achou[idc].nome}</h1>
                    <h4>${achou[idc].descricao}</h4>
                    <div class="vlD">
                        <h4 class="vcdD">${achou[idc].vcd.toFixed(2).replace(".",",")}</h4>
                        <h4 class="vsdD">${achou[idc].vsd.toFixed(2).replace(".",",")}</h4>
                    </div>
                </div>
            </div>
    </div>
    
`
}    
bd()