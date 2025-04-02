const pessoa = {
    nome: "",
    idade: 0
};

pessoa.nome = prompt("Digite o nome da pessoa:");
pessoa.idade = Number(prompt("Digite a idade atual:"));

console.log(`Dados iniciais: ${pessoa.nome}, ${pessoa.idade} anos`);

function atualizarIdade(pessoa, novaIdade) {
    pessoa.idade = novaIdade;
}

const novaIdade = Number(prompt("Digite a nova idade:"));
atualizarIdade(pessoa, novaIdade);

console.log(`Dados atualizados: ${pessoa.nome}, agora com ${pessoa.idade} anos.`);