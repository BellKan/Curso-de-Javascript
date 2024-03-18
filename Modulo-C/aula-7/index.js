function somar(){
    var tn1 = window.document.getElementById('textn1')
    var tn2 = window.document.getElementById('textn2')

    var res = window.document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 * n2 

    res.innerHTML = `A multiplicação de ${n1} e ${n2} é ${soma}`
}