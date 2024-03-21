async function bd(){
    let verla = await fetch("fim.json")
    let achou = await verla.json()

    let ids = new URLSearchParams(window.location.search)
    let id = ids.get("protudo-id")
    alert(id)
}
bd()