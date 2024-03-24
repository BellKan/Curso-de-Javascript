let num = [5,8,4,5]
num[0] = 6
num.push(1)
num.sort()
/*console.log(` ${num} `)*/

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(pos)
    console.log(`${num}`)
}*/
let pos = num.indexOf(8)
console.log(`${num}`)

console.log(`${pos}`)

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}