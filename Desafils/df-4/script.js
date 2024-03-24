
function contar() {
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')

let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] Está faltando dados! Tente novamente!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('[ERRO] Dados incorreto!  Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
        

    }
}