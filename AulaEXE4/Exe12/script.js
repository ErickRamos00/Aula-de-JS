document.getElementById('triangleForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const side1 = parseFloat(document.getElementById('side1').value);

    const side2 = parseFloat(document.getElementById('side2').value);

    const side3 = parseFloat(document.getElementById('side3').value);

    let triangleType = '';

    let imageUrl = '';

    if (side1 === side2 && side2 === side3) {

        triangleType = 'Triângulo Equilátero';

        imageUrl = 'images/equilatero.png'; // Substitua pelo caminho da sua imagem

    } else if (side1 === side2 || side1 === side3 || side2 === side3) {

        triangleType = 'Triângulo Isósceles';

        imageUrl = 'images/isosceles.png'; // Substitua pelo caminho da sua imagem

    } else {
        triangleType = 'Triângulo Escaleno';

        imageUrl = 'images/escaleno.png'; // Substitua pelo caminho da sua imagem
    }

    document.getElementById('triangleType').textContent = triangleType;

    const triangleImage = document.getElementById('triangleImage');

    triangleImage.src = imageUrl;

    triangleImage.style.display = 'block';
});
