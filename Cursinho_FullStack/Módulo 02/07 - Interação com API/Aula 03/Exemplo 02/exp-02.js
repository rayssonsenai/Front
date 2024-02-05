async function obter() {
        let rpt= await fetch("pz.txt")
        let cvt= await rpt.text()

        console.log(cvt)
}
obter()