// Preencher um vetor de n elementos com "Ímpar" se o índice do
// elemento for ímpar, e "Par" se for par. Escrever o vetor após o seu
// total preenchimento.

let vetor = [1,4,6,9,8,10]

let vetorP = vetor.map((elemento, index) => {
    if(index % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
})
console.log(vetorP)