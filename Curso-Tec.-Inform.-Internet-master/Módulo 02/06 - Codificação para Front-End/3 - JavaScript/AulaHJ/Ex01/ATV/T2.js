let num=[2,7,4,1]
let impar=[]
let par=[]
for (let i in num) {
    if (num[i] %2 == 0) {
        par.push(num[i])
    }
    else {
        impar.push(num[i])
    }
}
alert (`Numeros impares 👉 ${impar}.`)
alert (`Numeros pares 🤜 ${par}.`)
