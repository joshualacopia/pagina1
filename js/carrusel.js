const carrusel = document.querySelector('.carrusel-ites');
document.getElementById('btn_alerta').onclick = function(){
alert('Hola Mundo!');
}
let maxscrollLeft =carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let paso = 1;
const stop = () => {
    clearInterval(intervalo);
};
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + paso;
        if (carrusel.scrollLeft === maxscrollLeft) {
            paso = paso * -1;
        } else if (carrusel.scrollLeft === 0) {
            paso = paso * -1;
        }
    }, 10);

    carrusel.addEventListener('mouseenter', stop);

    carrusel.addEventListener('mouseleave', start);
};
start();

