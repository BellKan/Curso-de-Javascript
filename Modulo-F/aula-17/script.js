//objeto em js

let amigo = {nome: 'john', 
sexo: 'M',
altura: 1.90,
crescimento(p=0){
    console.log('cresceu')
    this.altura += p
}
}

console.log(`${amigo.nome} tem a altura de ${amigo.altura} metros`)
