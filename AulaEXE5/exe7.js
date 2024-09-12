
const prompt = require('prompt-sync')();



function verificarSenhaForte(senha) {
  if (senha.length < 8) {
    return 'A senha deve ter pelo menos 8 caracteres.';
  }

  const temMaiuscula = /[A-Z]/.test(senha);



  const temMinuscula = /[a-z]/.test(senha);



  const temDigito = /\d/.test(senha);


 
  const temEspecial = /[@#$%^&*()_+!~`\-=}{[\]|;:",<.>/?]/.test(senha);


  if (temMaiuscula && temMinuscula && temDigito && temEspecial) {
    return 'A senha é forte.';
  } else {
    return 'A senha não é forte. Certifique-se de que a senha tenha pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
  }
}



const senha = prompt('Digite a senha: ');



const resultado = verificarSenhaForte(senha);
console.log(resultado);