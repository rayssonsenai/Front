async function nnvi() {
    let nseidnv = await fetch("exem.txt")
    let tbmnsei = await nseidnv.text() 
    console.log(tbmnsei);
    alert(tbmnsei)
    document.getElementById('vaiaki').textContent=tbmnsei
    document.getElementById("vaiaki").style.color='white'
    document.getElementById("imga").textContent="tbmnsei"
    document.getElementById("imga").style.backgroundColor='white'
}  
function img() {
    document.getElementById("img").src="https://th.bing.com/th/id/OIP.Wt3xO8rKG6zpWowVd3XhUAHaGV?rs=1&pid=ImgDetMain"
    
}