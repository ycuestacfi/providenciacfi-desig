const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-navbar');
const body = document.body;

// Abre y cierra el menú hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cierra el menú cuando se hace clic fuera de él
body.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
