function acionar () {
    let valor1 = prompt("Digite um valor: ")
    let valor2 = prompt("Digite um segundo valor: ")
    let soma = valor1 + valor2
    let subtracao = valor1 - valor2
    let multiplicacao = valor1 * valor2

    document.getElementById("t1").textContent = valor1 - valor2
    
} 