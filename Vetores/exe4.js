// 3. Crie um vetor de cores. Pergunte ao usuário para inserir uma cor. Exiba a posição da cor no vetor ou uma mensagem dizendo que a
// cor não foi encontrada.

const prompt = require('prompt-sync')();
const cores = ['roxo', 'rosa', 'laranja', 'amarelo', 'preto', 'branco'];




const corInserida = prompt('Insira uma cor: ').toLowerCase(); // Lê a entrada do usuário e converte para minúsculas
const index = cores.indexOf(corInserida);
if (index !== -1) {
    console.log(`A cor ${corInserida} está na posição ${index}.`);
} else {
    console.log(`A cor ${corInserida} não foi encontrada no vetor.`);
}
