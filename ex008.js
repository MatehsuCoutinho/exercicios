let base = Number(prompt('Digite a base do triangulo: '))
let altura = Number(prompt('Digite a altura do triangulo: '))


function calculaAreaTriangulo(base, altura){
    return (base * altura)/2
}

console.log(calculaAreaTriangulo(base, altura))