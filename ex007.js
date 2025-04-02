let horas = Number(prompt('Digite uma quantidade de horas: '))

function converterHorasParaMinutos(){
    return horas * 60
}

console.log(`${horas} horas equivalem a ` + converterHorasParaMinutos(horas) + ' minutos')