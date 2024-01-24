function somarUm(){ 
    let valor = document.getElementById('t1')
    valor.textContent = parseInt(valor.textContent) + 1
    alert(`${valor.textContent}`)
}