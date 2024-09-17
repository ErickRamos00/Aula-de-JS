let vetor = [3,6,9,8,12]

if(vetor.length == 0){
    console.log('Vetor vazio')  
}else{
    let soma = 0;  
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    let media = soma /vetor.length
console.log(`A média é: ${media}`)
} 