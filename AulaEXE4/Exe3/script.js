function calcula (){
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById("nota3").value)

    let mediaA= (nota1 + nota2 + nota3) / 3

    if(mediaA>=7){
      resultado = ` sua media foi: ${mediaA.toFixed(1)} Passou meu chapa` 
    }
    else if (mediaA<7 && mediaA >=4){
        resultado = ` sua media foi: ${mediaA.toFixed(1)}  Recuperação meu chapa estuda mais `
    }
    else {
        resultado = ` sua media foi: ${mediaA.toFixed(1)} Reprovou meu chapa `
    }
    document.getElementById("resultado").innerText = resultado;
}   