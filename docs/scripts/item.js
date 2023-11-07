var aumentar = document.getElementById('aumentar')
var reducir = document.getElementById('reducir')

var contador = document.getElementById('contador-item')

aumentar.addEventListener('click', function () {
    var valorActual = parseInt(contador.value, 10)

    valorActual++

    contador.value = valorActual;
})
reducir.addEventListener('click', function () {
    var valorActual = parseInt(contador.value, 10)

    if(valorActual > 0){
        valorActual--
    
        contador.value = valorActual;
    }
})