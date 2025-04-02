let P = Number(prompt('Digite o valor principal: '))
let r = Number(prompt('Digite a taxa de juros anual: '))
let n = Number(prompt('Digite o numero de vezes que os juros são compostos por ano: '))
let t = Number(prompt('Digite o numero de anos: '))


var rnnt = Math.pow((1 + r/n), (n*t))

function calculaJurosCompostos(P, r, n, t){
    var rnnt = Math.pow((1 + r/n), (n*t))
    var result = P * rnnt
    return result.toFixed(2)
}

console.log(calculaJurosCompostos(P, r, n, t))