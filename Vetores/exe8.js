let vetor = [25,36,84,32,74]

let maiorNumero = vetor[0]

for (let i = 0; i<vetor.length; i++){
    if(vetor[i] > maiorNumero){
        maiorNumero = vetor[i]
    }
}
console.log(`O maior numero é ${maiorNumero}`)