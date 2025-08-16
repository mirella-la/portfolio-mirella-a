// Lógica para o menu mobile
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});


// Lógica para o carrossel de certificados
document.addEventListener('DOMContentLoaded', function () {
    const btnEsquerda = document.querySelector('.btn-esquerda');
    const btnDireita = document.querySelector('.btn-direita');
    const listaCertificados = document.querySelector('.lista-certificados');
    const certWidth = document.querySelector('.cert').offsetWidth + 20; // Largura do certificado + gap

    btnEsquerda.addEventListener('click', () => {
        listaCertificados.scrollLeft -= certWidth;
    });

    btnDireita.addEventListener('click', () => {
        listaCertificados.scrollLeft += certWidth;
    });
});
