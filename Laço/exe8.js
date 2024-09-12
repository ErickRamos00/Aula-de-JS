var prompt = require('prompt-sync')()

let palavra = prompt("Insira uma palavra: ")
let letra = prompt("Insira a letra que voce quer saber: ")


let contagem = 0;


for (let i = 0; i < palavra.length; i++) {

  if (palavra[i] === letra) {
    contagem++; 
  }
}


console.log(`A letra "${letra}" aparece ${contagem} vez(es) na palavra "${palavra}".`);
