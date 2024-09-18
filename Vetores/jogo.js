var prompt=require('prompt-sync')()


// // //Fazendo a aleatorização do computador/jogo
// let vetor=[ {
//               opção: [1,"Pedra", 2,"Papel", 3, "Tesoura" ],
//               resposta: [Math.floor(Math.random()* vetor.length)]


// }]
let pc
let vetor=["pedra", "papel", "tesoura"]


let Pessoa=[ {
    opção: ["pedra", "papel",  "tesoura","fim" ]


}]
let aux=0, aux2=0


let nome= prompt(`Qual o seu nome: `)


do{
    Pessoa=prompt(` Escreva opção: (PEDRA) (PAPEL) (TESOURA) (fim):  `)
    pc= vetor[Math.floor(Math.random()* vetor.length)]
    Pessoa= Pessoa.toLowerCase()   // transforma a string para minusculo


    console.log(`Opção do PC: ${pc}`) /// mostra a resposta do pc


    if(Pessoa==pc){
        console.log(`EMPATE`)
    }
    else if (Pessoa=="pedra" && pc=="tesoura" || Pessoa=="papel" && pc=="pedra" || Pessoa=="tesoura" && pc=="papel") {
        console.log(`${nome} GANHOU`)
        aux=aux+1
    }
    else{
        console.log("PC GANHOU")
        aux2=aux2+1
    }








}
while(Pessoa!="fim")


console.log(`O PC ganhou ${aux2} vezes`)
console.log(`${nome} ganhou ${aux} vezes`)

