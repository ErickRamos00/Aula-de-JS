function calcula(operacao)  {
    const num1 = parseFloat (document.getElementById("num1").value)
    const num2 = parseFloat (document.getElementById("num2").value )

    switch(operacao){
        case'+':
        resultado = num1 + num2
        break;
        case '-':
        resultado = num1 - num2
        break;

        case'*': 

        resultado = num1 * num2
        break;

        case '/':
            resultado = num1/num2
         break;
    }
    document.getElementById("resultado").innerText = resultado;
} 
