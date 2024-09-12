var prompt = require('prompt-sync')()

let animal = prompt("Insira o nome do animal que voce queira saber a especie: ")

switch (animal) {
    case 'elefante':
    case 'baleia':
    case 'golfinho':
    case 'cachorro':
    case 'gato':
        console.log(`${animal} é Mamifero`)
        break;
 
    case 'papagaio':
    case 'caturrita':
    case 'tucano':
    case 'Aguia':
    case 'falcao':

    console.log(`${animal} é Ave`)
    break;

    case 'cobra':
    case 'largarto':
    case 'iguana':
    case 'lagartixa':
    case 'camaleao':
    
    console.log(`${animal} é Reptil`)
    break;
    default:
        console.log("Animal não listado")

}  