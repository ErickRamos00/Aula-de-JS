
let num = 0

while (num <=30){
    if(num % 4 == 0){
        num ++
        continue;
    }
     
    if(num == 30) {
        console.log(`numero encontrado ${num}`)
        break;
    }
    console.log(num)
    num ++    
} 