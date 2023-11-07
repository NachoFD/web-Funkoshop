// Selecciona todos los elementos con la clase 'funko-nuevo'
var elementos = document.getElementsByClassName('funko-nuevo');

// Itera sobre los elementos y agrega un event listener para cada uno
for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        // Acciones que deseas realizar al hacer clic
        window.location.href = 'item.html';
    });
}