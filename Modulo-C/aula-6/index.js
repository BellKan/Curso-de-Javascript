var area = window.document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar(){
    area.innerText = 'clicou!'
    area.style.background = 'green'
}
function entrar(){
    area.style.background = 'darkblue'
}
function sair(){
    area.style.background = 'red'
}