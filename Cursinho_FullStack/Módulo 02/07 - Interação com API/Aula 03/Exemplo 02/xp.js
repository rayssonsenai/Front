
async function nsei() {

    let rp = await fetch('arq.txt')
    let cv = await rp.text()

    console.log(cv)
    alert(cv)
}
nsei()
