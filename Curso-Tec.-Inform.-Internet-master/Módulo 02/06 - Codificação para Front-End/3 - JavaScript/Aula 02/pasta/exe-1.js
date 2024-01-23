function verificar() {
    let elemento = document.getElementById('titulo')
    if (elemento.textContent.toLowerCase().includes("O")) {
       alert('tem O.')
        
        
    }
    else{
        alert('tem O não.')
    }
}