let n1 = Number(prompt('Digite a nota 1: '))
let n2 = Number(prompt('Digite a nota 2: '))
let n3 = Number(prompt('Digite a nota 3: '))


function calcularMedia(n1,n2,n3){
    return (n1 + n2 + n3)/3
}

console.log('A média eh: ' + calcularMedia(n1,n2,n3))