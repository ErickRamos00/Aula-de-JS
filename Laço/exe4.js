
const n = 10
    let a = 0; 
    let b = 1; 
    

    for (let i = 1; i < n; i++) {
        

     
        let next = a + b;

       
        a = b;
        b = next;
        console.log(next)
    }




