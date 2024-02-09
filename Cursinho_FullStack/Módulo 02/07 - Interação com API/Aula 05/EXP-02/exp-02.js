async function seila() {
    let tbmnsei = await fetch ("api/carros.json")
    let nseidnv = await tbmnsei.json() 
    alert(nseidnv[1].modelo)
}
seila()