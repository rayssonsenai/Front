async function nnvi() {
    let nseidnv = await fetch("exem.txt")
    let tbmnsei = await nseidnv.text() 
    console.log(tbmnsei);
    alert(tbmnsei)
    document.getElementById('vaiaki').textContent=tbmnsei
    document.getElementById("vaiaki").style.color='white'
}  
nnvi()
function name(params) {
    
}