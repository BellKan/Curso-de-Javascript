function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var msg2 = window.document.getElementById('msg2')
var data = new Date()
var hora = data.getHours()

    msg.innerHTML = ` Agora são exatamente ${hora} horas.`

        if (hora >= 0 && hora < 12) {
            //Bom Dia!
            img.src = 'assets/manha.png'
            document.body.style.background = '#80bec9'
            msg2.innerHTML += 'Bom Dia!'
        } else if (hora >= 12 && hora < 18){
            //Boa Tarde!
            img.src = 'assets/tarde.png'
            document.body.style.background = '#DE530B'
            msg2.innerHTML += 'Boa Tarde!'
        } else {
            //Boa Noite!
            img.src = 'assets/noite.png'
            document.body.style.background = '#031957'
            msg2.innerHTML += 'Boa Noite!'
        }
}
