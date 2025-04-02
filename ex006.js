function maiorNumero(array){
    if(array.lenght === 0){
        console.log('Array vazio')
    }
    let maior = array [0]
    for (i = 0; i < array.length; i++) {
        if(array[i] > maior){
            maior = array [i]
        }
    }
    return maior;
}
